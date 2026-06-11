class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.dynamicArray = []
        this.cap = capacity
        this.size = 0
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.dynamicArray[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.dynamicArray[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.cap) {
            this.resize();
        }
        this.dynamicArray[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const val = this.dynamicArray[this.size - 1];
        this.size--;
        return val;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.cap *= 2
        const newArray = new Array(this.cap);
        for(let i = 0; i < this.size; i++) {
            newArray[i] = this.dynamicArray[i]
        }
        this.dynamicArray = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.cap
    }
}
