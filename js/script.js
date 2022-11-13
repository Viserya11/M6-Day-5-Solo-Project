
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmUyZmQ0YmUzZDAwMTU4NDYwNDkiLCJpYXQiOjE2NjgwODczNDMsImV4cCI6MTY2OTI5Njk0M30.f0hqMCGmxQuJWfmA5JwepuldqFJL51QtNp2M1aDnsSE",
    },
};

const horror = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/horror", options);
    const movies = await response.json();

    let row = document.querySelector(".horror-movie-row")

    let moviesHTML = `<div class="row">`

    for (let movie of movies) {

        moviesHTML += `<div class="col-md-2">
            <img class="movie-cover" src="${movie.imageUrl}">
        </div>`
    }

    moviesHTML += `</div>`
    row.innerHTML = moviesHTML
};

horror()

const drama = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/drama", options);
    const movies = await response.json();

    let row = document.querySelector(".drama-movie-row")

    let moviesHTML = `<div class="row">`

    for (let movie of movies) {

        moviesHTML += `<div class="col-md-2">
            <img class="movie-cover" src="${movie.imageUrl}">
        </div>`
    }

    moviesHTML += `</div>`
    row.innerHTML = moviesHTML
};

drama()

const comedy = async () => {
     const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/comedy", options);
     const movies = await response.json();

    let row = document.querySelector(".comedy-movie-row")

    let moviesHTML = `<div class="row">`

    for (let movie of movies) {

        moviesHTML += `<div class="col-md-2">
            <img class="movie-cover" src="${movie.imageUrl}">
        </div>`
    }

    moviesHTML += `</div>`
    row.innerHTML = moviesHTML
};

comedy()

               

async function onFormSubmit(event) {
    event.preventDefault();
  
    const newMovie = {
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      category: document.querySelector("#genre").value,
      imageUrl: document.querySelector("#imageUrl").value,
    };
  
    const options = {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmUyZmQ0YmUzZDAwMTU4NDYwNDkiLCJpYXQiOjE2NjgwODczNDMsImV4cCI6MTY2OTI5Njk0M30.f0hqMCGmxQuJWfmA5JwepuldqFJL51QtNp2M1aDnsSE",
    },
    };
  
    try {
      const endpoint = "https://striveschool-api.herokuapp.com/api/movies/";
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("New movie added!");
      } else {
        throw new Error("Oops, something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  }


  async function fetchMovieData(category) {

    //return fetch(`https://striveschool-api.herokuapp.com/api/movies/${category}`, options)
    const resp = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${category}`, options)
    const data = await resp.json()
  
    return data
  }
    

function formatMovie(movies) {

  let moviesHTML = ""

  for (let movie of movies) {
    
    moviesHTML += `<tr>
    <th scope="row">#</th>
    <td>${movie.name}</td>
    <td>${movie.category}</td>
    <td>${movie.description}</td>
    <td><button type="button" value="${movie._id}" class="btn btn-danger" onclick="deleteMovie(event)">Delete</button>
    <button type="button" class="btn btn-success" onclick="Edit()">Edit</button></td>
  </tr>`
  }
  return moviesHTML
}

   async function displayMovies() {

    const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/", options);
    let categories = await response.json()

    let allMovies = []
    for (let category of categories) {
      
      let data = await fetchMovieData(category)
    
      allMovies = allMovies.concat(data)
      //allMovies = [...allMovies, ...fetchMovieData(category)]
    }



    let table = document.querySelector(".table")

    table.innerHTML = ` <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Genre</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>${formatMovie(allMovies)}</tbody>`
    
};

displayMovies()


  async function deleteMovie(event) {

    event.preventDefault()

    
    
    const options = {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmUyZmQ0YmUzZDAwMTU4NDYwNDkiLCJpYXQiOjE2NjgwODczNDMsImV4cCI6MTY2OTI5Njk0M30.f0hqMCGmxQuJWfmA5JwepuldqFJL51QtNp2M1aDnsSE",
      },
      };
    
    await fetch("https://striveschool-api.herokuapp.com/api/movies/" + event.target.value, options);
    await displayMovies()

    console.log("cicusmicus")
    
  }

 
  function logging() {

    console.log("cicusmicus")

  }


  async function editMovie () {

  }

 