import React, {Component} from 'react'

export default class Timeline extends Component {
   constructor(props){
      super(props)
   }
   render(){
      return(
           <svg 
               height={this.props.radius*2} 
               width={this.props.radius*2} 
               style={this.props.style}
            > 
               <circle 
                  cx={this.props.radius} 
                  cy={this.props.radius} 
                  r={this.props.radius} 
                  fill={this.props.fill} 
                  />
            </svg>
         )
   }
}
