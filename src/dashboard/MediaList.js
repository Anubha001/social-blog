import React, { Component } from "react";
import Recipe from '../Social';
export default class RecipeList extends Component {
  render() {
    const { items } = this.props;
    console.log(this.props,'props')
    return (
      <>
        <div className="container py-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {items.map(item => (
              <Recipe key={item.id} item={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
}