import file from 'resources/compiled/Instrument.json'

import type {CollectionHolder}                  from '@joookiwi/collection'
import type {Array, MutableArray, NullOrString} from '@joookiwi/type'
import {forEachByArray}                         from '@joookiwi/collection'

import type {LanguageContent}                                   from 'core/_template/LanguageContent'
import type {Entity}                                            from 'core/entity/Entity'
import type {PossibleEnglishName as PossibleEnglishName_Entity} from 'core/entity/Entities.types'
import type {GameContentFromAllGames}                           from 'core/game/Loader.types'
import type {Instrument}                                        from 'core/instrument/Instrument'
import type {PossibleEnglishName}                               from 'core/instrument/Instruments.types'
import type {Loader}                                            from 'util/loader/Loader'

import {isInDevelopment}       from 'variables'
import {EntityLoader}          from 'core/entity/Entity.loader'
import {InstrumentContainer}   from 'core/instrument/Instrument.container'
import {createNameFromContent} from 'lang/name/createNameFromContent'
import {Empty}                 from 'util/emptyVariables'
import {ArrayAsCollection}     from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

/** @singleton */
export class InstrumentLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Instrument>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: InstrumentLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: ReadonlyMap<PossibleEnglishName, Instrument>

    public load(): ReadonlyMap<PossibleEnglishName, Instrument> {
        if (this.#map != null)
            return this.#map

        const entityMap = EntityLoader.get.load()
        const references = new Map<PossibleEnglishName, Instrument>()
        forEachByArray(file as Array<Content>, content => {
            const reference = createReference(content, entityMap,)
            references.set(reference.english as PossibleEnglishName, reference,)
        },)

        if (isInDevelopment)
            console.info(
                '-------------------- "instrument" has been loaded --------------------\n',
                references,
                '\n-------------------- "instrument" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent, GameContentFromAllGames {

    //region -------------------- Language --------------------

    readonly english: PossibleEnglishName
    readonly americanEnglish: null
    readonly europeanEnglish: null

    readonly french: string
    readonly canadianFrench: null
    readonly europeanFrench: null

    //endregion -------------------- Language --------------------

    // readonly isToDetermine: boolean

    readonly isInSuperMarioMaker2: true

    readonly isInSmbGameStyle: boolean
    readonly isInSmb3GameStyle: boolean
    readonly isInSmwGameStyle: boolean
    readonly isInNsmbuGameStyle: boolean
    readonly isInSm3dwGameStyle: false

    readonly isInDayTime: boolean
    readonly isInNightTime: boolean

    readonly entityReference1: NullOrString<PossibleEnglishName_Entity>
    readonly entityReference2: NullOrString<PossibleEnglishName_Entity>
    readonly entityReference3: NullOrString<PossibleEnglishName_Entity>
    readonly entityReference4: NullOrString<PossibleEnglishName_Entity>
    readonly indirectEntityReference: NullOrString<PossibleEnglishName_Entity>

}

/** A type-alias definition of the {@link Entities} name-reference {@link ReadonlyMap map} */
type EntityMap = ReadonlyMap<PossibleEnglishName_Entity, Entity>

function createReference(content: Content, entityMap: EntityMap,): Instrument {
    return new InstrumentContainer(
        createNameFromContent(content, 'all', false,),
        retrieveEntity(content, entityMap,),
        content.isInSuperMarioMaker1, content.isInSuperMarioMakerFor3DS,
        content.isInSmbGameStyle, content.isInSmb3GameStyle, content.isInSmwGameStyle, content.isInNsmbuGameStyle,
        content.isInDayTime, content.isInNightTime,
    )
}

function retrieveEntity(content: Content, entityMap: EntityMap,): CollectionHolder<Entity> {
    const entities: MutableArray<Entity> = []
    if (content.entityReference1 != null)
        entities.push(entityMap.get(content.entityReference1,)!,)
    if (content.entityReference2 != null)
        entities.push(entityMap.get(content.entityReference2,)!,)
    if (content.entityReference3 != null)
        entities.push(entityMap.get(content.entityReference3,)!,)
    if (content.entityReference4 != null)
        entities.push(entityMap.get(content.entityReference4,)!,)
    if (content.indirectEntityReference != null)
        entities.push(entityMap.get(content.indirectEntityReference,)!,)

    if (entities.length === 0)
        return EMPTY_COLLECTION_HOLDER
    return new ArrayAsCollection(entities,)
}
