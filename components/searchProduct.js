import React,{Component} from 'react';

class searchProduct extends Component{

    addToCart = (itemAdded) => {
        console.log(itemAdded);
        this.props.cartSelected(itemAdded);
    }
    submitEvent = (event) => {
        event.preventDefault();
        const target = this.target.value;
        console.log(target);
        this.props.searchItem(target);
    }
    render(){
        return(
            <div>
               <p> search  product</p>
                <div>
                <form onSubmit={this.submitEvent}>
                <input type="text" name="search" id="13" placeholder="search for...." 
                    ref={(user)=> this.target = user}/>
                <button type="submit">SEARCH</button>
                </form>
                </div>
            </div>
        );
    }
}
export default searchProduct;