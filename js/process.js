function live(space) {
    const spaceCopy = space.createCopy();
    
    for (let y = 0; y < space.height; y++) {
        for (let x = 0; x < space.width; x++) {
            const numberOfNeighbours = countNeighbours(x, y, spaceCopy);
            const cell = spaceCopy.get(x, y);
            applyRules(cell, numberOfNeighbours, x, y, space);
        }
    }

    function countNeighbours(x, y, space) {
        const neighboursPosition = [
            [-1, -1],
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0]
        ];
        let numberOfNeighbours = 0;

        for (const [nx, ny] of neighboursPosition) {
            if (space.get(x + nx, y + ny) === 1) {
                numberOfNeighbours++;
            }
        }

        return numberOfNeighbours;
    }

    function applyRules(cell, numberOfNeighbours, x, y, space) {
        if (cell == 1 && (numberOfNeighbours < 2 || numberOfNeighbours > 3)) {
            space.off(x, y);
        }
        else if (cell == 0 && numberOfNeighbours == 3) {
            space.on(x, y);
        }
    }
}

function changecell(x, y, space) {
    const value = space.get(x, y);

    if (value == 1) {
        space.off(x, y);
    } 
    else {
        space.on(x, y);
    }
}