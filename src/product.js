import React, { Component } from 'react';

class Product extends Component {
   constructor(props) {
       super(props);
       this.buy = this.buy.bind(this);
      
   }
   
buy() {
   alert("order was successfully submit");
}
  
    render() {
      return (
          <div>
          <p>{this.props.name}-{this.props.price}</p>
          <button onClick={this.buy}>Buy</button>
          
        </div>

);
    }
}
export default Product;

