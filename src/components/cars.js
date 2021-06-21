import React from "react"

class Car extends React.Component {

   componentWillReceiveProps(nextProps){
      console.log('Car componentWillReceiveProps', nextProps)
   }
   shouldComponentUpdate(nextProps, nextState){
      console.log('Car  shouldComponentUpdate', nextProps , nextState)
      return nextProps.name.trim() !== this.props.name.trim()
   }
   componentWillUpdate(nextProps, nextState){
      console.log('Car  componentWillUpdate', nextProps , nextState)
   }
   componentDidUpdate(){
      console.log('Car  componentDidUpdate')
   }
render(){
      return (<>
         <h1>{this.props.name} id: {this.props.id}</h1>
         <p>{this.props.year}</p>
         <input type="text" onChange={this.props.onChangeName} value={this.props.name}></input>
         <button onClick={this.props.onDelete}>delete</button>
      </>)
   }
}

export default Car