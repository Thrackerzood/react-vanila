import React from 'react'
import { ContainerContentFilms } from './style'

export const ContainerContentFilm = (props) =>{
      return (<ContainerContentFilms><a href={props.name}>
            <img src={props.pictures} alt={props.name}/>
         <p>{props.name}</p>
      </a></ContainerContentFilms>)
}