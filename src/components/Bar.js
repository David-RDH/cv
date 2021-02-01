import React from 'react';

class Bar extends React.Component {

    render(){
        return(
            <div 
                style={{
                    height: 5,
                    backgroundColor: 'white',
                    width: this.props.long
                }}
            ></div>
        )
    }

}

export default Bar;