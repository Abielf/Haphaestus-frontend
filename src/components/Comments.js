import axios from 'axios'
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Container, Col, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CommentBox from "./CommentBox";

function Comments(){
    let {id}=useParams();
    const [comments, setComments,]=useState([])
    const [post, setPost,]=useState([])
    useEffect(() => {
        axios.get(`https://hephaestus-backendv1.herokuapp.com/comments/bypost/${id}`)
            .then(response => {
                setComments(response.data)
            }).catch(err=>{console.log(err)})
        axios.get(`https://hephaestus-backendv1.herokuapp.com/posts/${id}`)
            .then(response => {
                setPost(response.data)
            }).catch(err=>{console.log(err)})
    },[]);

    return(
        <Container>
            <Row>
            <Card>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle>{post.author}</Card.Subtitle>
                <Card.Body>{post.body}</Card.Body>
            </Card>
            </Row>
                <Row>
                    <br/><br/>
                </Row>

                <Row>
                <Col md={{ span: 6, offset: 3 }}>

            {comments.length ? comments.map(
                    comment=>
                        <Card style={{ width: '20rem' }} className="bottom" border={"dark"} key={comment.id}>
                            <Card.Subtitle className="space">Body: {comment.body}</Card.Subtitle>
                            <Card.Subtitle className="space">By: {comment.author}</Card.Subtitle>
                            <Card.Subtitle className="space">Comment made: {comment.writtenOn}</Card.Subtitle>
                        </Card>
            ):<Card>Be the first to comment!</Card>
            }
        </Col></Row>

            <Row><Col md={{ span: 6, offset: 2 }}><CommentBox toPost={post.id}/></Col></Row>
        </Container>
    )

    }

export default Comments;