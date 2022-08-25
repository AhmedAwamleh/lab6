import { Component } from "react";

export default class ErrorClass extends Component {
    render() {
        return (
            <>
                <p>{this.props.error}</p>

            </>
        )
    }
}