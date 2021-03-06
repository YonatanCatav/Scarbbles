import React, { Component } from "react";
import ReactDOM from "react-dom";

var arrButtons = [];

var height = 9;
var width = 15;

class Form extends Component {

    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { value } = event.target;
        this.setState(() => {
            return {
                value
            };
        });
    }

    render() {
        for(let y=0;y<height;y++) {
            var buttonsLine = [];
            for (let i = 0; i < width; i++) { //Moved your loop outside render()'s return
                buttonsLine.push(<button class="button" onClick={this.onClick}>
                </button>)
            }
            arrButtons.push(<div>{buttonsLine}</div>);
        }
        return (
            <div>{arrButtons}</div>
        );
    }
}

export default Form;

const wrapper = document.getElementById("container");
ReactDOM.render(<Form />, wrapper) ;