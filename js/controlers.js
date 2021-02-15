function createControls(run, runStoped, randomFill, space) {
    const start = document.querySelector('#start');
    const random = document.querySelector('#random');
    
    runner = requestAnimationFrame(runStoped);
    
    let status = 'stop';
    
    start.addEventListener('click', _ => {
        
        if (status == 'stop') {
            status = 'start';
            start.textContent = 'Stop';
            
            cancelAnimationFrame(runner);
            runner = setInterval(run, 75);
        }
        else if (status == 'start') {
            status = 'stop';
            start.textContent = 'Start';
            
            clearInterval(runner);
            runner = requestAnimationFrame(runStoped);
        }
    });

    random.addEventListener('click', _ => {
        randomFill(space);
    });
}

