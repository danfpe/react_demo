import {Component} from 'react'

class Movie extends Component { 
    render() {
       const {name, year, movieimg}=this.props
       return (
           <div className="movie item">
              <img src={movieimg}/>
              <h3>{name}</h3>
              <span>{year}</span>
           </div>
       )
    }
}

class MovieList extends Component {
    constructor(props) {
        super (props)
        this.state={
            movies:[
                {
                name: "Moonlight",
                year: 2016,
                movieimg: "https://walter.trakt.tv/images/movies/000/240/880/fanarts/thumb/d47a897905.jpg.webp"
                },{
                name: "La La Land",
                year: 2016,
                movieimg: "https://walter.trakt.tv/images/movies/000/192/932/fanarts/thumb/12e8a16115.jpg.webp"
                },
                  {
                name: "Fantastic Beasts and Where to Find them",
                year: 2016,
                movieimg: "https://walter.trakt.tv/images/movies/000/158/661/fanarts/thumb/4936ef88db.jpg.webp"
                },{
                name: "Arrival",
                year: 2016,
                movieimg: "https://walter.trakt.tv/images/movies/000/210/803/fanarts/thumb/38421ec4eb.jpg.webp"
                },
                  {
                name: "Doctor Strange",
                year: 2016,
                movieimg: "https://walter.trakt.tv/images/movies/000/181/311/fanarts/thumb/f79df96ab3.jpg.webp"
                },{
                name: "Manchester by the Sea",
                year: 2016,
                movieimg: "https://walter.trakt.tv/images/movies/000/225/133/fanarts/thumb/27d4b17a5c.jpg.webp"
                }
            ]
        }
    }

    render () {
        const {movies}=this.state
        return (
            <div className="movie-list item-list">
              <h2>电影</h2>
              <p>在这里，让想象飞扬</p>
                { movies.map((movie,i)=>
                     <Movie key={i} {...movie} />
                )}
            </div>
        )
    }
}

export default MovieList