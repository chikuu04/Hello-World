const container = document.querySelector(".container")
const coffees = [
  { name: "expresso", image: "coffee1.jpg" },
  { name: "latte", image: "coffee2.jpg" },
  { name: "capachinno", image: "coffee3.jpg" },
  { name: "margerata", image: "coffee4.jpg" },
  { name: "caffe o latte", image: "coffee5.jpg" },
  { name: "flat wight", image: "coffee6.jpg" },
  { name: "caffe'macchiato", image: "coffee7.jpg" },
  { name: "caffe mocha", image: "coffee8.jpg" },
  { name: "iris coffee", image: "coffee9.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)