

import React, { Component } from "react";
import { itemData } from "../data/Posts.js";
import { Link } from "react-router-dom";
export default class Singleitem extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
  
      item: {},
      id,
      loading: true
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/:id")
    .then(res => res.json())
    .then(
      (result) => {
          console.log('results',result)
        this.setState({
          isLoaded: true,
          items: result,
          search: ""
        });
      },

       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
      console.log(this.props.match.id,'jjjjjjjjjj')
    const {
    body,
    id,
    userID,
      title,
      ingredients
    } = this.state.item;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading item....
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
            <h1>{body}</h1>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              to="/home"
              className="btn btn-warning mb-5 text-capatilize"
            >
              back to items list
            </Link>
          
          </div>
          {/* info */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
          
          </div>
        </div>
      </div>
    );
  }
}