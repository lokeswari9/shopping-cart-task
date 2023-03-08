import React, { Component } from 'react';


class Product extends Component {

    addToCart = (itemAdded) => {
        console.log(itemAdded);
        this.props.addedToCart(itemAdded);
    }
    
    render() {
        return (
            <div>
            <div>
                <table align="center" border="2px solid">
                    <thead>
                        <tr>
                            <td> Product Id</td>
                            <td> Product name</td>
                            <td> Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((item,i) =>{
                            return(
                                 <tr key={i}>
                                 <td><div>{item.id}</div></td><td>{item.name}</td>
                                 <td><button onClick ={()=>this.addToCart(item)} >Add To Cart</button></td>
                                 </tr>
                        )})}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}
export default Product;

