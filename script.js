document.body.onmousedown = () => {
    document.body.onmousemove = (event) => {

        let excretion = document.createElement('div');
        excretion.id = ('excretion')
        excretion.style = `
        background: rgba(12, 184, 40, 0.028);
       box-shadow: rgba(12, 184, 40, 0.038) 0 0 10px 20px;
       border-radius: 50px;
        position: absolute;
        width: ${30}px;
        height: ${30 }px;
        left: ${ event.pageX }px;
        top: ${ event.pageY }px;
         `;
        document.body.appendChild(excretion);
    }
}