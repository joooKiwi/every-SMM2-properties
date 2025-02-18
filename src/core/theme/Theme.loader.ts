import file from 'resources/compiled/Theme.json'

import type {Array, NullOrBoolean} from '@joookiwi/type'
import {forEachByArray}            from '@joookiwi/collection'
import {lazy}                      from '@joookiwi/lazy'

import type {LanguageContent}            from 'core/_template/LanguageContent'
import type {GameContentFrom1And2}       from 'core/game/Loader.types'
import type {CourseAndWorldTheme}        from 'core/theme/CourseAndWorldTheme'
import type {CourseTheme}                from 'core/theme/CourseTheme'
import type {PossibleEnglishName}        from 'core/theme/Themes.types'
import type {PossibleEffectInNightTheme} from 'core/theme/loader.types'
import type {Name}                       from 'lang/name/Name'
import type {Loader}                     from 'util/loader/Loader'

import {isInDevelopment}              from 'variables'
import {Entities}                     from 'core/entity/Entities'
import {CourseAndWorldThemeContainer} from 'core/theme/CourseAndWorldTheme.container'
import {CourseOnlyThemeContainer}     from 'core/theme/CourseOnlyTheme.container'
import {CourseThemeContainer}         from 'core/theme/CourseTheme.container'
import {Themes}                       from 'core/theme/Themes'
import {WorldOnlyThemeContainer}      from 'core/theme/WorldOnlyTheme.container'
import {WorldThemeContainer}          from 'core/theme/WorldTheme.container'
import {NightEffects}                 from 'core/nightEffect/NightEffects'
import {createNameFromContent}        from 'lang/name/createNameFromContent'

import EntityCompanion =      Entities.Companion
import NightEffectCompanion = NightEffects.Companion

/**
 * @dependsOn<{@link Entities}>
 * @indirectlyDependsOn<{@link EntityLoader}>
 * @recursiveReference<{@link Themes}>
 * @singleton
 */
export class ThemeLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: ThemeLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme>

    public load(): ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, CourseAndWorldTheme>()
        forEachByArray(file as Array<Content>, content => {
            const reference = createReference(content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        },)

        if (isInDevelopment)
            console.info(
                '-------------------- "theme" has been loaded --------------------\n',
                references,
                '\n-------------------- "theme" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent, GameContentFrom1And2 {

    //region -------------------- Language --------------------

    readonly english: PossibleEnglishName
    readonly americanEnglish: null
    readonly europeanEnglish: null

    readonly german: string

    readonly italian: string

    readonly dutch: string

    readonly portuguese: string
    readonly americanPortuguese: null
    readonly europeanPortuguese: null

    readonly russian: string

    readonly japanese: string

    readonly korean: string

    //endregion -------------------- Language --------------------

    readonly isInSuperMarioMaker2: true

    readonly isInCourseTheme: boolean
    readonly isInWorldTheme: boolean

    readonly isAvailableFromTheStart_SMM1: NullOrBoolean
    readonly effectInNightTheme: PossibleEffectInNightTheme

}

function createReference(content: Content,): CourseAndWorldTheme {
    const isInCourseTheme = content.isInCourseTheme
    const isInWorldTheme = content.isInWorldTheme

    const name = content.isInSuperMarioMaker1And3DS
        ? createNameFromContent(content, 'all', true,)
        : createNameFromContent(content, 2, true,)

    if (isInCourseTheme && isInWorldTheme)
        return new CourseAndWorldThemeContainer(
            name,
            content.isInSuperMarioMaker1And3DS, content.isAvailableFromTheStart_SMM1,
            createCourseTheme(content, name,),
            new WorldThemeContainer(name,),
        )
    if (isInCourseTheme)
        return new CourseOnlyThemeContainer(name, createCourseTheme(content, name,),)
    return new WorldOnlyThemeContainer(name, new WorldThemeContainer(name,),)
}

function createCourseTheme(content: Content, name: Name<string>,): CourseTheme {
    return new CourseThemeContainer(
        name,
        content.isInSuperMarioMaker1And3DS, content.isAvailableFromTheStart_SMM1,
        lazy(() => {
            const theme = Themes.Companion.getValueByName(name.english,)

            return EntityCompanion.values.map(it => it.reference,)
                .filter(reference => theme.get(reference,),)
                .toArray()
        },),
        NightEffectCompanion.getValueByName(content.effectInNightTheme,),
    )
}
