const startMin = 10;
let time = startMin * 60;

const countDown  = document.getElementById("countdown");
let v;

function start() {
    v = setInterval(updateCount,1000);
}

function stop() {
    clearInterval(v);
}

function updateCount() {


    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countDown.innerHTML = `${minutes}: ${seconds}`;
    time--;
}