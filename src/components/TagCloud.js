import axios from "axios";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";


//Component displaying the tag cloud, a filter for each existing tag
class TagCloud extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            tags:[],
            errorMessage:""
        }
    }
    componentDidMount() {
        axios.get('https://hephaestus-backendv1.herokuapp.com/tags/tagcloud')
            .then(response => {
                this.setState({tags:response.data})
            })
            .catch(error=>{
                console.log(error)
                this.setState({errorMessage:"We got a problem"})
            })
    }
    render() {
        return (
            <Card className={"taggy"}>
                <Card.Body>
                <Card.Title className="centered">TAG CLOUD</Card.Title>
                {
                    this.state.tags.length ? this.state.tags.map(
                        (tag, i)=>
                            <Button variant="light" onClick={(e)=>this.props.filter(tag)} key={i}>#{tag}</Button>):
                        <div><h3>Tags not found!</h3></div>
                }
                <div className="centered upSpace"><Link to={"/newpost"} variant="secondary">Create New Post</Link></div>
            </Card.Body>
            </Card>
        )
    }
}
export default TagCloud;