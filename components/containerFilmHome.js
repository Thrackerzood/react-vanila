import React from 'react'

export const ContainerFilmHome = (props) =>
(<section>
   <picture>
      <img src={props.pictures} alt={props.name}/>
   </picture>  
</section>)