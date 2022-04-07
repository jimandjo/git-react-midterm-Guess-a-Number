import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "bootstrap";


function GuessForm() {
    return (
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Make Your Guess</Form.Label>
          <Form.Control type="text" name="guess" />
        </Form.Group>
       
      </Form>