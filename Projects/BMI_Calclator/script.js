const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);

    if (height === " " || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid Height`;
        result.style.fontSize = "20px";
        comment.innerHTML = "Now!";
    } else if (weight === " " || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid Weight`;
        result.style.fontSize = "20px";
        comment.innerHTML = "Now!";
    } else {
        result.innerHTML = `<span>BMI is ${bmi}</span>`;
    }

    const comment = document.querySelector("#comment");
    if (bmi < 18.6) {
        comment.innerHTML = "You are Under Weight!";
        comment.style.color = "#FF6961";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      comment.innerHTML = "Relax, you are Normal!";
        comment.style.color = "#90EE90";
    } else {
        comment.innerHTML = "You are Over Weight!";
        comment.style.color = "#FF6961";
    }
});
