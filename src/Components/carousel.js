//Carousel Component

import axios from "axios"
  
  export async function registerCarousel() {

    //grab images and description  from API and display in Bootstrap carousel
    let images = []
    await axios.get("https://jsonplaceholder.typicode.com/photos").then(results => {
      images = results.data.slice(0, 7)
    })

    const names = ['Harrington','Cornwall','Southwell','Mews','Kensington','Tourist','Apartments']

    const getItems = () => {
      const imagesHTML = images.map((image, index) => {
        return item(image, index)
      })
      return imagesHTML.join("")
    }

    const item = (image, index) => {
      return `<div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img class="d-block w-100" src="${image.url}" alt="" />
          <div class="carousel-caption d-none d-md-block">
            <h2>${names[index]}</h2>
            <h5>${image.title}</h5>
          </div>
      </div>`
    }

    if(document.getElementById(("carousel"))) {
      document.getElementById("carousel").innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        </ol>
        <div class="carousel-inner" id="carousel-inner">
        ${getItems()}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
          `
    }

  }
