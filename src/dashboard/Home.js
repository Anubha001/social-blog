import React, { Component } from 'react';
import  Recipe from './Social';
import Search from './Search'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      handleChange = e => {
        this.setState({
          search: e.target.value
        });
      };
      handleSubmit = e => {
        e.preventDefault();
      };

      componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
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
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (
                <>
                <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
              
        
        <div className="container py-5">
      
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">media list</h1>
            </div>
          </div>

          <div className="row">
            {items.map(item => (
              < Recipe key={item.id} item={item} />
            ))}
          </div>
        </div>
                </>
            
              
              );
    }
}
}
