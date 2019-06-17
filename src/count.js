import React, { Component } from 'react';

export default class Count extends Component{
    state = {
        Count:0
    };
    formerCount() {
        const{Count} = this.state;
        return Count === 0? <h1>ZERO</h1>: Count;
    }
   
    render()
    {
        return(
            <div>
                <span>{this.formerCount()}</span>
            </div>

        );
    }
}