import file from 'src/resources/compiled/Other word in the game.json' with {type: 'json',}

import type {Array}             from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {PossibleExcludedLanguages} from 'test/helperMethods.types'

import {EveryTypes}                                 from 'test/EveryTypes'
import {getEnglishName, testEnglish, testLanguages} from 'test/helperMethods'

describe('Other word in the game (file test)', () => {
    const types = EveryTypes.get
    const everySingularNames = types.everyPossibleSingularName_otherWordInTheGame
    const everyPluralNames = types.everyPossiblePluralName_otherWordInTheGame
    const everyPluralNamesOrNull = [null, ...types.everyPossiblePluralName_otherWordInTheGame,]                                            as const
    const excludedLanguages_smm1And3ds = ['chinese', 'korean',]                                                                            as const satisfies Array<PossibleExcludedLanguages>
    const excludedLanguages_smm2 = ['portuguese',]                                                                                         as const satisfies Array<PossibleExcludedLanguages>
    const excludedLanguages_pluralAndSmm1And3ds = ['german', 'spanish', 'italian', 'dutch', 'portuguese', 'russian', 'chinese', 'korean',] as const satisfies Array<PossibleExcludedLanguages>
    const excludedLanguages_plural = ['german', 'spanish', 'italian', 'dutch', 'portuguese', 'russian',]                                   as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        const isSMM1And3DSExclusive = (it.isInSuperMarioMaker1 || it.isInSuperMarioMakerFor3DS) && !it.isInSuperMarioMaker2
        const isSMM2Exclusive = !it.isInSuperMarioMaker1 && !it.isInSuperMarioMakerFor3DS && it.isInSuperMarioMaker2
        const isPluralForm = it.isPlural

        //TODO add the plural form (once they can be made) for the "other word in the game"
        //TODO add the translation of "Mii costume", "Entity", "Player", "Power-up" (german, spanish, italian, dutch, portuguese, russian, japanese, chinese & korean)
        //TODO add the missing words for "Autoscroll", "Mario's Trail", "Solo Making", "Co-op Making", "Liquid" (german, italian, dutch, portuguese, russian, japanese, chinese, korean)
        //TODO add the missing words for "Copy", "Erase", "Multigrab" (portuguese)
        testLanguages(it, isPluralForm && isSMM1And3DSExclusive ? excludedLanguages_pluralAndSmm1And3ds
            : isPluralForm ? excludedLanguages_plural
                : isSMM1And3DSExclusive ? excludedLanguages_smm1And3ds :
                    isSMM2Exclusive ? excludedLanguages_smm2 : null,)

        describe('Type validations', () => {
            describe('Is in game', () => {
                test('SMM', () => expect(it.isInSuperMarioMaker1,).toBeBoolean(),)
                test('SMM3DS', () => expect(it.isInSuperMarioMakerFor3DS,).toBeBoolean(),)
                test('SMM2', () => expect(it.isInSuperMarioMaker2,).toBeBoolean(),)
            },)
            describe('Plural', () => {
                test('Is plural', () => expect(it.isPlural,).toBeBoolean(),)
                test('Plural form', () => expect(it.pluralForm,).toBeOneOf(everyPluralNamesOrNull,),)
            },)

            testEnglish(it, isPluralForm ? everyPluralNames : everySingularNames,)
        },)
    },)},)
},)
