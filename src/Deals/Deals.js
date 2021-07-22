import React, { Component } from 'react'
import './Deals.css'

export class Product extends Component {
    static propTypes = {

    }

    render() {
        var x = this.props.imageUrl;
        return (
            <>
                <div className="productwrapper">
                    <div className="productwrapperitems" id="productwrapperitem_1">
                        <span>{this.props.name}</span>
                    </div>
                    <div className="productwrapperitems" id="productwrapperitem_2" style={{ backgroundImage: 'url(' + { x } + ')' }}>
                        <img src={this.props.imageUrl} alt="Product" ></img>
                    </div>
                    <div className="productwrapperitems" id="productwrapperitem_3">See More</div>
                </div>
            </>
        )
    }
}

export default Product
