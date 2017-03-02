import {Component} from 'react'
import TeamMember from './TeamMember'

class About extends Component {
    render() {
        return (
        <div className="about">
         <div className="values">
        <h1>什么是iTV</h1>  
        <p>iTV成立于2017年， 该平台提供多项服务，但我们主要专注于跟踪您观看过的电视剧和电影，并根据您的观影记录推荐相关影片和电视剧。
        您可以在PC端，平板电脑，或者手机端观看我们的视频。
        </p>
       <p>iTV也帮您从众多的视频平台上更好更快的找到您想要观看的影视资源，例如腾讯视频，爱奇艺，优酷。</p>
       <p>如果您喜欢我们iTV,欢迎成为我们的会员，可以享受更高清的资源，没有广告，精确搜索等会员特权。
       </p>
       </div>
       <div>
       <TeamMember />
       </div>
       </div>)
    }
}
export default About