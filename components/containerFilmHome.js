import React from 'react'

export const ContainerFilmHome = (props) =>
(<section>
   <picture>
      <source src={props.pictures}></source>
      <img src={props.pictures} alt={props.name}/>
   </picture>  
</section>)