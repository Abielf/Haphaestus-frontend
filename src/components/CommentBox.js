import {Form, Card} from "react-bootstrap";
import axios from 'axios'
import React, {useState} from 'react';
import Button from "react-bootstrap/Button";



function CommentBox (props){
    const [author, setAuthor] = useState(),
        [body, setBody] = useState(),
        authorHandler = e => setAuthor(e.target.value),
        bodyHandler = e => setBody(e.target.value)


    const onFormSubmit = e => {
        e.preventDefault();
        const num=parseInt(props.toPost, 10)
        const myDate = new Date().toISOString().slice(0, 10).replace('T', ' ');
        const postInfo = {body: body, author: author,  writtenOn: myDate, postId:num};
        axios.post('https://hephaestus-backendv1.herokuapp.com/comments/', postInfo)
            .then(response => {
                console.log(response)
            })
            .catch(err=>{console.log(err)})
        setTimeout(function(){ window.location.reload() }, 500);
    }



    return (
        <Card>
        <Form style={{ width: '18rem' }} className="form-inline" onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label className="space">Enter Name</Form.Label>
                <Form.Control className="space" type="text"  onChange={authorHandler} placeholder="Name goes here" />
            </Form.Group>
            <Form.Group controlId="formBasicComment">
                <Form.Label className="space">Enter Comment</Form.Label>
                <Form.Control className="space" type="text" onChange={bodyHandler} placeholder="Text goes here" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Card>
    )

}

export default CommentBox;

