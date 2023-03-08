import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';
import searchProduct from './searchProduct';

import { connect } from 'react-redux'; //to connect react&redux
import { bindActionCreators } from 'redux'; //to connect all events
import * as cartActions from '../action/cartActions';



class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            searchvalues: []            
        }
    }
    addedToCart = (productSelected) => {
        console.log(productSelected);
        this.props.action.addToCart(productSelected);
    }

    componentDidMount() {
        this.getData().then(response => {
            this.setState({ list: response.data});
            this.setState({searchvalues: this.props.searchvalues});
            console.log(this.state.list)
        });
        
    }
    componentWillReceiveProps(nextProps) {
        console.log('willreceiveprops');
        this.setState({ searchvalues: nextProps.searchvalues })
    }
    searchItem = (itemSearch) => {
        this.state.list.map((item, index) => {
            if ((itemSearch.trim().toLowerCase()) === (item.name.trim().toLowerCase())) {
                return (
                    this.props.action.searchItem(item)
                )
            }
        })
    }
    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get('https://nodesense.github.io/api/products.json').then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }
    render() {
        console.log('searchvalues', this.state.searchvalues)
        
        return (
            <div>                
                <Product list={this.state.list} addedToCart={this.addedToCart} />

                <searchProduct  list={this.state.list} searchItem={this.searchItem} />
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    return {
        //adds newly added list to products
        addlist: state.addlist,
        searchvalues: state.searchvalues
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        action: bindActionCreators(cartActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);