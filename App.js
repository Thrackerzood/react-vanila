import React, {useEffect,useState} from "react";
import { fetchNode } from "./middleware/nodeServerFetch";
import { ContainerFilmHome } from "./components/containerFilmHome";
import { ContainerContentFilm } from './components/containerContentFilm'
import { StyleContainerHomeContent , ContainerMain} from './components/style'

function App () {
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
  return (<section >
  <span onClick={()=> showMoreInfo(index === showing ? null : index)}>
    <ContainerFilmHome key={index} name={video.show_name} pictures={video.pictures}/>
    <p>{video.show_name}</p>
  </span>
  </section>)
})
const dataComponentContent = state.data.map((video, index) => {
  return (<>
  {showing === index ? <ContainerContentFilm key={index} name={video.show_name} pictures={video.picture_target}/> : null}
  </>)
})
return (<ContainerMain>
{dataComponentContent}
  <StyleContainerHomeContent className="div" onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onMouseMove={mouseMove}>
    {dataComponentAll}
  </StyleContainerHomeContent>
</ContainerMain>)
}

export default App;
