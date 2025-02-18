import {Enum} from '@joookiwi/enumerable'
import {Link} from 'react-router'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/nightEffect/NightEffects.types'
import type {TranslationReplaceKeysMap}            from 'lang/components/TranslationProperty'
import type {PossibleRouteName}                    from 'route/EveryRoutes.types'
import type {CompanionEnumByNameSingleton}         from 'util/enumerable/Singleton.types'

import {OtherWordInTheGames}            from 'core/otherWordInTheGame/OtherWordInTheGames'
import {unfinishedText}                 from 'app/tools/text/UnfinishedText'
import {Themes}                         from 'core/theme/Themes'
import ThemeImage                       from 'core/theme/component/ThemeImage'
import {ProjectLanguages}               from 'lang/ProjectLanguages'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import {routeFromName}                  from 'route/method/route.fromName'
import {Import}                         from 'util/DynamicImporter'
import {Empty}                          from 'util/emptyVariables'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

import EMPTY_OBJECT =      Empty.EMPTY_OBJECT
import LanguageCompanion = ProjectLanguages.Companion

//region -------------------- Import from deconstruction --------------------

const {ENTITY, PLAYER,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

export class NightEffects
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SPECIAL_EFFECT_ON_ENTITIES = new class NightEffects_SpecialEffectOnEntities extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            //TODO change the link to be only for the entities with special effects on ground night
            return {
                entities: NightEffects._createEntitiesLink(this, 'everyEntity (Time=night)',),
            }
        }

    }('Special effect on entities',)
    public static readonly SCREEN_UPSIDE_DOWN =         new NightEffects('Screen upside down',)
    public static readonly DARK =                       new class NightEffects_Dark extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            return {
                course: OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName.toLowerCase(),),
                entities: NightEffects._createEntitiesLink(this, 'everyEntity (Time=night)',),
                players: NightEffects._createPlayersLink(this),
            }
        }

    }('Dark',)
    public static readonly WIND =                       new class NightEffects_Wind extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            //TODO change the game styles to only show the effect with the game style view.
            return {
                gameStyle: <Link key={`${this.englishName} (game style)`} to={routeFromName('everyGameStyle',)} className="link-primary">{gameContentTranslation('game style.singular',).toLowerCase()}</Link>,
            }
        }

    }('Wind',)
    public static readonly SLIPPERY =                   new NightEffects('Slippery',)
    public static readonly LOW_GRAVITY =                new class NightEffects_LowGravity extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            //TODO change the link to be only for the entities with special effects on underwater
            return {
                underwaterImage: NightEffects._createUnderwaterImage(this),
                entities: NightEffects._createEntitiesLink(this, 'everyEntity (Time=night)',),
            }
        }

    }('Low gravity',)
    public static readonly POISON_LIQUID =              new class NightEffects_PoisonLiquid extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            const currentLanguage = LanguageCompanion.current
            return {
                water: <span key={`${this.englishName} (water)`} className="text-decoration-underline">{currentLanguage.get(Import.Entities.WATER.reference,)!.toLowerCase()}</span>,
                poison: <span key={`${this.englishName} (poison)`} className="text-decoration-underline">{currentLanguage.get(Import.Entities.POISON.reference,)!.toLowerCase()}</span>,
            }
        }

    }('Poison liquid',)
    public static readonly ENTITIES_IN_WATER =          new class NightEffects_EntitiesInWater extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            //TODO change the link to be only for the entities with the underwater behaviour on the sky night theme
            return {
                underwaterImage: NightEffects._createUnderwaterImage(this),
                entities: NightEffects._createEntitiesLink(this, 'everyEntity (Time=night)',),
            }
        }

    }('Entities in water',)
    public static readonly CHARACTERS_IN_WATER =        new class NightEffects_CharactersInWater extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            return {
                underwaterImage: NightEffects._createUnderwaterImage(this),
                players: NightEffects._createPlayersLink(this),
            }
        }

    }('Characters in water',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<NightEffects, typeof NightEffects> = class CompanionEnum_NightEffects
        extends CompanionEnumByEnglishNameOnly<NightEffects, typeof NightEffects> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_NightEffects

        private constructor() {
            super(NightEffects,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_NightEffects()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishName = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected static _createUnderwaterImage(instance: NightEffects,): ReactElement {
        return <ThemeImage key={`${instance.englishName} (underwater)`} reference={Themes.UNDERWATER} isSmallPath/>
    }

    protected static _createEntitiesLink(instance: NightEffects, routeName: PossibleRouteName,): ReactElement {
        return <Link key={`${instance.englishName} (entities)`} to={routeFromName(routeName,)} className="link-primary">{
            ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(ENTITY.pluralEnglishName).toLowerCase()
        }</Link>
    }

    protected static _createPlayersLink(instance: NightEffects,): ReactElement {
        return <span key={`${instance.englishName} (players)`} className="text-decoration-underline">{
            PLAYER.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(PLAYER.pluralEnglishName).toLowerCase()
        }</span>
    }

    protected _createReplaceComponent(): TranslationReplaceKeysMap {
        return EMPTY_OBJECT
    }

    public get createNewComponent(): ReactElement {
        return gameContentTranslation(`nightEffect.${this.englishName}`, this._createReplaceComponent(),)
    }

    //endregion -------------------- Methods --------------------

}

export namespace NightEffects {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link NightEffects} */
    export const Companion = NightEffects.CompanionEnum.get

}

//TODO remove this test variable when the application will be complete
(window.test ??= {}).NightEffects = NightEffects
