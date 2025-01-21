const clock = document.querySelector("#digital-clock");

setInterval(function () {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString('en-US',{hour12:true});
}, 1000);
