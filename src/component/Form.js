import React from 'react';
import Form from 'react-bootstrap/Form';


class Formbos extends React.Component {
    filteredHorns=(event)=>{
        let value = event.target.value;
        this.props.filteredHorns(value);
    }
    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>User selection</Form.Label>
                        <Form.Control as="select" custom onChange={this.filteredHorns}>
                            <option value='all'>all</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default Formbos;