import type {UndefinedOr} from '@joookiwi/type'
import {mapByArray}       from '@joookiwi/collection'

import type {TimeProperty} from 'core/entity/properties/time/TimeProperty'

import {Times} from 'core/time/Times'

/**
 * A map made to be handled the same way as a {@link Map},
 * but with a specification about the {@link Times}
 *
 * @see TimeCollection
 */
export class TimeMap<const REFERENCE extends TimeProperty = TimeProperty, >
    implements ReadonlyMap<Times, boolean> {

    //region -------------------- Fields --------------------

    readonly #reference
    readonly #internalStructure: ReadonlyMap<Times, boolean>
    public readonly size

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: REFERENCE,) {
        this.#reference = reference
        this.size = (this.#internalStructure = new Map(mapByArray(Times.ALL, it => [it, it.get(reference,),],),)).size
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get reference(): REFERENCE {
        return this.#reference
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public forEach(callback: (value: boolean, key: Times, map: ReadonlyMap<Times, boolean>,) => void,): this {
        this.#internalStructure.forEach(callback,)
        return this
    }

    public get(key: Times,): UndefinedOr<boolean> {
        return this.#internalStructure.get(key,)
    }

    public has(key: Times,): boolean {
        return this.#internalStructure.has(key,)
    }


    public entries(): MapIterator<[Times, boolean,]> {
        return this.#internalStructure.entries()
    }

    public keys(): MapIterator<Times> {
        return this.#internalStructure.keys()
    }

    public values(): MapIterator<boolean> {
        return this.#internalStructure.values()
    }

    public [Symbol.iterator](): MapIterator<[Times, boolean,]> {
        return this.#internalStructure[Symbol.iterator]()
    }

    //endregion -------------------- Methods --------------------

}
