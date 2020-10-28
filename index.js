const favActors = ["keanu reeves", "nicolas cage", "will smith"];
  //create a function that will use the above array to generate buttons
  // and append them to the page
  // the function should take 3 arguements - 
  //an array of strings, className to be applied to the buttons, and the id of an element to append the buttons to. The button text should match the strings in our array.
function renderButtons(textArray, className, elementId){
  textArray.forEach(string => {
    const btn = createButton(string, className)
    document.getElementById(elementId).append(btn)
  });
}

function createButton(text, className){
  let btn = document.createElement("button")
  btn.innerText = text
  btn.className = className
  return btn
}

renderButtons(favActors, "actor-button", "button-container")