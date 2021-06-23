import React, {useEffect, useState} from "react";
import { fetchNode } from "../middleware/nodeServerFetch";
import { ContainerFilmHome } from "./containerFilmHome";
import { ContainerContentFilm } from './containerContentFilm'
import { StyleContainerHomeContent , ContainerMain} from './style'


export function Home () {
   let isDown = false
   let startX
   let scrollLeft
   let slider = document.querySelector('.div')
 function mouseDown(event){
   isDown = true
   slider.classList.add('active')
   startX = event.pageX - slider.offsetLeft
   scrollLeft = slider.scrollLeft
 }
 function mouseLeave(){
   isDown = false
   slider.classList.remove('active')
 }
 function mouseUp(){
   isDown = false
   slider.classList.remove('active')
 }
 function mouseMove(event){
   if (!isDown) return;
   event.preventDefault()
   const x = event.pageX - slider.offsetLeft
   const walk = (x - startX)
   slider.scrollLeft = scrollLeft - walk
 }
 const [showing, showMoreInfo] = useState(false)
 const [state = {data: []}, fetchLoad] = useState({data: []})
 const result = async () => {
   let response = await fetchNode('POST', 'http://127.0.0.1:5500/api/home')
   fetchLoad({data: response})
 }
 useEffect(()=>{ result() }, [])
 const dataComponentAll = state.data.map((video, index) => {
   return (<section key={index}>
   <span onClick={()=> showMoreInfo(index === showing ? null : index)}>
     <ContainerFilmHome key={index} name={video.show_name} pictures={video.pictures}/>
     <p>{video.show_name}</p>
   </span>
   </section>)
 })
 const dataComponentContent = state.data.map((video, index) => {
   return (<div key={index}>
   {showing === index ? <ContainerContentFilm name={video.show_name} pictures={video.picture_target}/> : null}
   </div>)
 })
 
 return (<ContainerMain>
<h1>AnimeGO — смотреть аниме онлайн бесплатно</h1>
<p>Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию. 
    Эти ленты любят за яркий сюжет, оригинальную рисовку и неизменный накал эмоций.
    Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться несколькими источниками, 
    поскольку ни один из них нельзя назвать универсальным. 
    Но у нас есть отличная новость для любителей аниме! 
    Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. 
    Теперь Вам не придётся бороздить просторы интернета в поисках любимого 
    тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале. 
    Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.</p>
 {dataComponentContent}
   <StyleContainerHomeContent className="div" onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onMouseMove={mouseMove}>
     {dataComponentAll}
   </StyleContainerHomeContent>
 </ContainerMain>)
 }