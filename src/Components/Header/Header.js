import React, { Component, useState } from 'react'
import '../Header/Header.css'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import styled, { keyframes } from "styled-components";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo from '../../utilities/Amazon_logo.svg';
import FlagIndia from '../../utilities/Flag_of_India.svg'
import Cart from '../../utilities/cart.png';
import Sidebar from '../Side/Side'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = (props) => {
    const [content, setContent] = useState('All');
    const [name, setName] = useState('Sign in')
    const [styleShade, setStyleShade] = useState({
        display: 'none',
        check: false
    });
    const [styleCategoryDropDown, setStyleCategoryDropDown] = useState({
        display: 'none',
        check: false
    });
    const [StyleSidebar, setStyleSidebar] = useState(styled.div`display:none;`);
    const auth = useSelector(state => state.auth);
    let changePosition = ''
    let disp = ''

    const changeposition1 = keyframes`
    from{transform: translateX(-100%);}
     to{transform: translateX(0%);}
    `;
    const changeposition2 = keyframes`
    from{transform: translateX(0%);}
     to{transform: translateX(-100%);}
    `;
    const changecontent = (event) => {
        console.log(event.target.innerText);
        let x = event.target.innerText;
        setContent(x);
    }
    const changeDisplayDropdownCategory = () => {
        if (styleCategoryDropDown.check === false) {
            setStyleCategoryDropDown({
                display: 'flex',
                check: true
            })

        }
        else {
            setStyleCategoryDropDown({
                display: 'none',
                check: false
            })
        }
    }
    const toggleShadeAndSidebar = () => {
        if (styleShade.check === false) {

            setStyleShade({
                display: 'inline',
                check: true
            });
            setStyleSidebar(styled.div`display:'inline';`)

            changePosition = changeposition1;

        }
        else {
            setStyleShade({
                display: 'none',
                check: false
            });
            setStyleSidebar(styled.div` display:none;`);

            disp = 'none';
            changePosition = changeposition2;

        }

    }
    console.log("name",auth.user.name);
    const notLoggedIn = () => {
        return (
            <span className="navsubitem3items" id="navsubitem3_2item1" style={{ fontSize: 12 }}>
                Hello, Sign in
            </span>
        )
    }
    const loggedIn = () => {
        return (
            <span className="navsubitem3items" id="navsubitem3_2item1" style={{ fontSize: 12 }}>
                Hello, {auth.user.name}
            </span>
        )
    }


    console.log("anmol", localStorage.token);


    return (
        <>
            <div className="navcontainer">
                <div className="navitem" id="navitem1">
                    {/* nav item for smaller window size */}
                    <div className="navsubitem1" id="navsubitem1_0" onClick={toggleShadeAndSidebar}>
                        <MenuIcon style={{ fontSize: 25 }} />
                    </div>
                    <div className="navsubitem1" id="navsubitem1_1">
                        <Link to="/"> <img src={logo} alt='Logo' /></Link>&nbsp;<span className="in">.in</span>
                    </div>
                    <div className="navsubitem1" id="navsubitem1_2">
                        <span className="navLocationWrapper" id="location_symbol">
                            <LocationOnOutlinedIcon style={{ fontSize: 20 }} />
                        </span>
                        <span className="navLocationWrapper" id="location_detail">
                            <span style={{ fontSize: 12 }}>Hello</span>
                            <span>Select your address</span>
                        </span>
                    </div>
                </div>
                <div className="navitem" id="navitem2">

                    <div className="navsubitem2" id="navsubitem2_0" onClick={changeDisplayDropdownCategory}>
                        <span className="navsubitem2Item1" style={{ fontSize: 12 }} >
                            {content}
                        </span>
                        <span className="allItemList" style={styleCategoryDropDown}>

                            <div className="allItem" id="allItem_1" onClick={changecontent}>All Categories</div>
                            <div className="allItem" id="allItem_2" onClick={changecontent}>Deals</div>
                            <div className="allItem" id="allItem_3" onClick={changecontent}>Alexa Skills</div>
                            <div className="allItem" id="allItem_4" onClick={changecontent}>Amazon Devices</div>
                            <div className="allItem" id="allItem_5" onClick={changecontent}>Amazon Fashion</div>
                            <div className="allItem" id="allItem_6" onClick={changecontent}>Amazon Patry</div>
                            <div className="allItem" id="allItem_7" onClick={changecontent}>Appliances</div>
                            <div className="allItem" id="allItem_8" onClick={changecontent}>Apps & Games</div>
                            <div className="allItem" id="allItem_9" onClick={changecontent}>Baby</div>
                            <div className="allItem" id="allItem_10" onClick={changecontent}>Beauty</div>
                            <div className="allItem" id="allItem_11" onClick={changecontent}>Books</div>
                            <div className="allItem" id="allItem_12" onClick={changecontent}>Car & Moterbike</div>
                            <div className="allItem" id="allItem_13" onClick={changecontent}>Clothing & Accessories</div>
                            <div className="allItem" id="allItem_14" onClick={changecontent}>Collectibles</div>
                            <div className="allItem" id="allItem_15" onClick={changecontent}>Computer & Accessories</div>
                            <div className="allItem" id="allItem_16" onClick={changecontent}>Electronics</div>
                            <div className="allItem" id="allItem_17" onClick={changecontent}>Furniture</div>

                        </span>
                        <span className="navsubitem2Item2" id="navsubitem2Item2_2" style={{ marginTop: -3 }}>
                            <ArrowDropDownIcon style={{ fontSize: 16 }} />

                        </span>
                    </div>
                    <div className="navsubitem2" id="navsubitem2_1">
                        <input />
                    </div>
                    <Link to='/search' className="navsubitem2" id="navsubitem2_2">
                        <div className="navsubitem2" id="navsubitem2_2">

                            <SearchIcon style={{ fontSize: 30, color: 'black', fontWeight: 'lighter' }} />

                        </div>
                    </Link>

                </div>
                <div className="navitem" id="navitem3">
                    <div className="navsubitem3" id="navsubitem3_1">

                        <div className="navsubitem3items" id="navsubitem3_1item1">
                            <img src={FlagIndia} alt='National flag' />
                        </div>
                        <div className="navsubitem3items" id="navsubitem3_1item2">
                            <ArrowDropDownIcon style={{ fontSize: 14 }} />
                        </div>
                    </div>
                    <div className="navsubitem3" id="navsubitem3_2">
                        <Link to="/signIn">
                            {auth.authenticate?loggedIn():notLoggedIn()}
                        </Link>
                        <span className="navsubitem3items" id="navsubitem3_2item2">
                            <Link to="/signIn">
                                <span id="ni3_2i2item1">
                                    Account & Lists
                                </span>
                            </Link>
                            <span id="ni3_2i2item2">
                                <ArrowDropDownIcon style={{ fontSize: 14 }} />
                            </span>
                        </span>
                    </div>
                    <div className="navsubitem3" id="navsubitem3_3">
                        <span className="navsubitem3items" id="navsubitem3_3item1" style={{ fontSize: 12 }}>
                            Returns
                        </span>
                        <span className="navsubitem3items" id="navsubitem3_3item2" >
                            & Orders
                        </span>
                    </div>
                    <div className="navsubitem3" id="navsubitem3_4">
                        <img src={Cart} alt='cart' />
                        <span>Cart</span>
                    </div>

                </div>
            </div>
            {/* nav Searchbar for smaller screen */}
            <div className="navforsmallWrapper">
                <div className="navforsamllscreen" id="navforsamllscreen1">

                    <div className="navsmallitem1" id="navsmallitem1_0" onClick={changeDisplayDropdownCategory}>
                        <span className="navsmallitem1Item_1" style={{ fontSize: 12 }} >
                            {content}
                        </span>
                        <span className="allItemList" style={styleCategoryDropDown}>

                            <div className="allItem" id="allItem_1" onClick={changecontent}>All Categories</div>
                            <div className="allItem" id="allItem_2" onClick={changecontent}>Deals</div>
                            <div className="allItem" id="allItem_3" onClick={changecontent}>Alexa Skills</div>
                            <div className="allItem" id="allItem_4" onClick={changecontent}>Amazon Devices</div>
                            <div className="allItem" id="allItem_5" onClick={changecontent}>Amazon Fashion</div>
                            <div className="allItem" id="allItem_6" onClick={changecontent}>Amazon Patry</div>
                            <div className="allItem" id="allItem_7" onClick={changecontent}>Appliances</div>
                            <div className="allItem" id="allItem_8" onClick={changecontent}>Apps & Games</div>
                            <div className="allItem" id="allItem_9" onClick={changecontent}>Baby</div>
                            <div className="allItem" id="allItem_10" onClick={changecontent}>Beauty</div>
                            <div className="allItem" id="allItem_11" onClick={changecontent}>Books</div>
                            <div className="allItem" id="allItem_12" onClick={changecontent}>Car & Moterbike</div>
                            <div className="allItem" id="allItem_13" onClick={changecontent}>Clothing & Accessories</div>
                            <div className="allItem" id="allItem_14" onClick={changecontent}>Collectibles</div>
                            <div className="allItem" id="allItem_15" onClick={changecontent}>Computer & Accessories</div>
                            <div className="allItem" id="allItem_16" onClick={changecontent}>Electronics</div>
                            <div className="allItem" id="allItem_17" onClick={changecontent}>Furniture</div>

                        </span>
                        <span className="navsmallitem1Item_2" id="navsmallitem1Item_2" style={{ marginTop: -3 }}>
                            <ArrowDropDownIcon style={{ fontSize: 16 }} />

                        </span>
                    </div>
                    <div className="navsmallitem1" id="navsmallitem1_1">
                        <input />
                    </div>
                    <Link to='/search' className="navsmallitem1" id="navsmallitem1_2">
                        <div className="navsmallitem1" id="navsmallitem1_2">

                            <SearchIcon style={{ fontSize: 30, color: 'black', fontWeight: 'lighter' }} />

                        </div>
                    </Link>

                </div>
                <div className="navforsamllscreen" id="navforsamllscreen2">
                    <div className="navsmallitem2" id="navsmallitem2_1">
                        <span id="navsmallitem2_1Item1">
                            Shop By
                        </span>
                        <span id="navsmallitem2_1Item2">
                            Category
                        </span>
                    </div>
                    <div className="navsmallitem2" id="navsmallitem2_2">Wish List</div>
                    <div className="navsmallitem2" id="navsmallitem2_3">Deals</div>
                    <div className="navsmallitem2" id="navsmallitem2_4">Sell</div>
                </div>
            </div>
            {/* nav 2 */}
            <div className="nav2">
                <div className="navcontainer2" id="navcontainer2" >
                    <div className="nav2wrapper" id="nav2wrapperleft" onClick={toggleShadeAndSidebar}>
                        <div className="nav2leftitem" id="nav2leftitem1"  >
                            <MenuIcon style={{ fontSize: 25 }} />
                        </div>
                        <div className="nav2leftitem" id="nav2leftitem2">
                            All
                        </div>
                    </div>
                    <div className="nav2wrapper" id="nav2wrappermiddle">
                        <div className="nav2middleitem" id="nav2middleitem1">Best Sellers</div>
                        <div className="nav2middleitem" id="nav2middleitem2">Mobiles</div>
                        <div className="nav2middleitem" id="nav2middleitem3">Fashion</div>
                        <div className="nav2middleitem" id="nav2middleitem4">Electronics</div>
                        <div className="nav2middleitem" id="nav2middleitem5">New Release</div>
                        <div className="nav2middleitem" id="nav2middleitem6">
                            Prime
                            <ArrowDropDownIcon
                                style={{ fontSize: 16, position: 'relative', bottom: 1 }} />
                        </div>
                        <div className="nav2middleitem" id="nav2middleitem7" >Customer Services</div>
                        <div className="nav2middleitem" id="nav2middleitem8">Computer</div>
                        <div className="nav2middleitem" id="nav2middleitem9">Amazon Pay</div>
                    </div>
                    <div className="nav2wrapper" id="nav2wrapperright">
                        <span id="nav2wrapperrightitem"> Amazons response to covid-19</span>
                    </div>
                </div>
            </div>
            <div className="shade" style={styleShade}></div>
            <StyleSidebar>
                <Sidebar check={styleShade.check} changePosition={changeposition1} />
            </StyleSidebar>


            <span className="cross" style={styleShade} onClick={toggleShadeAndSidebar}>
                <ClearIcon style={{ fontSize: 30 }} /></span>
        </>
    )

}
export default Header
