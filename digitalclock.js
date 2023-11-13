const clk=document.querySelector('.clock')
const digiclock=()=>{
    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let txt="AM";
    if(hr>12){
        hr=hr-12;
        txt="PM";
    }
    else if(hr==12){
        txt="PM";
    }
    hr=hr<10?"0"+hr:hr;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    clk.innerHTML=`${hr} : ${min} : ${sec} : ${txt}`
}
setInterval(digiclock,1000);