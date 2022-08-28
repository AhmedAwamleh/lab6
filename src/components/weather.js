import { Component } from "react";

export default class Weather extends Component {
    render() {
        return (

            <>

                {this.props.weatherState.map(item => {

                    return (


                        <p>{item.date},{item.description}</p>

                    )
                })

                }
            </>
        )
    }
}