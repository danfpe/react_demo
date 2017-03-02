import {Component} from 'react'

class Team extends Component {
    render (){
    const {founderimg, name, position}=this.props
    return (
        <div className="founder">
        <img src={founderimg}/>
        <h3>{name}</h3>
        <p>{position}</p>
        </div>
    )
    }
}
class TeamMember extends Component {
    constructor(props) {
        super(props)
        this.state={
            members:[
                {founderimg: "https://walter.trakt.tv/images/shows/000/099/046/fanarts/thumb/88ff78c4d2.jpg.webp",
                 name:"刀刀",
                 position:"联合创始人"},
                {founderimg: "https://walter.trakt.tv/images/shows/000/077/199/fanarts/thumb/57e6a02efb.jpg.webp",
                 name:"锵锵",
                 position:"联合创始人"}
            ]
        }
    }
    render() {
         const {members}=this.state
        return (
            <div className="team">
               <h2>团队成员</h2>
               <p>iTV创立于浦东</p>
               {
               members.map((data,i)=>
                <Team key={i} {...data}/>)
               }
            </div>
        )
    }
}

export default TeamMember