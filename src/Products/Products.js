import React, { Component } from 'react'
import './Products.css'
import StarRoundedIcon from '@material-ui/icons/StarRounded';
export class Products extends Component {
    static propTypes = {

    }

    render() {
        return (
            <>
                <div className="productWrapper" id="productWrapper">
                    <div className="productitem" id="productWrapperItem_1">
                        <span>{this.props.name} </span>
                    </div>
                    <div className="productitem" id="productWrapperItem_2">
                        <span>{this.props.price} </span>
                    </div>
                    <div className="productitem" id="productWrapperItem_3">
                        <span>
                           <b>{this.props.rating}</b> <StarRoundedIcon style={{fontSize:13,color:"rgb(248, 214, 63)"}} />({this.props.ratingCount})
                        </span> 
                    </div>
                    <div className="productitem" id="productWrapperItem_4">
                        <img src={this.props.imageUrl} alt="Product" />
                    </div>
                    <div className="productitem" id="productWrapperItem_5">
                        <span>Add to basket</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Products
