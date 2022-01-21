import type {PossibleConditionToUnlockIt}                  from './properties/UnlockProperty';
import type {PossibleEnglishName as PossibleGameReference} from '../gameReference/GameReferences.types';
import type {SoundPropertyTemplate}                        from './properties/sound/SoundProperty.template';
import type {TemplateWithNameTemplate}                     from '../_template/TemplateWithName.template';
import type {PossibleUniqueEnglishName}                    from './MysteryMushrooms.types';

export interface MysteryMushroomTemplate
    extends TemplateWithNameTemplate {

    uniqueName: PossibleUniqueEnglishName

    gameReference: | PossibleGameReference | PokemonGeneration

    properties: {

        unlock: {
            condition: PossibleConditionToUnlockIt
            amiibo: boolean
        }

        sound: SoundPropertyTemplate

    }

}

export type PokemonGeneration = `Pokémon gen ${| 1 | 4 | 6}`;
