import React from 'react'
import './Home.css'
import DealsCategory from '../Deals/Deals'
import Product from '../Products/Products' 
function Home() {
    return (
        <>

            <div className="homeWrapper">
                <div className="homeitem" id="homeitem1">
                <span className="homeitem1item">
                    <span id="homeitem1item1">Summer Sale</span>
                    <span id="homeitem1item2">Get Set for Summer</span>
                    </span>
                </div>
                <div className="homeitem" id="homeitem2"> 
                    <DealsCategory name="Styles for Men | Up to 70% off" imageUrl="/img/menCloth.jpg" />
                    <DealsCategory name="Upgrade your home | Amazon Brands & more" imageUrl="/img/elec.jpg" />
                    <DealsCategory name="Pay your credit card bills on Amazon" imageUrl="/img/pay.jpg" />
                    <DealsCategory name="Upgrade your home | Amazon Brands & more" imageUrl="/img/furniture.jpg" />
                </div>
                <div className="homeitem" id="homeitem3">
                    Amazing Deals
                </div>
                <div className="homeitem" id="homeitem4">
                    <Product id={1001} name="Apple iPhone 11 Pro (64GB) - Silver" price="₹ 89,899.00" rating={4} ratingCount={1254} imageUrl="/img/prod1.jpg"  />
                    <Product id={1002} name="HP Pavilion Gaming 15.6-inch FHD Gaming Laptop " price="₹ 65,990.00" rating={4.5} ratingCount={252} imageUrl="/img/prod2.jpg"  />
                    <Product id={1003} name="AmazonBasics 139cm (55 inch) Fire TV 4K Ultra HD Smart LED TV  " price="₹ 41,999.00 " rating={4} ratingCount={1114} imageUrl="/img/prod3.jpg"  />
                    <Product id={1004} name="Amazon Brand - House & Shields Men's Regular Polo Shirt " price="₹ 399.00 " rating={3.5} ratingCount={125} imageUrl="/img/prod4.jpg"  />
                    <Product id={1005} name="Amazon Brand - Solimo Fresh Ferns 144 TCDouble Bedsheet" price="₹ 799.00 " rating={4} ratingCount={2141} imageUrl="/img/prod5.jpg"  />
                    <Product id={1006} name="Mi Smart Band 4 0.94-inch AMOLED Color Display, 20 Days Battery" price="₹ 2,099.00 " rating={4} ratingCount={73974} imageUrl="/img/prod6.jpg"  />
                </div>
            </div>
        </>
    )
}

export default Home

// import { freemem } from 'os';

// console.log({freemem});