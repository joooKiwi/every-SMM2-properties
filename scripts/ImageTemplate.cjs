module.exports = class ImageTemplate {

    //region -------------------- Fields --------------------

    /** @readonly */static NEW_PATH = 'resources/images'

    #oldPath
    #oldName
    #newName
    #extension

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    /**
     * Create a simple image template to be relocated
     *
     * @param {string} oldPath The old path (in the public folder)
     * @param {string} oldName The old name (without the extension)
     * @param {string} newName The new name (without the extension)
     * @param {string} extension The file extension
     */
    constructor(oldPath, oldName, newName, extension,) {
        this.#oldPath = oldPath
        this.#oldName = oldName
        this.#newName = newName
        this.#extension = extension
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    /**
     * The old path
     *
     * @returns {string}
     */
    get oldPath() {
        return this.#oldPath
    }

    /**
     * The old path based on the directory name
     *
     * @returns {string}
     */
    get fullOldPath() {
        return `${__dirname}/../${this.oldPath}`
    }

    /**
     * The old file name
     *
     * @returns {string}
     */
    get oldName() {
        return this.#oldName
    }

    /**
     * The old file name with its full path & extension
     *
     * @returns {string}
     */
    get fullOldName() {
        return `${this.fullOldPath}/${this.oldName}.${this.extension}`
    }


    /**
     * The new path based on the directory name
     *
     * @returns {string}
     */
    get fullNewPath() {
        return `${__dirname}/../src/${ImageTemplate.NEW_PATH}`
    }

    /**
     * The new file name
     *
     * @returns {string}
     */
    get newName() {
        return this.#newName
    }

    /**
     * The new file name with its full path & extension
     *
     * @returns {string}
     */
    get fullNewName() {
        return `${this.fullNewPath}/${this.newName}.${this.extension}`
    }


    /**
     * The extension of the file
     *
     * @returns {string}
     */
    get extension() {
        return this.#extension
    }

    //endregion -------------------- Getter methods --------------------

}
