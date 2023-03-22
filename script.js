$(document).ready(function() {
    $("#cosmos").lettering();
});

$(document).ready(function() {
  $("#mobileCosmos").lettering();
});

const optionsDropdown = "#optionsDropdown";
const options = document.querySelector(optionsDropdown);
const optionsButton = document.querySelector("#optionsButton");

optionsButton.addEventListener("click", () => {

    setTimeout(() => {

        if (!options.classList.contains("showOptions")) {
    
          options.classList.add("showOptions");

        }

    }, 250);

});

document.addEventListener("click", (e) => {

  const isClosest = e.target.closest(optionsDropdown);
  
  if (!isClosest && options.classList.contains("showOptions")) {
      
    options.classList.remove("showOptions");

  }

});


let sliderIndex = 1;
showSlider(sliderIndex);

function slider(n) {

  showSlider(sliderIndex += n);

}

function currentSlider(n) {

  showSlider(sliderIndex = n);

}

function showSlider(n) {

  let i;
  let product = document.getElementsByClassName("product");

  if (n > product.length) {

    sliderIndex = 1;
  }

  if (n < 1) {
    
    sliderIndex = product.length;
  }

  for (i = 0; i < product.length; i++) {

    product[i].style.display = "none";  

  }

  product[sliderIndex-1].style.display = "";  

}

let happinessIndex = 1;
showHappiness(happinessIndex);

function happiness(n) {

  showHappiness(happinessIndex += n);

}

function currentHappiniess(n) {

  showHappiness(happinessIndex = n);

}

function showHappiness(n) {

  let i;
  let happiness = document.getElementsByClassName("happiness");

  if (n > happiness.length) {

    happinessIndex = 1;
  }

  if (n < 1) {
    
    happinessIndex = happiness.length;
  }

  for (i = 0; i < happiness.length; i++) {

    happiness[i].style.display = "none";  

  }

  happiness[happinessIndex-1].style.display = "";  

}

