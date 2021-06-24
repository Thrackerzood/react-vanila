import React, {useEffect, useState} from "react";
import { NewSection } from "./style";
import { fetchNode } from "../middleware/nodeServerFetch";

export function New () {
const [state = {data: []}, fetchLoad] = useState({data: []})
const result = async () => {
let response = await fetchNode('POST', 'http://127.0.0.1:5500/api/home')
   fetchLoad({data: response})
}

useEffect(()=> { load() })

const load = () => {
   const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              console.log(entry)
              entry.target.src = entry.target.dataset.src
              observer.unobserve(entry.target)
          }
      })
  }, { threshold: 0.1 })

  document.querySelectorAll('img').forEach(img => {
     observer.observe(img)
   })
}

const data = state.data.map ((video, index) => {
   return(<section key={index} className="section">
         <div>
            <img data-src={video.pictures} alt={video.show_name}/>
         </div>
      <section>
         <p>Перевод: {video.audio}</p>
         <p>Компания: {video.company}</p>
         <p>Дата: {video.date}</p>
         <p>жанры: {video.ganres}</p>
         <p>название: {video.show_name}</p>
         <p>серий: {video.series}</p>
         <p>количество сезонов: {video.season}</p>
      </section>
   </section>)
})

useEffect(()=>{ result() }, [])
   return(<NewSection>
      {data}
   </NewSection>)
}