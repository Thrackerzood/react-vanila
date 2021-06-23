import styled from 'styled-components'



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
`
