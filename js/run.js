const space = createSpace();
const cells = createGrid(space);

let runner = null;

createControls(run, runEditGrid, randomFill, space);

function run() {
    updateGrid(space, cells);
    live(space);

    //runner = requestAnimationFrame(run);
}
function runEditGrid() {
    updateGrid(space, cells);
    runner = requestAnimationFrame(runEditGrid);
}