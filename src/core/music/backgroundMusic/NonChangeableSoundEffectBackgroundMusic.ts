import type {BackgroundMusic}                                     from 'core/music/backgroundMusic/BackgroundMusic'
import type {PossibleOther_FastMusic, PossibleOther_RegularMusic} from 'core/music/backgroundMusic/types'
import type {MusicSoundFile}                                      from 'core/music/file/MusicSoundFile'

/**
 * A "sound effect" "background music" that is not changeable depending on the {@link Themes theme}.
 *
 * It only has a regular & a fast variation.
 * @deprecated The use {@link Tracks} is used and better
 */
export interface NonChangeableSoundEffectBackgroundMusic<out MUSIC extends MusicSoundFile<PossibleOther_RegularMusic> = MusicSoundFile<PossibleOther_RegularMusic>,
    out FAST_MUSIC extends MusicSoundFile<PossibleOther_FastMusic> = MusicSoundFile<PossibleOther_FastMusic>, >
    extends BackgroundMusic<MUSIC, MUSIC, FAST_MUSIC, null, null, null, null, MUSIC, MUSIC, FAST_MUSIC, MUSIC, MUSIC, null, FAST_MUSIC, null, MUSIC, MUSIC, null, FAST_MUSIC, null, MUSIC, MUSIC, null, FAST_MUSIC, null> {}
