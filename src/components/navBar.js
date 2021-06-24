import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import { Home } from './home'
import { Random } from './random'
import { New } from './new'
import { Auth } from './auth';
import {NavContainer} from './style'

export function Nav () {
   return(<Router>
      <NavContainer>
         <ul>
            <li><NavLink to="/" exact>Главная</NavLink></li>
            <li><NavLink to="/new" exact>Новинки</NavLink></li>
            <li><NavLink to="/random" exact>Случайное</NavLink></li>
            <li><NavLink to="/auth" exact>Войти</NavLink></li> 
         </ul>  
      </NavContainer>
   <Switch>
      <Route path="/auth"><Auth/></Route>
      <Route path="/new"><New/></Route>
      <Route path="/random"><Random/></Route>
      <Route path="/"><Home/></Route>
   </Switch>
</Router>)
}