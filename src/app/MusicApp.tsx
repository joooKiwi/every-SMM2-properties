import './MusicApp.scss'

import {Link} from 'react-router'

import {ReactProperties, ReactPropertiesWithChildren, ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import Image                                             from 'app/tools/images/Image'
import UnfinishedText                                    from 'app/tools/text/UnfinishedText'
import PageTitle                                         from 'app/util/PageTitle'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import {ClearConditionEntityImages}                      from 'core/entity/ClearConditionEntityImages'
import {EditorEntityImages}                              from 'core/entity/EditorEntityImages'
import {GameStyles}                                      from 'core/gameStyle/GameStyles'
import GameStyleImage                                    from 'core/gameStyle/component/GameStyleImage'
import {Themes}                                          from 'core/theme/Themes'
import ThemeImage                                        from 'core/theme/component/ThemeImage'
import {Times}                                           from 'core/time/Times'
import TimeImage                                         from 'core/time/component/TimeImage'
import {Tracks}                                          from 'core/track/Tracks'
import Track                                             from 'core/track/component/Track'
import SoundEffectImage                                  from 'core/soundEffect/SoundEffectImage'
import {SoundEffects}                                    from 'core/soundEffect/SoundEffects'
import {DONT_VIEW_TRACE_IMAGE, VIEW_TRACE_IMAGE}         from 'core/editor/viewTraceImages'
import {routeFromName}                                   from 'route/method/route.fromName'
import {ArrayAsCollection}                               from 'util/collection/ArrayAsCollection'

import BONUS_NSMBU =                           Tracks.BONUS_NSMBU
import BONUS_NSMBU_FAST =                      Tracks.BONUS_NSMBU_FAST
import BONUS_NSMBU_YOSHI =                     Tracks.BONUS_NSMBU_YOSHI
import BONUS_NSMBU_YOSHI_FAST =                Tracks.BONUS_NSMBU_YOSHI_FAST
import BOSS_NSMBU =                            Tracks.BOSS_NSMBU
import BOSS_NSMBU_FAST =                       Tracks.BOSS_NSMBU_FAST
import CASTLE_LESSON_EDITORS =                 Tracks.CASTLE_LESSON_EDITORS
import FINAL_BOSS_NSMBU =                      Tracks.FINAL_BOSS_NSMBU
import FINAL_BOSS_NSMBU_FAST =                 Tracks.FINAL_BOSS_NSMBU_FAST
import FOREST_LESSON_EDITORS =                 Tracks.FOREST_LESSON_EDITORS
import GHOST_HOUSE_LESSON_EDITORS =            Tracks.GHOST_HOUSE_LESSON_EDITORS
import GROUND_LESSON_EDITORS =                 Tracks.GROUND_LESSON_EDITORS
import NSMBU_AIRSHIP_EDITORS =                 Tracks.NSMBU_AIRSHIP_EDITORS
import NSMBU_AIRSHIP_TIMES =                   Tracks.NSMBU_AIRSHIP_TIMES
import NSMBU_CASTLE_EDITORS =                  Tracks.NSMBU_CASTLE_EDITORS
import NSMBU_CASTLE_TIMES =                    Tracks.NSMBU_CASTLE_TIMES
import NSMBU_DESERT_EDITORS =                  Tracks.NSMBU_DESERT_EDITORS
import NSMBU_DESERT_TIMES =                    Tracks.NSMBU_DESERT_TIMES
import NSMBU_FOREST_EDITORS =                  Tracks.NSMBU_FOREST_EDITORS
import NSMBU_FOREST_TIMES =                    Tracks.NSMBU_FOREST_TIMES
import NSMBU_GHOST_HOUSE_EDITORS =             Tracks.NSMBU_GHOST_HOUSE_EDITORS
import NSMBU_GHOST_HOUSE_TIMES =               Tracks.NSMBU_GHOST_HOUSE_TIMES
import NSMBU_GROUND_EDITORS =                  Tracks.NSMBU_GROUND_EDITORS
import NSMBU_GROUND_TIMES =                    Tracks.NSMBU_GROUND_TIMES
import NSMBU_SNOW_EDITORS =                    Tracks.NSMBU_SNOW_EDITORS
import NSMBU_SNOW_TIMES =                      Tracks.NSMBU_SNOW_TIMES
import NSMBU_SKY_EDITORS =                     Tracks.NSMBU_SKY_EDITORS
import NSMBU_SKY_TIMES =                       Tracks.NSMBU_SKY_TIMES
import NSMBU_UNDERGROUND_EDITORS =             Tracks.NSMBU_UNDERGROUND_EDITORS
import NSMBU_UNDERGROUND_TIMES =               Tracks.NSMBU_UNDERGROUND_TIMES
import NSMBU_UNDERWATER_EDITORS =              Tracks.NSMBU_UNDERWATER_EDITORS
import NSMBU_UNDERWATER_TIMES =                Tracks.NSMBU_UNDERWATER_TIMES
import PEACEFUL =                              Tracks.PEACEFUL
import SMB_AIRSHIP_EDITORS =                   Tracks.SMB_AIRSHIP_EDITORS
import SMB_AIRSHIP_TIMES =                     Tracks.SMB_AIRSHIP_TIMES
import SMB_BONUSES =                           Tracks.SMB_BONUSES
import SMB_BOSSES =                            Tracks.SMB_BOSSES
import SMB_CASTLE_EDITORS =                    Tracks.SMB_CASTLE_EDITORS
import SMB_CASTLE_TIMES =                      Tracks.SMB_CASTLE_TIMES
import SMB_DESERT_EDITORS =                    Tracks.SMB_DESERT_EDITORS
import SMB_DESERT_TIMES =                      Tracks.SMB_DESERT_TIMES
import SMB_FINAL_BOSSES =                      Tracks.SMB_FINAL_BOSSES
import SMB_FOREST_EDITORS =                    Tracks.SMB_FOREST_EDITORS
import SMB_FOREST_TIMES =                      Tracks.SMB_FOREST_TIMES
import SMB_GHOST_HOUSE_EDITORS =               Tracks.SMB_GHOST_HOUSE_EDITORS
import SMB_GHOST_HOUSE_TIMES =                 Tracks.SMB_GHOST_HOUSE_TIMES
import SMB_GROUND_EDITORS =                    Tracks.SMB_GROUND_EDITORS
import SMB_GROUND_TIMES =                      Tracks.SMB_GROUND_TIMES
import SMB_SNOW_EDITORS =                      Tracks.SMB_SNOW_EDITORS
import SMB_SNOW_TIMES =                        Tracks.SMB_SNOW_TIMES
import SMB_SKY_EDITORS =                       Tracks.SMB_SKY_EDITORS
import SMB_SKY_TIMES =                         Tracks.SMB_SKY_TIMES
import SMB_UNDERGROUND_EDITORS =               Tracks.SMB_UNDERGROUND_EDITORS
import SMB_UNDERGROUND_TIMES =                 Tracks.SMB_UNDERGROUND_TIMES
import SMB_UNDERWATER_EDITORS =                Tracks.SMB_UNDERWATER_EDITORS
import SMB_UNDERWATER_TIMES =                  Tracks.SMB_UNDERWATER_TIMES
import SMB3_AIRSHIP_EDITORS =                  Tracks.SMB3_AIRSHIP_EDITORS
import SMB3_AIRSHIP_TIMES =                    Tracks.SMB3_AIRSHIP_TIMES
import SMB3_BONUSES_BOSSES_AND_FINAL_BOSSES =  Tracks.SMB3_BONUSES_BOSSES_AND_FINAL_BOSSES
import SMB3_CASTLE_EDITORS =                   Tracks.SMB3_CASTLE_EDITORS
import SMB3_CASTLE_TIMES =                     Tracks.SMB3_CASTLE_TIMES
import SMB3_DESERT_EDITORS =                   Tracks.SMB3_DESERT_EDITORS
import SMB3_FOREST_EDITORS =                   Tracks.SMB3_FOREST_EDITORS
import SMB3_GHOST_HOUSE_EDITORS =              Tracks.SMB3_GHOST_HOUSE_EDITORS
import SMB3_GHOST_HOUSE_TIMES =                Tracks.SMB3_GHOST_HOUSE_TIMES
import SMB3_GROUND_EDITORS =                   Tracks.SMB3_GROUND_EDITORS
import SMB3_GROUND_TIMES =                     Tracks.SMB3_GROUND_TIMES
import SMB3_SNOW_EDITORS =                     Tracks.SMB3_SNOW_EDITORS
import SMB3_SNOW_TIMES =                       Tracks.SMB3_SNOW_TIMES
import SMB3_SKY_EDITORS =                      Tracks.SMB3_SKY_EDITORS
import SMB3_SKY_TIMES =                        Tracks.SMB3_SKY_TIMES
import SMB3_UNDERGROUND_EDITORS =              Tracks.SMB3_UNDERGROUND_EDITORS
import SMB3_UNDERGROUND_TIMES =                Tracks.SMB3_UNDERGROUND_TIMES
import SMB3_UNDERWATER_EDITORS =               Tracks.SMB3_UNDERWATER_EDITORS
import SMB3_UNDERWATER_TIMES =                 Tracks.SMB3_UNDERWATER_TIMES
import SMG =                                   SoundEffects.SMG
import SMK =                                   SoundEffects.SMK
import SMS =                                   SoundEffects.SMS
import SMW_AIRSHIP_EDITORS =                   Tracks.SMW_AIRSHIP_EDITORS
import SMW_AIRSHIP_TIMES =                     Tracks.SMW_AIRSHIP_TIMES
import SMW_BONUSES_BOSSES_AND_FINAL_BOSSES =   Tracks.SMW_BONUSES_BOSSES_AND_FINAL_BOSSES
import SMW_CASTLE_EDITORS =                    Tracks.SMW_CASTLE_EDITORS
import SMW_CASTLE_TIMES =                      Tracks.SMW_CASTLE_TIMES
import SMW_DESERT_EDITORS =                    Tracks.SMW_DESERT_EDITORS
import SMW_DESERT_TIMES =                      Tracks.SMW_DESERT_TIMES
import SMW_FOREST_EDITORS =                    Tracks.SMW_FOREST_EDITORS
import SMW_FOREST_TIMES =                      Tracks.SMW_FOREST_TIMES
import SMW_GHOST_HOUSE_EDITORS =               Tracks.SMW_GHOST_HOUSE_EDITORS
import SMW_GHOST_HOUSE_TIMES =                 Tracks.SMW_GHOST_HOUSE_TIMES
import SMW_GROUND_EDITORS =                    Tracks.SMW_GROUND_EDITORS
import SMW_GROUND_TIMES =                      Tracks.SMW_GROUND_TIMES
import SMW_SNOW_EDITORS =                      Tracks.SMW_SNOW_EDITORS
import SMW_SNOW_TIMES =                        Tracks.SMW_SNOW_TIMES
import SMW_SKY_EDITORS =                       Tracks.SMW_SKY_EDITORS
import SMW_SKY_TIMES =                         Tracks.SMW_SKY_TIMES
import SMW_UNDERGROUND_EDITORS =               Tracks.SMW_UNDERGROUND_EDITORS
import SMW_UNDERGROUND_TIMES =                 Tracks.SMW_UNDERGROUND_TIMES
import SMW_UNDERWATER_EDITORS =                Tracks.SMW_UNDERWATER_EDITORS
import SMW_UNDERWATER_TIMES =                  Tracks.SMW_UNDERWATER_TIMES
import SM3DW_AIRSHIP_EDITORS =                 Tracks.SM3DW_AIRSHIP_EDITORS
import SM3DW_AIRSHIP_TIMES =                   Tracks.SM3DW_AIRSHIP_TIMES
import SM3DW_BONUSES_BOSSES_AND_FINAL_BOSSES = Tracks.SM3DW_BONUSES_BOSSES_AND_FINAL_BOSSES
import SM3DW_CASTLE_EDITORS =                  Tracks.SM3DW_CASTLE_EDITORS
import SM3DW_CASTLE_TIMES =                    Tracks.SM3DW_CASTLE_TIMES
import SM3DW_DESERT_EDITORS =                  Tracks.SM3DW_DESERT_EDITORS
import SM3DW_DESERT_TIMES =                    Tracks.SM3DW_DESERT_TIMES
import SM3DW_FOREST_EDITORS =                  Tracks.SM3DW_FOREST_EDITORS
import SM3DW_FOREST_TIMES =                    Tracks.SM3DW_FOREST_TIMES
import SM3DW_GHOST_HOUSE_EDITORS =             Tracks.SM3DW_GHOST_HOUSE_EDITORS
import SM3DW_GHOST_HOUSE_TIMES =               Tracks.SM3DW_GHOST_HOUSE_TIMES
import SM3DW_GROUND_EDITORS =                  Tracks.SM3DW_GROUND_EDITORS
import SM3DW_GROUND_TIMES =                    Tracks.SM3DW_GROUND_TIMES
import SM3DW_SNOW_EDITORS =                    Tracks.SM3DW_SNOW_EDITORS
import SM3DW_SNOW_TIMES =                      Tracks.SM3DW_SNOW_TIMES
import SM3DW_SKY_EDITORS =                     Tracks.SM3DW_SKY_EDITORS
import SM3DW_SKY_TIMES =                       Tracks.SM3DW_SKY_TIMES
import SM3DW_UNDERGROUND_EDITORS =             Tracks.SM3DW_UNDERGROUND_EDITORS
import SM3DW_UNDERGROUND_TIMES =               Tracks.SM3DW_UNDERGROUND_TIMES
import SM3DW_UNDERWATER_EDITORS =              Tracks.SM3DW_UNDERWATER_EDITORS
import SM3DW_UNDERWATER_TIMES =                Tracks.SM3DW_UNDERWATER_TIMES
import UNDERWATER_LESSON_EDITORS =             Tracks.UNDERWATER_LESSON_EDITORS
import SM64 =                                  SoundEffects.SM64

/** @reactComponent */
export default function MusicApp() {
    return <div id="music-app-container">
        <h1 className="text-center fw-bold text-decoration-underline">{contentTranslation('music.title',)}</h1>
        <PageTitle value={contentTranslation('music.singular',)}/>
        <div className="container-md mb-3">
            {contentTranslation('music.introduction.1. present',)}
            {contentTranslation('music.introduction.2. no sound effect', {
                soundEffectsLink: <Link key="Sound Effect link" to={routeFromName('everySoundEffect',)}>{gameContentTranslation('sound effect.plural',).toLowerCase()}</Link>,
                editorVoicesLink: <Link key="Editor Voice link" to={routeFromName('everyEditorVoice',)}>{gameContentTranslation('editor voice.plural',).toLowerCase()}</Link>,
            },)}
            {contentTranslation('music.introduction.3. organization', {
                gameStyleLink: <Link key="Game link" to={routeFromName('everyGameStyle',)}>{gameContentTranslation('game style.singular',).toLowerCase()}</Link>,
                themeLink: <Link key="Theme link" to={routeFromName('everyTheme',)}>{gameContentTranslation('theme.singular',).toLowerCase()}</Link>,
            },)}
            {contentTranslation('music.introduction.4. editor',)}
        </div>
        {/*<div id="selector-container">
            <div id="gameStyle-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.SMB}/></button>
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.SMB3}/></button>
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.SMW}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.NSMBU}/></button>
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.SM3DW}/></button>
                </div>
            </div>
            <div id="courseTheme-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.GROUND}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.UNDERGROUND}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.UNDERWATER}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.DESERT}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SNOW}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SKY}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.FOREST}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.GHOST_HOUSE}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.AIRSHIP}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.CASTLE}/></button>
                </div>
            </div>
            <div id="worldTheme-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.GROUND}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.UNDERGROUND}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.DESERT}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SNOW}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SKY}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.FOREST}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.VOLCANO}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SPACE}/></button>
                </div>
            </div>
            <div id="powerUp-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><Image file={Entities.MASTER_SWORD.editorImage.get(GameStyles.SMB, Themes.GROUND, Times.DAY,)[0]}/></button>
                    <button className="btn btn-outline-primary"><Image file={Entities.SMB2_MUSHROOM.editorImage.get(GameStyles.SMB, Themes.GROUND, Times.DAY,)[0]}/></button>
                    <button className="btn btn-outline-primary"><Image file={Entities.SUPERBALL_FLOWER.editorImage.get(GameStyles.SMB, Themes.GROUND, Times.DAY,)[0]}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><Image file={Entities.YOSHI_EGG.editorImage.get(GameStyles.SMW, Themes.GROUND, Times.DAY,)[0]}/></button>
                    <button className="btn btn-outline-primary"><Image file={Entities.SUPER_STAR.editorImage.get(GameStyles.SMW, Themes.GROUND, Times.DAY,)[0]}/></button>
                </div>
            </div>
            <div id="soundEffect-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.PEACEFUL}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.SUPER_MARIO_KART_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.SUPER_MARIO_64_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.SUPER_MARIO_GALAXY_MUSIC}/></button>
                </div>
            </div>
        </div>*/}

        <div id="smb-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.SMB}/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <EditorMusicsContainer files={SMB_GROUND_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <EditorMusicsContainer files={SMB_UNDERGROUND_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_UNDERGROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <EditorMusicsContainer files={SMB_UNDERWATER_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_UNDERWATER_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <EditorMusicsContainer files={SMB_DESERT_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_DESERT_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <EditorMusicsContainer files={SMB_SNOW_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_SNOW_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <EditorMusicsContainer files={SMB_SKY_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_SKY_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <EditorMusicsContainer files={SMB_FOREST_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_FOREST_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <EditorMusicsContainer files={SMB_GHOST_HOUSE_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_GHOST_HOUSE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <EditorMusicsContainer files={SMB_AIRSHIP_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_AIRSHIP_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <EditorMusicsContainer files={SMB_CASTLE_EDITORS}/>
                <TimeWithLinkAndSmb2MusicsContainer files={SMB_CASTLE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <PeacefulMusicsContainer files={PEACEFUL}/>
            <BonusMusicsContainer files={SMB_BONUSES}/>
            <BossMusicsContainer files={SMB_BOSSES}/>
            <FinalBossMusicsContainer files={SMB_FINAL_BOSSES} asSmb3/>
        </div>
        <div id="smb3-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.SMB3}/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <EditorMusicsContainer files={SMB3_GROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <EditorMusicsContainer files={SMB3_UNDERGROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB3_UNDERGROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <EditorMusicsContainer files={SMB3_UNDERWATER_EDITORS}/>
                <TimeMusicsContainer files={SMB3_UNDERWATER_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <EditorMusicsContainer files={SMB3_DESERT_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GROUND_TIMES}><ThemeImage reference={Themes.GROUND} isSmallPath/></TimeMusicsContainer>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <EditorMusicsContainer files={SMB3_SNOW_EDITORS}/>
                <TimeMusicsContainer files={SMB3_SNOW_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <EditorMusicsContainer files={SMB3_SKY_EDITORS}/>
                <TimeMusicsContainer files={SMB3_SKY_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <EditorMusicsContainer files={SMB3_FOREST_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GROUND_TIMES}><ThemeImage reference={Themes.GROUND} isSmallPath/></TimeMusicsContainer>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <EditorMusicsContainer files={SMB3_GHOST_HOUSE_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GHOST_HOUSE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <EditorMusicsContainer files={SMB3_AIRSHIP_EDITORS}/>
                <TimeMusicsContainer files={SMB3_AIRSHIP_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <EditorMusicsContainer files={SMB3_CASTLE_EDITORS}/>
                <TimeMusicsContainer files={SMB3_CASTLE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <BonusBossAndFinalBossMusicsContainer files={SMB3_BONUSES_BOSSES_AND_FINAL_BOSSES}/>
        </div>
        <div id="smw-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.SMW}/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <EditorMusicsContainer files={SMW_GROUND_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_GROUND_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <EditorMusicsContainer files={SMW_UNDERGROUND_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_UNDERGROUND_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <EditorMusicsContainer files={SMW_UNDERWATER_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_UNDERWATER_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <EditorMusicsContainer files={SMW_DESERT_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_DESERT_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <EditorMusicsContainer files={SMW_SNOW_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_SNOW_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <EditorMusicsContainer files={SMW_SKY_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_SKY_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <EditorMusicsContainer files={SMW_FOREST_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_FOREST_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <EditorMusicsContainer files={SMW_GHOST_HOUSE_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_GHOST_HOUSE_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <EditorMusicsContainer files={SMW_AIRSHIP_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_AIRSHIP_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <EditorMusicsContainer files={SMW_CASTLE_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_CASTLE_TIMES} gameStyle="SMW"/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <BonusBossAndFinalBossMusicsContainer files={SMW_BONUSES_BOSSES_AND_FINAL_BOSSES}/>
        </div>
        <div id="nsmbu-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.NSMBU}/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <EditorMusicsContainer files={NSMBU_GROUND_EDITORS}/>
                <LessonEditorMusicsContainer files={GROUND_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_GROUND_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <EditorMusicsContainer files={NSMBU_UNDERGROUND_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_UNDERGROUND_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <EditorMusicsContainer files={NSMBU_UNDERWATER_EDITORS}/>
                <LessonEditorMusicsContainer files={UNDERWATER_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_UNDERWATER_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <EditorMusicsContainer files={NSMBU_DESERT_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_DESERT_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <EditorMusicsContainer files={NSMBU_SNOW_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_SNOW_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <EditorMusicsContainer files={NSMBU_SKY_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_SKY_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <EditorMusicsContainer files={NSMBU_FOREST_EDITORS}/>
                <LessonEditorMusicsContainer files={FOREST_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_FOREST_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <EditorMusicsContainer files={NSMBU_GHOST_HOUSE_EDITORS}/>
                <LessonEditorMusicsContainer files={GHOST_HOUSE_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_GHOST_HOUSE_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <EditorMusicsContainer files={NSMBU_AIRSHIP_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_AIRSHIP_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <EditorMusicsContainer files={NSMBU_CASTLE_EDITORS}/>
                <LessonEditorMusicsContainer files={CASTLE_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_CASTLE_TIMES} gameStyle="NSMBU"/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <div id="bonusMusicWithYoshiAndBossMusicAndFinalBossMusic-musics-container" className="musics-container small-images grid-3">
                <div/>
                <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
                <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

                <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
                <Track value={BONUS_NSMBU}/>
                <Track value={BONUS_NSMBU_FAST}/>

                <Image file={getYoshiImage(GameStyles.NSMBU,)} className="yoshi-image"/>
                <Track value={BONUS_NSMBU_YOSHI}/>
                <Track value={BONUS_NSMBU_YOSHI_FAST}/>

                <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
                <Track value={BOSS_NSMBU}/>
                <Track value={BOSS_NSMBU_FAST}/>

                <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
                <Track value={FINAL_BOSS_NSMBU}/>
                <Track value={FINAL_BOSS_NSMBU_FAST}/>
            </div>
        </div>
        <div id="sm3dw-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.SM3DW}/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <EditorMusicsContainer files={SM3DW_GROUND_EDITORS}/>
                <DayMusicsContainer files={SM3DW_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <EditorMusicsContainer files={SM3DW_UNDERGROUND_EDITORS}/>
                <DayMusicsContainer files={SM3DW_UNDERGROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <EditorMusicsContainer files={SM3DW_UNDERWATER_EDITORS}/>
                <DayMusicsContainer files={SM3DW_UNDERWATER_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <EditorMusicsContainer files={SM3DW_DESERT_EDITORS}/>
                <DayMusicsContainer files={SM3DW_DESERT_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <EditorMusicsContainer files={SM3DW_SNOW_EDITORS}/>
                <DayMusicsContainer files={SM3DW_SNOW_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <EditorMusicsContainer files={SM3DW_SKY_EDITORS}/>
                <DayMusicsContainer files={SM3DW_SKY_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <EditorMusicsContainer files={SM3DW_FOREST_EDITORS}/>
                <TimeWithUnderwaterMusicsContainer files={SM3DW_FOREST_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <EditorMusicsContainer files={SM3DW_GHOST_HOUSE_EDITORS}/>
                <DayMusicsContainer files={SM3DW_GHOST_HOUSE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <EditorMusicsContainer files={SM3DW_AIRSHIP_EDITORS}/>
                <DayMusicsContainer files={SM3DW_AIRSHIP_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <EditorMusicsContainer files={SM3DW_CASTLE_EDITORS}/>
                <DayMusicsContainer files={SM3DW_CASTLE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <BonusBossAndFinalBossMusicsContainer files={SM3DW_BONUSES_BOSSES_AND_FINAL_BOSSES}/>
        </div>

        {/*<div id="ground-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.GROUND}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_GROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB_GROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_GROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_GROUND_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_GROUND_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_GROUND_EDITORS}/>
                <LessonEditorMusicsContainer files={GROUND_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_GROUND_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_GROUND_EDITORS}/>
                <DayMusicsContainer files={SM3DW_GROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <div className="w-100"/>
            <LinkMusicsContainer files={[GROUND_LINK, GROUND_LINK_FAST,]}/>
            <Smb2MusicsContainer files={[GROUND_SMB2, GROUND_SMB2_FAST,]}/>
        </div>
        <div id="underground-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.UNDERGROUND}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_UNDERGROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB_UNDERGROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_UNDERGROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB3_UNDERGROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_UNDERGROUND_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_UNDERGROUND_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_UNDERGROUND_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_UNDERGROUND_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_UNDERGROUND_EDITORS}/>
                <DayMusicsContainer files={SM3DW_UNDERGROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <div className="w-100"/>
            <LinkMusicsContainer files={[UNDERGROUND_LINK, UNDERGROUND_LINK_FAST,]}/>
            <Smb2MusicsContainer files={[UNDERGROUND_SMB2, UNDERGROUND_SMB2_FAST,]}/>
        </div>
        <div id="underwater-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.UNDERWATER}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_UNDERWATER_EDITORS}/>
                <TimeMusicsContainer files={SMB_UNDERWATER_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_UNDERWATER_EDITORS}/>
                <TimeMusicsContainer files={SMB3_UNDERWATER_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_UNDERWATER_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_UNDERWATER_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_UNDERWATER_EDITORS}/>
                <LessonEditorMusicsContainer files={UNDERWATER_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_UNDERGROUND_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_UNDERWATER_EDITORS}/>
                <DayMusicsContainer files={SM3DW_UNDERWATER_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="desert-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.DESERT}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_DESERT_EDITORS}/>
                <TimeMusicsContainer files={SMB_DESERT_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_DESERT_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GROUND_TIMES}><ThemeImage reference={Themes.GROUND} isSmallPath/></TimeMusicsContainer>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_DESERT_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_DESERT_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_DESERT_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_DESERT_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_DESERT_EDITORS}/>
                <DayMusicsContainer files={SM3DW_DESERT_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="snow-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.SNOW}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_SNOW_EDITORS}/>
                <TimeMusicsContainer files={SMB_SNOW_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_SNOW_EDITORS}/>
                <TimeMusicsContainer files={SMB3_SNOW_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_SNOW_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_SNOW_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_SNOW_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_SNOW_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_SNOW_EDITORS}/>
                <DayMusicsContainer files={SM3DW_SNOW_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="sky-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.SKY}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_SKY_EDITORS}/>
                <TimeMusicsContainer files={SMB_SKY_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_SKY_EDITORS}/>
                <TimeMusicsContainer files={SMB3_SKY_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_SKY_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_SKY_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_SKY_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_SKY_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_SKY_EDITORS}/>
                <DayMusicsContainer files={SM3DW_SKY_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="forest-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.FOREST}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_FOREST_EDITORS}/>
                <TimeMusicsContainer files={SMB_FOREST_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_FOREST_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GROUND_TIMES}><ThemeImage reference={Themes.GROUND} isSmallPath/></TimeMusicsContainer>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_FOREST_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_FOREST_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_FOREST_EDITORS}/>
                <LessonEditorMusicsContainer files={FOREST_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_FOREST_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_FOREST_EDITORS}/>
                <TimeWithUnderwaterMusicsContainer files={SM3DW_FOREST_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="ghostHouse-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.GHOST_HOUSE}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_GHOST_HOUSE_EDITORS}/>
                <TimeMusicsContainer files={SMB_GHOST_HOUSE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_GHOST_HOUSE_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GHOST_HOUSE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_GHOST_HOUSE_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_GHOST_HOUSE_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_GHOST_HOUSE_EDITORS}/>
                <LessonEditorMusicsContainer files={GHOST_HOUSE_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_GHOST_HOUSE_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_GHOST_HOUSE_EDITORS}/>
                <DayMusicsContainer files={SM3DW_GHOST_HOUSE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="airship-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.AIRSHIP}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_AIRSHIP_EDITORS}/>
                <TimeMusicsContainer files={SMB_AIRSHIP_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_AIRSHIP_EDITORS}/>
                <TimeMusicsContainer files={SMB3_AIRSHIP_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_AIRSHIP_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_AIRSHIP_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_AIRSHIP_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_AIRSHIP_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_AIRSHIP_EDITORS}/>
                <DayMusicsContainer files={SM3DW_AIRSHIP_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="castle-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.CASTLE}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_CASTLE_EDITORS}/>
                <TimeMusicsContainer files={SMB_CASTLE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_CASTLE_EDITORS}/>
                <TimeMusicsContainer files={SMB3_CASTLE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_CASTLE_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_CASTLE_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_CASTLE_EDITORS}/>
                <LessonEditorMusicsContainer files={CASTLE_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_CASTLE_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_CASTLE_EDITORS}/>
                <DayMusicsContainer files={SM3DW_CASTLE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <div className="w-100"/>
            <LinkMusicsContainer files={[CASTLE_LINK, CASTLE_LINK_FAST,]}/>
        </div>*/}

        <div id="world-musics-container" className="world-musics-container musics-container">
            <div><Image file={WORLD_THEME_IMAGE_FILE}/></div>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <Image file={WORLD_THEME_IMAGE_FILE}/>
                <div/>

                <ThemeImage reference={Themes.GROUND} isSmallPath/>
                <Track value={Tracks.GROUND_WORLD_EDITOR}/>
                <Track value={Tracks.GROUND_WORLD}/>

                <ThemeImage reference={Themes.UNDERGROUND} isSmallPath/>
                <Track value={Tracks.UNDERGROUND_WORLD_EDITOR}/>
                <Track value={Tracks.UNDERGROUND_WORLD}/>

                <ThemeImage reference={Themes.DESERT} isSmallPath/>
                <Track value={Tracks.DESERT_WORLD_EDITOR}/>
                <Track value={Tracks.DESERT_WORLD}/>

                <ThemeImage reference={Themes.SNOW} isSmallPath/>
                <Track value={Tracks.SNOW_WORLD_EDITOR}/>
                <Track value={Tracks.SNOW_WORLD}/>

                <ThemeImage reference={Themes.SKY} isSmallPath/>
                <Track value={Tracks.SKY_WORLD_EDITOR}/>
                <Track value={Tracks.SKY_WORLD}/>

                <ThemeImage reference={Themes.FOREST} isSmallPath/>
                <Track value={Tracks.FOREST_WORLD_EDITOR}/>
                <Track value={Tracks.FOREST_WORLD}/>

                <ThemeImage reference={Themes.VOLCANO} isSmallPath/>
                <Track value={Tracks.VOLCANO_WORLD_EDITOR}/>
                <Track value={Tracks.VOLCANO_WORLD}/>

                <ThemeImage reference={Themes.SPACE} isSmallPath/>
                <Track value={Tracks.SPACE_WORLD_EDITOR}/>
                <Track value={Tracks.SPACE_WORLD}/>
            </div>
        </div>

        {/*<div id="link-musics-container" className="powerUp-musics-container musics-container">
            <Image file={getLinkImage()} className="link-image"/>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
                <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

                <ThemeImage reference={Themes.GROUND} isSmallPath/>
                <Track value={GROUND_LINK}/>
                <Track value={GROUND_LINK_FAST}/>

                <ThemeImage reference={Themes.UNDERGROUND} isSmallPath/>
                <Track value={UNDERGROUND_LINK}/>
                <Track value={UNDERGROUND_LINK_FAST}/>

                <ThemeImage reference={Themes.CASTLE} isSmallPath/>
                <Track value={CASTLE_LINK}/>
                <Track value={CASTLE_LINK_FAST}/>

                <SoundEffectImage reference={SoundEffects.PEACEFUL}/>
                <Track value={PEACEFUL_LINK}/>
                <div/>

                <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
                <Track value={BONUS_LINK}/>
                <Track value={BONUS_LINK_FAST}/>

                <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
                <Track value={BOSS_LINK}/>
                <Track value={BOSS_LINK_FAST}/>

                <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
                <Track value={FINAL_BOSS_LINK}/>
                <Track value={FINAL_BOSS_LINK_FAST}/>
            </div>
        </div>
        <div id="smb2-musics-container" className="powerUp-musics-container musics-container">
            <Image file={getSmb2Image()} className="smb2-image"/>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
                <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

                <ThemeImage reference={Themes.GROUND} isSmallPath/>
                <Track value={GROUND_SMB2}/>
                <Track value={GROUND_SMB2_FAST}/>

                <ThemeImage reference={Themes.UNDERGROUND} isSmallPath/>
                <Track value={UNDERGROUND_SMB2}/>
                <Track value={UNDERGROUND_SMB2_FAST}/>

                <SoundEffectImage reference={SoundEffects.PEACEFUL}/>
                <Track value={PEACEFUL_SMB2}/>
                <div/>

                <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
                <Track value={BONUS_SMB2}/>
                <Track value={BONUS_SMB2_FAST}/>

                <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
                <Track value={BOSS_SMB2}/>
                <Track value={BOSS_SMB2_FAST}/>

                <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
                <Track value={FINAL_BOSS_SMB2}/>
                <Track value={FINAL_BOSS_SMB2_FAST}/>
            </div>
        </div>*/}

        {/*<div id="peaceful-musics-container" className="soundEffect-musics-container musics-container">
            <SoundEffectImage reference={SoundEffects.PEACEFUL}/>

            <div className="musics-container no-style small-images grid-2">
                <Image file={getLinkImage()}/>
                <Track value={PEACEFUL_LINK}/>

                <Image file={getSmb2Image()}/>
                <Track value={PEACEFUL_SMB2}/>
            </div>
        </div>
        <div id="bonus-musics-container" className="soundEffect-musics-container musics-container">
            <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
                <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

                <GameStyleImage reference={GameStyles.SMB}/>
                <Track value={BONUS_SMB}/>
                <Track value={BONUS_SMB_FAST}/>

                <GameStyleImage reference={GameStyles.SMB3}/>
                <Track value={BONUS_SMB3}/>
                <Track value={BONUS_SMB3_FAST}/>

                <GameStyleImage reference={GameStyles.SMW}/>
                <Track value={BONUS_SMW}/>
                <Track value={BONUS_SMW_FAST}/>

                <GameStyleImage reference={GameStyles.NSMBU}/>
                <Track value={BONUS_NSMBU}/>
                <Track value={BONUS_NSMBU_FAST}/>

                <Image file={getYoshiImage(GameStyles.NSMBU,)} className="yoshi-image"/>
                <Track value={BONUS_NSMBU_YOSHI}/>
                <Track value={BONUS_NSMBU_YOSHI_FAST}/>

                <GameStyleImage reference={GameStyles.SM3DW}/>
                <Track value={BONUS_SM3DW}/>
                <Track value={BONUS_SM3DW_FAST}/>

                <Image file={getLinkImage()} className="link-image"/>
                <Track value={BONUS_LINK}/>
                <Track value={BONUS_LINK_FAST}/>

                <Image file={getSmb2Image()} className="smb2-image"/>
                <Track value={BONUS_SMB2}/>
                <Track value={BONUS_SMB2_FAST}/>
            </div>
        </div>
        <div id="boss-musics-container" className="soundEffect-musics-container musics-container">
            <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
                <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

                <GameStyleImage reference={GameStyles.SMB}/>
                <Track value={BOSS_SMB}/>
                <Track value={BOSS_SMB_FAST}/>

                <GameStyleImage reference={GameStyles.SMB3}/>
                <Track value={BOSS_SMB3}/>
                <Track value={BOSS_SMB3_FAST}/>

                <GameStyleImage reference={GameStyles.SMW}/>
                <Track value={BOSS_SMW}/>
                <Track value={BOSS_SMW_FAST}/>

                <GameStyleImage reference={GameStyles.NSMBU}/>
                <Track value={BOSS_NSMBU}/>
                <Track value={BOSS_NSMBU_FAST}/>

                <GameStyleImage reference={GameStyles.SM3DW}/>
                <Track value={BOSS_SM3DW}/>
                <Track value={BOSS_SM3DW_FAST}/>

                <Image file={getLinkImage()} className="link-image"/>
                <Track value={BOSS_LINK}/>
                <Track value={BOSS_LINK_FAST}/>

                <Image file={getSmb2Image()} className="smb2-image"/>
                <Track value={BOSS_SMB2}/>
                <Track value={BOSS_SMB2_FAST}/>
            </div>
        </div>
        <div id="finalBoss-musics-container" className="soundEffect-musics-container musics-container">
            <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
                <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

                <GameStyleImage reference={GameStyles.SMB}/>
                <div/>
                <div/>

                <GameStyleImage reference={GameStyles.SMB3}/>
                <Track value={FINAL_BOSS_SMB3}/>
                <Track value={FINAL_BOSS_SMB3_FAST}/>

                <GameStyleImage reference={GameStyles.SMW}/>
                <Track value={FINAL_BOSS_SMW}/>
                <Track value={FINAL_BOSS_SMW_FAST}/>

                <GameStyleImage reference={GameStyles.NSMBU}/>
                <Track value={FINAL_BOSS_NSMBU}/>
                <Track value={FINAL_BOSS_NSMBU_FAST}/>

                <GameStyleImage reference={GameStyles.SM3DW}/>
                <Track value={FINAL_BOSS_SM3DW}/>
                <Track value={FINAL_BOSS_SM3DW_FAST}/>

                <Image file={getLinkImage()} className="link-image"/>
                <Track value={FINAL_BOSS_LINK}/>
                <Track value={FINAL_BOSS_LINK_FAST}/>

                <Image file={getSmb2Image()} className="smb2-image"/>
                <Track value={FINAL_BOSS_SMB2}/>
                <Track value={FINAL_BOSS_SMB2_FAST}/>
            </div>
        </div>*/}
        <div id="otherGames-musics-container" className="musics-container">
            <div className="musics-container no-style small-images grid-3">
                <div/>
                <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
                <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

                <SoundEffectImage reference={SMK}/>
                <Track value={Tracks.SMK}/>
                <Track value={Tracks.SMK_FAST}/>

                <SoundEffectImage reference={SM64}/>
                <Track value={Tracks.SM64}/>
                <Track value={Tracks.SM64_FAST}/>

                <SoundEffectImage reference={SMS}/>
                <Track value={Tracks.SMS}/>
                <Track value={Tracks.SMS_FAST}/>

                <SoundEffectImage reference={SMG}/>
                <Track value={Tracks.SMG}/>
                <Track value={Tracks.SMG_FAST}/>
            </div>
        </div>
    </div>
}

//region -------------------- Get image --------------------

function getLinkImage() {
    return EditorEntityImages.MASTER_SWORD.image.get(GameStyles.SMB, Themes.GROUND, Times.DAY,).getFirst()
}

function getSmb2Image() {
    return EditorEntityImages.SMB2_MUSHROOM.image.get(GameStyles.SMB, Themes.GROUND, Times.DAY,).getFirst()
}

function getYoshiImage(gameStyle: GameStyles,) {
    if (gameStyle === GameStyles.SMW)
        return EditorEntityImages.YOSHI_EGG.image.get(gameStyle, Themes.GROUND, Times.DAY,).getFirst()
    if (gameStyle === GameStyles.NSMBU)
        return ClearConditionEntityImages.YOSHI_EGG.image.get(gameStyle,)
    throw new TypeError(`The game style ${gameStyle.acronym} was not expected for a Yoshi.`,)
}

//endregion -------------------- Get image --------------------
//region -------------------- Musics --------------------

//region -------------------- Musics types --------------------

// type PossibleType = | 'peaceful' | 'bonus' | 'boss' | 'finalBoss'
//                     | 'gameStyle' | 'theme'
//                     | 'world' | 'volcano' | 'space'
//                     | 'link' | 'smb2'
//                     | 'ground' | 'underground' | 'underwater' | 'desert' | 'snow' | 'sky' | 'forest' | 'ghostHouse' | 'airship' | 'castle'

//endregion -------------------- Musics types --------------------
//region -------------------- Musics --------------------

interface MusicsProperties<out FILES extends ArrayOf1To8<Tracks>, >
    extends ReactProperties { readonly files: FILES }

type GroupedMusicsProperties = ReactPropertiesWithChildren<ReactElementOrArray>

// /** @reactComponent */
// function MusicsContainer({type, files,}: MusicsProperties,) {
//     return <div className={`${type}-music-container music-container`}>{new ArrayAsCollection(files,).map(it =>
//         <Track key={`Music (${it.titleName})`} value={it}/>,)
//     }</div>
// }

//endregion -------------------- Musics --------------------

//region -------------------- Game style musics --------------------

// interface GameStyleMusicsProperties extends MusicsProperties<ArrayOf1To3<Tracks>> { readonly gameStyle: GameStyles }
//
// /** @reactComponent */
// function GameStyleMusicsContainer({gameStyle, files,}: GameStyleMusicsProperties,) {
//     const name = gameStyle.englishName
//     const nameInHtml = gameStyle.englishNameInHtml
//
//     return <div className={`${nameInHtml}-gameStyle-musics-container gameStyle-musics-container musics-container`}>
//         <div><GameStyleImage reference={gameStyle}/></div>
//         <div className={`${nameInHtml}-gameStyle-music-container gameStyle-music-container music-container`}>{new ArrayAsCollection(files,).map(it =>
//             <Track key={`Game style music (${name} - ${it.titleName})`} value={it}/>)
//         }</div>
//     </div>
// }
//

// interface GameStyleGroupedMusicsProperties extends GroupedMusicsProperties { readonly gameStyle: GameStyles }
//
// /** @reactComponent */
// function GameStyleGroupedMusicsContainer({gameStyle, children,}: GameStyleGroupedMusicsProperties,) {
//     return <div className={`${gameStyle.englishNameInHtml}-gameStyle-musics-container gameStyle-musics-container musics-container`}>
//         <div><GameStyleImage reference={gameStyle}/></div>
//         {children}
//     </div>
// }

// /** @reactComponent */
// function GameStyleGroupedMusicsContainer({gameStyle, editor, lessonEditor, normalSpeed, fastSpeed, day, night,}: GroupedGameStyleMusicsProperties,) {
//     return <div className="gameStyle-musics-container musics-container">
//         <div><GameStyleImage reference={gameStyle}/></div>
//         {editor == null ? null : <EditorMusicsContainer files={editor}/>}
//         {lessonEditor == null ? null : <LessonEditorMusicsContainer files={lessonEditor}/>}
//         {normalSpeed == null ? null : <NormalSpeedMusicsContainer files={normalSpeed}/>}
//         {fastSpeed == null ? null : <FastSpeedMusicsContainer files={fastSpeed}/>}
//         {day == null ? null : <DayMusicsContainer files={day}/>}
//         {/*standalone == null ? null : <div className={`${nameInHtml}-${type}-gameStyle-standalone-musics-container musics-container`}>
//             <UnfinishedText>Standalone</UnfinishedText>
//             <div className={`${nameInHtml}-${type}-gameStyle-standalone-music-container music-container`}>{new ArrayAsCollection(standalone,).map(it =>
//                 <Track key={`Standalone game style music (${name} - ${it.titleName})`} value={it}/>,)
//             }</div>
//         </div>*/}
//         {night == null ? null : <NightMusicsContainer files={night}/>}
//         {/*yoshi == null ? null : <div className={`${nameInHtml}-${type}-gameStyle-yoshi-musics-container musics-container`}>
//             <Image file={getYoshiImage(gameStyle,)}/>
//             <div className={`${nameInHtml}-${type}-gameStyle-yoshi-music-container music-container`}>{new ArrayAsCollection(yoshi,).map(it =>
//                 <Track key={`Night game style music (${name} - ${it.titleName})`} value={it}/>,)
//             }</div>
//         </div>*/}
//         {/*underwater == null ? null : <div className={`${nameInHtml}-${type}-gameStyle-underwater-musics-container musics-container`}>
//             <div><ThemeImage reference={Themes.UNDERWATER}/></div>
//             <div className={`${nameInHtml}-${type}-gameStyle-underwater-music-container music-container`}>{new ArrayAsCollection(underwater,).map(it =>
//                 <Track key={`Underwater game style music (${name} - ${it.titleName})`} value={it}/>,)
//             }</div>
//         </div>*/}
//     </div>
// }

//endregion -------------------- Game style musics --------------------

//region -------------------- Theme musics --------------------

// interface ThemeMusicsProperties extends MusicsProperties<ArrayOf1To3<Tracks>> { readonly theme: Themes }
//
// /** @reactComponent */
// function ThemeMusicsContainer({theme, files,}: ThemeMusicsProperties,) {
//     const name = theme.englishName
//     const nameInHtml = theme.englishNameInHtml
//
//     return <div className={`${nameInHtml}-theme-musics-container theme-musics-container musics-container`}>
//         <div><ThemeImage reference={theme}/></div>
//         <div className={`${nameInHtml}-theme-music-container theme-music-container music-container`}>{
//             files.map(it =>
//                 <Track key={`Theme music (${name} - ${it.titleName})`} value={it}/>)
//         }</div>
//     </div>
// }
//

interface ThemeGroupedMusicsProperties extends GroupedMusicsProperties { readonly theme: Themes }

/** @reactComponent */
function ThemeGroupedMusicsContainer({theme, children,}: ThemeGroupedMusicsProperties,) {
    return <div className={`${theme.englishNameInHtml}-theme-musics-container theme-musics-container musics-container`}>
        <div><ThemeImage reference={theme}/></div>
        {children}
    </div>
}

//endregion -------------------- Theme musics --------------------

//region -------------------- Editor musics --------------------

type EditorMusicsProperties  = MusicsProperties<ArrayOf7<Tracks>>

/** @reactComponent */
function EditorMusicsContainer({files,}: EditorMusicsProperties,) {
    return <div className="editor-musics-container musics-container">
        <Image file={COURSE_THEME_IMAGE_FILE}/>
        <div className="editor-music-container music-container">{new ArrayAsCollection(files,).map(it =>
            <Track key={`Editor music (${it.titleName})`} value={it}/>,)
        }</div>
    </div>
}

//endregion -------------------- Editor musics --------------------
//region -------------------- Lesson editor musics --------------------

type LessonEditorMusicsProperties = MusicsProperties<ArrayOf4<Tracks>>

/** @reactComponent */
function LessonEditorMusicsContainer({files,}: LessonEditorMusicsProperties,) {
    return <div className="lessonEditor-musics-container musics-container">
        <UnfinishedText>Lesson editor</UnfinishedText>
        <div className="lessonEditor-music-container music-container">{new ArrayAsCollection(files,).map(it =>
            <Track key={`Lesson editor music (${it.titleName})`} value={it}/>,)
        }</div>
    </div>
}

//endregion -------------------- Lesson editor musics --------------------

//region -------------------- Sound effect musics --------------------

// interface SoundEffectMusicsProperties extends MusicsProperties<ArrayOf1To3<Tracks>> { readonly soundEffect: SoundEffects }
//
// /** @reactComponent */
// function SoundEffectMusicsContainer({soundEffect, files,}: SoundEffectMusicsProperties,) {
//     const name = soundEffect.name
//     const nameInHtml = soundEffect.englishNameInHtml
//
//     return <div className={`${nameInHtml}-soundEffect-musics-container soundEffect-musics-container musics-container`}>
//         <SoundEffectImage reference={soundEffect}/>
//         <div className={`${nameInHtml}-soundEffectMusics-music-container soundEffectMusics-music-container music-container`}>{new ArrayAsCollection(files,).map(it =>
//             <Track key={`Sound effect music (${name} - ${it.titleName})`} value={it}/>,)
//         }</div>
//     </div>
// }
//

// interface SoundEffectGroupedMusicsProperties extends GroupedMusicsProperties { readonly soundEffect: SoundEffects }
//
// /** @reactComponent */
// function SoundEffectGroupedMusicsContainer({soundEffect, children,}: SoundEffectGroupedMusicsProperties,) {
//     return <div className={`${soundEffect.englishNameInHtml}-soundEffect-musics-container soundEffect-musics-container musics-container`}>
//         <SoundEffectImage reference={soundEffect}/>
//         {children}
//     </div>
// }
//

type BonusBossAndFinalBossMusicsProperties = MusicsProperties<ArrayOf6<Tracks>>

/** @reactComponent */
function BonusBossAndFinalBossMusicsContainer({files,}: BonusBossAndFinalBossMusicsProperties,) {
    return <div className="bonusMusicAndBossMusicAndFinalBossMusic-musics-container musics-container small-images grid-3">
        <div/>
        <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
        <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

        <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
        <Track value={files[0]}/>
        <Track value={files[1]}/>

        <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
        <Track value={files[2]}/>
        <Track value={files[3]}/>

        <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
        <Track value={files[4]}/>
        <Track value={files[5]}/>
    </div>
}

//
// interface BonusWithYoshiBossAndFinalBossMusicsProperties extends MusicsProperties<ArrayOf8<Tracks>> {}
//
// /** @reactComponent */
// function BonusWithYoshiBossAndFinalBossMusicsContainer({files,}: BonusWithYoshiBossAndFinalBossMusicsProperties,) {
//     return <div className="bonusMusicWithYoshiAndBossMusicAndFinalBossMusic-musics-container musics-container grid-3">
//         <div/>
//         <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
//         <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>
//
//         <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
//         <Track value={files[0]}/>
//         <Track value={files[1]}/>
//
//         <Image file={getYoshiImage(GameStyles.NSMBU,)} className="yoshi-image"/>
//         <Track value={files[2]}/>
//         <Track value={files[3]}/>
//
//         <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
//         <Track value={files[4]}/>
//         <Track value={files[5]}/>
//
//         <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
//         <Track value={files[6]}/>
//         <Track value={files[7]}/>
//     </div>
// }

//endregion -------------------- Sound effect musics --------------------
//region -------------------- Peaceful musics --------------------

type PeacefulMusicsProperties = MusicsProperties<ArrayOf2<Tracks>>

/** @reactComponent */
function PeacefulMusicsContainer({files,}: PeacefulMusicsProperties,) {
    return <div className="peaceful-musics-container musics-container">
        <SoundEffectImage reference={SoundEffects.PEACEFUL}/>
        <div className="musics-container grid-2">
            <Image file={getLinkImage()}/>
            <Track value={files[0]}/>

            <Image file={getSmb2Image()}/>
            <Track value={files[1]}/>
        </div>
    </div>
}

//endregion -------------------- Peaceful musics --------------------
//region -------------------- Bonus musics --------------------

type BonusMusicsProperties = MusicsProperties<ArrayOf6<Tracks>>

/** @reactComponent */
function BonusMusicsContainer({files,}: BonusMusicsProperties,) {
    return <div className="bonusMusic-musics-container musics-container">
        <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
        <div className="musics-container grid-3">
            <div/>
            <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
            <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

            <div/>
            <Track value={files[0]}/>
            <Track value={files[1]}/>

            <Image file={getLinkImage()}/>
            <Track value={files[2]}/>
            <Track value={files[3]}/>

            <Image file={getSmb2Image()}/>
            <Track value={files[4]}/>
            <Track value={files[5]}/>
        </div>
    </div>
}

//endregion -------------------- Bonus musics --------------------
//region -------------------- Boss musics --------------------

type BossMusicsProperties = MusicsProperties<ArrayOf6<Tracks>>

/** @reactComponent */
function BossMusicsContainer({files,}: BossMusicsProperties,) {
    return <div className="bossMusic-musics-container musics-container">
        <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
        <div className="musics-container grid-3">
            <div/>
            <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
            <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

            <div/>
            <Track value={files[0]}/>
            <Track value={files[1]}/>

            <Image file={getLinkImage()} className="link-image"/>
            <Track value={files[2]}/>
            <Track value={files[3]}/>

            <Image file={getSmb2Image()} className="smb2-image"/>
            <Track value={files[4]}/>
            <Track value={files[5]}/>
        </div>
    </div>
}

//endregion -------------------- Boss musics --------------------
//region -------------------- Final boss musics --------------------

interface FinalBossMusicsProperties
    extends MusicsProperties<ArrayOf6<Tracks>> {

    /** Tell that the first 2 images are in {@link SMB3} */
    readonly asSmb3?: boolean

}

/** @reactComponent */
function FinalBossMusicsContainer({files, asSmb3 = false,}: FinalBossMusicsProperties,) {
    return <div className="finalBossMusic-musics-container musics-container">
        <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
        <div className="musics-container grid-3">
            <div/>
            <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
            <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

            {asSmb3 ? <div><GameStyleImage reference={GameStyles.SMB3}/></div> : <div/>}
            <Track value={files[0]}/>
            <Track value={files[1]}/>

            <Image file={getLinkImage()} className="link-image"/>
            <Track value={files[2]}/>
            <Track value={files[3]}/>

            <Image file={getSmb2Image()} className="smb2-image"/>
            <Track value={files[4]}/>
            <Track value={files[5]}/>
        </div>
    </div>
}

//endregion -------------------- Final boss musics --------------------

//region -------------------- Time musics --------------------

interface TimeMusicsProperties
    extends MusicsProperties<ArrayOf4<Tracks>>, ReactPropertiesWithOptionalChildren<ReactElement> {}

/** @reactComponent */
function TimeMusicsContainer({files, children,}: TimeMusicsProperties,) {
    return <div className="time-musics-container musics-container grid-3">
        {children ?? <div/>}
        <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
        <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

        <TimeImage reference={Times.DAY}/>
        <Track value={files[0]}/>
        <Track value={files[1]}/>

        <TimeImage reference={Times.NIGHT}/>
        <Track value={files[2]}/>
        <Track value={files[3]}/>
    </div>
}


type TimeWithLinkAndSmb2MusicsProperties = MusicsProperties<ArrayOf8<Tracks>>

/** @reactComponent */
function TimeWithLinkAndSmb2MusicsContainer({files,}: TimeWithLinkAndSmb2MusicsProperties,) {
    return <div className="time-musics-container musics-container grid-3">
        <div/>
        <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
        <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

        <TimeImage reference={Times.DAY}/>
        <Track value={files[0]}/>
        <Track value={files[1]}/>

        <TimeImage reference={Times.NIGHT}/>
        <Track value={files[2]}/>
        <Track value={files[3]}/>

        <Image file={getLinkImage()} className="link-image"/>
        <Track value={files[4]}/>
        <Track value={files[5]}/>

        <Image file={getSmb2Image()} className="smb2-image"/>
        <Track value={files[6]}/>
        <Track value={files[7]}/>
    </div>
}


interface TimeWithYoshiMusicsProperties
    extends MusicsProperties<ArrayOf6<Tracks>> {

    readonly gameStyle: | 'SMW' | 'NSMBU'

}

/** @reactComponent */
function TimeWithYoshiMusicsContainer({files, gameStyle,}: TimeWithYoshiMusicsProperties,) {
    return <div className={`timeWithYoshi-${gameStyle}-musics-container timeWithYoshi-musics-container musics-container grid-3`}>
        <div/>
        <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
        <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

        <TimeImage reference={Times.DAY}/>
        <Track value={files[0]}/>
        <Track value={files[1]}/>

        <TimeImage reference={Times.NIGHT}/>
        <Track value={files[2]}/>
        <Track value={files[3]}/>

        <Image file={getYoshiImage(gameStyle === 'SMW' ? GameStyles.SMW : GameStyles.NSMBU,)} className="yoshi-image"/>
        <Track value={files[4]}/>
        <Track value={files[5]}/>
    </div>
}


type TimeWithUnderwaterMusicsProperties = MusicsProperties<ArrayOf4<Tracks>>

/** @reactComponent */
function TimeWithUnderwaterMusicsContainer({files,}: TimeWithUnderwaterMusicsProperties,) {
    return <div className="timeWithUnderwater-musics-container musics-container grid-3">
        <div/>
        <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
        <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>

        <div/>
        <Track value={files[0]}/>
        <Track value={files[1]}/>

        <ThemeImage reference={Themes.UNDERWATER} isSmallPath/>
        <Track value={files[2]}/>
        <Track value={files[3]}/>
    </div>
}

//endregion -------------------- Time musics --------------------
//region -------------------- Day musics --------------------

type DayMusicsProperties = MusicsProperties<ArrayOf2<Tracks>>

/** @reactComponent */
function DayMusicsContainer({files,}: DayMusicsProperties,) {
    return <div className="day-musics-container musics-container grid-2">
        <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
        <Track value={files[0]}/>

        <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>
        <Track value={files[1]}/>
    </div>
}

//endregion -------------------- Day musics --------------------

//region -------------------- Link musics --------------------

// interface LinkMusicsProperties extends MusicsProperties<ArrayOf2<Tracks>> {}
//
// /** @reactComponent */
// function LinkMusicsContainer({files,}: LinkMusicsProperties,) {
//     return <div className="link-musics-container powerUp-musics-container musics-container">
//         <Image file={getLinkImage()}/>
//         <div className="link-music-container powerUp-music-container music-container">{new ArrayAsCollection(files,).map(it =>
//                 <Track key={`Link music (${it.titleName})`} value={it}/>,)
//         }</div>
//     </div>
// }

//endregion -------------------- Link musics --------------------
//region -------------------- Smb2 musics --------------------

// interface Smb2MusicsProperties extends MusicsProperties<ArrayOf2<Tracks>> {}
//
// /** @reactComponent */
// function Smb2MusicsContainer({files,}: Smb2MusicsProperties,) {
//     return <div className="smb2-musics-container powerUp-musics-container musics-container">
//         <Image file={getSmb2Image()}/>
//         <div className="smb2-music-container powerUp-music-container music-container">{new ArrayAsCollection(files,).map(it =>
//             <Track key={`SMB2 music (${it.titleName})`} value={it}/>,)
//         }</div>
//     </div>
// }

//endregion -------------------- Smb2 musics --------------------

//endregion -------------------- Musics --------------------
