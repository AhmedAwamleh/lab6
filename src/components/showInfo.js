import { Component } from "react";

export default class ShowInfo extends Component {
    render() {
        return (
            <>
                <p>city Name:{this.props.info.display_name}</p>
                <p>LON:{this.props.info.longitude}</p>
                <p>LAT:{this.props.info.latitude}</p>




            </>
        )
    }
}