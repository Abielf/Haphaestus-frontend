import React from 'react'
import { Container, Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import axios from "axios";


class CreateNewPost extends React.Component{
    constructor(props) {
        super(props)
        this.state = {author: '', title: '', body: '', labels: ''};
    }
    authorHandler = e => this.setState({author:e.target.value})
    titleHandler = e => this.setState({title:e.target.value})
    bodyHandler = e => this.setState({body:e.target.value})
    tagHandler = e => this.setState({labels:e.target.value})


    onFormSubmit = e => {
        e.preventDefault();
        let targetPostId=0;
        const myDate = new Date().toISOString().slice(0, 10).replace('T', ' ');
        const postInfo = {author: this.state.author, title: this.state.title, body: this.state.body, published: myDate};
        const tagArray = this.state.labels.split(',');
        axios.post('https://hephaestus-backendv1.herokuapp.com/posts/', postInfo)
            .then(response => {
                console.log(response)
                targetPostId= parseInt(response.data, 10)
                console.log(targetPostId)
                for(let i = 0; i < tagArray.length; i++) {
                    let tagInfo = {label: tagArray[i], postId: targetPostId};
                    if (/[?#]/.test(tagInfo.label)){
                        console.log("oh wuh oh that tags a big ol whoopsie")
                    }else {
                        axios.post('https://hephaestus-backendv1.herokuapp.com/tags/', tagInfo)
                            .then(tagResponse => {
                                console.log(tagResponse)
                                console.log(targetPostId)
                            })}

                }
            })
            .catch(err=>{console.log(err)})
        setTimeout(function(){ window.location.assign("/") }, 500);
    }

    render(){return(<Container>
        <Card>
        <Form className="form-inline" onSubmit={this.onFormSubmit}>
            <Form.Group controlId="postAuthor">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control onChange={this.authorHandler} type="text" placeholder="Name goes here" />
            </Form.Group>

            <Form.Group controlId="postTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={this.titleHandler} type="text" placeholder="Title goes here" />
            </Form.Group>
            <Form.Group controlId="postBody">
                <Form.Label>Body</Form.Label>
                <Form.Control onChange={this.bodyHandler} type="text"  placeholder="Body goes here" />
            </Form.Group>

            <Form.Group controlId="tagsList">
                <Form.Label>tags</Form.Label>
                <Form.Control onChange={this.tagHandler}  type="text" placeholder="put all tags here separated by commas" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Card>
    </Container>)}

}
export default CreateNewPost;