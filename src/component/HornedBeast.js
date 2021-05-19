import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './selectedHornedBeast';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            betsNumber: 0,
            show: false,
            imageUrl:'',
            title:'',
            description:''
        }
    }
    clicksNumber = () => {
        this.setState({

            betsNumber: this.state.betsNumber+1,
        })
    }
    handleShow =()=>{
        this.setState({
            show:true,
            imageUrl:this.props.imageUrl,
            title:this.props.title,
            descreption:this.props.descreption
        })
        console.log(this.imageUrl);
    }

    handleClose=()=>{
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.handleShow} variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.descreption}
                        </Card.Text>
                        <Button onClick={this.clicksNumber} variant="primary">🐏 Likes {this.state.betsNumber} </Button>
                    </Card.Body>
                </Card>
                <SelectedBeast 
                show={this.state.show}
                handleClose={this.handleClose}
                betsNumber={this.state.betsNumber}
                imageUrl={this.state.imageUrl}
                title={this.state.title}
                descreption={this.state.descreption}
                />
            </div>
        )
    }
}
export default HornedBeast;







// {/* {this.props.title}</h2> <img src={this.props.imageUrl} alt={this.props.alt}/> {this.props.descreption} */}