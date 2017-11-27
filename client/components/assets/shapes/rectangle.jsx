import React, {Component} from 'react';

export default class Rectangle extends Component {
   render() {
      return (
         <svg 
            width={this.props.width}
            height={this.props.height}
            style={this.props.style}
         >
            <rect 
               width={this.props.width}
               height={this.props.height}
               fill={this.props.fill} 
            />
         </svg>
      )
   }
}
