
// url ---> https://www.omdbapi.com/?s=${query}&apikey=adc7c134

    // get search data from imdb API
    async function searchMovies(query){
        try{
        const url = `https://www.omdbapi.com/?s=${query}&apikey=adc7c134`;
        let res = await fetch(url);
        let data = await res.json();
        return data.Search;
        }catch(error){
            console.log('error: ',error);
        }
    }

    // Search movie according to user input
    async function main(){
        let query = document.getElementById('query').value;
        let res = searchMovies(query); // async function returns promise
        data = await res;
        displayMovies(data);
        console.log(data);
    }

    // Debounce function to inmprove process according to search speed
    let id;
    function debounceFunction(func,delay){
        if(id){
            clearTimeout(id);
        }
        id = setTimeout(function(){
            func();
        },delay);
    }

    // append search data next to search bar
    const moviesDiv = document.getElementById('movies');
    function displayMovies(movies){
        moviesDiv.innerHTML = null;
        if(movies === undefined){
            let div = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = 'Movie not show...';
            div.append(p);
            moviesDiv.append(div);
            return false;
        }
        else{
            movies.forEach(el => {
                let div = document.createElement('div');
                let poster = document.createElement('img');
                poster.src = el.Poster;
                let name = document.createElement('h3');
                name.innerText = el.Title;
                div.append(poster,name);
                moviesDiv.append(div);
                div.addEventListener('click',function(){
                    movieDesc(el);
                });
                
            });
        }
    }

    // append data in to movie section
    const moviesDesc = document.getElementById('movieDesc');
    function movieDesc(movie){
        moviesDesc.innerHTML = null;
        let div = document.createElement('div');

        let poster = document.createElement('img');
        poster.src = movie.Poster;

        let div1 = document.createElement('div');

        let name = document.createElement('h3');
        name.innerText = `Title: ${movie.Title}`
        ;
        let type = document.createElement('p');
        type.innerText = `Type: ${movie.Type}`;

        let year = document.createElement('p');
        year.innerText = `Year: ${movie.Year}`;

        div1.append(name,type,year);
        div.append(poster,div1);
        moviesDesc.append(div);
    }
 