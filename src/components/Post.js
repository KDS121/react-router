import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import {deletePost} from '../actions/postActions' 

export class Post extends Component {
    // state = {
    //     // id: null
    //     post: null
    // }
    // componentDidMount(){
    //     console.log(this.props) //we automatically gets props in class based components
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res =>{
    //         this.setState({
    //             post: res.data
    //         })
    //         console.log(res)
    //     })
    //     // this.setState({
    //     //     id: id
    //     // })
    // }
    handleClick =() =>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
    render() {
        // return (
        //     <div className="container">
        //         <h4>{this.state.id}</h4>
        //     </div>
        // )
        // const post = this.state.post ?  

            console.log(this.props)
            const post = this.props.post ?  (
            <div className="post">
                <h4 className="center">
                {/* {this.state.post.title} */}
                {this.props.post.title}
                </h4>
                <p>
                {/* {this.state.post.body} */}
                {this.props.post.body}
                </p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                       Delete post 
                    </button>
                </div>
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

const mapStatetoProps = (state, ownProps) =>{
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => { return post.id === id })
    }
}

const mapDispatchtoProps = (dispatch) =>{
    //we will return an object
    return {
        // deletePost: (id) =>{ dispatch({type: 'DELETE_POST', id: id }) }
        deletePost: (id) =>{ dispatch(deletePost(id)) }
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Post)
