function clock(){
    let hourr=document.querySelector(".hour");
    let minute=document.querySelector(".minutes");
    let seconds=document.querySelector(".seconds");
    let date=new Date();
    let hr=date.getHours();
    let mins=date.getMinutes();
    let sec=date.getSeconds();
    hourr.style.transform=`rotateZ(${hr*30+mins/12}deg)`;
    minute.style.transform=`rotateZ(${mins*6}deg)`;
    seconds.style.transform=`rotateZ(${sec*6}deg)`
}
clock();
setInterval(clock,1000)