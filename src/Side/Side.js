import React, { Component } from 'react'
import styled from "styled-components";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Side.css'
export class Side extends Component {
    constructor(props) {

        super(props)
        
        this.state = {
            sideWrapper: styled.div`
                    width: 365px;
                    position: fixed;
                    background-color: #fff;
                    z-index:4;
                    flex-direction: column;
                    height: 100%;
                    box-shadow: 4px 0 10px 0 rgb(0 0 0 / 40%);
                    will-change: transform;
                    animation:${this.props.changePosition} 0.5s ease;
                `

        }
    }
    
    

    render() {
        return (
            <>
                <div className="SideContainer">
                    <this.state.sideWrapper>
                        <div className="subSideWrapper" id="subSideWrapper_1">
                            <span className="subWrapper1Items" id="subWrapper1Item_1">
                                <AccountCircleIcon style={{ fontSize: 30, color: "white" }} />
                            </span>
                            <span className="subWrapper1Items" id="subWrapper1Item_2">
                                Hello, Sign in
                            </span>
                        </div>
                        <div className="subSideWrapper" id="subSideWrapper_2">
                            <div className="subWrapper2Items" id="subWrapper2Item_1">
                                <div className="sub2Item1" id="sub2Item1_1">Trending</div>
                                <div className="sub2Item1" id="sub2Item1_2">Best Sellers</div>
                                <div className="sub2Item1" id="sub2Item1_3">New Releases</div>
                                <div className="sub2Item1" id="sub2Item1_4">Movers and Shakers</div>
                            </div>
                            <div className="subWrapper2Items" id="subWrapper2Item_2">
                                <div className="sub2Item2" id="sub2Item2_1">Digital Content And Devices</div>
                                <div className="sub2Item2" id="sub2Item2_2">
                                    Echo & Alexa
                                </div>
                                <div className="sub2Item2" id="sub2Item2_3">Fire Tv</div>
                                <div className="sub2Item2" id="sub2Item2_4">Kindle E-Readers & ebooks</div>
                                <div className="sub2Item2" id="sub2Item2_5">Audiable audiobooks</div>
                                <div className="sub2Item2" id="sub2Item2_6">Amazon Prime Video</div>
                                <div className="sub2Item2" id="sub2Item2_7">Amazon Prime Music</div>
                            </div>
                            <div className="subWrapper2Items" id="subWrapper2Item_3">

                                <div className="sub2Item3" id="sub2Item3_1">Shop By Department</div>
                                <div className="sub2Item3" id="sub2Item3_2">Mobiles, Computers</div>
                                <div className="sub2Item3" id="sub2Item3_3">Tv, Appliances, Electronics</div>
                                <div className="sub2Item3" id="sub2Item3_4">Men's Fashion</div>
                                <div className="sub2Item3" id="sub2Item3_5">Women's Fashon</div>
                                <div className="sub2Item3" id="sub2Item3_6">See All</div>

                            </div>
                            <div className="subWrapper2Items" id="subWrapper2Item_4">
                                <div className="sub2Item4" id="sub2Item4_1">Programs & Features</div>
                                <div className="sub2Item4" id="sub2Item4_2">Gift Cards & Mobile Recharges</div>
                                <div className="sub2Item4" id="sub2Item4_3">Flight Tickets</div>
                                <div className="sub2Item4" id="sub2Item4_4">Amazon Outlet</div>
                                <div className="sub2Item4" id="sub2Item4_5">Amazon Assistant</div>

                            </div>
                            <div className="subWrapper2Items" id="subWrapper2Item_5">
                                <div className="sub2Item5" id="sub2Item5_1"> Help & Settings</div>
                                <div className="sub2Item5" id="sub2Item5_2">Your Account</div>
                                <div className="sub2Item5" id="sub2Item5_3">Customer Service</div>
                                <div className="sub2Item5" id="sub2Item5_4">Sign In</div>
                            </div>
                        </div>
                    </this.state.sideWrapper>

                </div>
            </>
        )
    }
}

export default Side
