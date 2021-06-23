import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyle =  createGlobalStyle
`
*{
   margin: 0;
   padding: 0;
}
`

export const StyleContainerHomeContent = styled.section
`
display: flex;
justify-content: space-between;;
position: relative;
overflow-x: scroll;
overflow-y: hidden;
::-webkit-scrollbar {
   height: 10px;
}
   >section{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 20px;
      >span{
         >section{
            >picture{
               >img{
                  width: calc(100wh / 4);
                  height: calc(100vh / 4);
            }
         }
      }
   }
}
`

export const ContainerContentFilms = styled.section
`

a{
   color: white;
   text-decoration: none;
   font-family: "formular","Arial",sans-serif;
}
display: flex;
justify-content: center;
img{
   padding: 20px;
   max-width: calc(100% - 40px);
   max-height: 400px;
}
`
export const ContainerMain = styled.main
`
color: white;
font-family: "formular","Arial",sans-serif;
margin: 0 auto;
max-width: 1200px;
.active{
   cursor: grab;
}
>h1{
   padding: 20px;
   color: black;
   text-align: center;
}
>p{
   padding: 20px;
   color: black;
   text-align: center;
}
@media screen and (max-width: 525px) {
   >section{
      display: none;
   }
}
}
`
export const NavContainer = styled.nav
`
background: black;
border-bottom: 3px solid white;
ul{
   padding: 20px 10px;
   display: flex;
   list-style: none;
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
   a{
      color: white;
      padding: 20px 10px;
      text-decoration: none;
   }
   .active{
      color: red;
   }
}
`

export const NewSection = styled.section
`
@media (orientation: landscape) {
        >section{
         display: flex;
         flex-wrap: nowrap;
         align-items: center;
        } 
}
>section:nth-child(odd){
   background: black;
   color: white;
}
>section:nth-child(even){
   background: white;
   color: black;
}
   >section{
      width: 100%;
      min-height: 25vh;
      display: flex;
      flex-wrap: wrap;
      section{
         margin: 20px;
      }
      div{
         mix-width: 220px;
         min-height: calc(100vh / 4);
      }
   }
}
img{
   padding: 20px;
   max-height: calc(100vh / 2);
}
p{
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
`