import { Component } from "react";

export default class Movie extends Component {
    render() {
        return (
            <>
                {this.props.testMovie.map(item => {
                    return (
                        <>
                            <p>item:{item.title}</p>
                            <p>popularity:{item.popularity}</p>
                        </>

                    )

                })
                }

            </>
        )
    }
}