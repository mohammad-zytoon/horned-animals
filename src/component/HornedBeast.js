import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            betsNumber: 0,
        }
    }
    clicksNumber = () => {
        this.setState({

            betsNumber: this.state.betsNumber+1,
        })
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.descreption}
                        </Card.Text>
                        <Button onClick={this.clicksNumber} variant="primary">🐏 Likes {this.state.betsNumber} </Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
export default HornedBeast;







// {/* {this.props.title}</h2> <img src={this.props.imageUrl} alt={this.props.alt}/> {this.props.descreption} */}