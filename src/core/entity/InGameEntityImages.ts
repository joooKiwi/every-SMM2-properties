import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import type {Array, EmptyString}                 from '@joookiwi/type'
import {forEachByArray}                          from '@joookiwi/collection'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {InGameImageFile}                      from 'core/entity/file/EntityImageFile'
import type {PossibleAcronym_InFile_SMM1}          from 'core/gameStyle/GameStyles.types'
import type {InGameImage_Regular}                  from 'core/entity/images/inGame/InGameImage_Regular'
import type {ClassWithImage}                       from 'util/ClassWithImage'

import {Entities}                     from 'core/entity/Entities'
import {inGameImage}                  from 'core/entity/file/fileCreator'
import {EmptyInGameImage_Regular}     from 'core/entity/images/inGame/EmptyInGameImage_Regular'
import {InGameImage_RegularContainer} from 'core/entity/images/inGame/InGameImage_Regular.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'
import {Empty}                        from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY
import NSMBU =       GameStyles.NSMBU
import SMB =         GameStyles.SMB
import SMB3 =        GameStyles.SMB3
import SMW =         GameStyles.SMW
import SM3DW =       GameStyles.SM3DW

/**
 * An {@link InGameEntityImages} class made to hold an {@link InGameImage_Regular}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class InGameEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<InGameImage_Regular> {

    //region -------------------- Sub class --------------------

    /** A subclass of an {@link InGameEntityImages} to hold a non-existant {@link InGameImage_Regular} ({@link EmptyInGameImage_Regular}) */
    private static readonly Null = class Null_InGameEntityImages extends InGameEntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyInGameImage_Regular.get
        }

        public override get image(): EmptyInGameImage_Regular { return this.#image }

    }

    /** An abstract subclass of an {@link InGameEntityImages} to hold a specific {@link PossibleEnglishName} */
    private static readonly Existant = (() => {
        abstract class Existant_InGameEntityImages<const NAME extends PossibleEnglishName,
            const IMAGE_FILE extends InGameImageFile, >
            extends InGameEntityImages {

            readonly #englishName
            #image?: InGameImage_Regular<IMAGE_FILE>

            protected constructor(englishName: NAME,) {
                super()
                this.#englishName = englishName
            }

            public override get englishName(): NAME { return this.#englishName }

            public override get image(): InGameImage_Regular<IMAGE_FILE> { return this.#image ??= new InGameImage_RegularContainer(this._createImageFiles(),) }

            protected abstract _createImageFiles(): Array<readonly [GameStyles, IMAGE_FILE,]>

        }

        return Existant_InGameEntityImages
    })()

    //region -------------------- Sub class (single game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile} in only {@link SMB} */
    private static readonly ExistantAs1InOnlySmb = class ExistantAs1InOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            return [[SMB, inGameImage(this, this.folderName, this.fileName,),],] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 3 {@link InGameImageFile} in only {@link SMB} */
    private static readonly ExistantAs3InOnlySmb = class ExistantAs3InOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMB, inGameImage(this, folderName, this.fileName1,),],
                [SMB, inGameImage(this, folderName, this.fileName2,),],
                [SMB, inGameImage(this, folderName, this.fileName3,),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 4 {@link InGameImageFile} in only {@link SMB} */
    private static readonly ExistantAs4InOnlySmb = class ExistantAs4InOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMB, inGameImage(this, folderName, this.fileName1,),],
                [SMB, inGameImage(this, folderName, this.fileName2,),],
                [SMB, inGameImage(this, folderName, this.fileName3,),],
                [SMB, inGameImage(this, folderName, this.fileName4,),],
            ] as const
        }

    }


    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile} in only {@link SMW} */
    private static readonly ExistantAs1InOnlySmw = class ExistantAs1InOnlySmw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            return [[SMW, inGameImage(this, this.folderName, this.fileName,),],] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 2 {@link InGameImageFile} in only {@link SMW} */
    private static readonly ExistantAs2InOnlySmw = class ExistantAsTwoInOnlySmw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMW, inGameImage(this, folderName, this.fileName1,),],
                [SMW, inGameImage(this, folderName, this.fileName2,),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 4 {@link InGameImageFile} in only {@link SMW} */
    private static readonly ExistantAs4InOnlySmw = class ExistantAs4InOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMW, inGameImage(this, folderName, this.fileName1,),],
                [SMW, inGameImage(this, folderName, this.fileName2,),],
                [SMW, inGameImage(this, folderName, this.fileName3,),],
                [SMW, inGameImage(this, folderName, this.fileName4,),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 6 {@link InGameImageFile} in only {@link SMW} */
    private static readonly ExistantAs6InOnlySmw = class ExistantAs6InOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,
                           private readonly fileName4: FILE_NAME, private readonly fileName5: FILE_NAME, private readonly fileName6: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMW, inGameImage(this, folderName, this.fileName1,),],
                [SMW, inGameImage(this, folderName, this.fileName2,),],
                [SMW, inGameImage(this, folderName, this.fileName3,),],
                [SMW, inGameImage(this, folderName, this.fileName4,),],
                [SMW, inGameImage(this, folderName, this.fileName5,),],
                [SMW, inGameImage(this, folderName, this.fileName6,),],
            ] as const
        }

    }


    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as an undetermined amount of {@link InGameImageFile} in only {@link NSMBU} */
    private static readonly ExistantInOnlyNsmbu = class ExistantInOnlyNsmbu_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileNames: Array<FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const folderName = this.folderName
            const fileNames = this.fileNames

            const imageFiles = new Array<readonly[GameStyles, InGameImageFile<FOLDER_NAME, FILE_NAME>,]>(fileNames.length,)
            forEachByArray(fileNames, (it, i,) => imageFiles[i] = [SMB, inGameImage(this, folderName, it,),],)
            return imageFiles
        }

    }


    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 5 {@link InGameImageFile} in only {@link SM3DW} */
    private static readonly ExistantAs5InOnlySm3dw = class ExistantAs5InOnlySm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,
                           private readonly fileName4: FILE_NAME, private readonly fileName5: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SM3DW, inGameImage(this, folderName, this.fileName1,),],
                [SM3DW, inGameImage(this, folderName, this.fileName2,),],
                [SM3DW, inGameImage(this, folderName, this.fileName3,),],
                [SM3DW, inGameImage(this, folderName, this.fileName4,),],
                [SM3DW, inGameImage(this, folderName, this.fileName5,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (single game style) --------------------
    //region -------------------- Sub class (1 image) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile} in only {@link SMB} with 1 alternate {@link InGameImageFile} */
    private static readonly ExistantAs1InOnlySmbWithAlternate = class ExistantAs1InOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName: FILE_NAME,
                           private readonly folderNameAlt: FOLDER_NAME, private readonly fileNameAlt: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            return [
                [SMB, inGameImage(this, this.folderName, this.fileName,),],
                [SMB, inGameImage(this, this.folderNameAlt, this.fileNameAlt,),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile} in only {@link SMB3} with 1 alternate {@link InGameImageFile} */
    private static readonly ExistantAs1InOnlySmb3WithAlternate = class ExistantAs1InOnlySmb3_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName: FILE_NAME,
                           private readonly folderNameAlt: FOLDER_NAME, private readonly fileNameAlt: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            return [
                [SMB3, inGameImage(this, this.folderName,    this.fileName,),],
                [SMB3, inGameImage(this, this.folderNameAlt, this.fileNameAlt,),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile} in only {@link SMW} with 1 alternate {@link InGameImageFile} */
    private static readonly ExistantAs1InOnlySmwWithAlternate = class ExistantAs1InOnlySmb3_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName: FILE_NAME,
                           private readonly folderNameAlt: FOLDER_NAME, private readonly fileNameAlt: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            return [
                [SMW, inGameImage(this, this.folderName,    this.fileName,),],
                [SMW, inGameImage(this, this.folderNameAlt, this.fileNameAlt,),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile} in only {@link NSMBU} with 1 alternate {@link InGameImageFile} */
    private static readonly ExistantAs1InOnlyNsmbuWithAlternate = class ExistantAs1InOnlySmb3_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName: FILE_NAME,
                           private readonly folderNameAlt: FOLDER_NAME, private readonly fileNameAlt: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            return [
                [NSMBU, inGameImage(this, this.folderName,    this.fileName,),],
                [NSMBU, inGameImage(this, this.folderNameAlt, this.fileNameAlt,),],
            ] as const
        }

    }


    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 1 only {@link InGameImageFile} in only {@link SMB}, {@link SMB3} and {@link NSMBU}
     */
    private static readonly ExistantAs1InNotSmwSm3dw = class ExistantAs1InNotSmwSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3' | 'WU'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const fileName = this.fileName
            const endingFolderName = this.endingFolderName
            return [
                [SMB,   inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3,  inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, fileName,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 1 only {@link InGameImageFile} in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAs1InNotNsmbuSm3dw = class ExistantAs1InNotNsmbuSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const fileName = this.fileName
            const endingFolderName = this.endingFolderName
            return [
                [SMB,  inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3, inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,  inGameImage(this, `MW ${endingFolderName}`, fileName,),],
            ] as const
        }

    }


    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 1 only {@link InGameImageFile} in {@link SMB}, {@link SMB3}, {@link SMW} and {@link NSMBU}
     */
    private static readonly ExistantAs1InNotSm3dw = class ExistantAs1InOnlySmb_InNotSm3dwInGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${PossibleAcronym_InFile_SMM1} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const fileName = this.fileName
            const endingFolderName = this.endingFolderName
            return [
                [SMB,   inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3,  inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,   inGameImage(this, `MW ${endingFolderName}`, fileName,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, fileName,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 1 {@link InGameImageFile} in {@link SMB}, {@link SMB3}, {@link SMW}
     * and 1 different {@link InGameImageFile} in {@link NSMBU}
     */
    private static readonly ExistantAs1InNotSm3dwButDifferentNsmbu = class ExistantAs1InOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName: FILE_NAME,
                           private readonly nsmbuFileName: NSMBU_FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const fileName = this.fileName
            const endingFolderName = this.endingFolderName
            return [
                [SMB,   inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3,  inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,   inGameImage(this, `MW ${endingFolderName}`, fileName,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, this.nsmbuFileName,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 1 {@link InGameImageFile} in {@link SMB}, {@link SMB3}
     * and 2 {@link InGameImageFile} in {@link SMW}
     */
    private static readonly ExistantAs1InNotNsmbuSm3dwAnd2Smw = class ExistantAs1InNotNsmbuSm3dwAnd2Smw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const SMW_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName: FILE_NAME,
                           private readonly smwFileName1: SMW_FILE_NAME, private readonly smwFileName2: SMW_FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const fileName = this.fileName
            const endingFolderName = this.endingFolderName
            const folderName_smw = `MW ${endingFolderName}` as const

            return [
                [SMB,  inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3, inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,  inGameImage(this, folderName_smw,           this.smwFileName1,),],
                [SMW,  inGameImage(this, folderName_smw,           this.smwFileName2,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 1 {@link InGameImageFile} in {@link SMB}, {@link SMB3}, {@link SMW}
     * and 2 {@link InGameImageFile} in {@link NSMBU}
     * and 1 different {@link InGameImageFile} in {@link SM3DW}
     */
    private static readonly ExistantAs1And2NsmbuButDifferentSm3dw = class ExistantAs1InOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string,
        const SM3DW_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>
                                                  | InGameImageFile<`3W ${ENDING_FOLDER_NAME}`, SM3DW_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName: FILE_NAME,
                           private readonly nsmbuFileName1: NSMBU_FILE_NAME, private readonly nsmbuFileName2: NSMBU_FILE_NAME, private readonly sm3dwFileName: SM3DW_FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const fileName = this.fileName
            const endingFolderName = this.endingFolderName
            const folderName_nsmbu = `WU ${endingFolderName}` as const

            return [
                [SMB,   inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3,  inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,   inGameImage(this, `MW ${endingFolderName}`, fileName,),],
                [NSMBU, inGameImage(this, folderName_nsmbu,         this.nsmbuFileName1,),],
                [NSMBU, inGameImage(this, folderName_nsmbu,         this.nsmbuFileName2,),],
                [SM3DW, inGameImage(this, `3W ${endingFolderName}`, this.sm3dwFileName,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (1 image) --------------------
    //region -------------------- Sub class (2 images) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 2 {@link InGameImageFile} in only {@link SMW} with 1 alternate {@link InGameImage_Regular} */
    private static readonly ExistantAs2InOnlySmwWith1Alternate = class ExistantAs2InOnlySmw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly folderNameAlt: FOLDER_NAME, private readonly fileNameAlt: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMW, inGameImage(this, folderName,         this.fileName1,),],
                [SMW, inGameImage(this, folderName,         this.fileName2,),],
                [SMW, inGameImage(this, this.folderNameAlt, this.fileNameAlt,),],
            ] as const
        }

    }


    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 2 {@link InGameImageFile} in only {@link SMB} and {@link SMB3}
     */
    private static readonly ExistantAs2InOnlySmbAndSmb3 = class ExistantAs2InOnlySmbSmb3_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2

            return [
                [SMB,  inGameImage(this, folderName_smb, fileName1,),],
                [SMB,  inGameImage(this, folderName_smb, fileName2,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName2,),],
            ] as const
        }

    }


    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 2 {@link InGameImageFile} in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAs2InNotNsmbuSm3dw = class ExistantAs2InNotNsmbuSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            return [
                [SMB,  inGameImage(this, folderName_smb, fileName1,),],
                [SMB,  inGameImage(this, folderName_smb, fileName2,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName2,),],
                [SMW,  inGameImage(this, folderName_smw, fileName1,),],
                [SMW,  inGameImage(this, folderName_smw, fileName2,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 2 {@link InGameImageFile} in only {@link SMB}, {@link SMB3} and {@link NSMBU}
     */
    private static readonly ExistantAs2InNotSmwSm3dw = class ExistantAs2InNotNsmbuSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly [GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(4 + fileNames_nsmbu.length,)

            imageFiles[0] = [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] = [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] = [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[3] = [SMB3, inGameImage(this, folderName_smb3, fileName2,),]

            let index = 5
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 2 {@link InGameImageFile} in only {@link SMB}, {@link SMB3} and {@link SMW}
     * plus an undetermined amount of {@link InGameImageFile} in {@link NSMBU}
     */
    private static readonly ExistantAs2InNotSm3dw = class ExistantAs2InNotSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly [GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(6 + fileNames_nsmbu.length,)

            imageFiles[0] = [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] = [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] = [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[3] = [SMB3, inGameImage(this, folderName_smb3, fileName2,),]
            imageFiles[4] = [SMW,  inGameImage(this, folderName_smw,  fileName1,),]
            imageFiles[5] = [SMW,  inGameImage(this, folderName_smw,  fileName2,),]

            let index = 5
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 2 {@link InGameImageFile} in {@link SMB}, {@link SMB3} and {@link SMW}
     * plus 1 {@link InGameImageFile} in {@link NSMBU}
     */
    private static readonly ExistantAs2InNotSm3dwAnd1Nsmbu = class ExistantAs2InNotSm3dwAnd1Nsmbu_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly nsmbuFileName: NSMBU_FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            return [
                [SMB,   inGameImage(this, folderName_smb, fileName1,),],
                [SMB,   inGameImage(this, folderName_smb, fileName2,),],
                [SMB3,  inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3,  inGameImage(this, folderName_smb3, fileName2,),],
                [SMW,   inGameImage(this, folderName_smw, fileName1,),],
                [SMW,   inGameImage(this, folderName_smw, fileName2,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, this.nsmbuFileName,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 2 {@link InGameImageFile} in {@link SMB}, {@link SMB3} and {@link SMW}
     * plus 2 {@link InGameImageFile} in {@link NSMBU}
     */
    private static readonly ExistantAs2InNotSm3dwAnd2Nsmbu = class ExistantAs2InNotSm3dwAnd1Nsmbu_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly nsmbuFileName1: NSMBU_FILE_NAME, private readonly nsmbuFileName2: NSMBU_FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            return [
                [SMB,   inGameImage(this, folderName_smb,   fileName1,),],
                [SMB,   inGameImage(this, folderName_smb,   fileName2,),],
                [SMB3,  inGameImage(this, folderName_smb3,  fileName1,),],
                [SMB3,  inGameImage(this, folderName_smb3,  fileName2,),],
                [SMW,   inGameImage(this, folderName_smw,   fileName1,),],
                [SMW,   inGameImage(this, folderName_smw,   fileName2,),],
                [NSMBU, inGameImage(this, folderName_nsmbu, this.nsmbuFileName1,),],
                [NSMBU, inGameImage(this, folderName_nsmbu, this.nsmbuFileName2,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (2 images) --------------------
    //region -------------------- Sub class (3 images) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 3 {@link InGameImageFile} in only {@link SMB} with 1 alternate {@link InGameImage_Regular} */
    private static readonly ExistantAs3InOnlySmbWith1Alternate = class ExistantAs3InOnlySmbWith1Alternate_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,
                           private readonly folderNameAlt: FOLDER_NAME, private readonly fileNameAlt: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMB, inGameImage(this, folderName,         this.fileName1,),],
                [SMB, inGameImage(this, folderName,         this.fileName2,),],
                [SMB, inGameImage(this, folderName,         this.fileName3,),],
                [SMB, inGameImage(this, this.folderNameAlt, this.fileNameAlt,),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 3 {@link InGameImageFile} in only {@link SMB3} with an alternate {@link InGameImage_Regular} */
    private static readonly ExistantAs3InOnlySmb3With1Alternate = class ExistantAs3InOnlySmb3With1Alternate_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,
                           private readonly folderNameAlt: FOLDER_NAME, private readonly fileNameAlt: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMB3, inGameImage(this, folderName,         this.fileName1,),],
                [SMB3, inGameImage(this, folderName,         this.fileName2,),],
                [SMB3, inGameImage(this, folderName,         this.fileName3,),],
                [SMB3, inGameImage(this, this.folderNameAlt, this.fileNameAlt,),],
            ] as const
        }

    }


    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 3 {@link InGameImageFile} in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAs3InNotNsmbuSm3dw = class ExistantAs3InNotNsmbuSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            return [
                [SMB,  inGameImage(this, folderName_smb,  fileName1,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName2,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName3,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName2,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName3,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName1,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName2,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName3,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 3 {@link InGameImageFile} in {@link SMB}, {@link SMB3} and {@link SMW}
     * and an unspecified amount of {@link InGameImageFile} on {@link NSMBU}
     */
    private static readonly ExistantAs3InNotSm3dw = class ExistantAs3InNotSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,
                           private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>]>(9 + fileNames_nsmbu.length,)
            imageFiles[0] = [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] = [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] = [SMB,  inGameImage(this, folderName_smb,  fileName3,),]
            imageFiles[3] = [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[4] = [SMB3, inGameImage(this, folderName_smb3, fileName2,),]
            imageFiles[5] = [SMB3, inGameImage(this, folderName_smb3, fileName3,),]
            imageFiles[6] = [SMW,  inGameImage(this, folderName_smw,  fileName1,),]
            imageFiles[7] = [SMW,  inGameImage(this, folderName_smw,  fileName2,),]
            imageFiles[8] = [SMW,  inGameImage(this, folderName_smw,  fileName3,),]

            let index = 8
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (3 images) --------------------
    //region -------------------- Sub class (4 images) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 3 {@link InGameImageFile} in only {@link NSMBU} with an alternate {@link InGameImage_Regular} */
    private static readonly ExistantAs4InOnlyNsmbuWith1Alternate = class ExistantAs4InOnlyNsmbuWith1Alternate_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME,
                           private readonly folderNameAlt: FOLDER_NAME, private readonly fileNameAlt: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [NSMBU, inGameImage(this, folderName,         this.fileName1,),],
                [NSMBU, inGameImage(this, folderName,         this.fileName2,),],
                [NSMBU, inGameImage(this, folderName,         this.fileName3,),],
                [NSMBU, inGameImage(this, folderName,         this.fileName4,),],
                [NSMBU, inGameImage(this, this.folderNameAlt, this.fileNameAlt,),],
            ] as const
        }

    }


    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 4 {@link InGameImageFile} in {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAs4InNotNsmbuSm3dw = class ExistantAs4InNotNsmbuSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileName4 = this.fileName4
            return [
                [SMB,  inGameImage(this, folderName_smb,  fileName1,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName2,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName3,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName4,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName2,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName3,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName4,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName1,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName2,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName3,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName4,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 4 {@link InGameImageFile} in {@link SMB3}, {@link SMW} and {@link NSMBU}
     */
    private static readonly ExistantAs4InNotSmbSm3dw = class ExistantAs4InNotNsmbuSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M3' | 'MW' | 'WU'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileName4 = this.fileName4
            return [
                [SMB3,  inGameImage(this, folderName_smb3,  fileName1,),],
                [SMB3,  inGameImage(this, folderName_smb3,  fileName2,),],
                [SMB3,  inGameImage(this, folderName_smb3,  fileName3,),],
                [SMB3,  inGameImage(this, folderName_smb3,  fileName4,),],
                [SMW,   inGameImage(this, folderName_smw,   fileName1,),],
                [SMW,   inGameImage(this, folderName_smw,   fileName2,),],
                [SMW,   inGameImage(this, folderName_smw,   fileName3,),],
                [SMW,   inGameImage(this, folderName_smw,   fileName4,),],
                [NSMBU, inGameImage(this, folderName_nsmbu, fileName1,),],
                [NSMBU, inGameImage(this, folderName_nsmbu, fileName2,),],
                [NSMBU, inGameImage(this, folderName_nsmbu, fileName3,),],
                [NSMBU, inGameImage(this, folderName_nsmbu, fileName4,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 4 {@link InGameImageFile} in {@link SMB}, {@link SMB3} and {@link SMW}
     * and an unspecified amount of {@link InGameImageFile} on {@link NSMBU}
     */
    private static readonly ExistantAs4InNotSm3dw = class ExistantAs4InNotSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,
                           private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME,
                           private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileName4 = this.fileName4
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly [GameStyles,
                | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(12 + fileNames_nsmbu.length,)

            imageFiles[0] =  [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] =  [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] =  [SMB,  inGameImage(this, folderName_smb,  fileName3,),]
            imageFiles[3] =  [SMB,  inGameImage(this, folderName_smb,  fileName4,),]
            imageFiles[4] =  [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[5] =  [SMB3, inGameImage(this, folderName_smb3, fileName2,),]
            imageFiles[6] =  [SMB3, inGameImage(this, folderName_smb3, fileName3,),]
            imageFiles[7] =  [SMB3, inGameImage(this, folderName_smb3, fileName4,),]
            imageFiles[8] =  [SMW,  inGameImage(this, folderName_smw,  fileName1,),]
            imageFiles[9] =  [SMW,  inGameImage(this, folderName_smw,  fileName2,),]
            imageFiles[10] = [SMW,  inGameImage(this, folderName_smw,  fileName3,),]
            imageFiles[11] = [SMW,  inGameImage(this, folderName_smw,  fileName4,),]

            let index = 11
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (4 images) --------------------
    //region -------------------- Sub class (5 images) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 5 {@link InGameImageFile} in {@link SMB}, {@link SMB3} and {@link SMW}
     * and an unspecified amount of {@link InGameImageFile} on {@link NSMBU}
     */
    private static readonly ExistantAs5InNotSm3dw = class ExistantAs5InNotSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,
                           private readonly fileName4: FILE_NAME, private readonly fileName5: FILE_NAME,
                           private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileName4 = this.fileName4
            const fileName5 = this.fileName5
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly [GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(15 + fileNames_nsmbu.length,)

            imageFiles[0] =  [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] =  [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] =  [SMB,  inGameImage(this, folderName_smb,  fileName3,),]
            imageFiles[3] =  [SMB,  inGameImage(this, folderName_smb,  fileName4,),]
            imageFiles[4] =  [SMB,  inGameImage(this, folderName_smb,  fileName5,),]
            imageFiles[5] =  [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[6] =  [SMB3, inGameImage(this, folderName_smb3, fileName2,),]
            imageFiles[7] =  [SMB3, inGameImage(this, folderName_smb3, fileName3,),]
            imageFiles[8] =  [SMB3, inGameImage(this, folderName_smb3, fileName4,),]
            imageFiles[9] =  [SMB3, inGameImage(this, folderName_smb3, fileName5,),]
            imageFiles[10] = [SMW,  inGameImage(this, folderName_smw,  fileName1,),]
            imageFiles[11] = [SMW,  inGameImage(this, folderName_smw,  fileName2,),]
            imageFiles[12] = [SMW,  inGameImage(this, folderName_smw,  fileName3,),]
            imageFiles[13] = [SMW,  inGameImage(this, folderName_smw,  fileName4,),]
            imageFiles[14] = [SMW,  inGameImage(this, folderName_smw,  fileName5,),]

            let index = 14
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }


    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 5 {@link InGameImageFile} in {@link SMB}, {@link SMB3} and {@link SMW}
     * and 1 {@link InGameImageFile} in {@link InGameImageFile} on {@link NSMBU} and {@link SM3DW}
     */
    private static readonly ExistantAs5WithSameSmbSmb3SmwAnd1NsmbuSm3dw = class ExistantAs5WithSameSmbSmb3SmwAnd1NsmbuSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_SMB3_SMW_FILE_NAME extends string,
        const NSMBU_SM3DW_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, SMB_SMB3_SMW_FILE_NAME>
                                                  | InGameImageFile<`${| 'WU' | '3W'} ${ENDING_FOLDER_NAME}`, NSMBU_SM3DW_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: SMB_SMB3_SMW_FILE_NAME, private readonly fileName2: SMB_SMB3_SMW_FILE_NAME, private readonly fileName3: SMB_SMB3_SMW_FILE_NAME,
                           private readonly fileName4: SMB_SMB3_SMW_FILE_NAME, private readonly fileName5: SMB_SMB3_SMW_FILE_NAME,
                           private readonly nsmbuSm3dwFileName: NSMBU_SM3DW_FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileName1_smbSmb3Smw = this.fileName1
            const fileName2_smbSmb3Smw = this.fileName2
            const fileName3_smbSmb3Smw = this.fileName3
            const fileName4_smbSmb3Smw = this.fileName4
            const fileName5_smbSmb3Smw = this.fileName5
            const fileName_nsmbuSm3dw = this.nsmbuSm3dwFileName

            return [
                [SMB,   inGameImage(this, folderName_smb,            fileName1_smbSmb3Smw,),],
                [SMB,   inGameImage(this, folderName_smb,            fileName2_smbSmb3Smw,),],
                [SMB,   inGameImage(this, folderName_smb,            fileName3_smbSmb3Smw,),],
                [SMB,   inGameImage(this, folderName_smb,            fileName4_smbSmb3Smw,),],
                [SMB,   inGameImage(this, folderName_smb,            fileName5_smbSmb3Smw,),],
                [SMB3,  inGameImage(this, folderName_smb3,           fileName1_smbSmb3Smw,),],
                [SMB3,  inGameImage(this, folderName_smb3,           fileName2_smbSmb3Smw,),],
                [SMB3,  inGameImage(this, folderName_smb3,           fileName3_smbSmb3Smw,),],
                [SMB3,  inGameImage(this, folderName_smb3,           fileName4_smbSmb3Smw,),],
                [SMB3,  inGameImage(this, folderName_smb3,           fileName5_smbSmb3Smw,),],
                [SMW,   inGameImage(this, folderName_smw,            fileName1_smbSmb3Smw,),],
                [SMW,   inGameImage(this, folderName_smw,            fileName2_smbSmb3Smw,),],
                [SMW,   inGameImage(this, folderName_smw,            fileName3_smbSmb3Smw,),],
                [SMW,   inGameImage(this, folderName_smw,            fileName4_smbSmb3Smw,),],
                [SMW,   inGameImage(this, folderName_smw,            fileName5_smbSmb3Smw,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`,  fileName_nsmbuSm3dw,),],
                [SM3DW, inGameImage(this, `3W ${endingFolderName}`,  fileName_nsmbuSm3dw,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (5 images) --------------------
    //region -------------------- Sub class (6 images) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 6 {@link InGameImageFile} in only {@link SMB} and {@link SMB3}
     * plus an undetermined amount of {@link InGameImageFile} in {@link NSMBU}
     */
    private static readonly ExistantAs6InNotSmw = class ExistantAs6InNotSmw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,
                           private readonly fileName4: FILE_NAME, private readonly fileName5: FILE_NAME, private readonly fileName6: FILE_NAME,
                           private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileName4 = this.fileName4
            const fileName5 = this.fileName5
            const fileName6 = this.fileName6
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly [GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(12 + fileNames_nsmbu.length,)

            imageFiles[0] =  [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] =  [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] =  [SMB,  inGameImage(this, folderName_smb,  fileName3,),]
            imageFiles[3] =  [SMB,  inGameImage(this, folderName_smb,  fileName4,),]
            imageFiles[4] =  [SMB,  inGameImage(this, folderName_smb,  fileName5,),]
            imageFiles[5] =  [SMB,  inGameImage(this, folderName_smb,  fileName6,),]
            imageFiles[6] =  [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[7] =  [SMB3, inGameImage(this, folderName_smb3, fileName2,),]
            imageFiles[8] =  [SMB3, inGameImage(this, folderName_smb3, fileName3,),]
            imageFiles[9] =  [SMB3, inGameImage(this, folderName_smb3, fileName4,),]
            imageFiles[10] = [SMB3, inGameImage(this, folderName_smb3, fileName5,),]
            imageFiles[11] = [SMB3, inGameImage(this, folderName_smb3, fileName6,),]

            let index = 11
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 6 {@link InGameImageFile} in only {@link SMB}, {@link SMB3} and {@link SMW}
     * plus an undetermined amount of {@link InGameImageFile} in {@link NSMBU}
     */
    private static readonly ExistantAs6InNotSm3dw = class ExistantAs6InNotSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,
                           private readonly fileName4: FILE_NAME, private readonly fileName5: FILE_NAME, private readonly fileName6: FILE_NAME,
                           private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileName4 = this.fileName4
            const fileName5 = this.fileName5
            const fileName6 = this.fileName6
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly [GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(18 + fileNames_nsmbu.length,)

            imageFiles[0] =  [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] =  [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] =  [SMB,  inGameImage(this, folderName_smb,  fileName3,),]
            imageFiles[3] =  [SMB,  inGameImage(this, folderName_smb,  fileName4,),]
            imageFiles[4] =  [SMB,  inGameImage(this, folderName_smb,  fileName5,),]
            imageFiles[5] =  [SMB,  inGameImage(this, folderName_smb,  fileName6,),]
            imageFiles[6] =  [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[7] =  [SMB3, inGameImage(this, folderName_smb3, fileName2,),]
            imageFiles[8] =  [SMB3, inGameImage(this, folderName_smb3, fileName3,),]
            imageFiles[9] =  [SMB3, inGameImage(this, folderName_smb3, fileName4,),]
            imageFiles[10] = [SMB3, inGameImage(this, folderName_smb3, fileName5,),]
            imageFiles[11] = [SMB3, inGameImage(this, folderName_smb3, fileName6,),]
            imageFiles[12] = [SMW,  inGameImage(this, folderName_smw,  fileName1,),]
            imageFiles[13] = [SMW,  inGameImage(this, folderName_smw,  fileName2,),]
            imageFiles[14] = [SMW,  inGameImage(this, folderName_smw,  fileName3,),]
            imageFiles[15] = [SMW,  inGameImage(this, folderName_smw,  fileName4,),]
            imageFiles[16] = [SMW,  inGameImage(this, folderName_smw,  fileName5,),]
            imageFiles[17] = [SMW,  inGameImage(this, folderName_smw,  fileName6,),]

            let index = 17
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (6 images) --------------------
    //region -------------------- Sub class (7 images) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular}
     * as 7 {@link InGameImageFile} in {@link SMB}, {@link SMB3} and {@link SMW}
     * and an unspecified amount of {@link InGameImageFile} on {@link NSMBU}
     */
    private static readonly ExistantAs7InNotSm3dw = class ExistantAs7InNotSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,
                           private readonly fileName4: FILE_NAME, private readonly fileName5: FILE_NAME, private readonly fileName6: FILE_NAME,
                           private readonly fileName7: FILE_NAME,
                           private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileName4 = this.fileName4
            const fileName5 = this.fileName5
            const fileName6 = this.fileName6
            const fileName7 = this.fileName7
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly [GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(21 + fileNames_nsmbu.length,)

            imageFiles[0] =  [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] =  [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] =  [SMB,  inGameImage(this, folderName_smb,  fileName3,),]
            imageFiles[3] =  [SMB,  inGameImage(this, folderName_smb,  fileName4,),]
            imageFiles[4] =  [SMB,  inGameImage(this, folderName_smb,  fileName5,),]
            imageFiles[5] =  [SMB,  inGameImage(this, folderName_smb,  fileName6,),]
            imageFiles[6] =  [SMB,  inGameImage(this, folderName_smb,  fileName7,),]
            imageFiles[7] =  [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[8] =  [SMB3, inGameImage(this, folderName_smb3, fileName2,),]
            imageFiles[9] =  [SMB3, inGameImage(this, folderName_smb3, fileName3,),]
            imageFiles[10] = [SMB3, inGameImage(this, folderName_smb3, fileName4,),]
            imageFiles[11] = [SMB3, inGameImage(this, folderName_smb3, fileName5,),]
            imageFiles[12] = [SMB3, inGameImage(this, folderName_smb3, fileName6,),]
            imageFiles[13] = [SMB3, inGameImage(this, folderName_smb3, fileName7,),]
            imageFiles[14] = [SMW,  inGameImage(this, folderName_smw,  fileName1,),]
            imageFiles[15] = [SMW,  inGameImage(this, folderName_smw,  fileName2,),]
            imageFiles[16] = [SMW,  inGameImage(this, folderName_smw,  fileName3,),]
            imageFiles[17] = [SMW,  inGameImage(this, folderName_smw,  fileName4,),]
            imageFiles[18] = [SMW,  inGameImage(this, folderName_smw,  fileName5,),]
            imageFiles[19] = [SMW,  inGameImage(this, folderName_smw,  fileName6,),]
            imageFiles[20] = [SMW,  inGameImage(this, folderName_smw,  fileName7,),]

            let index = 20
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (7 images) --------------------
    //region -------------------- Sub class (no variant) --------------------

    private static readonly ExistantAsNoVariant = class ExistantAsNoVariant_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_FILE_NAME extends string,
        const SMB3_FILE_NAME extends string,
        const SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                                                  | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}`, SMB3_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly smbFileNames: Array<SMB_FILE_NAME>, private readonly smb3FileNames: Array<SMB3_FILE_NAME>,
                           private readonly smwFileNames: Array<SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileNames_smb = this.smbFileNames
            const fileNames_smb3 = this.smb3FileNames
            const fileNames_smw = this.smwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                    | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}`, SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNames_smb.length + fileNames_smb3.length + fileNames_smw.length + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smb, it => imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),],)

            forEachByArray(fileNames_smb3, it => imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),],)

            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsNoVariantWith1AlternateFile = class ExistantAsNoVariantWith1AlternateFile_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_FILE_NAME extends string,
        const SMB3_FILE_NAME extends string,
        const SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                                                  | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}`, SMB3_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName1: ENDING_FOLDER_NAME, private readonly endingFolderName2: ENDING_FOLDER_NAME,
                           private readonly smbFileNames1: Array<SMB_FILE_NAME>, private readonly smbFileName2: SMB_FILE_NAME,
                           private readonly smb3FileNames1: Array<SMB3_FILE_NAME>, private readonly smb3FileName2: SMB3_FILE_NAME,
                           private readonly smwFileNames1: Array<SMW_FILE_NAME>, private readonly smwFileName2: SMW_FILE_NAME,
                           private readonly nsmbuFileNames1: Array<NSMBU_FILE_NAME>, private readonly nsmbuFileName2: NSMBU_FILE_NAME,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName1 = this.endingFolderName1
            const endingFolderName2 = this.endingFolderName2
            const folderName_smb = `M1 ${endingFolderName1}` as const
            const folderName_smb3 = `M3 ${endingFolderName1}` as const
            const folderName_smw = `MW ${endingFolderName1}` as const
            const folderName_nsmbu = `WU ${endingFolderName1}` as const
            const fileNames_smb = this.smbFileNames1
            const fileNames_smb3 = this.smb3FileNames1
            const fileNames_smw = this.smwFileNames1
            const fileNames_nsmbu = this.nsmbuFileNames1

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                    | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}`, SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNames_smb.length + fileNames_smb3.length + fileNames_smw.length + fileNames_nsmbu.length + 4,)

            let index = -1
            forEachByArray(fileNames_smb, it => imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),],)
            imageFiles[++index] = [SMB, inGameImage(this, `M1 ${endingFolderName2}`, this.smbFileName2,),]

            forEachByArray(fileNames_smb3, it => imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),],)
            imageFiles[++index] = [SMB3, inGameImage(this, `M3 ${endingFolderName2}`, this.smb3FileName2,),]

            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)
            imageFiles[++index] = [SMW, inGameImage(this, `MW ${endingFolderName2}`, this.smwFileName2,),]

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)
            imageFiles[++index] = [NSMBU, inGameImage(this, `WU ${endingFolderName2}`, this.nsmbuFileName2,),]

            return imageFiles
        }

    }

    private static readonly ExistantAsNoVariantWithSameSmbSmb3 = class ExistantAsNoVariantWithSameSmbSmb3_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_SMB3_FILE_NAME extends string,
        const SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, SMB_SMB3_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly smbSmb3FileNames: Array<SMB_SMB3_FILE_NAME>,
                           private readonly smwFileNames: Array<SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileNames_smbSmb3 = this.smbSmb3FileNames
            const fileNames_smw = this.smwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize_smbSmb3 = fileNames_smbSmb3.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, SMB_SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNamesSize_smbSmb3 * 2 + fileNames_smw.length + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smbSmb3, it => {
                imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),]
                imageFiles[index + fileNamesSize_smbSmb3] = [SMB3, inGameImage(this, folderName_smb3, it,),]
            },)
            index += fileNamesSize_smbSmb3

            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsNoVariantWithSameSmb3Smw = class ExistantAsNoVariantWithSameSmb3Smw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_FILE_NAME extends string,
        const SMB3_SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                                                  | InGameImageFile<`${| 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, SMB3_SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly smbFileNames: Array<SMB_FILE_NAME>, private readonly smb3SmwFileNames: Array<SMB3_SMW_FILE_NAME>,
                           private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileNames_smb = this.smbFileNames
            const fileNames_smb3Smw = this.smb3SmwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize_smb3Smw = fileNames_smb3Smw.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                    | InGameImageFile<`${| 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, SMB3_SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNames_smb.length + fileNamesSize_smb3Smw * 2 + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smb, it => imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),],)

            forEachByArray(fileNames_smb3Smw, it => {
                imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize_smb3Smw] = [SMW, inGameImage(this, folderName_smw, it,),]
            },)
            index+= fileNamesSize_smb3Smw

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsNoVariantWithSameSmbSmb3Smw = class ExistantAsNoVariantWithSameSmbSmb3Smw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly fileNames: Array<FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileNames = this.fileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize = fileNames.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNamesSize * 3 + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames, it => {
                imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),]
                imageFiles[index + fileNamesSize] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize] = [SMW, inGameImage(this, folderName_smw, it,),]
            },)
            index += fileNamesSize * 2

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (no variant) --------------------
    //region -------------------- Sub class (blue variant) --------------------

    private static readonly ExistantAsBlueVariant = class ExistantAsBlueVariant_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_FILE_NAME extends string,
        const SMB3_FILE_NAME extends string,
        const SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_FILE_NAME>
                                                  | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB3_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly smbFileNames: Array<SMB_FILE_NAME>, private readonly smb3FileNames: Array<SMB3_FILE_NAME>,
                           private readonly smwFileNames: Array<SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const folderName_smbAlt = `M1 ${endingFolderName} D` as const
            const folderName_smb3Alt = `M3 ${endingFolderName} D` as const
            const fileNames_smb = this.smbFileNames
            const fileNames_smb3 = this.smb3FileNames
            const fileNames_smw = this.smwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize_smb = fileNames_smb.length
            const fileNamesSize_smb3 = fileNames_smb3.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_FILE_NAME>
                    | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNamesSize_smb + fileNamesSize_smb3 + fileNames_smw.length + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smb, it => {
                imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),]
                imageFiles[index + fileNamesSize_smb] = [SMB, inGameImage(this, folderName_smbAlt, it,),]
            },)
            index += fileNamesSize_smb

            forEachByArray(fileNames_smb3, it => {
                imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize_smb3] = [SMB3, inGameImage(this, folderName_smb3Alt, it,),]
            },)
            index += fileNamesSize_smb3

            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsBlueVariantWithSameSmbSmb3Smw = class ExistantAsBlueVariantWithSameSmbSmb3Smw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_SMB3_SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_SMB3_SMW_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMB_SMB3_SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly smbSmb3SmwFileNames: Array<SMB_SMB3_SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const folderName_smbAlt = `M1 ${endingFolderName} D` as const
            const folderName_smb3Alt = `M3 ${endingFolderName} D` as const
            const fileNames_smbSmb3SmW = this.smbSmb3SmwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize_smbSmb3Smw = fileNames_smbSmb3SmW.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_SMB3_SMW_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMB_SMB3_SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNamesSize_smbSmb3Smw * 5 + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smbSmb3SmW, it => {
                imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw] = [SMB, inGameImage(this, folderName_smbAlt, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 2] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 3] = [SMB3, inGameImage(this, folderName_smb3Alt, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 4] = [SMW, inGameImage(this, folderName_smw, it,),]
            },)
            index += fileNamesSize_smbSmb3Smw * 4

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsBlueVariantWithSameSmbSmb3SmwAndBlueSmw = class ExistantAsBlueVariantWithSameSmbSmb3SmwAndBlueSmw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_SMB3_SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_SMB3_SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME,
                           private readonly smbSmb3SmwFileNames: Array<SMB_SMB3_SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const folderName_smbAlt = `M1 ${endingFolderName} D` as const
            const folderName_smb3Alt = `M3 ${endingFolderName} D` as const
            const folderName_smwAlt = `MW ${endingFolderName} D` as const
            const fileNames_smbSmb3SmW = this.smbSmb3SmwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize_smbSmb3Smw = fileNames_smbSmb3SmW.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_SMB3_SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNamesSize_smbSmb3Smw * 6 + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smbSmb3SmW, it => {
                imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw] = [SMB, inGameImage(this, folderName_smbAlt, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 2] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 3] = [SMB3, inGameImage(this, folderName_smb3Alt, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 4] = [SMW, inGameImage(this, folderName_smw, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 5] = [SMW, inGameImage(this, folderName_smwAlt, it,),]
            },)
            index += fileNamesSize_smbSmb3Smw * 4

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (blue variant) --------------------

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new InGameEntityImages.Null()
    public static readonly START_GROUND =                                  new InGameEntityImages.Null()
    public static readonly GOAL_GROUND =                                   new InGameEntityImages.Null()

    public static readonly STEEP_SLOPE =                                   new InGameEntityImages.Null()
    public static readonly GENTLE_SLOPE =                                  new InGameEntityImages.Null()

    public static readonly START_BLOCK =                                   new InGameEntityImages.ExistantAs1InNotSm3dw('Start Block', 'Object - StartBlock', 'startblock',)
    public static readonly OCCLUDE_BLOCK =                                 new InGameEntityImages.Null()

    public static readonly WATER =                                         new InGameEntityImages.ExistantAsNoVariant('Water', 'Object - WaterHalf', [
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'body.0', 'body.1', 'body.2', 'body.3',
        'top.0', 'top.1', 'top.2', 'top.3',
    ], [
        'body.0', 'body.1', 'body.2', 'body.3',
    ], EMPTY_ARRAY,)
    public static readonly LAVA =                                          new InGameEntityImages.ExistantAs4InNotNsmbuSm3dw('Lava', 'Object - MagmaHalf', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)
    public static readonly POISON =                                        new InGameEntityImages.ExistantAs4InNotNsmbuSm3dw('Poison', 'Object - PoisonHalf', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)

    public static readonly PIPE =                                          new InGameEntityImages.Null()
    public static readonly CLEAR_PIPE =                                    new InGameEntityImages.Null()

    public static readonly SPIKE_TRAP =                                    new InGameEntityImages.Null()
    public static readonly JELECTRO =                                      new InGameEntityImages.Null()
    public static readonly SEA_URCHIN =                                    new InGameEntityImages.Null()
    public static readonly SPIKE_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly MUSHROOM_PLATFORM =                             new InGameEntityImages.Null()
    public static readonly SEMISOLID_PLATFORM =                            new InGameEntityImages.Null()
    public static readonly BRIDGE =                                        new InGameEntityImages.Null()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new InGameEntityImages.ExistantAs1InNotSmwSm3dw('Brick Block', 'Object - BlockRenga', 'wait.0',)
    public static readonly CRISTAL_BLOCK =                                 new InGameEntityImages.Null()
    public static readonly ROTATING_BLOCK =                                new InGameEntityImages.ExistantAs1InOnlySmw('Rotating Block', 'MW Object - BlockRenga', 'wait.0',)

    public static readonly HARD_BLOCK =                                    new InGameEntityImages.ExistantAs1InNotSm3dw('Hard Block', 'Object - BlockKatai', 'wait.0',)
    public static readonly ROCK_BLOCK =                                    new InGameEntityImages.Null()

    public static readonly QUESTION_MARK_BLOCK =                           new InGameEntityImages.ExistantAs1InNotSm3dw('? Block', 'Object - BlockHatena', 'wait.0',)
    public static readonly HIDDEN_BLOCK =                                  new InGameEntityImages.Null()
    public static readonly EMPTY_BLOCK =                                   new InGameEntityImages.ExistantAs1InNotSm3dw('Empty Block', 'Object - BlockKara', 'wait.0',)

    public static readonly EXCLAMATION_MARK_BLOCK =                        new InGameEntityImages.Null()

    public static readonly NOTE_BLOCK =                                    new InGameEntityImages.ExistantAs1InNotSm3dw('Note Block', 'Object - BlockOnpu', 'wait.0',)
    public static readonly MUSIC_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly DONUT_BLOCK =                                   new InGameEntityImages.ExistantAs3InNotSm3dw('Donut Block', 'Object - BlockChikuwa', 'fall.0', 'fall.1', 'wait.0', ['fall.0', 'fall.1', 'wait.0',],)

    public static readonly CLOUD_BLOCK =                                   new InGameEntityImages.ExistantAs1InNotSm3dw('Cloud Block', 'Object - BlockKumo', 'wait.0',)

    public static readonly ON_OFF_SWITCH =                                 new InGameEntityImages.Null()
    public static readonly DOTTED_LINE_BLOCK =                             new InGameEntityImages.Null()

    public static readonly P_BLOCK =                                       new InGameEntityImages.Null()

    public static readonly BLINKING_BLOCK =                                new InGameEntityImages.Null()

    public static readonly ICE_BLOCK =                                     new InGameEntityImages.ExistantAs1InNotSm3dw('Ice Block', 'Object - BlockKori', 'wait.0',)
    public static readonly ICICLE =                                        new InGameEntityImages.ExistantAs2InNotSm3dwAnd2Nsmbu('Icicle', 'Object - Icicle', 'fall', 'hold', 'fall', 'hold',)

    public static readonly COIN =                                          new InGameEntityImages.Null()
    public static readonly FROZEN_COIN =                                   new InGameEntityImages.Null()
    public static readonly TEN_COIN =                                      new InGameEntityImages.Null()
    public static readonly THIRTY_COIN =                                   new InGameEntityImages.Null()
    public static readonly FIFTY_COIN =                                    new InGameEntityImages.Null()
    public static readonly PINK_COIN =                                     new InGameEntityImages.Null()

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM =                                new InGameEntityImages.ExistantAs1InNotSm3dwButDifferentNsmbu('Super Mushroom', 'Item - Kinoko', 'wait.0', 'out2_Alb.000',)

    public static readonly FIRE_FLOWER =                                   new InGameEntityImages.ExistantAsNoVariantWith1AlternateFile('Fire Flower', 'Item - Flower', 'Item - Flower2', [
        'wait.0', 'wait.1', 'wait.2', 'wait.3',], 'wait.0', [
        'wait.0',], 'wait.0', [
        'wait.0', 'wait.1',], 'wait.0', [
        'out2_Alb.000', 'out2_Alb.003', 'out2_Alb.006', 'out2_Alb.009', 'out2_Alb.012', 'out2_Alb.015', 'out2_Alb.018', 'out2_Alb.021', 'out2_Alb.024', 'out2_Alb.027', 'out2_Alb.030', 'out2_Alb.033', 'out2_Alb.036', 'out2_Alb.039', 'out2_Alb.042', 'out2_Alb.045', 'out2_Alb.048', 'out2_Alb.051', 'out2_Alb.054', 'out2_Alb.057', 'out2_Alb.059', 'wait_Alb.000',], 'wait_Alb.000',)
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new InGameEntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new InGameEntityImages.ExistantAs3InOnlySmbWith1Alternate('Superball Flower', 'M1 Item - BallFLower', 'wait.0', 'wait.1', 'wait.2', 'M1 Item - BallFlower2', 'wait.0',)
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new InGameEntityImages.ExistantAs1InOnlySmb('Superball thrown by a player', 'M1 Object - Superball', 'superball',)

    public static readonly MYSTERY_MUSHROOM =                              new InGameEntityImages.ExistantAs1InOnlySmb('Mystery Mushroom', 'M1 Item - CharaKinoko', 'Add_kinoko',)
    public static readonly WEIRD_MUSHROOM =                                new InGameEntityImages.ExistantAs1InOnlySmb('Weird Mushroom', 'M1 Item - KinokoFunny', 'kinokofunny.0',)

    public static readonly MASTER_SWORD =                                  new InGameEntityImages.ExistantAs4InOnlySmb('Master Sword', 'M1 Item - Triforce', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)
    public static readonly BOMB_THROWN_BY_A_LINK =                         new InGameEntityImages.ExistantAs3InOnlySmb('Bomb thrown by a Link', 'M1 Enemy - LinkBomb', 'wait.0', 'walk.0', 'walk.1',)
    public static readonly ARROW_THROWN_BY_A_LINK =                        new InGameEntityImages.ExistantAs1InOnlySmb('Arrow thrown by a Link', 'M1 Object - Arrow', 'arrow',)

    public static readonly BIG_MUSHROOM =                                  new InGameEntityImages.ExistantAs1InOnlySmbWithAlternate('Big Mushroom', 'M1 Item - Special', 'Add_special.0', 'M1 Item - Special2', 'Add_special',)
    public static readonly BIG_MUSHROOM_CLASSIC =                          new InGameEntityImages.ExistantAs1InNotSm3dw('Big Mushroom (classic)', 'Item - MegaKinoko', 'wait.0',)
    public static readonly BIG_MUSHROOM_MODERN =                           new InGameEntityImages.ExistantAs1InNotSm3dw('Big Mushroom (modern)', 'Item - MegaKinoko2', 'wait.0',)

    public static readonly SMB2_MUSHROOM =                                 new InGameEntityImages.ExistantAs1InOnlySmbWithAlternate('SMB2 Mushroom', 'M1 Item - SpecialEX', 'wait.0', 'M1 Item - SpecialEX2', 'wait.0',)

    public static readonly SUPER_LEAF =                                    new InGameEntityImages.ExistantAs3InOnlySmb3With1Alternate('Super Leaf', 'M3 Item - Special', 'wait.0', 'wait.1', 'wait.2', 'M3 Item - Special2', 'wait.0',)

    public static readonly FROG_SUIT =                                     new InGameEntityImages.ExistantAs1InOnlySmb3WithAlternate('Frog Suit', 'M3 Item - SpecialEX', 'wait.0', 'M3 Item - SpecialEX2', 'wait.0',)

    public static readonly CAPE_FEATHER =                                  new InGameEntityImages.ExistantAs2InOnlySmwWith1Alternate('Cape Feather', 'MW Item - Special', 'wait.0', 'wait.1', 'MW Item - Special2', 'wait.0',)

    public static readonly POWER_BALLOON =                                 new InGameEntityImages.ExistantAs1InOnlySmwWithAlternate('Power Balloon', 'MW Item - SpecialEX', 'wait.0', 'MW Item - SpecialEX2', 'wait.0',)

    public static readonly PROPELLER_MUSHROOM =                            new InGameEntityImages.ExistantAs4InOnlyNsmbuWith1Alternate('Propeller Mushroom', 'WU Item - Special', 'I_propeller_Alb.000', 'I_propeller_Alb.002', 'I_propeller_Alb.004', 'I_propeller_Alb.006', 'WU Item - Special2', 'wait2_Alb.000',)

    public static readonly SUPER_ACORN =                                   new InGameEntityImages.ExistantAs1InOnlyNsmbuWithAlternate('Super Acorn', 'WU Item - SpecialEX', 'out2_Alb.000', 'WU Item - SpecialEX2', 'out2_Alb.000',)

    public static readonly SUPER_BELL =                                    new InGameEntityImages.Null()

    public static readonly SUPER_HAMMER =                                  new InGameEntityImages.Null()
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new InGameEntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new InGameEntityImages.Null()
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new InGameEntityImages.Null()

    public static readonly CANNON_BOX =                                    new InGameEntityImages.Null()
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new InGameEntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new InGameEntityImages.Null()

    public static readonly GOOMBA_MASK =                                   new InGameEntityImages.Null()

    public static readonly BULLET_BILL_MASK =                              new InGameEntityImages.Null()

    public static readonly RED_POW_BOX =                                   new InGameEntityImages.Null()

    public static readonly SUPER_STAR =                                    new InGameEntityImages.ExistantAs4InNotSm3dw('Super Star', 'Item - Star', 'wait.0', 'wait.1', 'wait.2', 'wait.3', ['wait2_Alb.000', 'wait2_Alb.003', 'wait2_Alb.006', 'wait2_Alb.009', 'wait2_Alb.012', 'wait2_Alb.015', 'wait2_Alb.018', 'wait2_Alb.021', 'wait2_Alb.024', 'wait2_Alb.027', 'wait2_Alb.030', 'wait2_Alb.033', 'wait2_Alb.036', 'wait2_Alb.039', 'wait2_Alb.042', 'wait2_Alb.045', 'wait2_Alb.048', 'wait2_Alb51', 'wait2_Alb54', 'wait2_Alb57', '9',],)
    public static readonly ONE_UP_MUSHROOM =                               new InGameEntityImages.ExistantAs2InNotSm3dwAnd2Nsmbu('1-Up Mushroom', 'Item - Kinoko1up', 'wait.0', 'wait.1', 'edit_out2_Alb.000', 'out2_Alb.000',)
    public static readonly ROTTEN_MUSHROOM =                               new InGameEntityImages.ExistantAs1InNotSm3dwButDifferentNsmbu('Rotten Mushroom', 'Item - KinokoPoison', 'wait.0', 'out2_Alb.000',)

    public static readonly SHOE_GOOMBA =                                   new InGameEntityImages.ExistantAs2InOnlySmbAndSmb3('Shoe Goomba', 'Enemy - KutsuKuriboA', 'edit_drag.0', 'edit_drag.1',)
    public static readonly SHOE =                                          new InGameEntityImages.ExistantAs2InOnlySmbAndSmb3('Shoe', 'Enemy - KutsuKuriboA', 'wait.0', 'wait.1',)
    public static readonly STILETTO_GOOMBA =                               new InGameEntityImages.ExistantAs2InOnlySmbAndSmb3('Stiletto Goomba', 'Enemy - KutsuKuriboB', 'edit_drag.0', 'edit_drag.1',)
    public static readonly STILETTO =                                      new InGameEntityImages.ExistantAs2InOnlySmbAndSmb3('Stiletto', 'Enemy - KutsuKuriboB', 'wait.0', 'wait.1',)
    public static readonly YOSHI_EGG =                                     new InGameEntityImages.ExistantAs2InOnlySmw('Yoshi’s Egg', 'MW Enemy - KutsuKuriboA', 'wait.0', 'wait.1',)//TODO add NSMBU yoshi egg (if present)
    public static readonly YOSHI =                                         new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new InGameEntityImages.ExistantAs2InOnlySmw('Fire thrown by a Yoshi', 'MW Player - YoshiFire', 'wait.0', 'wait.1',)//TODO add NSMBU "Yoshi fire thrown" (if present)
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new InGameEntityImages.ExistantAs2InOnlySmw('Poison thrown by a Yoshi', 'MW Player - YoshiPoison', 'wait.0', 'wait.1',)//TODO add NSMBU "Yoshi poison thrown" (if present)
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new InGameEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new InGameEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new InGameEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new InGameEntityImages.ExistantAs2InOnlySmw('Red Yoshi’s Egg', 'MW Enemy - KutsuKuriboB', 'wait.0', 'wait.1',)//TODO add NSMBU yoshi egg (if present)
    public static readonly RED_YOSHI =                                     new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new InGameEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new InGameEntityImages.ExistantAs6InNotSmw('Goomba', 'Enemy - Kuribo', 'damage.0', 'kutsu.0', 'swim.0', 'swim.1', 'walk.0', 'walk.1', [
        'damage_Alb.000', 'damage_Alb.002', 'damage_Alb.004', 'damage_Alb.006', 'damage_Alb.008',
        'damage_Alb.010', 'damage_Alb.012', 'damage_Alb.014', 'damage_Alb.016', 'damage_Alb.018',
        'damage_Alb.020', 'damage_Alb.022', 'damage_Alb.024', 'damage_Alb.026',
        'swim_Alb.001', 'swim_Alb.005', 'swim_Alb.009', 'swim_Alb.012', 'swim_Alb.016',
        'swim_Alb.020', 'swim_Alb.024', 'swim_Alb.028', 'swim_Alb.032', 'swim_Alb.037',
        'swim_Alb.040', 'swim_Alb.044', 'swim_Alb.049', 'swim_Alb.052', 'swim_Alb.057',
        'swim_Alb.060', 'swim_Alb.065', 'swim_Alb.068', 'swim_Alb.073', 'swim_Alb.077', 'swim_Alb.079',
        'swim_wait_Alb.000', 'swim_wait_Alb.004', 'swim_wait_Alb.008', 'swim_wait_Alb.012', 'swim_wait_Alb.016',
        'swim_wait_Alb.020', 'swim_wait_Alb.024', 'swim_wait_Alb.028', 'swim_wait_Alb.032', 'swim_wait_Alb.036', 'swim_wait_Alb.039',
        'walk_Alb.000', 'walk_Alb.004', 'walk_Alb.008', 'walk_Alb.012', 'walk_Alb.016',
        'walk_Alb.020', 'walk_Alb.024', 'walk_Alb.028', 'walk_Alb.032',
        'walk_Alb.040', 'walk_Alb.044', 'walk_Alb.048', 'walk_Alb.052', 'walk_Alb.056',
        'walk_Alb.060',
    ],)
    public static readonly GALOOMBA =                                      new InGameEntityImages.Null()
    public static readonly GOOMBRAT =                                      new InGameEntityImages.Null()
    public static readonly GOOMBUD =                                       new InGameEntityImages.Null()

    public static readonly GREEN_KOOPA_TROOPA =                            new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3('Green Koopa Troopa', 'Enemy - NokonokoA', [
        'revival.0', 'revival.1', 'revival.2',
        'walk.0', 'walk.1',
    ], [
        'blink.0', 'blink.1',
        'revival.0', 'revival.1',
        'walk.0', 'walk.1',
    ], [
        'flyA_Alb.000', 'flyA_Alb.002', 'flyA_Alb.004', 'flyA_Alb.006', 'flyA_Alb.008', 'flyA_Alb.010', 'flyA_Alb.012', 'flyA_Alb.014', 'flyA_Alb.016', 'flyA_Alb.018', 'flyA_Alb.020', 'flyA_Alb.022',
        'revival_Alb.000', 'revival_Alb.002', 'revival_Alb.004', 'revival_Alb.006', 'revival_Alb.008', 'revival_Alb.010', 'revival_Alb.012', 'revival_Alb.014', 'revival_Alb.016', 'revival_Alb.018', 'revival_Alb.020', 'revival_Alb.022', 'revival_Alb.024', 'revival_Alb.026', 'revival_Alb.028', 'revival_Alb.030', 'revival_Alb.032', 'revival_Alb.034', 'revival_Alb.036', 'revival_Alb.038', 'revival_Alb.040', 'revival_Alb.042', 'revival_Alb.044', 'revival_Alb.046', 'revival_Alb.048', 'revival_Alb.050', 'revival_Alb.052', 'revival_Alb.054', 'revival_Alb.056', 'revival_Alb.058', 'revival_Alb.060', 'revival_Alb.062', 'revival_Alb.064', 'revival_Alb.066', 'revival_Alb.068', 'revival_Alb.070', 'revival_Alb.072', 'revival_Alb.074', 'revival_Alb.076',
        'walkA_Alb.000', 'walkA_Alb.002', 'walkA_Alb.004', 'walkA_Alb.006', 'walkA_Alb.008', 'walkA_Alb.010', 'walkA_Alb.012', 'walkA_Alb.014', 'walkA_Alb.016', 'walkA_Alb.018', 'walkA_Alb.020', 'walkA_Alb.022', 'walkA_Alb.024', 'walkA_Alb.026', 'walkA_Alb.028', 'walkA_Alb.030', 'walkA_Alb.032', 'walkA_Alb.034', 'walkA_Alb.036', 'walkA_Alb.038',
    ],)
    public static readonly RED_KOOPA_TROOPA =                              new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3('Red Koopa Troopa', 'Enemy - NokonokoB', [
        'revival.0', 'revival.1', 'revival.2',
        'walk.0', 'walk.1',
    ], [
        'blink.0', 'blink.1',
        'revival.0', 'revival.1',
        'walk.0', 'walk.1',
    ], [
        'flyA_Alb.000', 'flyA_Alb.002', 'flyA_Alb.004', 'flyA_Alb.006', 'flyA_Alb.008', 'flyA_Alb.010', 'flyA_Alb.012', 'flyA_Alb.014', 'flyA_Alb.016', 'flyA_Alb.018', 'flyA_Alb.020', 'flyA_Alb.022',
        'revival_Alb.000', 'revival_Alb.002', 'revival_Alb.004', 'revival_Alb.006', 'revival_Alb.008', 'revival_Alb.010', 'revival_Alb.012', 'revival_Alb.014', 'revival_Alb.016', 'revival_Alb.018', 'revival_Alb.020', 'revival_Alb.022', 'revival_Alb.024', 'revival_Alb.026', 'revival_Alb.028', 'revival_Alb.030', 'revival_Alb.032', 'revival_Alb.034', 'revival_Alb.036', 'revival_Alb.038', 'revival_Alb.040', 'revival_Alb.042', 'revival_Alb.044', 'revival_Alb.046', 'revival_Alb.048', 'revival_Alb.050', 'revival_Alb.052', 'revival_Alb.054', 'revival_Alb.056', 'revival_Alb.058', 'revival_Alb.060', 'revival_Alb.062', 'revival_Alb.064', 'revival_Alb.066', 'revival_Alb.068', 'revival_Alb.070', 'revival_Alb.072', 'revival_Alb.074', 'revival_Alb.076',
        'walkA_Alb.000', 'walkA_Alb.002', 'walkA_Alb.004', 'walkA_Alb.006', 'walkA_Alb.008', 'walkA_Alb.010', 'walkA_Alb.012', 'walkA_Alb.014', 'walkA_Alb.016', 'walkA_Alb.018', 'walkA_Alb.020', 'walkA_Alb.022', 'walkA_Alb.024', 'walkA_Alb.026', 'walkA_Alb.028', 'walkA_Alb.030', 'walkA_Alb.032', 'walkA_Alb.034', 'walkA_Alb.036', 'walkA_Alb.038',
    ],)
    public static readonly GREEN_BEACH_KOOPA =                             new InGameEntityImages.ExistantAs6InOnlySmw('Green Beach Koopa', 'MW Enemy - NokonokoANaked', 'dead.0', 'kick.0', 'slide.0', 'slide.1', 'walk.0', 'walk.1',)
    public static readonly RED_BEACH_KOOPA =                               new InGameEntityImages.ExistantAs6InOnlySmw('Red Beach Koopa', 'MW Enemy - NokonokoBNaked', 'dead.0', 'kick.0', 'slide.0', 'slide.1', 'walk.0', 'walk.1',)
    public static readonly GREEN_KOOPA_SHELL =                             new InGameEntityImages.ExistantAs4InNotSm3dw('Green Koopa Shell', 'Enemy - NokonokoA', 'shell.0', 'shell.1', 'shell.2', 'shell.3', [
        'Yrot_nokonokoA_shell_Alb.000', 'Yrot_nokonokoA_shell_Alb.002', 'Yrot_nokonokoA_shell_Alb.004', 'Yrot_nokonokoA_shell_Alb.006', 'Yrot_nokonokoA_shell_Alb.008', 'Yrot_nokonokoA_shell_Alb.009',
    ],)
    public static readonly RED_KOOPA_SHELL =                               new InGameEntityImages.ExistantAs4InNotSm3dw('Red Koopa Shell', 'Enemy - NokonokoB', 'shell.0', 'shell.1', 'shell.2', 'shell.3', [
        'Yrot_nokonokoA_shell_Alb.000', 'Yrot_nokonokoA_shell_Alb.002', 'Yrot_nokonokoA_shell_Alb.004', 'Yrot_nokonokoA_shell_Alb.006', 'Yrot_nokonokoA_shell_Alb.008', 'Yrot_nokonokoA_shell_Alb.009',
    ],)

    public static readonly DRY_BONES =                                     new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3('Dry Bones', 'Enemy - Karon', [
        'break_modelA', 'break_modelB', 'break_modelC',
        'damage.0', 'damage.1',
        'revival.0', 'revival.1',
        'shake.0', 'shake.1',
        'walk.0', 'walk.1',
    ], [
        'break_modelA', 'break_modelB', 'break_modelC',
        'damage.0', 'damage.1',
        'revival.0', 'revival.1',
        'shake.0', 'shake.1',
        'throw.0', 'throw.1',
        'walk.0', 'walk.1',
    ], [
        'big_stop_Alb.000', 'big_stop_Alb.002', 'big_stop_Alb.004', 'big_stop_Alb.006', 'big_stop_Alb.008', 'big_stop_Alb.009', 'big_stop_Alb.010',
        'big_stop_Alb.011', 'big_stop_Alb.012', 'big_stop_Alb.013', 'big_stop_Alb.014', 'big_stop_Alb.036', 'big_stop_Alb.038', 'big_stop_Alb.040',
        'bone_Alb.000',
        'down_Alb.000', 'down_Alb.002', 'down_Alb.004', 'down_Alb.006', 'down_Alb.008', 'down_Alb.010', 'down_Alb.012', 'down_Alb.014', 'down_Alb.016', 'down_Alb.018',
        'down_Alb.020', 'down_Alb.022', 'down_Alb.024', 'down_Alb.026', 'down_Alb.028', 'down_Alb.030', 'down_Alb.032', 'down_Alb.034', 'down_Alb.036', 'down_Alb.038',
        'down_Alb.040', 'down_Alb.042', 'down_Alb.044', 'down_Alb.046', 'down_Alb.048', 'down_Alb.050', 'down_Alb.052', 'down_Alb.054', 'down_Alb.056', 'down_Alb.058',
        'down_Alb.060', 'down_Alb.062', 'down_Alb.064', 'down_Alb.066', 'down_Alb.068', 'down_Alb.070', 'down_Alb.072', 'down_Alb.074', 'down_Alb.076', 'down_Alb.078',
        'down_Alb.080', 'down_Alb.082',
        'karon_partsA_Alb.000', 'karon_partsB_Alb.000', 'karon_partsC_Alb.000', 'karon_partsF_Alb.000',
        'revive_Alb.000', 'revive_Alb.002', 'revive_Alb.004', 'revive_Alb.006', 'revive_Alb.008', 'revive_Alb.010', 'revive_Alb.012', 'revive_Alb.014', 'revive_Alb.016', 'revive_Alb.018',
        'revive_Alb.020', 'revive_Alb.022', 'revive_Alb.024', 'revive_Alb.026', 'revive_Alb.028', 'revive_Alb.030', 'revive_Alb.032', 'revive_Alb.034', 'revive_Alb.036', 'revive_Alb.038',
        'revive_Alb.040', 'revive_Alb.042', 'revive_Alb.044', 'revive_Alb.046', 'revive_Alb.048', 'revive_Alb.050', 'revive_Alb.052', 'revive_Alb.054', 'revive_Alb.056', 'revive_Alb.058',
        'revive_Alb.060', 'revive_Alb.062', 'revive_Alb.064', 'revive_Alb.066', 'revive_Alb.068', 'revive_Alb.070', 'revive_Alb.072', 'revive_Alb.074', 'revive_Alb.076', 'revive_Alb.078',
        'revive_Alb.080', 'revive_Alb.082', 'revive_Alb.084', 'revive_Alb.086', 'revive_Alb.088', 'revive_Alb.090', 'revive_Alb.092', 'revive_Alb.094', 'revive_Alb.096', 'revive_Alb.098',
        'revive_Alb.100', 'revive_Alb.102', 'revive_Alb.104', 'revive_Alb.106', 'revive_Alb.108', 'revive_Alb.110', 'revive_Alb.112', 'revive_Alb.114', 'revive_Alb.116', 'revive_Alb.118',
        'revive_Alb.120', 'revive_Alb.122', 'revive_Alb.124', 'revive_Alb.126', 'revive_Alb.128', 'revive_Alb.130', 'revive_Alb.132', 'revive_Alb.134', 'revive_Alb.136', 'revive_Alb.138',
        'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018',
        'walk_Alb.020', 'walk_Alb.022', 'walk_Alb.024', 'walk_Alb.026', 'walk_Alb.028', 'walk_Alb.030', 'walk_Alb.032',
    ],)
    public static readonly PARABONES =                                     new InGameEntityImages.ExistantInOnlyNsmbu('Parabones', 'WU Enemy - Karon', ['flyA_Alb.000', 'flyA_Alb.002', 'flyA_Alb.004', 'flyA_Alb.006', 'flyA_Alb.008', 'flyA_Alb.010', 'flyA_Alb.012', 'flyA_Alb.014', 'flyA_Alb.016', 'flyA_Alb.018', 'flyA_Alb.020', 'flyA_Alb.022',],)
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new InGameEntityImages.ExistantAs4InOnlySmw('Bone thrown by a Dry Bones', 'MW Enemy - Karon', 'bone.0', 'bone.1', 'bone.2', 'bone.3',)
    public static readonly DRY_BONES_SHELL =                               new InGameEntityImages.ExistantAs4InNotSm3dw('Dry Bones Shell', 'Enemy - Karon', 'shellkara.0', 'shellkara.1', 'shellkara.2', 'shellkara.3', [
        'Player_Karon_model_Alb.000', 'Player_Karon_model_Alb.002', 'Player_Karon_model_Alb.004', 'Player_Karon_model_Alb.006', 'Player_Karon_model_Alb.008', 'Player_Karon_model_Alb.010',
    ],)

    public static readonly BUZZY_BEETLE =                                  new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Buzzy Beetle', 'Enemy - Met', [
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'walk.0', 'walk.1',
    ], [
        'walk_Alb.000', 'walk_Alb.003', 'walk_Alb.006', 'walk_Alb.009', 'walk_Alb.012', 'walk_Alb.015', 'walk_Alb.016',
        'Yrot_met_shell_Alb.000', 'Yrot_met_shell_Alb.002', 'Yrot_met_shell_Alb.004', 'Yrot_met_shell_Alb.006', 'Yrot_met_shell_Alb.008', 'Yrot_met_shell_Alb.010',
    ],)
    public static readonly PARA_BEETLE =                                   new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Para-Beetle', 'Enemy - Met', ['fly.0',], [
        'fly_Alb.000', 'fly_Alb.003', 'fly_Alb.006', 'fly_Alb.009', 'fly_Alb.012', 'fly_Alb.015', 'fly_Alb.018', 'fly_Alb.021', 'fly_Alb.024', 'fly_Alb.027', 'fly_Alb.029',
    ],)
    public static readonly BUZZY_SHELL =                                   new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Buzzy Shell', 'Enemy - Met', ['shellkara.0', 'shellkara.1', 'shellkara.2', 'shellkara.3',], [
        'met_shell_model2_Alb.000', 'met_shell_model2_Alb.002', 'met_shell_model2_Alb.004', 'met_shell_model2_Alb.006', 'met_shell_model2_Alb.008', 'met_shell_model2_Alb.010',
    ],)

    public static readonly SPINY =                                         new InGameEntityImages.ExistantAs6InNotSm3dw('Spiny', 'Enemy - Togezo', 'shell.0', 'shell.1', 'shell.2', 'shell.3', 'walk.0', 'walk.1', [
        'walk_Alb.000', 'walk_Alb.001', 'walk_Alb.002', 'walk_Alb.003', 'walk_Alb.004', 'walk_Alb.005', 'walk_Alb.006', 'walk_Alb.007','walk_Alb.008','walk_Alb.009', 'walk_Alb.010', 'walk_Alb.011', 'walk_Alb.012', 'walk_Alb.013', 'walk_Alb.014', 'walk_Alb.015', 'walk_Alb.016', 'walk_Alb.017', 'walk_Alb.018', 'walk_Alb.019', 'walk_Alb.020', 'walk_Alb.021', 'walk_Alb.022', 'walk_Alb.023', 'walk_Alb.024', 'walk_Alb.025', 'walk_Alb.026', 'walk_Alb.027', 'walk_Alb.028', 'walk_Alb.029',
        'Yrot_togezo_shell_Alb.000', 'Yrot_togezo_shell_Alb.001', 'Yrot_togezo_shell_Alb.002', 'Yrot_togezo_shell_Alb.003', 'Yrot_togezo_shell_Alb.004', 'Yrot_togezo_shell_Alb.005', 'Yrot_togezo_shell_Alb.006', 'Yrot_togezo_shell_Alb.007', 'Yrot_togezo_shell_Alb.008', 'Yrot_togezo_shell_Alb.009', 'Yrot_togezo_shell_Alb.010',
    ],)
    public static readonly WINGED_SPINY =                                  new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3Smw('Winged Spiny', 'Enemy - Togezo', ['fly.0',], [
        'fly_Alb.000', 'fly_Alb.002', 'fly_Alb.004', 'fly_Alb.006', 'fly_Alb.008', 'fly_Alb.010', 'fly_Alb.012', 'fly_Alb.014', 'fly_Alb.016', 'fly_Alb.018', 'fly_Alb.020', 'fly_Alb.022', 'fly_Alb.024', 'fly_Alb.026', 'fly_Alb.028', 'fly_Alb.029',
    ],)
    public static readonly WINGED_SPINY_PROJECTILE =                       new InGameEntityImages.ExistantAs1InNotSm3dwButDifferentNsmbu('(Winged Spiny’s projectile)', 'Enemy - Togezo', 'toge.0', 'toge_Alb.000',)
    public static readonly SPINY_EGG =                                     new InGameEntityImages.ExistantAs2InNotSm3dw('Spiny Egg', 'Enemy - Paipo', 'wait.0', 'wait.1', [
        'wait_Alb.000', 'wait_Alb.002', 'wait_Alb.004', 'wait_Alb.006', 'wait_Alb.008', 'wait_Alb.010', 'wait_Alb.012', 'wait_Alb.014', 'wait_Alb.016', 'wait_Alb.018', 'wait_Alb.020', 'wait_Alb.022', 'wait_Alb.024', 'wait_Alb.026', 'wait_Alb.028', 'wait_Alb.030', 'wait_Alb.032', 'wait_Alb.034', 'wait_Alb.036', 'wait_Alb.038', 'wait_Alb.040', 'wait_Alb.042', 'wait_Alb.044', 'wait_Alb.046', 'wait_Alb.048', 'wait_Alb.050', 'wait_Alb.052', 'wait_Alb.054', 'wait_Alb.056', 'wait_Alb.058',
    ],)
    public static readonly SPINY_SHELL =                                   new InGameEntityImages.ExistantAs4InNotSm3dw('Spiny Shell', 'Enemy - Togezo', 'shellkara.0', 'shellkara.1', 'shellkara.2', 'shellkara.3', [
        'togezo_shell2_Alb.000', 'togezo_shell2_Alb.001', 'togezo_shell2_Alb.002', 'togezo_shell2_Alb.003', 'togezo_shell2_Alb.004', 'togezo_shell2_Alb.005', 'togezo_shell2_Alb.006', 'togezo_shell2_Alb.007', 'togezo_shell2_Alb.008', 'togezo_shell2_Alb.009', 'togezo_shell2_Alb.010',
    ],)

    public static readonly SPIKE_TOP =                                     new InGameEntityImages.ExistantAs2InNotSm3dw('Spike Top', 'Enemy - TogemetA', 'walk.0', 'walk.1', [
        'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018', 'walk_Alb.020', 'walk_Alb.022', 'walk_Alb.024', 'walk_Alb.026', 'walk_Alb.028', 'walk_Alb.030', 'walk_Alb.032', 'walk_Alb.033',
    ],)
    public static readonly WINGED_SPIKE_TOP =                              new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3Smw('Winged Spike Top', 'Enemy - TogemetA', ['fly.0',], [
        'fly_Alb.000', 'fly_Alb.002', 'fly_Alb.004', 'fly_Alb.006', 'fly_Alb.008', 'fly_Alb.010', 'fly_Alb.012', 'fly_Alb.014', 'fly_Alb.016', 'fly_Alb.018', 'fly_Alb.020', 'fly_Alb.022', 'fly_Alb.024', 'fly_Alb.026', 'fly_Alb.028', 'fly_Alb.030', 'fly_Alb.032', 'fly_Alb.034', 'fly_Alb.036', 'fly_Alb.038',
    ],)
    public static readonly FAST_SPIKE_TOP =                                new InGameEntityImages.ExistantAs2InNotSm3dw('Fast Spike Top', 'Enemy - TogemetB', 'walk.0', 'walk.1', [
        'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018', 'walk_Alb.020', 'walk_Alb.022', 'walk_Alb.024', 'walk_Alb.026', 'walk_Alb.028', 'walk_Alb.030', 'walk_Alb.032', 'walk_Alb.033',
    ],)
    public static readonly FAST_WINGED_SPIKE_TOP =                         new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3Smw('Fast Winged Spike Top', 'Enemy - TogemetB', ['fly.0',], [
        'fly_Alb.000', 'fly_Alb.002', 'fly_Alb.004', 'fly_Alb.006', 'fly_Alb.008', 'fly_Alb.010', 'fly_Alb.012', 'fly_Alb.014', 'fly_Alb.016', 'fly_Alb.018', 'fly_Alb.020', 'fly_Alb.022', 'fly_Alb.024', 'fly_Alb.026', 'fly_Alb.028', 'fly_Alb.030', 'fly_Alb.032', 'fly_Alb.034', 'fly_Alb.036', 'fly_Alb.038',
    ],)

    public static readonly SKIPSQUEAK =                                    new InGameEntityImages.Null()
    public static readonly SPINY_SKIPSQUEAK =                              new InGameEntityImages.Null()

    public static readonly ANT_TROOPER =                                   new InGameEntityImages.Null()
    public static readonly HORNED_ANT_TROOPER =                            new InGameEntityImages.Null()

    public static readonly STINGBY =                                       new InGameEntityImages.Null()

    public static readonly GREEN_CHEEP_CHEEP =                             new InGameEntityImages.ExistantAs2InNotSmwSm3dw('Green Cheep Cheep', 'Enemy - PukupukuA', 'wait.0', 'wait.1', EMPTY_ARRAY,)
    public static readonly BLURPS =                                        new InGameEntityImages.ExistantAs2InOnlySmw('Blurps', 'Enemy - PukupukuA', 'wait.0', 'wait.1',)
    public static readonly DEEP_CHEEP =                                    new InGameEntityImages.ExistantInOnlyNsmbu('Deep Cheep', 'Enemy - PukupukuA', [
        'swim_Alb.000', 'swim_Alb.002', 'swim_Alb.004', 'swim_Alb.006', 'swim_Alb.008',
        'swim_Alb.010', 'swim_Alb.012', 'swim_Alb.014', 'swim_Alb.016', 'swim_Alb.018',
        'swim_Alb.020', 'swim_Alb.022', 'swim_Alb.024', 'swim_Alb.026', 'swim_Alb.028',
        'swim_Alb.030', 'swim_Alb.032', 'swim_Alb.034', 'swim_Alb.036', 'swim_Alb.038',
        'swim_Alb.040', 'swim_Alb.042', 'swim_Alb.044', 'swim_Alb.046', 'swim_Alb.048',
        'swim_Alb.050', 'swim_Alb.052', 'swim_Alb.054', 'swim_Alb.056', 'swim_Alb.058',
        'swim_Alb.060', 'swim_Alb.062', 'swim_Alb.064',
    ],)
    public static readonly RED_CHEEP_CHEEP =                               new InGameEntityImages.ExistantAs2InNotSm3dw('Red Cheep Cheep', 'Enemy - PukupukuB', 'wait.0', 'wait.1', [
        'swim_Alb.000', 'swim_Alb.002', 'swim_Alb.004', 'swim_Alb.006', 'swim_Alb.008',
        'swim_Alb.010', 'swim_Alb.012', 'swim_Alb.014', 'swim_Alb.016', 'swim_Alb.018',
        'swim_Alb.020', 'swim_Alb.022', 'swim_Alb.024', 'swim_Alb.026', 'swim_Alb.028',
        'swim_Alb.030', 'swim_Alb.032', 'swim_Alb.034', 'swim_Alb.036', 'swim_Alb.038',
        'swim_Alb.040', 'swim_Alb.042', 'swim_Alb.044', 'swim_Alb.046', 'swim_Alb.048',
        'swim_Alb.050', 'swim_Alb.052', 'swim_Alb.054', 'swim_Alb.056', 'swim_Alb.058',
        'swim_Alb.060', 'swim_Alb.062', 'swim_Alb.064',
    ],)
    public static readonly FISH_BONE =                                     new InGameEntityImages.ExistantAs7InNotSm3dw('Fish Bone', 'Enemy - Fishbone', 'attack.0', 'attack.1', 'break_modelA', 'break_modelB', 'breakModelC', 'swim.0', 'swim.1', [
        'attack_Alb.000', 'attack_Alb.002', 'attack_Alb.004', 'attack_Alb.006', 'attack_Alb.008', 'attack_Alb.010', 'attack_Alb.012', 'attack_Alb.014', 'attack_Alb.016', 'attack_Alb.018', 'attack_Alb.020', 'attack_Alb.022', 'attack_Alb.024', 'attack_Alb.026', 'attack_Alb.028', 'attack_Alb.030', 'attack_Alb.031',
        'attack_st_Alb.000', 'attack_st_Alb.002', 'attack_st_Alb.004', 'attack_st_Alb.006', 'attack_st_Alb.008', 'attack_st_Alb.010', 'attack_st_Alb.012', 'attack_st_Alb.014', 'attack_st_Alb.016', 'attack_st_Alb.018', 'attack_st_Alb.020', 'attack_st_Alb.022', 'attack_st_Alb.024', 'attack_st_Alb.026', 'attack_st_Alb.028', 'attack_st_Alb.030', 'attack_st_Alb.032', 'attack_st_Alb.034', 'attack_st_Alb.036', 'attack_st_Alb.038', 'attack_st_Alb.040',
        'break_Alb.000',
        'swim_Alb.000', 'swim_Alb.004', 'swim_Alb.008', 'swim_Alb.012', 'swim_Alb.016', 'swim_Alb.020', 'swim_Alb.024', 'swim_Alb.028', 'swim_Alb.032', 'swim_Alb.036', 'swim_Alb.040', 'swim_Alb.044', 'swim_Alb.048', 'swim_Alb.052', 'swim_Alb.056', 'swim_Alb.060', 'swim_Alb.063', 'swim_Alb.064', 'swim_Alb.068', 'swim_Alb.072', 'swim_Alb.076', 'swim_Alb.080', 'swim_Alb.083',
    ],)

    public static readonly BLOOPER =                                       new InGameEntityImages.ExistantAs4InNotSm3dw('Blooper', 'Enemy - Gesso', 'parawait.0', 'parawait.1', 'wait.0', 'wait.1', [
        'edited_te_pata_Alb.000', 'edited_te_pata_Alb.002', 'edited_te_pata_Alb.004', 'edited_te_pata_Alb.006', 'edited_te_pata_Alb.008', 'edited_te_pata_Alb.010', 'edited_te_pata_Alb.012', 'edited_te_pata_Alb.014', 'edited_te_pata_Alb.016', 'edited_te_pata_Alb.018', 'edited_te_pata_Alb.020', 'edited_te_pata_Alb.022', 'edited_te_pata_Alb.024', 'edited_te_pata_Alb.026', 'edited_te_pata_Alb.028',
    ],)
    public static readonly BLOOPER_NANNY =                                 new InGameEntityImages.Null()
    public static readonly BABY_BLOOPER =                                  new InGameEntityImages.ExistantAs2InNotSm3dwAnd1Nsmbu('Baby Blooper', 'Enemy - GessoMini', 'wait.0', 'wait.1', 'gesso_mini_Alb.000',)

    public static readonly PORCUPUFFER =                                   new InGameEntityImages.Null()

    public static readonly WIGGLER =                                       new InGameEntityImages.Null()
    public static readonly ANGRY_WIGGLER =                                 new InGameEntityImages.Null()

    public static readonly PIRANHA_PLANT =                                 new InGameEntityImages.ExistantAs2InNotSmwSm3dw('Piranha Plant', 'Enemy - Packun', 'wait.0', 'wait.1', [
        'dokan_attack_Alb.000', 'dokan_attack_Alb.001', 'dokan_attack_Alb.002', 'dokan_attack_Alb.003', 'dokan_attack_Alb.004', 'dokan_attack_Alb.005', 'dokan_attack_Alb.006', 'dokan_attack_Alb.007', 'dokan_attack_Alb.008', 'dokan_attack_Alb.009',
        'dokan_attack_Alb.010', 'dokan_attack_Alb.011', 'dokan_attack_Alb.012', 'dokan_attack_Alb.013', 'dokan_attack_Alb.014', 'dokan_attack_Alb.015', 'dokan_attack_Alb.016', 'dokan_attack_Alb.017', 'dokan_attack_Alb.018', 'dokan_attack_Alb.019',
        'dokan_attack_Alb.020', 'dokan_attack_Alb.021', 'dokan_attack_Alb.022', 'dokan_attack_Alb.023', 'dokan_attack_Alb.024', 'dokan_attack_Alb.025', 'dokan_attack_Alb.026', 'dokan_attack_Alb.027', 'dokan_attack_Alb.028', 'dokan_attack_Alb.029',
        'dokan_attack_Alb.030', 'dokan_attack_Alb.031', 'dokan_attack_Alb.032', 'dokan_attack_Alb.033', 'dokan_attack_Alb.034', 'dokan_attack_Alb.035', 'dokan_attack_Alb.036', 'dokan_attack_Alb.037', 'dokan_attack_Alb.038', 'dokan_attack_Alb.039',
        'dokan_attack_Alb.040', 'dokan_attack_Alb.041', 'dokan_attack_Alb.042', 'dokan_attack_Alb.043', 'dokan_attack_Alb.044', 'dokan_attack_Alb.045', 'dokan_attack_Alb.046', 'dokan_attack_Alb.047', 'dokan_attack_Alb.048', 'dokan_attack_Alb.049',
        'dokan_attack_Alb.050', 'dokan_attack_Alb.051', 'dokan_attack_Alb.052', 'dokan_attack_Alb.053', 'dokan_attack_Alb.054', 'dokan_attack_Alb.055', 'dokan_attack_Alb.056', 'dokan_attack_Alb.057', 'dokan_attack_Alb.058', 'dokan_attack_Alb.059',
        'dokan_attack_Alb.060', 'dokan_attack_Alb.061', 'dokan_attack_Alb.062', 'dokan_attack_Alb.063', 'dokan_attack_Alb.064', 'dokan_attack_Alb.065', 'dokan_attack_Alb.066', 'dokan_attack_Alb.067', 'dokan_attack_Alb.068', 'dokan_attack_Alb.069',
        'dokan_attack_Alb.070', 'dokan_attack_Alb.071',
    ],)
    public static readonly JUMPING_PIRANHA_PLANT =                         new InGameEntityImages.ExistantAs4InOnlySmw('Jumping Piranha Plant', 'MW Enemy - Packun', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)
    public static readonly FIRE_PIRANHA_PLANT =                            new InGameEntityImages.ExistantAs4InNotSm3dw('Fire Piranha Plant', 'Enemy - PackunFire', 'down.0', 'down.1', 'up.0', 'up.1', [
        'downfire1_Alb.000', 'downfire1_Alb.003', 'downfire1_Alb.006', 'downfire1_Alb.009', 'downfire1_Alb.012', 'downfire1_Alb.015', 'downfire1_Alb.018', 'downfire1_Alb.021', 'downfire1_Alb.024', 'downfire1_Alb.027', 'downfire1_Alb.030', 'downfire1_Alb.033', 'downfire1_Alb.036', 'downfire1_Alb.039', 'downfire1_Alb.042', 'downfire1_Alb.045', 'downfire1_Alb.048', 'downfire1_Alb.051', 'downfire1_Alb.054', 'downfire1_Alb.057', 'downfire1_Alb.059',
        'downfire2_Alb.000', 'downfire2_Alb.002', 'downfire2_Alb.004', 'downfire2_Alb.006', 'downfire2_Alb.008', 'downfire2_Alb.010', 'downfire2_Alb.012', 'downfire2_Alb.014', 'downfire2_Alb.016', 'downfire2_Alb.018', 'downfire2_Alb.020', 'downfire2_Alb.022', 'downfire2_Alb.024', 'downfire2_Alb.026', 'downfire2_Alb.028', 'downfire2_Alb.030', 'downfire2_Alb.032', 'downfire2_Alb.034', 'downfire2_Alb.036', 'downfire2_Alb.038', 'downfire2_Alb.040', 'downfire2_Alb.042', 'downfire2_Alb.044',
        'JumpOutSign_Alb.000',
        'upfire1_Alb.000', 'upfire1_Alb.003', 'upfire1_Alb.006', 'upfire1_Alb.009', 'upfire1_Alb.012', 'upfire1_Alb.015', 'upfire1_Alb.018', 'upfire1_Alb.021', 'upfire1_Alb.024', 'upfire1_Alb.027', 'upfire1_Alb.030', 'upfire1_Alb.033', 'upfire1_Alb.036', 'upfire1_Alb.039', 'upfire1_Alb.042', 'upfire1_Alb.045', 'upfire1_Alb.048', 'upfire1_Alb.051', 'upfire1_Alb.054', 'upfire1_Alb.057', 'upfire1_Alb.059',
        'upfire2_Alb.000', 'upfire2_Alb.002', 'upfire2_Alb.004', 'upfire2_Alb.006', 'upfire2_Alb.008', 'upfire2_Alb.010', 'upfire2_Alb.012', 'upfire2_Alb.014', 'upfire2_Alb.016', 'upfire2_Alb.018', 'upfire2_Alb.020', 'upfire2_Alb.022', 'upfire2_Alb.024', 'upfire2_Alb.026', 'upfire2_Alb.028', 'upfire2_Alb.030', 'upfire2_Alb.032', 'upfire2_Alb.034', 'upfire2_Alb.036', 'upfire2_Alb.038', 'upfire2_Alb.040', 'upfire2_Alb.042', 'upfire2_Alb.044',
    ],)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new InGameEntityImages.Null()
    public static readonly MUNCHER =                                       new InGameEntityImages.ExistantAsBlueVariant('Muncher', 'Enemy - PackunBlack', [
        'wait.0', 'wait.1',
    ], [
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'wait.0', 'wait.1',
    ], [
        'attack_Alb.000', 'attack_Alb.002', 'attack_Alb.004', 'attack_Alb.006', 'attack_Alb.008', 'attack_Alb.010', 'attack_Alb.012', 'attack_Alb.014',
    ],)
    public static readonly PIRANHA_CREEPER =                               new InGameEntityImages.Null()

    public static readonly CHAIN_CHOMP =                                   new InGameEntityImages.Null()
    public static readonly UNCHAINED_CHOMP =                               new InGameEntityImages.Null()
    public static readonly CHAIN_CHOMP_STUMP =                             new InGameEntityImages.Null()

    public static readonly SPIKE =                                         new InGameEntityImages.ExistantAs7InNotSm3dw('Spike', 'Enemy - Gabon', 'throw_ed.0', 'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'wait.0', 'wait.1', [
        'parawait_Alb.000', 'parawait_Alb.002', 'parawait_Alb.004', 'parawait_Alb.006', 'parawait_Alb.008', 'parawait_Alb.010', 'parawait_Alb.012', 'parawait_Alb.014', 'parawait_Alb.016', 'parawait_Alb.018', 'parawait_Alb.020', 'parawait_Alb.022', 'parawait_Alb.024', 'parawait_Alb.026', 'parawait_Alb.028', 'parawait_Alb.030', 'parawait_Alb.032', 'parawait_Alb.034', 'parawait_Alb.036', 'parawait_Alb.038', 'parawait_Alb.040', 'parawait_Alb.042', 'parawait_Alb.044',
        'throw_Alb.000', 'throw_Alb.003', 'throw_Alb.006', 'throw_Alb.009', 'throw_Alb.012', 'throw_Alb.015', 'throw_Alb.018', 'throw_Alb.021', 'throw_Alb.024', 'throw_Alb.027', 'throw_Alb.031', 'throw_Alb.033', 'throw_Alb.036', 'throw_Alb.039', 'throw_Alb.042', 'throw_Alb.045', 'throw_Alb.048', 'throw_Alb.051', 'throw_Alb.054', 'throw_Alb.057', 'throw_Alb.060', 'throw_Alb.063', 'throw_Alb.066', 'throw_Alb.069', 'throw_Alb.072', 'throw_Alb.075', 'throw_Alb.078', 'throw_Alb.081', 'throw_Alb.084', 'throw_Alb.087', 'throw_Alb.090', 'throw_Alb.093', 'throw_Alb.096', 'throw_Alb.099', 'throw_Alb.102', 'throw_Alb.105', 'throw_Alb.108', 'throw_Alb.111', 'throw_Alb.114', 'throw_Alb.117', 'throw_Alb.120', 'throw_Alb.123', 'throw_Alb.126', 'throw_Alb.129', 'throw_Alb.132', 'throw_Alb.134',
        'throw_held_Alb.000', 'throw_held_Alb.003', 'throw_held_Alb.006', 'throw_held_Alb.009', 'throw_held_Alb.012', 'throw_held_Alb.015', 'throw_held_Alb.018', 'throw_held_Alb.021', 'throw_held_Alb.024', 'throw_held_Alb.027', 'throw_held_Alb.031', 'throw_held_Alb.033', 'throw_held_Alb.036', 'throw_held_Alb.039', 'throw_held_Alb.042', 'throw_held_Alb.045', 'throw_held_Alb.048', 'throw_held_Alb.051', 'throw_held_Alb.054', 'throw_held_Alb.057', 'throw_held_Alb.060', 'throw_held_Alb.063', 'throw_held_Alb.066', 'throw_held_Alb.069', 'throw_held_Alb.072', 'throw_held_Alb.075', 'throw_held_Alb.078', 'throw_held_Alb.081', 'throw_held_Alb.084', 'throw_held_Alb.087', 'throw_held_Alb.090', 'throw_held_Alb.093', 'throw_held_Alb.096', 'throw_held_Alb.099', 'throw_held_Alb.102', 'throw_held_Alb.105', 'throw_held_Alb.108', 'throw_held_Alb.111', 'throw_held_Alb.114', 'throw_held_Alb.117', 'throw_held_Alb.120', 'throw_held_Alb.123', 'throw_held_Alb.126', 'throw_held_Alb.129', 'throw_held_Alb.132', 'throw_held_Alb.134',
        'wait_Alb.000', 'wait_Alb.002', 'wait_Alb.004', 'wait_Alb.006', 'wait_Alb.008', 'wait_Alb.010', 'wait_Alb.012', 'wait_Alb.014', 'wait_Alb.016', 'wait_Alb.018', 'wait_Alb.020', 'wait_Alb.022', 'wait_Alb.024', 'wait_Alb.026', 'wait_Alb.028', 'wait_Alb.030', 'wait_Alb.032', 'wait_Alb.034', 'wait_Alb.036', 'wait_Alb.038', 'wait_Alb.040',
    ],)
    public static readonly SPIKE_BALL =                                    new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Spike Ball', 'Enemy - Gabonball', ['gabonball_model',], ['ball_model_Alb.000',],)
    public static readonly SNOWBALL =                                      new InGameEntityImages.ExistantAs1InNotSm3dwButDifferentNsmbu('Snowball', 'Enemy - GabonballSnow', 'gabonball_model', 'ball_model_Alb.000',)

    public static readonly LAKITU =                                        new InGameEntityImages.Null()
    public static readonly LAKITU_CLOUD =                                  new InGameEntityImages.Null()

    public static readonly BOO =                                           new InGameEntityImages.ExistantAs2InNotSm3dw('Boo', 'Enemy - Teresa', 'wait.0', 'walk.0', [
        'edited_wait_Alb.000', 'edited_wait_Alb.005', 'edited_wait_Alb.010', 'edited_wait_Alb.015', 'edited_wait_Alb.020', 'edited_wait_Alb.025', 'edited_wait_Alb.030', 'edited_wait_Alb.035', 'edited_wait_Alb.040', 'edited_wait_Alb.045', 'edited_wait_Alb.050', 'edited_wait_Alb.055', 'edited_wait_Alb.060', 'edited_wait_Alb.065', 'edited_wait_Alb.070', 'edited_wait_Alb.075', 'edited_wait_Alb.080', 'edited_wait_Alb.085', 'edited_wait_Alb.090', 'edited_wait_Alb.095',
        'glow',
        'shay_teresaB_Alb.000', 'shay_teresaB_Alb.001', 'shay_teresaB_Alb.002', 'shay_teresaB_Alb.003', 'shay_teresaB_Alb.004',
    ],)
    public static readonly STRETCH =                                       new InGameEntityImages.ExistantAs6InNotSm3dw('Stretch', 'Enemy - Netchi', 'out.0', 'out.1', 'out.2', 'out.3', 'wait.0', 'walk.0', [
        'glow',
        'in_Alb.000', 'in_Alb.002', 'in_Alb.004', 'in_Alb.006', 'in_Alb.008', 'in_Alb.010', 'in_Alb.012', 'in_Alb.014', 'in_Alb.016', 'in_Alb.018', 'in_Alb.020', 'in_Alb.022', 'in_Alb.024', 'in_Alb.026', 'in_Alb.028', 'in_Alb.030', 'in_Alb.032', 'in_Alb.034', 'in_Alb.036', 'in_Alb.038', 'in_Alb.040',
        'netch_shay_Alb.001', 'netch_shay_Alb.002', 'netch_shay_Alb.003', 'netch_shay_Alb.004', 'netch_shay_Alb.005',
        'out_Alb.000', 'out_Alb.002', 'out_Alb.004', 'out_Alb.006', 'out_Alb.008', 'out_Alb.010', 'out_Alb.012', 'out_Alb.014', 'out_Alb.016', 'out_Alb.018', 'out_Alb.020', 'out_Alb.022', 'out_Alb.024', 'out_Alb.026', 'out_Alb.028', 'out_Alb.030', 'out_Alb.032', 'out_Alb.034', 'out_Alb.036', 'out_Alb.038', 'out_Alb.040',
        'walk_Alb.000', 'walk_Alb.003', 'walk_Alb.006', 'walk_Alb.009', 'walk_Alb.012', 'walk_Alb.015', 'walk_Alb.018', 'walk_Alb.021', 'walk_Alb.024', 'walk_Alb.027', 'walk_Alb.030', 'walk_Alb.033', 'walk_Alb.036', 'walk_Alb.039', 'walk_Alb.042', 'walk_Alb.045',
    ],)
    public static readonly BOO_BUDDIES =                                   new InGameEntityImages.Null()
    public static readonly PEEPA =                                         new InGameEntityImages.Null()

    public static readonly BOB_OMB =                                       new InGameEntityImages.ExistantAsBlueVariant('Bob-omb', 'Enemy - Bombhei', [
        'damage.0', 'fly.0', 'parawait.0', 'parawait.1', 'walk.0', 'walk.1',
    ], [
        'damage.0', 'fly.0', 'parawait.0', 'parawait.1', 'walk.0', 'walk.1',
    ], [
        'damage.0', 'fly.0', 'walk.0', 'walk.1',
    ], [
        'fly_Alb.000', 'fly_Alb.002', 'fly_Alb.004', 'fly_Alb.006', 'fly_Alb.008', 'fly_Alb.010', 'fly_Alb.012', 'fly_Alb.014', 'fly_Alb.016', 'fly_Alb.018', 'fly_Alb.020', 'fly_Alb.022', 'fly_Alb.024', 'fly_Alb.026', 'fly_Alb.028', 'fly_Alb.030', 'fly_Alb32', 'fly_Alb34', 'fly_Alb36', 'fly_Alb38', 'fly_Alb39',
        'stop_Alb000',
        'walk_Alb000', 'walk_Alb001', 'walk_Alb002', 'walk_Alb003', 'walk_Alb004', 'walk_Alb005', 'walk_Alb006', 'walk_Alb007', 'walk_Alb008', 'walk_Alb009', 'walk_Alb010', 'walk_Alb011', 'walk_Alb012', 'walk_Alb013', 'walk_Alb014', 'walk_Alb015', 'walk_Alb016', 'walk_Alb017', 'walk_Alb018', 'walk_Alb019',
    ],)
    public static readonly LIT_BOB_OMB =                                   new InGameEntityImages.Null()

    public static readonly POKEY =                                         new InGameEntityImages.Null()
    public static readonly SNOW_POKEY =                                    new InGameEntityImages.Null()

    public static readonly THWOMP =                                        new InGameEntityImages.Null()

    public static readonly MONTY_MOLE =                                    new InGameEntityImages.ExistantAs3InNotSm3dw('Monty Mole', 'Enemy - Choropoo', 'appear.0', 'walk.0', 'walk.1', [
        'go_out_st_Alb.000', 'go_out_st_Alb.002', 'go_out_st_Alb.004', 'go_out_st_Alb.006', 'go_out_st_Alb.008', 'go_out_st_Alb.010', 'go_out_st_Alb.012', 'go_out_st_Alb.014', 'go_out_st_Alb.016', 'go_out_st_Alb.018',
        'in_dokan_Alb.000', 'in_dokan_Alb.002', 'in_dokan_Alb.004', 'in_dokan_Alb.006', 'in_dokan_Alb.008', 'in_dokan_Alb.009',
        'parawait.Alb.000', 'parawait.Alb.002', 'parawait.Alb.004', 'parawait.Alb.006', 'parawait.Alb.008', 'parawait.Alb.010', 'parawait.Alb.012', 'parawait.Alb.014', 'parawait.Alb.016', 'parawait.Alb.018', 'parawait.Alb.020', 'parawait.Alb.022', 'parawait.Alb.024', 'parawait.Alb.026', 'parawait.Alb.028', 'parawait.Alb.030', 'parawait.Alb.032', 'parawait.Alb.034', 'parawait.Alb.036', 'parawait.Alb.038', 'parawait.Alb.040',
        'walk_Alb.000', 'walk_Alb.001', 'walk_Alb.002', 'walk_Alb.003', 'walk_Alb.004', 'walk_Alb.005', 'walk_Alb.006', 'walk_Alb.007', 'walk_Alb.008', 'walk_Alb.009', 'walk_Alb.010', 'walk_Alb.011', 'walk_Alb.012', 'walk_Alb.013', 'walk_Alb.014', 'walk_Alb.015', 'walk_Alb.016', 'walk_Alb.017', 'walk_Alb.018',],)
    public static readonly ROCKY_WRENCH =                                  new InGameEntityImages.ExistantAs6InNotSm3dw('Rocky Wrench', 'Enemy - Poo', 'damage.0', 'damage.1', 'throw.0', 'throw.1', 'wait.0', 'wait2.0', [
        'dead_Alb.000', 'dead_Alb.002', 'dead_Alb.004', 'dead_Alb.006', 'dead_Alb.008', 'dead_Alb.010', 'dead_Alb.011',
        'fly_Alb.000', 'fly_Alb.003', 'fly_Alb.006', 'fly_Alb.009', 'fly_Alb.012', 'fly_Alb.015', 'fly_Alb.018', 'fly_Alb.021', 'fly_Alb.024', 'fly_Alb.027', 'fly_Alb.029',
        'poo_half_Alb.000', 'poo_half_Alb.004', 'poo_half_Alb.008', 'poo_half_Alb.012', 'poo_half_Alb.016', 'poo_half_Alb.020', 'poo_half_Alb.024', 'poo_half_Alb.028', 'poo_half_Alb.032', 'poo_half_Alb.036', 'poo_half_Alb.040', 'poo_half_Alb.044', 'poo_half_Alb.048', 'poo_half_Alb.052', 'poo_half_Alb.056', 'poo_half_Alb.060', 'poo_half_Alb.064', 'poo_half_Alb.068', 'poo_half_Alb.072',
        'throw_2_Alb.000', 'throw_2_Alb.004', 'throw_2_Alb.008', 'throw_2_Alb.012', 'throw_2_Alb.016', 'throw_2_Alb.020', 'throw_2_Alb.024', 'throw_2_Alb.028', 'throw_2_Alb.032', 'throw_2_Alb.036', 'throw_2_Alb.040', 'throw_2_Alb.044', 'throw_2_Alb.048', 'throw_2_Alb.052', 'throw_2_Alb.056', 'throw_2_Alb.060', 'throw_2_Alb.064', 'throw_2_Alb.068', 'throw_2_Alb.072',
        'throw_4_left_hand_Alb.000', 'throw_4_left_hand_Alb.003', 'throw_4_left_hand_Alb.006', 'throw_4_left_hand_Alb.009', 'throw_4_left_hand_Alb.012', 'throw_4_left_hand_Alb.015', 'throw_4_left_hand_Alb.018', 'throw_4_left_hand_Alb.021', 'throw_4_left_hand_Alb.024', 'throw_4_left_hand_Alb.027', 'throw_4_left_hand_Alb.030', 'throw_4_left_hand_Alb.033', 'throw_4_left_hand_Alb.036', 'throw_4_left_hand_Alb.039', 'throw_4_left_hand_Alb.042', 'throw_4_left_hand_Alb.045', 'throw_4_left_hand_Alb.048', 'throw_4_left_hand_Alb.051', 'throw_4_left_hand_Alb.054', 'throw_4_left_hand_Alb.057', 'throw_4_left_hand_Alb.060', 'throw_4_left_hand_Alb.063', 'throw_4_left_hand_Alb.066', 'throw_4_left_hand_Alb.069', 'throw_4_left_hand_Alb.072', 'throw_4_left_hand_Alb.075', 'throw_4_left_hand_Alb.078', 'throw_4_left_hand_Alb.081', 'throw_4_left_hand_Alb.084', 'throw_4_left_hand_Alb.086',
        'throw_held_Alb.000', 'throw_held_Alb.003', 'throw_held_Alb.006', 'throw_held_Alb.009', 'throw_held_Alb.012', 'throw_held_Alb.015', 'throw_held_Alb.018', 'throw_held_Alb.021', 'throw_held_Alb.024', 'throw_held_Alb.027', 'throw_held_Alb.030', 'throw_held_Alb.033', 'throw_held_Alb.036', 'throw_held_Alb.039', 'throw_held_Alb.042', 'throw_held_Alb.045', 'throw_held_Alb.048', 'throw_held_Alb.051', 'throw_held_Alb.054', 'throw_held_Alb.057', 'throw_held_Alb.060', 'throw_held_Alb.063', 'throw_held_Alb.066', 'throw_held_Alb.069', 'throw_held_Alb.072', 'throw_held_Alb.075', 'throw_held_Alb.078', 'throw_held_Alb.081', 'throw_held_Alb.084', 'throw_held_Alb.086',
    ],)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new InGameEntityImages.ExistantAs4InNotSm3dw('Wrench thrown by a Rocky Wrench', 'Enemy - Poo', 'hammer.0', 'hammer.1', 'hammer.2', 'hammer.3', ['spanner_Alb.000',],)

    public static readonly MAGIKOOPA =                                     new InGameEntityImages.Null()
    public static readonly MAGIKOOPA_PROJECTILE =                          new InGameEntityImages.ExistantAs5WithSameSmbSmb3SmwAnd1NsmbuSm3dw('Magikoopa', 'Enemy - Kameck', 'effect.0', 'effect.1', 'effect.2', 'wing_wait.0', 'wing_wait.1', 'effect.0',)

    public static readonly HAMMER_BRO =                                    new InGameEntityImages.ExistantAsNoVariantWithSameSmb3Smw('Hammer Bro', 'Enemy - Bros', [
        'throw.0', 'throw.1',
        'walk.0', 'walk.1',
    ], [
        'jump.0',
        'throw.0', 'throw.1',
        'walk.0', 'walk.1',
    ], [
        'dead_Alb.000', 'dead_Alb.002', 'dead_Alb.004', 'dead_Alb.006', 'dead_Alb.008', 'dead_Alb.010', 'dead_Alb.012', 'dead_Alb.014',
        'jump_ed_Alb.000', 'jump_ed_Alb.002', 'jump_ed_Alb.004', 'jump_ed_Alb.006', 'jump_ed_Alb.008', 'jump_ed_Alb.010', 'jump_ed_Alb.012',
        'jump_md_Alb.000', 'jump_md_Alb.004', 'jump_md_Alb.008', 'jump_md_Alb.012', 'jump_md_Alb.016', 'jump_md_Alb.020', 'jump_md_Alb.024', 'jump_md_Alb.028', 'jump_md_Alb.032', 'jump_md_Alb.036', 'jump_md_Alb.040', 'jump_md_Alb.044', 'jump_md_Alb.048', 'jump_md_Alb.052', 'jump_md_Alb.056', 'jump_md_Alb.060',
        'jump_st_Alb.000', 'jump_st_Alb.002', 'jump_st_Alb.004', 'jump_st_Alb.006', 'jump_st_Alb.008', 'jump_st_Alb.010',
        'parawait_Alb.000', 'parawait_Alb.002', 'parawait_Alb.004', 'parawait_Alb.006', 'parawait_Alb.008', 'parawait_Alb.010', 'parawait_Alb.012', 'parawait_Alb.014', 'parawait_Alb.016', 'parawait_Alb.018', 'parawait_Alb.020', 'parawait_Alb.022', 'parawait_Alb.024', 'parawait_Alb.026', 'parawait_Alb.028', 'parawait_Alb.030', 'parawait_Alb.032', 'parawait_Alb.034', 'parawait_Alb.036', 'parawait_Alb.038', 'parawait_Alb.040', 'parawait_Alb.042', 'parawait_Alb.044', 'parawait_Alb.046', 'parawait_Alb.048', 'parawait_Alb.050', 'parawait_Alb.052', 'parawait_Alb.054', 'parawait_Alb.056', 'parawait_Alb.058',
        'throw_Alb.000', 'throw_Alb.002', 'throw_Alb.004', 'throw_Alb.006', 'throw_Alb.008', 'throw_Alb.010', 'throw_Alb.014', 'throw_Alb.016', 'throw_Alb.018', 'throw_Alb.020', 'throw_Alb.022', 'throw_Alb.024', 'throw_Alb.026', 'throw_Alb.028', 'throw_Alb.030', 'throw_Alb.032', 'throw_Alb.034', 'throw_Alb.036', 'throw_Alb.038', 'throw_Alb.040', 'throw_Alb.042', 'throw_Alb.044', 'throw_Alb.046', 'throw_Alb.048', 'throw_Alb.050', 'throw_Alb.052', 'throw_Alb.054', 'throw_Alb.056', 'throw_Alb.058', 'throw_Alb.060',
        'throw_held_Alb.000', 'throw_held_Alb.002', 'throw_held_Alb.004', 'throw_held_Alb.006', 'throw_held_Alb.008', 'throw_held_Alb.010', 'throw_held_Alb.014', 'throw_held_Alb.016', 'throw_held_Alb.018', 'throw_held_Alb.020', 'throw_held_Alb.022', 'throw_held_Alb.024', 'throw_held_Alb.026', 'throw_held_Alb.028', 'throw_held_Alb.030', 'throw_held_Alb.032', 'throw_held_Alb.034', 'throw_held_Alb.036', 'throw_held_Alb.038', 'throw_held_Alb.040', 'throw_held_Alb.042', 'throw_held_Alb.044', 'throw_held_Alb.046', 'throw_held_Alb.048', 'throw_held_Alb.050', 'throw_held_Alb.052', 'throw_held_Alb.054', 'throw_held_Alb.056', 'throw_held_Alb.058', 'throw_held_Alb.060', 'throw_held_Alb.062', 'throw_held_Alb.064', 'throw_held_Alb.066',
        'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018', 'walk_Alb.020', 'walk_Alb.022', 'walk_Alb.024', 'walk_Alb.026', 'walk_Alb.028', 'walk_Alb.030', 'walk_Alb.031',],)
    public static readonly SLEDGE_BRO =                                    new InGameEntityImages.ExistantAsNoVariantWithSameSmb3Smw('Sledge Bro', 'Enemy - BrosMega', [
        'throw.0', 'throw.1',
        'walk.0', 'walk.1',
    ], [
        'jump.0',
        'throw.0', 'throw.1',
        'walk.0', 'walk.1',
    ], [
        'jump_attack_Alb.000', 'jump_attack_Alb.004', 'jump_attack_Alb.008', 'jump_attack_Alb.012', 'jump_attack_Alb.016', 'jump_attack_Alb.020', 'jump_attack_Alb.024', 'jump_attack_Alb.028', 'jump_attack_Alb.032', 'jump_attack_Alb.036', 'jump_attack_Alb.040',
        'jump_attack_ed_Alb.000', 'jump_attack_ed_Alb.003', 'jump_attack_ed_Alb.006', 'jump_attack_ed_Alb.009', 'jump_attack_ed_Alb.012', 'jump_attack_ed_Alb.015',
        'jump_attack_stop_Alb.000', 'jump_attack_stop_Alb.001', 'jump_attack_stop_Alb.002', 'jump_attack_stop_Alb.003', 'jump_attack_stop_Alb.004', 'jump_attack_stop_Alb.005', 'jump_attack_stop_Alb.006',
        'jump_ed_Alb.000', 'jump_ed_Alb.002', 'jump_ed_Alb.004', 'jump_ed_Alb.006', 'jump_ed_Alb.008', 'jump_ed_Alb.010', 'jump_ed_Alb.012', 'jump_ed_Alb.014', 'jump_ed_Alb.016', 'jump_ed_Alb.018', 'jump_ed_Alb.020', 'jump_ed_Alb.022',
        'jump_st_Alb.004', 'jump_st_Alb.006', 'jump_st_Alb.008', 'jump_st_Alb.010', 'jump_st_Alb.012', 'jump_st_Alb.014', 'jump_st_Alb.016',
        'parawait_Alb.000', 'parawait_Alb.002', 'parawait_Alb.004', 'parawait_Alb.006', 'parawait_Alb.008', 'parawait_Alb.010', 'parawait_Alb.012', 'parawait_Alb.014', 'parawait_Alb.016', 'parawait_Alb.018', 'parawait_Alb.020', 'parawait_Alb.022', 'parawait_Alb.024', 'parawait_Alb.026', 'parawait_Alb.028', 'parawait_Alb.030', 'parawait_Alb.032', 'parawait_Alb.034', 'parawait_Alb.036', 'parawait_Alb.038', 'parawait_Alb.040', 'parawait_Alb.042', 'parawait_Alb.044', 'parawait_Alb.046', 'parawait_Alb.048', 'parawait_Alb.050', 'parawait_Alb.052', 'parawait_Alb.054', 'parawait_Alb.056', 'parawait_Alb.058',
        'throw_L_Alb.004', 'throw_L_Alb.006', 'throw_L_Alb.008', 'throw_L_Alb.010', 'throw_L_Alb.014', 'throw_L_Alb.016', 'throw_L_Alb.018', 'throw_L_Alb.020', 'throw_L_Alb.022', 'throw_L_Alb.024', 'throw_L_Alb.026', 'throw_L_Alb.028', 'throw_L_Alb.030', 'throw_L_Alb.032', 'throw_L_Alb.034', 'throw_L_Alb.036', 'throw_L_Alb.038', 'throw_L_Alb.040', 'throw_L_Alb.042', 'throw_L_Alb.044', 'throw_L_Alb.046', 'throw_L_Alb.048', 'throw_L_Alb.050', 'throw_L_Alb.052',
        'throw_L_held_Alb.000', 'throw_L_held_Alb.002', 'throw_L_held_Alb.004', 'throw_L_held_Alb.006', 'throw_L_held_Alb.008', 'throw_L_held_Alb.010', 'throw_L_held_Alb.014', 'throw_L_held_Alb.016', 'throw_L_held_Alb.018', 'throw_L_held_Alb.020', 'throw_L_held_Alb.022', 'throw_L_held_Alb.024', 'throw_L_held_Alb.026', 'throw_L_held_Alb.028', 'throw_L_held_Alb.030', 'throw_L_held_Alb.032', 'throw_L_held_Alb.034', 'throw_L_held_Alb.036', 'throw_L_held_Alb.038', 'throw_L_held_Alb.040', 'throw_L_held_Alb.042', 'throw_L_held_Alb.044', 'throw_L_held_Alb.046', 'throw_L_held_Alb.048', 'throw_L_held_Alb.050', 'throw_L_held_Alb.052',
        'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018', 'walk_Alb.020', 'walk_Alb.022', 'walk_Alb.024', 'walk_Alb.026', 'walk_Alb.028', 'walk_Alb.030', 'walk_Alb.032',],)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new InGameEntityImages.ExistantAs1InNotSm3dwButDifferentNsmbu('Hammer thrown by a Hammer / Sledge Bro', 'Enemy - Bros', 'hammer.0', 'bros_hammer_Alb.000',)
    public static readonly FIRE_BRO =                                      new InGameEntityImages.Null()
    public static readonly HEAVY_FIRE_BRO =                                new InGameEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new InGameEntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new InGameEntityImages.ExistantAsNoVariant('Lava Bubble', 'Enemy - Bubble', ['wait.0',], ['wait.0', 'wait.1', 'wait.2',], ['wait.0', 'wait.1',], ['bubble_Alb.000',],)

    public static readonly MECHAKOOPA =                                    new InGameEntityImages.ExistantAsNoVariant('Mechakoopa', 'Enemy - KoopaMecha', [
        'break_modelA', 'break_modelB', 'break_modelC', 'break_modelD',
        'damage.0', 'damage.1', 'damage.2',
        'dokan.0', 'edit_indokan.0',
        'fly.0', 'fly.1',
        'walk.0', 'walk.1',
    ], [
        'break_modelA', 'break_modelB', 'break_modelC', 'break_modelD',
        'damage.0', 'damage.1', 'damage.2',
        'dokan.0', 'edit_indokan.0',
        'fly.0', 'fly.1', 'fly.2', 'fly.3',
        'walk.0', 'walk.1', 'walk.2', 'walk.3',
    ], [
        'break_modelA', 'break_modelB', 'break_modelC', 'break_modelD',
        'damage.0', 'damage.1', 'damage.2',
        'dokan.0', 'dokan.1', 'dokan.2', 'edit_indokan.0',
        'fly.0', 'fly.1', 'fly.2', 'fly.3',
        'walk.0', 'walk.1', 'walk.2', 'walk.3',
    ], [
        'damage_Alb.000', 'damage_Alb.002', 'damage_Alb.004', 'damage_Alb.006', 'damage_Alb.008', 'damage_Alb.010', 'damage_Alb.012', 'damage_Alb.014', 'damage_Alb.016',
        'dokan_Alb.000', 'dokan_Alb.001', 'dokan_Alb.003', 'dokan_Alb.005', 'dokan_Alb.007', 'dokan_Alb.009', 'in_dokan_Alb.000',
        'jump_ed_Alb.000', 'jump_ed_Alb.002', 'jump_ed_Alb.004', 'jump_ed_Alb.006',
        'jump_md_Alb.000', 'jump_md_Alb.002', 'jump_md_Alb.004', 'jump_md_Alb.006', 'jump_md_Alb.008', 'jump_md_Alb.010', 'jump_md_Alb.012', 'jump_md_Alb.014',
        'jump_st_Alb.000', 'jump_st_Alb.002', 'jump_st_Alb.004', 'jump_st_Alb.006',
        'mechakoopa_Alb.000',
        'parawait_Alb.000', 'parawait_Alb.001', 'parawait_Alb.002', 'parawait_Alb.003', 'parawait_Alb.004', 'parawait_Alb.005', 'parawait_Alb.006', 'parawait_Alb.007', 'parawait_Alb.008', 'parawait_Alb.009',
        'parawait_Alb.010', 'parawait_Alb.011', 'parawait_Alb.012', 'parawait_Alb.013', 'parawait_Alb.014', 'parawait_Alb.015', 'parawait_Alb.016', 'parawait_Alb.017', 'parawait_Alb.018', 'parawait_Alb.019',
        'partsA_Alb.000', 'partsB_Alb.000', 'partsC_Alb.000', 'partsD_Alb.000',
        'revival_Alb.000', 'revival_Alb.002', 'revival_Alb.004', 'revival_Alb.006', 'revival_Alb.008', 'revival_Alb.010', 'revival_Alb.012', 'revival_Alb.014', 'revival_Alb.016',
        'sign_Alb.000', 'sign_Alb.002', 'sign_Alb.004', 'sign_Alb.006', 'sign_Alb.008', 'sign_Alb.010',
        'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018',
    ],)
    public static readonly BLASTA_MECHAKOOPA =                             new InGameEntityImages.ExistantAsNoVariant('Blasta Mechakoopa', 'Enemy - KoopaMechaMissile', [
        'break_modelA', 'break_modelB', 'break_modelC', 'break_modelD',
        'damage.0', 'damage.1', 'damage.2',
        'dokan.0', 'edit_indokan.0',
        'fire.0', 'fire.1', 'fire.2', 'fire.3', 'fire.4', 'fire.5', 'fire.6',
        'fly.0', 'fly.1',
        'walk.0', 'walk.1',
    ], [
        'break_modelA', 'break_modelB', 'break_modelC', 'break_modelD',
        'damage.0', 'damage.1', 'damage.2',
        'dokan.0', 'edit_indokan.0',
        'fire.0', 'fire.1', 'fire.2', 'fire.3', 'fire.4', 'fire.5', 'fire.6',
        'fly.0', 'fly.1', 'fly.2', 'fly.3',
        'walk.0', 'walk.1', 'walk.2', 'walk.3',
    ], [
        'break_modelA', 'break_modelB', 'break_modelC', 'break_modelD',
        'damage.0', 'damage.1', 'damage.2',
        'dokan.0', 'dokan.1', 'dokan.2', 'edit_indokan.0',
        'fire.0', 'fire.1', 'fire.2', 'fire.3', 'fire.4', 'fire.5', 'fire.6', 'fire.7',
        'fly.0', 'fly.1', 'fly.2', 'fly.3',
        'walk.0', 'walk.1', 'walk.2', 'walk.3',
    ], [
        'damage_Alb.000', 'damage_Alb.002', 'damage_Alb.004', 'damage_Alb.006', 'damage_Alb.008', 'damage_Alb.010', 'damage_Alb.012', 'damage_Alb.014', 'damage_Alb.016',
        'dokan_Alb.000', 'dokan_Alb.001', 'dokan_Alb.003', 'dokan_Alb.005', 'dokan_Alb.007', 'dokan_Alb.009', 'in_dokan_Alb.000',
        'fire_ed_Alb.000', 'fire_ed_Alb.002', 'fire_ed_Alb.004',
        'fire_st_Alb.000', 'fire_st_Alb.002', 'fire_st_Alb.004', 'fire_st_Alb.006', 'fire_st_Alb.008',
        'fire_st_Alb.010', 'fire_st_Alb.012', 'fire_st_Alb.014', 'fire_st_Alb.016', 'fire_st_Alb.018',
        'fire_st_Alb.020', 'fire_st_Alb.022', 'fire_st_Alb.024', 'fire_st_Alb.026', 'fire_st_Alb.027',
        'fire_st_wait_Alb.000', 'fire_st_wait_Alb.001',
        'fire_wait_st_Alb.000', 'fire_wait_st_Alb.002', 'fire_wait_st_Alb.004', 'fire_wait_st_Alb.006', 'fire_wait_st_Alb.008',
        'fire_wait_st_Alb.010', 'fire_wait_st_Alb.012', 'fire_wait_st_Alb.014', 'fire_wait_st_Alb.016', 'fire_wait_st_Alb.018',
        'fire_wait_st_Alb.020', 'fire_wait_st_Alb.022', 'fire_wait_st_Alb.024', 'fire_st_wait_Alb.026',
        'jump_ed_Alb.000', 'jump_ed_Alb.002', 'jump_ed_Alb.004', 'jump_ed_Alb.006',
        'jump_md_Alb.000', 'jump_md_Alb.002', 'jump_md_Alb.004', 'jump_md_Alb.006', 'jump_md_Alb.008', 'jump_md_Alb.010', 'jump_md_Alb.012', 'jump_md_Alb.014',
        'jump_st_Alb.000', 'jump_st_Alb.002', 'jump_st_Alb.004', 'jump_st_Alb.006',
        'parawait_Alb.000', 'parawait_Alb.001', 'parawait_Alb.002', 'parawait_Alb.003', 'parawait_Alb.004', 'parawait_Alb.005', 'parawait_Alb.006', 'parawait_Alb.007', 'parawait_Alb.008', 'parawait_Alb.009',
        'parawait_Alb.010', 'parawait_Alb.011', 'parawait_Alb.012', 'parawait_Alb.013', 'parawait_Alb.014', 'parawait_Alb.015', 'parawait_Alb.016', 'parawait_Alb.017', 'parawait_Alb.018', 'parawait_Alb.019',
        'partsA_Alb.000', 'partsB_Alb.000', 'partsC_Alb.000', 'partsD_Alb.000',
        'revival_Alb.000', 'revival_Alb.002', 'revival_Alb.004', 'revival_Alb.006', 'revival_Alb.008', 'revival_Alb.010', 'revival_Alb.012', 'revival_Alb.014', 'revival_Alb.016',
        'sign_Alb.000', 'sign_Alb.002', 'sign_Alb.004', 'sign_Alb.006', 'sign_Alb.008', 'sign_Alb.010',
        'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018',
    ],)
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new InGameEntityImages.ExistantAs2InNotSm3dwAnd1Nsmbu('Homing Missile thrown by a Blasta Mechakoopa', 'Enemy - KoopaMechaMissile', 'missile.0', 'missile.1', 'mechabomb_Alb.000',)
    public static readonly ZAPPA_MECHAKOOPA =                              new InGameEntityImages.ExistantAsNoVariant('Zappa Mechakoopa', 'Enemy - KoopaMechaLaser', [
        'break_modelA', 'break_modelB', 'break_modelC', 'break_modelD',
        'damage.0', 'damage.1', 'damage.2',
        'dokan.0', 'edit_indokan.0',
        'fire.0', 'fire.1', 'fire.2', 'fire.3', 'fire.4', 'fire.5',
        'fly.0', 'fly.1',
        'walk.0', 'walk.1',
    ], [
        'break_modelA', 'break_modelB', 'break_modelC', 'break_modelD',
        'damage.0', 'damage.1', 'damage.2',
        'dokan.0', 'edit_indokan.0',
        'fire.0', 'fire.1', 'fire.2', 'fire.3', 'fire.4', 'fire.5', 'fire.6',
        'fly.0', 'fly.1', 'fly.2', 'fly.3',
        'walk.0', 'walk.1', 'walk.2', 'walk.3',
    ], [
        'break_modelA', 'break_modelB', 'break_modelC', 'break_modelD',
        'damage.0', 'damage.1', 'damage.2',
        'dokan.0', 'dokan.1', 'dokan.2', 'edit_indokan.0',
        'fire.0', 'fire.1', 'fire.2', 'fire.3', 'fire.4', 'fire.5',
        'fly.0', 'fly.1', 'fly.2', 'fly.3',
        'walk.0', 'walk.1', 'walk.2', 'walk.3',
    ], [
        'damage_Alb.000', 'damage_Alb.002', 'damage_Alb.004', 'damage_Alb.006', 'damage_Alb.008', 'damage_Alb.010', 'damage_Alb.012', 'damage_Alb.014', 'damage_Alb.016',
        'dokan_Alb.000', 'dokan_Alb.001', 'dokan_Alb.003', 'dokan_Alb.005', 'dokan_Alb.007', 'dokan_Alb.009', 'in_dokan_Alb.000',
        'fire_ed_Alb.000', 'fire_ed_Alb.002', 'fire_ed_Alb.004',
        'fire_st_Alb.000', 'fire_st_Alb.002', 'fire_st_Alb.004', 'fire_st_Alb.006', 'fire_st_Alb.008',
        'fire_st_Alb.010', 'fire_st_Alb.012', 'fire_st_Alb.014', 'fire_st_Alb.016', 'fire_st_Alb.018',
        'fire_st_Alb.020', 'fire_st_Alb.022', 'fire_st_Alb.024', 'fire_st_Alb.026', 'fire_st_Alb.027',
        'fire_st_wait_Alb.000', 'fire_st_wait_Alb.001',
        'fire_wait_st_Alb.000', 'fire_wait_st_Alb.002', 'fire_wait_st_Alb.004', 'fire_wait_st_Alb.006', 'fire_wait_st_Alb.008',
        'jump_ed_Alb.000', 'jump_ed_Alb.002', 'jump_ed_Alb.004', 'jump_ed_Alb.006',
        'jump_md_Alb.000', 'jump_md_Alb.002', 'jump_md_Alb.004', 'jump_md_Alb.006', 'jump_md_Alb.008', 'jump_md_Alb.010', 'jump_md_Alb.012', 'jump_md_Alb.014',
        'jump_st_Alb.000', 'jump_st_Alb.002', 'jump_st_Alb.004', 'jump_st_Alb.006',
        'parawait_Alb.000', 'parawait_Alb.001', 'parawait_Alb.002', 'parawait_Alb.003', 'parawait_Alb.004', 'parawait_Alb.005', 'parawait_Alb.006', 'parawait_Alb.007', 'parawait_Alb.008', 'parawait_Alb.009',
        'parawait_Alb.010', 'parawait_Alb.011', 'parawait_Alb.012', 'parawait_Alb.013', 'parawait_Alb.014', 'parawait_Alb.015', 'parawait_Alb.016', 'parawait_Alb.017', 'parawait_Alb.018', 'parawait_Alb.019',
        'partsA_Alb.000', 'partsB_Alb.000', 'partsC_Alb.000', 'partsD_Alb.000',
        'revival_Alb.000', 'revival_Alb.002', 'revival_Alb.004', 'revival_Alb.006', 'revival_Alb.008', 'revival_Alb.010', 'revival_Alb.012', 'revival_Alb.014', 'revival_Alb.016',
        'sign_Alb.000', 'sign_Alb.002', 'sign_Alb.004', 'sign_Alb.006', 'sign_Alb.008', 'sign_Alb.010',
        'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018',
    ],)
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new InGameEntityImages.Null()

    public static readonly CHARVAARGH =                                    new InGameEntityImages.Null()

    public static readonly BULLY =                                         new InGameEntityImages.Null()

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Bill Blaster', 'Enemy - KillerHoudai', [
        'wait.0', 'unit.0',
    ], [
        'killer_houdai_Alb.000', 'killer_houdai_Alb.002', 'killer_houdai_Alb.004', 'killer_houdai_Alb.006', 'killer_houdai_Alb.008', 'killer_houdai_Alb.0010', 'killer_houdai_Alb.0012', 'killer_houdai_Alb.0014', 'killer_houdai_Alb.0016', 'killer_houdai_Alb.0018', 'killer_houdai_Alb.0020', 'killer_houdai_Alb.0022', 'killer_houdai_Alb.0024', 'killer_houdai_Alb.0026', 'killer_houdai_Alb.0028', 'killer_houdai_Alb.0029',
        'unit_Alb.000',
    ],)
    public static readonly BULLET_BILL =                                   new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Bullet Bill', 'Enemy - Killer', [
        'wait.0',
    ], [
        'search_Alb.000', 'search_Alb.003', 'search_Alb.006', 'search_Alb.009', 'search_Alb.012', 'search_Alb.015', 'search_Alb.018', 'search_Alb.021', 'search_Alb.024', 'search_Alb.027', 'search_Alb.030', 'search_Alb.033', 'search_Alb.036', 'search_Alb.039', 'search_Alb.042', 'search_Alb.045',
        'search_Alb.047',
    ],)
    public static readonly BULL_EYE_BLASTER =                              new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Bull’s-Eye Blaster', 'Enemy - KillerHoudai', [
        'search.0', 'unit_search.0',
    ], [
        'SK_killer_houdai_Alb.000', 'SK_killer_houdai_Alb.002', 'SK_killer_houdai_Alb.004', 'SK_killer_houdai_Alb.006', 'SK_killer_houdai_Alb.008', 'SK_killer_houdai_Alb.0010', 'SK_killer_houdai_Alb.0012', 'SK_killer_houdai_Alb.0014', 'SK_killer_houdai_Alb.0016', 'SK_killer_houdai_Alb.0018', 'SK_killer_houdai_Alb.0020', 'SK_killer_houdai_Alb.0022', 'SK_killer_houdai_Alb.0024', 'SK_killer_houdai_Alb.0026', 'SK_killer_houdai_Alb.0028', 'SK_killer_houdai_Alb.0029',
        'SK_unit_Alb.000',
    ],)
    public static readonly BULL_EYE_BILL =                                 new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Bull’s-Eye Bill', 'Enemy - Killer', [
        'search.0',
    ], [
        'SK_search_Alb.000', 'SK_search_Alb.003', 'SK_search_Alb.006', 'SK_search_Alb.009', 'SK_search_Alb.012', 'SK_search_Alb.015', 'SK_search_Alb.018', 'SK_search_Alb.021', 'SK_search_Alb.024', 'SK_search_Alb.027', 'SK_search_Alb.030', 'SK_search_Alb.033', 'SK_search_Alb.036', 'SK_search_Alb.039', 'SK_search_Alb.042', 'SK_search_Alb.045', 'SK_search_Alb.047',
    ],)
    public static readonly CAT_BULLET_BILL =                               new InGameEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Banzai Bill', 'Enemy - KillerMagnum', ['wait.0',], ['killer_mag_Alb.000',],)
    public static readonly BULL_EYE_BANZAI =                               new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Bull’s-Eye Banzai', 'Enemy - KillerMagnum', ['search.0',], ['killer_mag_surch_Alb.000',],)
    public static readonly CAT_BANZAI_BILL =                               new InGameEntityImages.Null()

    public static readonly CANNON =                                        new InGameEntityImages.Null()
    public static readonly CANNONBALL =                                    new InGameEntityImages.Null()
    public static readonly RED_CANNON =                                    new InGameEntityImages.Null()
    public static readonly RED_CANNONBALL =                                new InGameEntityImages.Null()

    public static readonly BURNER =                                        new InGameEntityImages.Null()

    public static readonly FIRE_BAR =                                      new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3('Fire Bar', 'Object - Firebar', [
        'block', 'fire.0',
    ], [
        'block', 'fire.0', 'fire.1', 'fire.2',
    ], [
        'center_firebar_Alb.000', 'firebar', 'firebar_core',
    ],)

    public static readonly SKEWER =                                        new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3Smw('Skewer', 'Object - Daikonbou', ['edit', 'top', 'wait_body.0', 'wait_under.0',], [
        'edit_daikonbou_Alb.000',
        'daikonbou_top_Alb.000',
        'daikonbou_body_Alb.000', 'daikonbou_body_Alb.001', 'daikonbou_body_Alb.002', 'daikonbou_body_Alb.003', 'daikonbou_body_Alb.004', 'daikonbou_body_Alb.005', 'daikonbou_body_Alb.006', 'daikonbou_body_Alb.007', 'daikonbou_body_Alb.008', 'daikonbou_body_Alb.009', 'daikonbou_body_Alb.010', 'daikonbou_body_Alb.011', 'daikonbou_body_Alb.012', 'daikonbou_body_Alb.013', 'daikonbou_body_Alb.014',
        'daikonbou_under_Alb.000', 'daikonbou_under_Alb.001', 'daikonbou_under_Alb.002', 'daikonbou_under_Alb.003', 'daikonbou_under_Alb.004', 'daikonbou_under_Alb.005', 'daikonbou_under_Alb.006', 'daikonbou_under_Alb.007', 'daikonbou_under_Alb.008', 'daikonbou_under_Alb.009', 'daikonbou_under_Alb.010', 'daikonbou_under_Alb.011', 'daikonbou_under_Alb.012', 'daikonbou_under_Alb.013', 'daikonbou_under_Alb.014',
    ],)

    public static readonly KOOPA_CLOWN_CAR =                               new InGameEntityImages.ExistantAsNoVariantWithSameSmb3Smw('Koopa Clown Car', 'Enemy - KoopaClown', [
        'anger.0', 'anger.1', 'anger.2', 'anger.3',
        'blink.0', 'blink.1', 'blink.2', 'blink.3',
        'bomb.0', 'bomb.1', 'bomb.2', 'bomb.3',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
        'weep.0', 'weep.1', 'weep.2', 'weep.3',
    ], [
        'anger.0', 'anger.1', 'anger.2', 'anger.3',
        'blink.0', 'blink.1', 'blink.2', 'blink.3',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
        'weep.0', 'weep.1', 'weep.2', 'weep.3',
    ], EMPTY_ARRAY,)
    public static readonly JUNIOR_CLOWN_CAR =                              new InGameEntityImages.ExistantInOnlyNsmbu('Junior Clown Car', 'WU Enemy - KoopaClown', [
        'edited_koopaJr_clown_angry_Alb.000', 'edited_koopaJr_clown_angry_Alb.001', 'edited_koopaJr_clown_angry_Alb.002', 'edited_koopaJr_clown_angry_Alb.003', 'edited_koopaJr_clown_angry_Alb.004', 'edited_koopaJr_clown_angry_Alb.005',
        'edited_koopaJr_clown_blink_Alb.000', 'edited_koopaJr_clown_blink_Alb.001', 'edited_koopaJr_clown_blink_Alb.002', 'edited_koopaJr_clown_blink_Alb.003', 'edited_koopaJr_clown_blink_Alb.004', 'edited_koopaJr_clown_blink_Alb.005',
        'edited_koopaJr_clown_smile_Alb.000', 'edited_koopaJr_clown_smile_Alb.001', 'edited_koopaJr_clown_smile_Alb.002', 'edited_koopaJr_clown_smile_Alb.003', 'edited_koopaJr_clown_smile_Alb.004', 'edited_koopaJr_clown_smile_Alb.005',
        'edited_koopaJr_clown_weep_Alb.000', 'edited_koopaJr_clown_weep_Alb.001', 'edited_koopaJr_clown_weep_Alb.002', 'edited_koopaJr_clown_weep_Alb.003', 'edited_koopaJr_clown_weep_Alb.004', 'edited_koopaJr_clown_weep_Alb.005',
    ],)
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new InGameEntityImages.ExistantAsNoVariantWithSameSmb3Smw('Fire Koopa Clown Car', 'Enemy - KoopaClownFire', [
        'anger.0', 'anger.1', 'anger.2', 'anger.3',
        'blink.0', 'blink.1', 'blink.2', 'blink.3',
        'bomb.0', 'bomb.1', 'bomb.2', 'bomb.3',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
        'weep.0', 'weep.1', 'weep.2', 'weep.3',
    ], [
        'anger.0', 'anger.1', 'anger.2', 'anger.3',
        'blink.0', 'blink.1', 'blink.2', 'blink.3',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
        'weep.0', 'weep.1', 'weep.2', 'weep.3',
    ], EMPTY_ARRAY,)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new InGameEntityImages.ExistantInOnlyNsmbu('Fire Junior Clown Car', 'WU Enemy - KoopaClownFire', [
        'edited_koopaJr_clown_angry_Alb.000', 'edited_koopaJr_clown_angry_Alb.001', 'edited_koopaJr_clown_angry_Alb.002', 'edited_koopaJr_clown_angry_Alb.003', 'edited_koopaJr_clown_angry_Alb.004', 'edited_koopaJr_clown_angry_Alb.005',
        'edited_koopaJr_clown_blink_Alb.000', 'edited_koopaJr_clown_blink_Alb.001', 'edited_koopaJr_clown_blink_Alb.002', 'edited_koopaJr_clown_blink_Alb.003', 'edited_koopaJr_clown_blink_Alb.004', 'edited_koopaJr_clown_blink_Alb.005',
        'edited_koopaJr_clown_smile_Alb.000', 'edited_koopaJr_clown_smile_Alb.001', 'edited_koopaJr_clown_smile_Alb.002', 'edited_koopaJr_clown_smile_Alb.003', 'edited_koopaJr_clown_smile_Alb.004', 'edited_koopaJr_clown_smile_Alb.005',
        'edited_koopaJr_clown_weep_Alb.000', 'edited_koopaJr_clown_weep_Alb.001', 'edited_koopaJr_clown_weep_Alb.002', 'edited_koopaJr_clown_weep_Alb.003', 'edited_koopaJr_clown_weep_Alb.004', 'edited_koopaJr_clown_weep_Alb.005',
    ],)
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new InGameEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new InGameEntityImages.Null()
    public static readonly CAR =                                           new InGameEntityImages.Null()

    public static readonly GRINDER =                                       new InGameEntityImages.ExistantAs1InNotSm3dwButDifferentNsmbu('Grinder', 'Object - Saw', 'wait.0', 'saw_model_Alb.000',)

    public static readonly ANGRY_SUN =                                     new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3('Angry Sun', 'Object - Sun', [
        'attack.0', 'attack.1',
        'wait.0',
    ], [
        'attack.0', 'attack.1', 'attack.2', 'attack.3',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'attack_Alb.000', 'attack_Alb.002', 'attack_Alb.004', 'attack_Alb.006', 'attack_Alb.008', 'attack_Alb.010', 'attack_Alb.012', 'attack_Alb.014', 'attack_Alb.016', 'attack_Alb.018', 'attack_Alb.020', 'attack_Alb.022', 'attack_Alb.024', 'attack_Alb.026', 'attack_Alb.028', 'attack_Alb.030', 'attack_Alb.032', 'attack_Alb.034', 'attack_Alb.036', 'attack_Alb.038', 'attack_Alb.040', 'attack_Alb.042', 'attack_Alb.044', 'attack_Alb.046', 'attack_Alb.048', 'attack_Alb.050', 'attack_Alb.052', 'attack_Alb.054', 'attack_Alb.056', 'attack_Alb.058',
        'wait_Alb.000', 'wait_Alb.002', 'wait_Alb.004', 'wait_Alb.006', 'wait_Alb.008', 'wait_Alb.010', 'wait_Alb.012', 'wait_Alb.014', 'wait_Alb.016', 'wait_Alb.018', 'wait_Alb.020', 'wait_Alb.022', 'wait_Alb.024', 'wait_Alb.026', 'wait_Alb.028', 'wait_Alb.030', 'wait_Alb.032', 'wait_Alb.034', 'wait_Alb.036', 'wait_Alb.038', 'wait_Alb.040', 'wait_Alb.042', 'wait_Alb.044', 'wait_Alb.046', 'wait_Alb.048', 'wait_Alb.050', 'wait_Alb.052', 'wait_Alb.054', 'wait_Alb.056', 'wait_Alb.058',
    ],)
    public static readonly MOON =                                          new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3('Moon', 'Object - Moon', [
        'attack.0', 'attack.1',
        'wait.0',
    ], [
        'attack.0', 'attack.1',
        'wait.0', 'wait.1',
    ], [
        'wait_Alb.000', 'wait_Alb.002', 'wait_Alb.004', 'wait_Alb.006', 'wait_Alb.008', 'wait_Alb.010', 'wait_Alb.012', 'wait_Alb.014', 'wait_Alb.016', 'wait_Alb.018', 'wait_Alb.020', 'wait_Alb.022', 'wait_Alb.024', 'wait_Alb.026', 'wait_Alb.028', 'wait_Alb.030', 'wait_Alb.032', 'wait_Alb.034', 'wait_Alb.036', 'wait_Alb.038', 'wait_Alb.040', 'wait_Alb.042', 'wait_Alb.044', 'wait_Alb.046', 'wait_Alb.048', 'wait_Alb.050', 'wait_Alb.052', 'wait_Alb.054', 'wait_Alb.056', 'wait_Alb.058',
    ],)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER =                                        new InGameEntityImages.ExistantAsNoVariant('Bowser', 'Enemy - Koopa', [
        'fall.0', 'fall.1',
        'fire.0',
        'wait.0', 'wait.1',
    ], [
        'attack.0',
        'fall.0', 'fall.1',
        'fire.0', 'fire.1', 'fire.2', 'fire.3',
        'in.0', 'in.1',
        'jump.0',
        'jump_ed.0',
        'look.0', 'look.1', 'look.2', 'look.3',
        'out.0', 'out.1',
        'touchdown.0',
        'turn.0', 'turn.1', 'turn.2',
        'wait.0',
    ], [
        'fall.0', 'fall.1',
        'fire.0', 'fire.1',
        'fire2.0', 'fire2.1',
        'fireup.0', 'fireup.1', 'fireup.2', 'fireup.3', 'fireup.4',
        'in.0', 'in.1',
        'jump.0',
        'jump_l.0',
        'out.0', 'out.1',
        'parawait.0', 'parawait.1',
        'squat_l.0', 'squat_l.1', 'squat_l.2',
        'squat_s.0',
        'turn.0', 'turn.1', 'turn.2',
        'wait.0',
        'walk.0', 'walk.1', 'walk.2', 'walk.3',
    ], EMPTY_ARRAY,)
    public static readonly MEOWSER =                                       new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new InGameEntityImages.ExistantAs2InNotNsmbuSm3dw('Fire thrown by a Bowser', 'Enemy - Koopa', 'effect.0', 'effect.1',)
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new InGameEntityImages.ExistantAs4InOnlySmw('Falling Fire thrown by a Bowser', 'MW Enemy - Koopa', 'firewait.0', 'firewait.1', 'firewait.2', 'firewait.3',)
    public static readonly HAMMER_THROWN_BY_A_BOWSER =                     new InGameEntityImages.Null()

    public static readonly BOWSER_JR =                                     new InGameEntityImages.ExistantAsNoVariant('Bowser Jr.', 'Enemy - KoopaJr', [
        'before.0',
        'fall.0', 'fall.1',
        'fire.0', 'fire.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw.0', 'throw.1',
        'wait.0', 'wait.1',
    ], [
        'attack.0', 'before.0', 'before.1', 'before.2',
        'damage.0',
        'fall.0', 'fall.1',
        'fire.0', 'fire.1', 'fire.2', 'fire.3',
        'in.0',
        'jump.0',
        'out.0',
        'parawait.0', 'parawait.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'squat.0',
        'throw.0', 'throw.1', 'throw.2', 'throw.3', 'throw.4', 'throw.5',
        'touchdown.0',
        'wait.0',
        'walk.0', 'walk.1',
    ], [
        'attack.0',
        'before.0', 'before.1', 'before.2',
        'damage.0',
        'fall.0', 'fall.1',
        'fire.0', 'fire.1', 'fire.2', 'fire.3',
        'in.0',
        'jump.0',
        'out.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'squat.0',
        'throw.0', 'throw.1', 'throw.2', 'throw.3', 'throw.4', 'throw.5', 'throw.6',
        'touchdown.0',
        'wait.0',
        'walk.0', 'walk.1',
    ], EMPTY_ARRAY,)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new InGameEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new InGameEntityImages.ExistantAsNoVariantWithSameSmbSmb3('Boom Boom', 'Enemy - Bunbun', [
        'damage.0', 'damage.1',
        'damage_fly.0', 'damage_fly.1',
        'fly.0', 'fly.1', 'fly.2', 'fly.3', 'fly.4', 'fly.5',
        'jump_ed.0', 'jump_ed.1',
        'jump_st.0',
        'squat.0', 'squat.1', 'squat.2',
        'squat_fly.0', 'squat_fly.1', 'squat_fly.2',
        'standup.0', 'standup.1', 'standup.2',
        'standup_fly.0', 'standup_fly.1', 'standup_fly.2',
        'walk.0', 'walk.1', 'walk.2', 'walk.3', 'walk.4', 'walk.5'
    ], [
        'damage.0', 'damage.1',
        'damage_fly.0', 'damage_fly.1',
        'fly.0', 'fly.1', 'fly.2', 'fly.3', 'fly.4',
        'jump_ed.0', 'jump_ed.1',
        'jump_st.0',
        'parawait.0',
        'squat.0', 'squat.1', 'squat.2',
        'squat_fly.0', 'squat_fly.1', 'squat_fly.2',
        'standup.0', 'standup.1', 'standup.2',
        'standup_fly.0', 'standup_fly.1', 'standup_fly.2',
        'walk.0', 'walk.1', 'walk.2', 'walk.3', 'walk.4', 'walk.5'
    ], EMPTY_ARRAY,)
    public static readonly POM_POM =                                       new InGameEntityImages.Null()
    public static readonly POM_POM_CLONE =                                 new InGameEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new InGameEntityImages.Null()

    public static readonly LARRY =                                         new InGameEntityImages.ExistantAsNoVariant('Larry', 'Enemy - Larry', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',], EMPTY_ARRAY,)
    public static readonly LARRY_WAND =                                    new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('Larry’s Wand', 'Enemy - Larry', 'wand',)
    public static readonly LARRY_PROJECTILE =                              new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('(Larry’s projectile)', 'Enemy - Larry', 'effect.0',)

    public static readonly IGGY =                                          new InGameEntityImages.ExistantAsNoVariant('Iggy', 'Enemy - Iggy', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
        'walkl.0', 'walkl.1', 'walkl.2', 'walkl.3',], EMPTY_ARRAY,)
    public static readonly IGGY_WAND =                                     new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('Iggy’s Wand', 'Enemy - Iggy', 'wand',)
    public static readonly IGGY_PROJECTILE =                               new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('(Iggy’s projectile)', 'Enemy - Iggy', 'effect.0',)

    public static readonly WENDY =                                         new InGameEntityImages.ExistantAsNoVariant('Wendy', 'Enemy - Wendy', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',], EMPTY_ARRAY,)
    public static readonly WENDY_WAND =                                    new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('Wendy’s Wand', 'Enemy - Wendy', 'wand',)
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new InGameEntityImages.ExistantAs3InNotNsmbuSm3dw('Candy Ring thrown by a Wendy', 'Enemy - Wendy', 'ring.0', 'ring.1', 'ring.2',)
    public static readonly WENDY_PROJECTILE =                              new InGameEntityImages.Null()

    public static readonly LEMMY =                                         new InGameEntityImages.ExistantAsNoVariant('Lemmy', 'Enemy - Lemmy', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'chase.0', 'chase.1', 'chase.2', 'chase.3',
        'damage.0',
        'fall.0', 'fall.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2',], EMPTY_ARRAY,)
    public static readonly LEMMY_WAND =                                    new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('Lemmy’s Wand', 'Enemy - Lemmy', 'wand',)
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new InGameEntityImages.ExistantAs1InNotNsmbuSm3dwAnd2Smw('Magic Ball thrown by a Lemmy', 'Enemy - Lemmy', 'ball.0', 'ball.0', 'ball_specular',)
    public static readonly LEMMY_PROJECTILE =                              new InGameEntityImages.Null()

    public static readonly ROY =                                           new InGameEntityImages.ExistantAsNoVariant('Lemmy', 'Enemy - Lemmy', [
        'damage.0',
        'head.0', 'head.1', 'head.2', 'head.3', 'head.4',
        'pose.0', 'pose.1', 'pose.2', 'pose.3',
        'shell.0', 'shell.1', 'shell.2', 'shell.3', 'shell.4', 'shell.5', 'shell.6', 'shell.7',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'head.0', 'head.1', 'head.2', 'head.3', 'head.4',
        'pose.0', 'pose.1', 'pose.2', 'pose.3',
        'shell.0', 'shell.1', 'shell.2', 'shell.3', 'shell.4', 'shell.5', 'shell.6', 'shell.7',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'head.0', 'head.1', 'head.2', 'head.3', 'head.4',
        'pose.0', 'pose.1', 'pose.2', 'pose.3',
        'shell.0', 'shell.1', 'shell.2', 'shell.3', 'shell.4', 'shell.5', 'shell.6', 'shell.7',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2',], EMPTY_ARRAY,)
    public static readonly ROY_WAND =                                      new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('Roy’s Wand', 'Enemy - Roy', 'wand',)
    public static readonly ROY_PROJECTILE =                                new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('(Roy’s projectile)', 'Enemy - Roy', 'effect.0',)

    public static readonly MORTON =                                        new InGameEntityImages.ExistantAsNoVariant('Lemmy', 'Enemy - Lemmy', [
        'damage.0',
        'jump_quake.0', 'jump_quake.1', 'jump_quake.2',
        'jump_quake_ed.0', 'jump_quake_ed.1', 'jump_quake_ed.2',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'jump_quake.0', 'jump_quake.1', 'jump_quake.2',
        'jump_quake_ed.0', 'jump_quake_ed.1', 'jump_quake_ed.2',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'chase.0', 'chase.1', 'chase.2', 'chase.3',
        'damage.0',
        'fall.0', 'fall.1',
        'jump_quake.0', 'jump_quake.1', 'jump_quake.2',
        'jump_quake_ed.0', 'jump_quake_ed.1', 'jump_quake_ed.2',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2',], EMPTY_ARRAY,)
    public static readonly MORTON_WAND =                                   new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('Morton’s Wand', 'Enemy - Morton', 'wand',)
    public static readonly MORTON_THROWN_PROJECTILE =                      new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('(Morton’s Thrown projectile)', 'Enemy - Morton', 'effect.0',)
    public static readonly MORTON_GROUND_PROJECTILE =                      new InGameEntityImages.ExistantAs2InNotNsmbuSm3dw('(Morton’s Ground projectile)', 'Enemy - Morton', 'fire.0', 'fire.1',)

    public static readonly LUDWIG =                                        new InGameEntityImages.ExistantAsNoVariant('Ludwig', 'Enemy - Ludwig', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2', 'throw_ed.3', 'throw_ed.4', 'throw_ed.5',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2', 'throw_ed.3', 'throw_ed.4', 'throw_ed.5',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'hb_throw_ed.0', 'hb_throw_ed.1', 'hb_throw_ed.2', 'hb_throw_ed.3', 'hb_throw_ed.4', 'hb_throw_ed.5', 'hb_throw_ed.6', 'hb_throw_ed.7', 'hb_throw_ed.8',
        'hb_throw_st.0', 'hb_throw_st.1', 'hb_throw_st.2', 'hb_throw_st.3', 'hb_throw_st.4', 'hb_throw_st.5', 'hb_throw_st.6', 'hb_throw_st.7', 'hb_throw_st.8',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3', 'wait.4', 'wait.5', 'wait.6',], EMPTY_ARRAY,)
    public static readonly LUDWIG_WAND =                                   new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('Ludwig’s Wand', 'Enemy - Ludwig', 'wand',)
    public static readonly LUDWIG_PROJECTILE =                             new InGameEntityImages.ExistantAs1InNotNsmbuSm3dw('(Ludwig’s projectile)', 'Enemy - Ludwig', 'effect.0',)

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new InGameEntityImages.ExistantAs3InNotSm3dw('Bumper', 'Object - Saw', 'blink.0', 'blink.1', 'saw_maru', ['saw_maru_blink_model_Alb.000', 'saw_maru_blink_model_Alb.001',],)

    public static readonly SWINGING_CLAW =                                 new InGameEntityImages.ExistantAs5InNotSm3dw('Swinging Claw', 'Object - SwingCrane', 'neji', 'chain', 'arm.0', 'arm.1', 'arm.2', [
        'wanwan_chainB_Alb.000', 'chain_Alb.000',
        'swingcrane_model_Alb.000', 'swingcrane_model_Alb.001', 'swingcrane_model_Alb.002',
    ],)

    public static readonly TWISTER =                                       new InGameEntityImages.ExistantAsNoVariantWithSameSmb3Smw('Twister', 'Object - Tornado', [
        'wait.0', 'wait.1',
    ], [
        'wait.0', 'wait.1', 'wait.2', 'wait.3', 'wait.4', 'wait.5', 'wait.6', 'wait.7',
    ], [
        'wait_Alb.000', 'wait_Alb.003', 'wait_Alb.006', 'wait_Alb.009', 'wait_Alb.012', 'wait_Alb.015', 'wait_Alb.018', 'wait_Alb.024', 'wait_Alb.027', 'wait_Alb.030', 'wait_Alb.033', 'wait_Alb.036', 'wait_Alb.039', 'wait_Alb.042', 'wait_Alb.045', 'wait_Alb.048', 'wait_Alb.051', 'wait_Alb.054', 'wait_Alb.057',
    ],)

    public static readonly ONE_WAY_WALL =                                  new InGameEntityImages.ExistantAs5InNotSm3dw('One-Way Wall', 'Object - Hanatari', 'wait.0', 'wait.1', 'wait.2', 'wait.3', 'wait.4', [
        'hanatari_model_Alb.000', 'hanatari_model_Alb.004', 'hanatari_model_Alb.008', 'hanatari_model_Alb.012', 'hanatari_model_Alb.016', 'hanatari_model_Alb.020', 'hanatari_model_Alb.024', 'hanatari_model_Alb.028', 'hanatari_model_Alb.032', 'hanatari_model_Alb.036', 'hanatari_model_Alb.040', 'hanatari_model_Alb.044 ',
    ],)

    public static readonly TRACK =                                         new InGameEntityImages.Null()
    public static readonly TRACK_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly VINE =                                          new InGameEntityImages.ExistantAsNoVariantWithSameSmb3Smw('Vine', 'Object - BlockTuta', [
        'wait_head.0', 'wait_head.1',
        'wait_top.0', 'wait_body.0', 'wait_under.0',
    ], [
        'wait_head.0', 'wait_head.1',
        'wait_top.0', 'wait_top.1',
        'wait_body.0', 'wait_body.1',
        'wait_under.0', 'wait_under.1',
    ], [
        'edited_block_tuta_up_ani_Alb.048', 'edited_block_tuta_up_ani_Alb.050', 'edited_block_tuta_up_ani_Alb.052', 'edited_block_tuta_up_ani_Alb.054', 'edited_block_tuta_up_ani_Alb.056', 'edited_block_tuta_up_ani_Alb.058', 'edited_block_tuta_up_ani_Alb.060', 'edited_block_tuta_up_ani_Alb.062', 'edited_block_tuta_up_ani_Alb.064', 'edited_block_tuta_up_ani_Alb.066', 'edited_block_tuta_up_ani_Alb.068', 'edited_block_tuta_up_ani_Alb.070', 'edited_block_tuta_up_ani_Alb.072', 'edited_block_tuta_up_ani_Alb.074', 'edited_block_tuta_up_ani_Alb.076', 'edited_block_tuta_up_ani_Alb.078',
        'edited_block_tuta_nomove_Alb.000',
        'block_tuta_top_Alb.000', 'block_tuta_top_Alb.009', 'block_tuta_top_Alb.018', 'block_tuta_top_Alb.027', 'block_tuta_top_Alb.036', 'block_tuta_top_Alb.045', 'block_tuta_top_Alb.054', 'block_tuta_top_Alb.063', 'block_tuta_top_Alb.072', 'block_tuta_top_Alb.081', 'block_tuta_top_Alb.090', 'block_tuta_top_Alb.099', 'block_tuta_top_Alb.108', 'block_tuta_top_Alb.117', 'block_tuta_top_Alb.126', 'block_tuta_top_Alb.135', 'block_tuta_top_Alb.144', 'block_tuta_top_Alb.153', 'block_tuta_top_Alb.162', 'block_tuta_top_Alb.171', 'block_tuta_top_Alb.179',
        'block_tuta_body_Alb.000', 'block_tuta_body_Alb.009', 'block_tuta_body_Alb.018', 'block_tuta_body_Alb.027', 'block_tuta_body_Alb.036', 'block_tuta_body_Alb.045', 'block_tuta_body_Alb.054', 'block_tuta_body_Alb.063', 'block_tuta_body_Alb.072', 'block_tuta_body_Alb.081', 'block_tuta_body_Alb.090', 'block_tuta_body_Alb.099', 'block_tuta_body_Alb.108', 'block_tuta_body_Alb.117', 'block_tuta_body_Alb.126', 'block_tuta_body_Alb.135', 'block_tuta_body_Alb.144', 'block_tuta_body_Alb.153', 'block_tuta_body_Alb.162', 'block_tuta_body_Alb.171', 'block_tuta_body_Alb.179',
        'block_tuta_under_Alb.000', 'block_tuta_under_Alb.009', 'block_tuta_under_Alb.018', 'block_tuta_under_Alb.027', 'block_tuta_under_Alb.036', 'block_tuta_under_Alb.045', 'block_tuta_under_Alb.054', 'block_tuta_under_Alb.063', 'block_tuta_under_Alb.072', 'block_tuta_under_Alb.081', 'block_tuta_under_Alb.090', 'block_tuta_under_Alb.099', 'block_tuta_under_Alb.108', 'block_tuta_under_Alb.117', 'block_tuta_under_Alb.126', 'block_tuta_under_Alb.135', 'block_tuta_under_Alb.144', 'block_tuta_under_Alb.153', 'block_tuta_under_Alb.162', 'block_tuta_under_Alb.171', 'block_tuta_under_Alb.179',
    ],)
    public static readonly TREE =                                          new InGameEntityImages.Null()

    public static readonly STARTING_ARROW =                                new InGameEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new InGameEntityImages.ExistantAs1InNotSm3dw('Arrow Sign', 'Object - YajirushiAir', 'yajirushi_air',)

    public static readonly CHECKPOINT_FLAG =                               new InGameEntityImages.Null()
    public static readonly GOAL_POLE =                                     new InGameEntityImages.Null()
    public static readonly GOAL_WITH_CARDS =                               new InGameEntityImages.Null()
    public static readonly GIANT_GATE =                                    new InGameEntityImages.Null()

    public static readonly CASTLE =                                        new InGameEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new InGameEntityImages.Null()
    public static readonly AXE =                                           new InGameEntityImages.ExistantAs5InNotSm3dw('Axe', 'Object - Ono', 'wait.0', 'wait.1', 'wait.2', 'wait.3', 'ono_Xlu', [
        'ono_Alb.000', 'ono_Alb.001', 'ono_Alb.002', 'ono_Alb.003', 'ono_Alb.004', 'ono_Alb.005', 'ono_Alb.006', 'ono_Alb.007',
        'onoXlu_Alb.000',
    ],)

    public static readonly DASH_BLOCK =                                    new InGameEntityImages.Null()

    public static readonly SNAKE_BLOCK =                                   new InGameEntityImages.ExistantAs3InNotSm3dw('Snake Block', 'Object - BlockSnake', 'fall.0', 'fall.1', 'wait.0', ['block_snake_Alb.000', 'block_snake_Alb.001',],)
    public static readonly FAST_SNAKE_BLOCK =                              new InGameEntityImages.ExistantAs3InNotSm3dw('Fast Snake Block', 'Object - BlockSnake2', 'fall.0', 'fall.1', 'wait.0', ['block_snake_Alb.000', 'block_snake_Alb.001',],)

    public static readonly CONVEYOR_BELT =                                 new InGameEntityImages.Null()
    public static readonly FAST_CONVEYOR_BELT =                            new InGameEntityImages.Null()

    public static readonly MUSHROOM_TRAMPOLINE =                           new InGameEntityImages.Null()
    public static readonly ON_OFF_TRAMPOLINE =                             new InGameEntityImages.Null()

    public static readonly LIFT =                                          new InGameEntityImages.ExistantAsNoVariant('Lift', 'Object - LiftUnite', [
        'lift_sideL.00', 'lift_center.00', 'lift_sideR.00',
        'lift_point.00',
        'lift_point_rail_.00', 'lift_point_rail_.01',
    ], [
        'lift_sideL.00', 'lift_center.00', 'lift_sideR.00',
        'lift_point.00',
        'lift_point_rail.00', 'lift_point_rail.01', 'lift_point_rail.02', 'lift_point_rail.03',
    ], [
        'lift_sideL.00', 'lift_center.00', 'lift_sideR.00',
        'lift_point_rail.00', 'lift_point_rail.01', 'lift_point_rail.02', 'lift_point_rail.03',
    ], [
        'lift_sideL_Alb.00', 'lift_center_Alb.00', 'lift_sideR_Alb.00',
        'lift_point_rail_Alb.00', 'lift_point_rail_Alb.01', 'lift_point_rail_Alb.02', 'lift_point_rail_Alb.03', 'lift_point_rail_Alb.04', 'lift_point_rail_Alb.05', 'lift_point_rail_Alb.06', 'lift_point_rail_Alb.07',
    ],)
    public static readonly FLIMSY_LIFT =                                   new InGameEntityImages.ExistantAsNoVariant('Flimsy Lift', 'Object - LiftUnite', [
        'lift_sideL.01', 'lift_center.01', 'lift_sideR.01',
        'lift_point.01',
        'lift_point_rail_fall.00', 'lift_point_rail_fall.01',
    ], [
        'lift_sideL.01', 'lift_center.01', 'lift_sideR.01',
        'lift_point.01',
        'lift_point_rail_fall.00', 'lift_point_rail_fall.01', 'lift_point_rail_fall.02', 'lift_point_rail_fall.03',
    ], [
        'lift_sideL.01', 'lift_center.01', 'lift_sideR.01',
        'lift_point_rail.00', 'lift_point_rail.01', 'lift_point_rail.02', 'lift_point_rail.03',
    ], [
        'lift_sideL_Alb.01', 'lift_center_Alb.01', 'lift_sideR_Alb.01',
        'lift_point_rail_Alb.00', 'lift_point_rail_Alb.01', 'lift_point_rail_Alb.02', 'lift_point_rail_Alb.03', 'lift_point_rail_Alb.04', 'lift_point_rail_Alb.05', 'lift_point_rail_Alb.06', 'lift_point_rail_Alb.07',
    ],)
    public static readonly CLOUD_LIFT =                                    new InGameEntityImages.Null()

    public static readonly SEESAW =                                        new InGameEntityImages.ExistantAsNoVariantWithSameSmb3Smw('Seesaw', 'Object - Seesaw', [
        'seesaw_sideL.00', 'seesaw_center.00', 'seesaw_sideR.00',
        'seesaw_point.00',
        'seesaw_point_rail.00', 'seesaw_point_rail.01',
    ], [
        'seesaw_sideL.00', 'seesaw_center.00', 'seesaw_sideR.00',
        'seesaw_point.00',
        'seesaw_point_rail.00', 'seesaw_point_rail.01', 'seesaw_point_rail.02', 'seesaw_point_rail.03',
    ], [
        'seesaw_sideL_Alb.00', 'seesaw_center_Alb.00', 'seesaw_sideR_Alb.00',
        'seesaw_point_Alb.00',
        'seesaw_point_rail_Alb.00', 'seesaw_point_rail_Alb.01', 'seesaw_point_rail_Alb.02', 'seesaw_point_rail_Alb.03', 'seesaw_point_rail_Alb.04', 'seesaw_point_rail_Alb.05', 'seesaw_point_rail_Alb.06', 'seesaw_point_rail_Alb.07',
    ],)

    public static readonly LAVA_LIFT =                                     new InGameEntityImages.ExistantAsNoVariantWithSameSmb3Smw('Lava Lift', 'Object - LiftYougan', ['wait.0',], ['wait.0', 'wait.1',], [
        'lift_yougan_Alb.000', 'lift_yougan_Alb.001', 'lift_yougan_Alb.006', 'lift_yougan_Alb.012', 'lift_yougan_Alb.016', 'lift_yougan_Alb.019',
    ],)
    public static readonly FAST_LAVA_LIFT =                                new InGameEntityImages.ExistantAsNoVariantWithSameSmb3Smw('Lava Lift', 'Object - LiftYougan2', ['wait.0',], ['wait.0', 'wait.1',], [
        'lift_yougan2_Alb.000', 'lift_yougan2_Alb.001', 'lift_yougan2_Alb.006', 'lift_yougan2_Alb.012', 'lift_yougan2_Alb.016', 'lift_yougan2_Alb.019',
    ],)

    public static readonly CRATE =                                         new InGameEntityImages.ExistantAs5InOnlySm3dw('Crate', '3W Object - WoodBox', 'WoodBox_Alb.0', 'WoodBox_Alb.1', 'WoodBox_Alb.2', 'WoodBox_Alb.3', 'WoodBox_Alb.4',)

    public static readonly KEY =                                           new InGameEntityImages.ExistantAs4InNotSm3dw('Key', 'Object - Key', 'wait.0', 'wait.1', 'wait.2', 'wait.3', [
        'key_Alb.000', 'key_Alb.001', 'key_Alb.002', 'key_Alb.003', 'key_Alb.004', 'key_Alb.009', 'key_Alb.010', 'key_Alb.011', 'key_Alb.012',
    ],)
    public static readonly CURSED_KEY =                                    new InGameEntityImages.ExistantAs4InOnlySmb('Cursed Key', 'M1 Object - Key2', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)
    public static readonly PHANTO =                                        new InGameEntityImages.ExistantAs4InOnlySmb('Phanto', 'M1 Object - Phanto', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)

    public static readonly TRAMPOLINE =                                    new InGameEntityImages.Null()
    public static readonly HOP_CHOPS =                                     new InGameEntityImages.Null()

    public static readonly POW_BLOCK =                                     new InGameEntityImages.ExistantAs4InNotSm3dw('POW Block', 'Object - BlockPow', 'wait.0', 'wait.1', 'wait.2', 'wait.3', [
        'block_pow_Alb.000', 'block_pow_Alb.001', 'block_pow_Alb.002', 'block_pow_Alb.003', 'block_pow_Alb.004', 'block_pow_Alb.005', 'block_pow_Alb.006', 'block_pow_Alb.007',
    ],)
    public static readonly RED_POW_BLOCK =                                 new InGameEntityImages.Null()

    public static readonly P_SWITCH =                                      new InGameEntityImages.ExistantAs7InNotSm3dw('P Switch', 'Object - PSwitch', 'push.0', 'push.1', 'push.2', 'wait.0', 'wait.1', 'wait.2', 'wait.3', [
        'down_switch_hatena_Alb.000', 'down_switch_hatena_Alb.004', 'down_switch_hatena_Alb.005', 'down_switch_hatena_Alb.006',
        'wait_Alb.000', 'wait_Alb.001', 'wait_Alb.002', 'wait_Alb.003', 'wait_Alb.004', 'wait_Alb.005', 'wait_Alb.006',
    ],)

    public static readonly STONE =                                         new InGameEntityImages.ExistantAs4InNotSmbSm3dw('Stone', 'Object - Stone', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)

    public static readonly WARP_DOOR =                                     new InGameEntityImages.Null()
    public static readonly P_WARP_DOOR =                                   new InGameEntityImages.Null()
    public static readonly KEY_DOOR =                                      new InGameEntityImages.Null()

    public static readonly WARP_BOX =                                      new InGameEntityImages.Null()
    public static readonly WARP_BOX_WITH_KEY =                             new InGameEntityImages.Null()

    public static readonly WING =                                          new InGameEntityImages.ExistantAs2InNotSm3dw('Wing', 'Enemy - WingCommon', 'wait.0', 'wait.1', [
        'wing_pata_Alb.000', 'wing_pata_Alb.001', 'wing_pata_Alb.002', 'wing_pata_Alb.003', 'wing_pata_Alb.004', 'wing_pata_Alb.005', 'wing_pata_Alb.006', 'wing_pata_Alb.007', 'wing_pata_Alb.008', 'wing_pata_Alb.009','wing_pata_Alb.010', 'wing_pata_Alb.011', 'wing_pata_Alb.012', 'wing_pata_Alb.013', 'wing_pata_Alb.014', 'wing_pata_Alb.015', 'wing_pata_Alb.016', 'wing_pata_Alb.017', 'wing_pata_Alb.018', 'wing_pata_Alb.019', 'wing_pata_Alb.020', 'wing_pata_Alb.021',
    ],)
    public static readonly PARACHUTE =                                     new InGameEntityImages.ExistantAsBlueVariantWithSameSmbSmb3SmwAndBlueSmw('Parachute', 'Enemy - ParachuteCommon', ['parachute.tiff',], ['para_swing_Alb.000',],)

    public static readonly TOAD =                                          new InGameEntityImages.Null()
    public static readonly CAGED_TOADETTE =                                new InGameEntityImages.Null()

    public static readonly BUBBLE =                                        new InGameEntityImages.ExistantAs1And2NsmbuButDifferentSm3dw('Bubble', 'Object - Balloon', 'balloon.0', 'balloon.0', 'balloon2.0', 'TractorBubble_Alb',)

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<InGameEntityImages, typeof InGameEntityImages, Entities, typeof Entities> = class CompanionEnum_Entities
        extends CompanionEnumWithParent<InGameEntityImages, typeof InGameEntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Entities

        private constructor() {
            super(InGameEntityImages, Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Entities()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    #englishName?: PossibleEnglishName
    #englishNameInHtml?: string

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() { super() }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName { return this.#englishName ??= this.parent.englishName }

    public get englishNameInHtml(): string { return this.#englishNameInHtml ??= this.parent.englishNameInHtml }

    public abstract get image(): InGameImage_Regular

    //endregion -------------------- Getter methods --------------------

}
