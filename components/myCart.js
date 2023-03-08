import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../action/cartActions'; 


class myCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList:[]
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps);
        this.setState({cartList:nextProps.cart});
    }
    componentDidMount(){
        console.log("in did mount", this.props.cart);
        this.setState({ cartList: this.props.cart});
    }

    removeFromCart = (item) =>{
        this.props.action.removeFromCart(item.id);
    }
    clearCart = () =>{
        this.props.action.clearCart();
    }    

    render() {
        return (
            <div>
                
                <p align="center">No. of items added in cart is- {this.state.cartList.length}</p><br/>
                <button align="center" onClick={()=>this.clearCart()}>Clear Cart</button>
                {
                    (this.state.cartList.length > 0) ?
                    <table align="center" border="2px solid">
                        <thead>
                            <tr>
                                <td>Product ID</td>
                                <td>PRODUCT Name</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.cartList.map((item,i) => {
                                    return(
                                        <tr key={i}>
                                        <td><div>{item.id}</div></td><td>{item.name}</td>
                                        <td><button onClick={()=>this.removeFromCart(item)}>Remove From Cart</button></td>
                                        </tr>
                               )})}
                            </tbody>

                    </table>:null
                }
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        action: bindActionCreators(cartActions, dispatch)
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(myCart);