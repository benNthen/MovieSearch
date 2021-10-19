import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Header extends Component {

    submitHandler = (evt) => {
        evt.preventDefault();
        let {history} = this.props;
        history.push('/movies?searchText=' + this.refs.searchTf.value);
    }

    render() {
        return (
            <div className="alert alert-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Movie Search</h3>
                        </div>    
                        <div className="col-md-8">
                            <form onSubmit={this.submitHandler}>
                                <input type="search"
                                ref="searchTf" 
                                placeholder="Search..." 
                                className="form-control" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter (Header);