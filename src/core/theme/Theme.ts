import type {NullOrBoolean, NullOrTrue} from '@joookiwi/type'

import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {NameTrait}                        from 'lang/name/NameTrait'

export interface Theme
    extends NameTrait<string>/*, ClassWithEnglishName<PossibleTheme>*/, GameProperty,
        ClassThatIsAvailableFromTheStart<NullOrBoolean, NullOrTrue, NullOrTrue> {}
