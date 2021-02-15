function createGrid(space) {
    const table = document.querySelector('table');
    const cells = [];

    for (let i = 0; i < space.height; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < space.width; j++) {
            const cell = document.createElement('td');

            cell.style.background = '#000';
            cell.addEventListener('click', event => {
                changecell(j, i, space);
                event.preventDefault();
            });
            
            row.appendChild(cell);
            cells.push(cell);
        }
        table.appendChild(row);
    }

    return cells;
}

function updateGrid(space, cells) {
    const colors = [
        '#000',
        '#cc0'
    ];
    
    for (let i = 0; i < space.array.length; i++) {
        cells[i].style.background = colors[space.array[i]];    
    }
}