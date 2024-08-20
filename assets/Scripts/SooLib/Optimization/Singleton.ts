/********************************************************************************
                           _____             __    _ __  
                          / ___/____  ____  / /   (_) /_ 
                          \__ \/ __ \/ __ \/ /   / / __ \
                         ___/ / /_/ / /_/ / /___/ / /_/ /
                        /____/\____/\____/_____/_/_.___/ 
                                 
********************************************************************************/
/********************************************************************************
            License for Sooplay Game and Advertising Technologies LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

2. The Software, or any derivative works thereof, shall not be used or
distributed for any purpose without prior written permission from Sooplay.

3. The Software, or any derivative works thereof, shall not be used in any form
of commercial product or service without prior written permission from Sooplay.

4. Any use of the Software must comply with all applicable laws and regulations.

5. Any modifications or enhancements to the Software must be documented and
shared with Sooplay prior to distribution.

6. The Software is provided "as is", without warranty of any kind, express or
implied, including but not limited to the warranties of merchantability, fitness
for a particular purpose and noninfringement. In no event shall the authors or
copyright holders be liable for any claim, damages or other liability, whether
in an action of contract, tort or otherwise, arising from, out of or in
connection with the Software or the use or other dealings in the Software.

7. All inquiries regarding the Software should be directed to Sooplay.

8. By using or distributing the Software, you agree to comply with these terms
and conditions. Failure to comply will result in immediate termination of your
rights under this License.

9. This License shall be governed by and construed in accordance with the laws
of [Jurisdiction], without regard to its conflict of law provisions.

Sooplay Game and Advertising Technologies LLC
Turkiye
1/1/2024

********************************************************************************/

import { _decorator, Component, warn, Node, director, isValid } from 'cc';
import { Lazy } from './Lazy';
const { disallowMultiple, ccclass } = _decorator;

/**
 * A base class for creating singleton components.
 *
 * This class is used to ensure that only one instance of the component exists
 * in the scene. It uses lazy initialization to create the instance only when it
 * is needed.
 *
 * @template T The type of the singleton component.
 *
 * @example
 * ```typescript
 * import { Singleton } from './Singleton';
 *
 * @ccclass
 * export class MySingleton extends Singleton<MySingleton> {
 *     protected awakeSingleton() {
 *         console.log('Singleton awake');
 *     }
 * }
 * ```
 */
@ccclass('Singleton')
@disallowMultiple(true)
export abstract class Singleton<T extends Singleton<T>> extends Component {
    private static _lazyInstance: Lazy<any, []>;
    private static _destroyOthers: boolean = true;
    private static _persist: boolean = true;
    private static _findInactive: boolean = false;
    private static _lazy: boolean = true;

    /**
     * Retrieves the singleton instance of the component.
     * If the instance does not exist, it creates a new instance and adds it to the
     * scene. If multiple instances of the component are found, it handles them
     * based on the specified options.
     *
     * @returns A Promise that resolves to the singleton instance of the component.
     *
     * @remarks
     * This method is used to ensure that only one instance of the component exists
     * in the scene. It uses lazy initialization to create the instance only when it
     * is needed.
     *
     * @example
     * ```typescript
     * // Get the singleton instance of the component
     * const instance = await ExampleSingleton.getInstance();
     *
     * // Use the instance
     * instance.doSomething();
     * ```
     */
    public static async getInstance(): Promise<Component> {
        if (!this._lazyInstance) {
            this._lazyInstance = new Lazy<any, []>(
                async () => {
                    const instances = this._findInactive ? await findObjectsOfTypeAll<Component>(this as any) : await findObjectsOfType<Component>(this as any);
                    if (instances.length === 0) {
                        const singletonNode = new Node(`${this.name} [Singleton]`);
                        const instance = singletonNode.addComponent(this as any);
                        director.getScene().addChild(singletonNode);
                        if (this._persist) {
                            director.addPersistRootNode(instance.node);
                        }
                        warn(`[Singleton] An instance of '${this.name}' is needed in the scene, so '${singletonNode.name}' was created${this._persist ? " with DontDestroyOnLoad." : "."}`);
                        return instance;
                    }
                    if (instances.length > 1) {
                        warn(`[Singleton] ${instances.length} instances of '${this.name}' found!`);
                        if (this._destroyOthers) {
                            instances.slice(1).forEach((extra: Component) => {
                                warn(`[Singleton] Deleting extra '${this.name}' instance attached to '${extra.node.name}'`);
                                extra.node.destroy();
                            });
                        }
                        if (this._persist) {
                            director.addPersistRootNode(instances[0].node);
                        }
                    }

                    return instances[0];
                },
                async (error, retryCount) => {
                    warn(`[Singleton] Error occurred while creating instance: ${error}. Retry count: ${retryCount}`);
                    return retryCount < 3;
                }
            );
        }
        return this._lazyInstance.getValue();
    }

    protected static set persist(value: boolean) {
        this._persist = value;
    }

    protected static set destroyOthers(value: boolean) {
        this._destroyOthers = value;
    }

    protected static set findInactive(value: boolean) {
        this._findInactive = value;
    }

    protected static set lazy(value: boolean) {
        this._lazy = value;
    }

    protected abstract awakeSingleton(): void;

    protected onLoad() {
        if (!Singleton._lazy) {
            this.initialize();
        }
    }

    private async initialize() {
        const instance = await Singleton.getInstance();
        if (instance !== this && Singleton._destroyOthers) {
            warn(`[Singleton] Deleting extra '${this.constructor.name}' instance attached to '${this.node.name}'`);
            this.node.destroy();
        } else {
            this.awakeSingleton();
            if (Singleton._persist) {
                director.addPersistRootNode(this.node);
            }
        }
    }

    protected onDestroy() {
        if (this.applicationIsQuitting()) {
            Singleton._lazyInstance.dispose();
            Singleton._lazyInstance = null as any;
        }
    }

    private applicationIsQuitting(): boolean {
        return director.isPaused() || !isValid(this.node);
    }
}

async function findObjectsOfType<T extends Component>(c: T): Promise<T[]> {
    return director.getScene().getComponentsInChildren(c as any) as T[];
}

async function findObjectsOfTypeAll<T extends Component>(c: T): Promise<T[]> {
    const allComponents: T[] = [];
    const allNodes = director.getScene().children;
    for (const node of allNodes) {
        const components = node.getComponents<T>(c as any);
        allComponents.push(...components);
    }
    return allComponents;
}
