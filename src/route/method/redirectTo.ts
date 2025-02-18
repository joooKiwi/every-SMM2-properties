import type {Nullable} from '@joookiwi/type'
import {redirect}      from 'react-router'

import {ColorThemes}      from 'color/ColorThemes'
import {getUserColorScheme} from 'color/getUserColorScheme'
import {getUserLanguage}  from 'lang/getUserLanguage'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import {EveryRoutes}      from 'route/EveryRoutes'

import ColorCompanion =    ColorThemes.Companion
import LanguageCompanion = ProjectLanguages.Companion

// export function redirectTo(route: EveryRoutes, language: Nullable<ProjectLanguages> = null, games: NullableArray<Games> = null, times: NullableArray<Times> = null, gameStyles: NullableArray<GameStyles> = null, viewDisplay: Nullable<ViewDisplays> = null,): never {
/**
 * Throw a {@link Response} having the {@link EveryPossibleRoutes route path} as an argument
 *
 * @param route    The route to redirect
 * @param language The language on the route
 * @param color    The colour on the route
 */
export function redirectTo(route: EveryRoutes, language: Nullable<ProjectLanguages> = null, color: Nullable<ColorThemes> = null,): never {
    if (language == null)
        if (color == null)
            throw redirect(route.getPath(LanguageCompanion.currentOrNull ?? getUserLanguage(), ColorCompanion.currentOrNull ?? getUserColorScheme(),),)
        else
            throw redirect(route.getPath(LanguageCompanion.currentOrNull ?? getUserLanguage(), color,),)
    if (color == null)
        throw redirect(route.getPath(language, ColorCompanion.currentOrNull ?? getUserColorScheme(),),)
    throw redirect(route.getPath(language, color,),)
}
