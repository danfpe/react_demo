import {Component} from 'react' 

class Show extends Component {
    render () {
        const {showimg, name, year}=this.props
        return (
            <div className="show item">
                 <img src={showimg} />
                 <h3>{name}</h3>
                 <span>{year}</span>
            </div>
        )
    }
}

class ShowList extends Component {
    constructor(props) {
        super (props)
        this.state={
            shows:[{
                name: "The Big Bang Theory",
                year: 2007,
                showimg: "https://walter.trakt.tv/images/shows/000/001/409/fanarts/thumb/cff0b01ee7.jpg.webp"
            },{
                name: "How to Get Away with Murder",
                year: 2014,
                showimg: "https://walter.trakt.tv/images/shows/000/060/576/fanarts/thumb/9b17710dd9.jpg.webp"
            },{
                name: "Suits",
                year: 2011,
                showimg: "https://walter.trakt.tv/images/shows/000/037/522/fanarts/thumb/6ecdb75c1c.jpg.webp"
            },
            {
                name: "Taboo",
                year: 2017,
                showimg: "https://walter.trakt.tv/images/shows/000/096/212/fanarts/thumb/c02cdb8fd0.jpg.webp"
            },{
                name: "Grey's Anatomy",
                year: 2005,
                showimg: "https://walter.trakt.tv/images/shows/000/001/407/fanarts/thumb/7ebcccb4aa.jpg.webp"
            },
            {
                name: "Billions",
                year: 2016,
                showimg: "https://walter.trakt.tv/images/shows/000/077/692/fanarts/thumb/128f48d137.jpg.webp"
            }]
        }
    }
    render() {
        const {shows}=this.state
        return (
            <div className="show-list item-list">
               <h2>美剧</h2>
               <p>在这里，让你脑洞大开</p>
               {shows.map((data,i)=>
                   <Show key={i} {...data} />)}
            </div>
        )
    }
}

export default ShowList