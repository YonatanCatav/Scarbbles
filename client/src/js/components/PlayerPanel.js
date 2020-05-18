import React, { Component } from "react";
import ReactDOM from "react-dom";


class PlayerPanel extends Component {

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
                buttonsLine.push(<div class="back"><button class="button" onClick={this.onClick}>{i}
                </button></div>)
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