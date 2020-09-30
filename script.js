const crosshair = document.body.onmousemove = (event) => {
    let x = event.pageX;
    let y = event.pageY

    const xy = document.querySelector("#xy");
    xy.innerHTML = `${x} / ${y}`

    document.getElementById('div').style = `left: ${x - 100}px; top: ${y}px;`;
};


function paint (event) {

    let green = document.querySelector('#green');
    let black = document.querySelector('#black');
    let yellow = document.querySelector('#yellow');
    let red = document.querySelector('#red');

    function moveColor (event) {      
    let a = 'rgba(97, 166, 231, 0.247)'; 
    let excretion = document.createElement('div');
    excretion.id = ('excretion')

    green.addEventListener('click', () => {
        excretion.style.backgroundColor = 'rgba(71, 225, 78, 0.247)';
        excretion.style.boxShadow = 'rgba(71, 225, 78, 0.247) 0 0 20px 10px';
    })
    black.addEventListener('click', () => {
        excretion.style.backgroundColor = 'rgba(30,30,30, 0.247)';
        excretion.style.boxShadow = 'rgba(30,30,30, 0.247) 0 0 20px 10px';
    })
    yellow.addEventListener('click', () => {
        excretion.style.backgroundColor = 'rgba(255,219,0, 0.247)';
        excretion.style.boxShadow = 'rgba(255,219,0, 0.247) 0 0 20px 10px';
    })
    red.addEventListener('click', () => {
        excretion.style.backgroundColor = 'rgba(255,8,0, 0.247)';
        excretion.style.boxShadow = 'rgba(255,8,0, 0.247) 0 0 20px 10px';
    })

    excretion.style = `
    background-color: ${a};
    box-shadow:  rgba(97, 166, 231, 0.247) 0 0 20px 10px; 
    position: absolute;
    border-radius: 50px;
    width: ${50}px;
    height: ${50 }px;
    left: ${ event.pageX }px;
    top: ${ event.pageY }px;
     `;

    document.body.appendChild(excretion);
    }

    document.addEventListener('mousemove', moveColor);

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveColor);
    })
}


document.addEventListener('mousedown', paint);
