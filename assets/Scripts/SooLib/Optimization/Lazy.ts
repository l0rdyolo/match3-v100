/**
 * Defines a factory function that asynchronously creates an instance of type `T`
 * using the provided arguments `Args`.
 * 
 * @typeParam T - The type of object that the factory function produces.
 * @typeParam Args - A tuple type representing the arguments passed to the factory function.
 * @param args - An array of arguments of type `Args` used for creating an instance of `T`.
 * @returns A promise that resolves to an instance of type `T`.
 */
type FactoryFunction<T, Args extends any[]> = (...args: Args) => Promise<T>;

/**
 * Defines an error handling function that decides whether an operation should retry
 * after encountering an error based on the error itself and the current retry count.
 * 
 * @param error - The error encountered during the operation.
 * @param retryCount - The current count of retry attempts.
 * @returns A promise that resolves to a boolean indicating whether to retry the operation.
 */
type ErrorHandler = (error: any, retryCount: number) => Promise<boolean>;

/**
 * Represents a lazy initialization and caching mechanism for objects of type `T`.
 * The object is initialized asynchronously using a factory function upon the first
 * request. It supports retry logic, lifecycle hooks, and error handling.
 * 
 * @typeParam T - The type of the lazily initialized object.
 * @typeParam Args - A tuple type representing the arguments passed to the factory 
 * function for initializing the object.
 */
export class Lazy<T, Args extends any[] = any[]> {
    private instance: T | null = null;
    private factory: FactoryFunction<T, Args>;
    private errorHandler: ErrorHandler;
    private isInitialized: boolean = false;
    private retryCount: number = 0;
    private maxRetries: number;
    private initializeHooks: Array<() => void> = [];
    private errorHooks: Array<(error: any) => void> = [];
    private disposeHooks: Array<() => void> = [];

    /**
     * Constructs a Lazy object with specified factory, error handler, and maximum retry attempts.
     * 
     * @param factory - A factory function used to asynchronously create an instance of `T`.
     * @param errorHandler - A function called when the factory function throws an error, determining whether to retry.
     * @param maxRetries - The maximum number of retries for initializing `T` upon failure. Defaults to 3.
     */
    constructor(factory: FactoryFunction<T, Args>, errorHandler: ErrorHandler, maxRetries: number = 3) {
        this.factory = factory;
        this.errorHandler = errorHandler;
        this.maxRetries = maxRetries;
    }

    /**
     * Asynchronously returns the instance of type `T`, initializing it if not already done.
     * 
     * @param args - Arguments to pass to the factory function for creating the instance.
     * @returns A promise that resolves to the instance of type `T`.
     * @throws Throws an error if the object cannot be initialized after the maximum number of retries.
     */
    public async getValue(...args: Args): Promise<T> {
        if (!this.isInitialized) {
            await this.tryInitialize(args);
        }
        return this.instance!;
    }

    /**
     * Attempts to initialize the instance using the provided arguments, with retry logic.
     * 
     * @param args - Arguments to pass to the factory function for creating the instance.
     */
    private async tryInitialize(args: Args): Promise<void> {
        try {
            this.instance = await this.factory(...args);
            this.isInitialized = true;
            this.triggerHooks(this.initializeHooks);
        } catch (error) {
            this.triggerHooks(this.errorHooks, error);
            const shouldRetry = await this.errorHandler(error, this.retryCount);
            if (shouldRetry && this.retryCount < this.maxRetries) {
                this.retryCount++;
                await this.tryInitialize(args);
            } else {
                throw error;
            }
        }
    }

    /**
     * Invokes the provided lifecycle hooks with the specified arguments.
     * 
     * @param hooks - An array of hooks to be triggered.
     * @param args - Arguments to pass to each hook function.
     */
    private triggerHooks(hooks: Array<Function>, ...args: any[]): void {
        hooks.forEach(hook => hook(...args));
    }

    /**
     * Registers a hook to be called upon successful initialization of the instance.
     * 
     * @param hook - The hook function to register.
     */
    public onInitialize(hook: () => void): void {
        this.initializeHooks.push(hook);
    }

    /**
     * Registers a hook to be called when an error occurs during initialization.
     * 
     * @param hook - The hook function to register, receiving the error as an argument.
     */
    public onError(hook: (error: any) => void): void {
        this.errorHooks.push(hook);
    }

    /**
     * Registers a hook to be called when the instance is disposed.
     * 
     * @param hook - The hook function to register.
     */
    public onDispose(hook: () => void): void {
        this.disposeHooks.push(hook);
    }

    /**
     * Disposes the current instance, if any, and triggers disposal hooks.
     * Resets the instance state to allow re-initialization.
     */
    public dispose(): void {
        if (this.instance && typeof (this.instance as any).dispose === 'function') {
            (this.instance as any).dispose();
        }
        this.instance = null;
        this.isInitialized = false;
        this.triggerHooks(this.disposeHooks);
    }
}
