const crosshair = document.body.onmousemove = (event) => {
    let x = event.pageX;
    let y = event.pageY

    const xy = document.querySelector("#xy");
    xy.innerHTML = `${x} / ${y}`

    document.getElementById('div').style = `left: ${x - 100}px; top: ${y}px;`;
};

document.body.onmousedown = () => {
    document.body.onmousemove = (event) => {

        let excretion = document.createElement('div');
        excretion.id = ('excretion')
        excretion.style = `
        background: rgba(97, 166, 231, 0.247);
        box-shadow: rgba(97, 166, 231, 0.247) 0 0 20px 10px;
        position: absolute;
        border-radius: 50px;
        width: ${50}px;
        height: ${50 }px;
        left: ${ event.pageX }px;
        top: ${ event.pageY }px;
         `;
        document.body.appendChild(excretion);
    }
}
document.body.onmouseup = () => {
    document.getElementById("excretion").remove();
}