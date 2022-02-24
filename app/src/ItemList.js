import React, { Component } from 'react';
import Loader from './Loader.js';
import './MovieList.css';

class itemList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // show results if app is not loading otherwise show loader
        let data = this.props.data;
        let categories = data.categories;
        let isLoading = this.props.isLoading;
        // let isDataEmpty = Object.entries(categories).length === 0;
        let itemList = isLoading ? <Loader /> : ( !data || !data.categories || data.categories.length < 0) ? <div>No results.<br />Please try another search term.</div> :
            Object.entries(data.categories).map((item, index) => <div key={index} >{item}</div>);
        return (
            <div className='itemList'>{itemList}</div>
        );
    }
};

export default itemList;

