import file from 'src/resources/compiled/Medals (SMM).json' with {type: 'json',}

import type {Array}             from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {PossibleAmountOfStarReceivedToUnlockIt, PossibleMaximumAmountAllowedToUploadALevel} from 'src/core/medal/loader.types'

import {EveryTypes} from 'test/EveryTypes'

describe('Medal (file test)', () => {
    const types = EveryTypes.get
    const everyName = types.everyPossibleName_medal
    const everyPossibleAmountOfAllowedLevelToUpload = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,]   as const satisfies Array<PossibleMaximumAmountAllowedToUploadALevel>
    const everyPossibleAmountOfStarReceived = [1, 50, 150, 300, 500, 800, 1300, 2000, 3000, 5000,] as const satisfies Array<PossibleAmountOfStarReceivedToUnlockIt>

    file.forEach(it => {
    describe(it.image, () => {// eslint-disable-line jest/valid-title
        test('Image name', () => expect(it.image,).toBeOneOf(everyName,),)
        test('Amount of allowed level to upload', () => expect(it.amountOfAllowedLevelToUpload,).toBeOneOf(everyPossibleAmountOfAllowedLevelToUpload,),)
        test('Amount of star received', () => expect(it.amountOfStarReceived,).toBeOneOf(everyPossibleAmountOfStarReceived,),)
    },)},)
},)
