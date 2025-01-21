const clock = document.querySelector("#digital-clock");

setInterval(function () {
    const date = new Date();
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
