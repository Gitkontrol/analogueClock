function clockFace() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes() + sec/60;
    const hour = (date.getHours() % 12) + min/60;


    const hourAng = hour * 30;
    const minAng = min * 6;
    const secAng = sec * 6;
    
    const hourHand = document.getElementById("hours");
    const minHand = document.getElementById("minutes");
    const secHand = document.getElementById("seconds");

    hourHand.setAttribute('transform', `rotate(${hourAng}, 244, 251)`);
    secHand.setAttribute('transform', `rotate(${secAng}, 244, 251)`);
    minHand.setAttribute('transform', `rotate(${minAng}, 244, 251)`);

}   

setInterval(clockFace);