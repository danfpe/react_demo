import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {
    return (
        <nav>
            <Link to="/"><FaHome/></Link> 
			<Link to="shows"
			      activeStyle={{
            	  backgroundColor: "white", 
            	  color: "slategray"
            	}}>美剧</Link>
			<Link to="movies"
			      activeStyle={{
            	  backgroundColor: "white", 
            	  color: "slategray"
            	}}>电影</Link>
		
			<Link to="about" 
            	  activeStyle={{
            	  backgroundColor: "white", 
            	  color: "slategray"
            	}}>
            	关于
            </Link>
			 <Link to="signin" 
            	  activeStyle={{
            	  	backgroundColor: "white", 
            	  	color: "slategray"
            	  }}>
            	  登录
           	</Link>
        </nav>
    )
}

export default MainMenu