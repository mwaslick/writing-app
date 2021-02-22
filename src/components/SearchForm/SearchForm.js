import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function SearchForm(props) {


    return(
        <Container>
             <Form className= "searchForm" onChange={props.handleChange} onSubmit={props.searchFunction}>
                <Form.Group>
                    <Form.Label>Search a word here</Form.Label>
                <Form.Control type="text" value={props.searchTerm} />
            </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


        </Container>
    )
}