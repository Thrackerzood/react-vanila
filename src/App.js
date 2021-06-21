import React from "react";
import Car from './components/cars'

class App extends React.Component {
  constructor(props){
    super(props)
        this.state = {
          cars: [{id: 1, name: 'mazda' , year: '2018'},
                {id: 2, name: 'bmw' , year: '2016'},
                {id: 3, name: 'Audi' , year: '2017'}],
                showCars: false
              }
}
onChangeName = (name,index) => {
const car = this.state.cars[index]
car.name = name
const cars = [...this.state.cars]
cars[index] = car
this.setState({cars})
}

deleteHandel = (index) =>{
  const cars = [...this.state.cars]
  cars.splice(index, 1)
  this.setState({cars})
}

toggleCarsHandler = () => {
  this.setState({
    showCars: !this.state.showCars
  })
}
render() {
  let cars = null
  if(this.state.showCars){
     cars =  this.state.cars.map((car,index) => 
        <Car key={index} id={car.id} name={car.name} year={car.year}
        onChangeName={event => this.onChangeName(event.target.value, index)}
        onDelete={this.deleteHandel.bind(this, index)}></Car> 
     )}
    return (
      <>
      <h1>title: {this.props.title}</h1>
      <button onClick={this.toggleCarsHandler}>toggle cars</button>
      {cars}
      </> 
    )
  }
}

export default App;
