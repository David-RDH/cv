import React from "react";
import ImageProfile from "./ImageProfile";
import LeftBody from "./LeftBody";

class Left extends React.Component {

    state = this.props.data

    render(){

        return (
            <div style={style.grand}>
                <ImageProfile
                    width={50}
                    name={this.state.profile.name}
                    firstName={this.state.profile.firstName} 
                />
                <LeftBody data={this.state}/>
            </div>
        );

    }

}
export default Left;
const style = {
    grande: {}
}