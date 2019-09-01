import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Recipe extends Component {
  render() {
    const {
      id,
      title,
      body,
      userId,
      media_id
    } = this.props.item;

    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%" }}>
     
          <div className="card-body text-capitalize">
            <h8>{title}</h8>
          </div>
          <br></br>
          <div className="card-body text-capitalize">
            <h6>{body}</h6>
          </div>
        
          <div className="card-footer">
          <span>
            <Link
              to={`/media/${media_id}`}
              className="btn btn-primary text-capitalize"
            >
              details
            </Link>
          </span>
        
          </div>
        </div>
      </div>
    );
  }
}