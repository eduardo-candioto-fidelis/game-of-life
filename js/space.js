class Space {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.array = new Array(this.width * this.height);
    }

    get(x, y) {
        return this.array[this.width * y + x];
    }
    on(x, y) {
        this.array[this.width * y + x] = 1;
    }
    off(x, y) {
        this.array[this.width * y + x] = 0;
    }

    static create(width, height) {
        const space = new Space(width, height);
        
        for (let i = 0; i < space.array.length; i++) {
            space.array[i] = Math.floor(Math.random() * 10000000) == 0 ? 1 : 0;
        }

        return space;
    }

    createCopy() {
        const spaceCopy = new Space(this.width, this.height);

        Object.assign(spaceCopy.array, this.array);

        return spaceCopy;
    }
}

function createSpace() {
    const width = Math.floor(window.innerWidth / 23);
    const height = Math.floor(window.innerHeight / 24 - 1);

    return Space.create(width, height);
}