import { Component } from "react";

export default class SearchForm extends Component {
    render() {
        return (
            <>
                <form onSubmit={this.props.submitHandle}>

                    <input type="text" id="cityName" />
                    <button type="submit">Search</button>

                </form>
            </>
        )
    }
}