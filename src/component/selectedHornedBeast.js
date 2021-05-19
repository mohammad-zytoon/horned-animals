import React from 'react';
import { Button, Modal } from 'react-bootstrap/';
// import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {

    handleClose2 = () => {
        this.props.handleClose();
    }
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.props.descreption}</p>
                        <img src={this.props.imageUrl} alt={this.props.title} width='465px'/>
                    </Modal.Body>

                    <Modal.Footer>
                    <p>Likes: {this.props.betsNumber}</p>
                        <Button variant="secondary" onClick={this.handleClose2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default SelectedBeast;