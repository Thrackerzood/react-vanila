import React from 'react'
import { ContainerContentFilms } from './style'

export const ContainerContentFilm = (props) =>{
      return (<ContainerContentFilms><a href={props.name}>
         <picture>
            <img src={props.pictures} alt={props.name}/>
         </picture>
         <p>{props.name}</p>
      </a></ContainerContentFilms>)
}