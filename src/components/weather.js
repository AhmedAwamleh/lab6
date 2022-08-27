import { Component } from "react";

export default class Weather extends Component {
    render() {
        return (
            <>
                {this.props.weatherState.map(item => {
                    console.log(this.props.weatherState.map())
                    return (


                        <li>{item.date} :{item.description}</li>

                    )
                })

                }
            </>
        )
    }
}