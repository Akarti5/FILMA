

searchBtn.onclick = ()=>{

    
    let movieName = movieSearch.value;

    
    result.className = (movieName != '') ? 'results-section-show' : 'results-section';
    
    const url = `https://www.omdbapi.com/?apikey=22eb955&t=${movieName}`;
    fetch(url)
    .then(Response => Response.json())
    .then(data =>{
        movieTitle.textContent = `${data.Title}`;
        year.textContent = `${data.Year}`;
        score.textContent = `${data.Ratings[0].Value}`;
        
        // source imdb
        let src = data.Ratings[0].Source;

        source.textContent = (src === 'Internet Movie Database') ? 'Imdb' : data.Ratings[0].Source;

        score.textContent = `${data.Ratings[0].Value}`;
        score2.textContent = `${data.Ratings[0].Value}`;
        image.src = `${data.Poster}`;
        image.alt = `${data.Title}`;
        rated.textContent = `${data.Rated}`;
        runtime.textContent = `${data.Runtime}`;
        plot.textContent = `${data.Plot}`;
        writter.textContent = `${data.Writer}`;
        Actors.textContent = `${data.Actors}`;
        language.textContent = `${data.Language}`;
        country.textContent = `${data.Country}`;
        source2.textContent = `${data.Ratings[0].Source}`;
        awards.textContent = `${data.Awards}`;
        votes.textContent = `${data.imdbVotes}`;
       
        
                 

});
};

