

document.addEventListener("DOMContentLoaded", function(){
  const favActors = ["keanu reeves", "nicolas cage", "will smith"];
  function renderButtons(textArray, className, elementId){
    const container = document.getElementById(elementId)
    container.innerHTML = ""
    textArray.forEach(string => {
      const btn = createButton(string, className)
      container.append(btn)
    });
  }
  function createButton(text, className){
    let btn = document.createElement("button")
    btn.innerText = text
    btn.className = className
    btn.style.margin =  "30px"
    return btn
  }
  const container = document.getElementById("button-container")
  container.addEventListener("click", function(event){
    event.stopPropagation()
    if(event.target.className === "actor-button"){
      console.log("clicked: ")
      fetchImages(event.target.innerText)
    }
  })

  function renderImages(imagesArr){
    console.log(imagesArr)
    let imagesContainer = document.getElementById('images-container')
    imagesContainer.innerHTML = ""
    imagesArr.forEach(function(imageObj) {
      const url = imageObj.images.fixed_height_small.url
      let img = document.createElement('img')
      img.src = url
     imagesContainer.appendChild(img)
    
    })
  }

  function fetchImages(buttonText){
    const url = `https://api.giphy.com/v1/gifs/search?q=${buttonText}&rating=G&api_key=dc6zaTOxFJmzC&limit=10`
    fetch(url)
    .then(resp => resp.json())
    .then(json => renderImages(json.data))
  }
  function renderForm(){
    const container = document.getElementById("form-container")
    const form = `
      <form id="actor-form">
        <label for="actor">Add Another Favorite:</label>
        <input type="text" name="actor" />
        <input type="submit" value="Add" />
      </form>
    `
    container.innerHTML = form
  }
  function attachSubmitListener(){
    const form = document.getElementById("actor-form")
    form.addEventListener("submit", function(event){
      event.preventDefault()
      console.log(event)
      favActors.push(event.target.actor.value)
      renderButtons(favActors, "actor-button", "button-container")
    })
  }
  renderForm()
  attachSubmitListener()
  renderButtons(favActors, "actor-button", "button-container")
})
//- create an form with a single input. On submit, take the input value, add it too the favActors array and rerender the buttons to include the new text 