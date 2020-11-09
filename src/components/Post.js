import React, { Component } from 'react'
import axios from 'axios'

export class Post extends Component {
    state = {
        // id: null
        post: null
    }
    componentDidMount(){
        console.log(this.props) //we automatically gets props in class based components
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res =>{
            this.setState({
                post: res.data
            })
            console.log(res)
        })
        // this.setState({
        //     id: id
        // })
    }
    render() {
        // return (
        //     <div className="container">
        //         <h4>{this.state.id}</h4>
        //     </div>
        // )
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>       
        )
        : 
        (<div className="center">Loading post...</div>) 

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

export default Post
