import './MysteryMushroom.sound.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import StandaloneSound from 'util/file/sound/component/StandaloneSound'

interface MysteryMushroomJumpSoundProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

/** @reactComponent */
export default function MysteryMushroomJumpSound({value,}: MysteryMushroomJumpSoundProperties,) {
    const sound1 = value.jumpSound1
    if (sound1 == null)
        return null

    const sound2 = value.jumpSound2
    if (sound2 == null)
        return <div className="mysteryMushroom-sound mysteryMushroom-single-sound">
            <StandaloneSound file={sound1} title="jumpSound-1"/>
        </div>
    return <div className="mysteryMushroom-sound mysteryMushroom-dual-sound">
        <StandaloneSound file={sound1} title="jumpSound-1"/>
        <StandaloneSound file={sound2} title="jumpSound-2"/>
    </div>
}
