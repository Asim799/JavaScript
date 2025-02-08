const boxes = document.querySelectorAll(".box")
const body = document.querySelector("body")
//console.log(boxes);
// To get all the boxes
boxes.forEach(function(box) {
  console.log(box);
  box.addEventListener("click", function(e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id
      document.querySelector('.heading').style.color = "white"
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id
      document.querySelector('.heading').style.color = "yellow"
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id
      document.querySelector('.heading').style.color = "black"
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id
      document.querySelector('.heading').style.color = "white"
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id
      document.querySelector('.heading').style.color = "white"

    }
  })
})


const button = document.querySelector('#colorPicker')
button.addEventListener("input", function(e) {
  const selectedColor = e.target.value;
  console.log("selected Color:",
    selectedColor);
  console.log(e);
  console.log(e.target);
  body.style.backgroundColor = selectedColor

})