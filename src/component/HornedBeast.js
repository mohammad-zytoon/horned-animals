import React from 'react';


class HornedBeast extends React.Component{
    render(){
        return(
            <div> <h2>{this.props.title}</h2> <img src={this.props.imageUrl} alt={this.props.alt}/> {this.props.descreption}
            </div>
        )
    }
}
export default HornedBeast;