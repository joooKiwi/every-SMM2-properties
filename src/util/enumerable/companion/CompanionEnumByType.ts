import type {CompanionEnumDeclaration, EnumerableConstructor} from '@joookiwi/enumerable'
import type {Nullable}                                        from '@joookiwi/type'
import {CompanionEnum}                                        from '@joookiwi/enumerable'

import {EnumerableWithType} from 'util/enumerable/Enumerable.types'
import {getValueByType}     from 'util/utilitiesMethods'

export class CompanionEnumByType<const T,
    const ENUM extends EnumerableWithType<T>,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    public getValueByType(value: Nullable<| ENUM | T>,): ENUM {
        return getValueByType(value, this,)
    }

}
