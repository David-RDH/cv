import React from 'react';

class ImageProfile extends React.Component {

    render(){

        return (
            <div style={style.profile} >
                <img src="img/pdp.jpg" className="rounded-circle w-50"/>
                <h3 className="mt-4">{this.props.name}</h3>
                <h3>{this.props.firstName}</h3>
            </div>
        )

    }

}
export default ImageProfile;

const style = {
    profile: {
        textAlign: 'center',
        backgroundColor: '#1C2833',
        color: 'white',
        padding: 15
    }
}