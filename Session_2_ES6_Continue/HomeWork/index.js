// const start = document.getElementById('start');
// const btn_stop = document.getElementById('stop');
// const timer = document.getElementById('timer');
// var totalSeconds = 0;
// const timerVar = setInterval(countTimer, 1000);
// function countTimer() {
//         ++totalSeconds;
//         var hour = Math.floor(totalSeconds /3600);
//         var minute = Math.floor((totalSeconds - hour*3600)/60);
//         var seconds = totalSeconds - (hour*3600 + minute*60);
//         if(hour < 10)
//             hour = "0"+hour;
//             if(minute < 10)
//             minute = "0"+minute;
//             if(seconds < 10)
//             seconds = "0"+seconds;
//             document.getElementById("timer1").innerHTML = (hour + ":" + minute + ":" + seconds);
// }
// start.addEventListener("click", ()=>{
//     var timerVar = setInterval(countTimer, 1000);
// });
// btn_stop.addEventListener("click", ()=>{
//     clearInterval(timerVar);
// });
// stop.addEventListener("click", ()=> {
//     clearInterval(timerVar);
// });


// const form = document.getElementById("form");
// const btnAdd = document.getElementById("add");

// btnAdd.addEventListener('click', ()=>{
//     const timer = new Timer();
//     timer.render(form);
// });

// const start = document.getElementById('start');
// const resume = document.getElementById('resume');
// const reset = document.getElementById('reset');
// const restart = document.getElementById('restart');

// start.addEventListener('click', function(){
//     startTime();
// })

const app = document.getElementById('app');
const btnAddForm = document.getElementById('add');

btnAddForm.addEventListener("click", () => {
    const myForm = new Timer();
    myForm.render(app);
});

class Timer {
    totalSeconds = 0;
    hour = '00';
    min = '00';
    minCount = 0;
    sec = '00';
    secCount = 0;
    start = 'Start'
    stop = 'Stop'
    constructor(hour,min, sec, startTime , stopTime){
        hour = '00';
        min = '00';
        sec = '00';
        startTime = 'start';
        stopTime = 'stop';
        this.hour = document.createElement('p');
        this.hour.textContent= '00';
        this.min = document.createElement('p');
        this.min.textContent = "00";
        this.sec = document.createElement('P');
        this.sec.textContent = '00';
        this.startTime = document.createElement('button');
        this.startTime.innerHTML="Start";
        this.startTime.addEventListener('click', () => {
            this.startTimer();
        })
        this.stopTime = document.createElement('button');
        this.stopTime.innerHTML = " Stop";
        this.stopTime.addEventListener('click', () => {
            stopTimer();
        })
    }
        render = (container) => {
            const div = document.createElement('div');
            div.appendChild(this.hour);
            div.appendChild(this.min);
            div.appendChild(this.sec);
            div.appendChild(this.startTime);
            div.appendChild(this.stopTime);
            container.appendChild(div);
        }
        startTimer (){
        this.totalSeconds++;
          hour = Math.floor(totalSeconds /3600);
          min = Math.floor((totalSeconds - hour*3600)/60);
          sec = totalSeconds - (hour*3600 + min*60);
         if(hour < 10)
             hour = "0"+hour;
             if(minute < 10)
             min = "0"+min;
             if(sec < 10)
             sec = "0"+sec;
             document.getElementById("timer1").innerHTML = (hour + ":" + min + ":" + sec);
 }
}