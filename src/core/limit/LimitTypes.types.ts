declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    WHILE_PLAYING,
    EDITOR,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name --------------------

export type PossibleEnglishName = | 'While Playing' | 'Editor'
export type PossibleEnglishCommonText = | 'While playing' | 'In the editor'

//endregion -------------------- Name --------------------
