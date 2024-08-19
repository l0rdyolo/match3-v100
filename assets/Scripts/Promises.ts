export function sleep<T = void>(ms: number, result?: T): Promise<T> {
    return new Promise(resolve => setTimeout(() => resolve(result), ms));
}