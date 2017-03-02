import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import About from './components/ui/About'
import MemberList from './components/ui/MemberList'
import  { Left, Right, Whoops404  } from './components'
import ShowList from './components/ui/ShowList'
import MovieList from './components/ui/MovieList'
import SignIn from './components/ui/SignIn'
 
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Left}>
        	<Route path="about" component={About} />
        	<Route path="members" component={MemberList} />
            <Route path="shows" component={ShowList}/> 
            <Route path="movies" component={MovieList}/>
            <Route path="signin" component={SignIn}/>
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes