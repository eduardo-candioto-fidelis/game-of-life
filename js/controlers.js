function createControls(run, runStoped) {
    const button = document.querySelector('button');
    runner = requestAnimationFrame(runStoped);
    
    let status = 'stop';
    
    button.addEventListener('click', _ => {
        
        if (status == 'stop') {
            status = 'start';
            button.textContent = 'Stop';
            
            cancelAnimationFrame(runner);
            runner = setInterval(run, 75);
        }
        else if (status == 'start') {
            status = 'stop';
            button.textContent = 'Start';
            
            clearInterval(runner);
            runner = requestAnimationFrame(runStoped);
        }
    });
}

