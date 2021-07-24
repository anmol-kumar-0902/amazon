import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, signOut } from '../../User/Actions';
import { Link, Redirect } from 'react-router-dom'
import './Dashboard.css'
import logo from '../../utilities/Amazon_logo_black.svg'
const Dashboard = () => {
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn())
        }
    }, [])
    const logout = () => {
        dispatch(signOut());

    }
    const loggedin = () => {
        return (
            <>
                <header class="navbar navbar-dark sticky-top bg-dark d-md-none flex-md-nowrap p-1 shadow">
                <Link to="/">
                    <div className="SignInItema" id="SignInItem_1">
                         <img src={logo} style={{ filter: 'invert' }} alt='Logo' />&nbsp;&nbsp;
                        <span>.in</span>
                    </div>
                    </Link>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-sm-block bg-light sidebar collapse">
                            <div className="position-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <div className="SignInItema" id="SignInItem_1">
                                            <Link to="/"> <img src={logo} style={{ filter: 'invert' }} alt='Logo' /></Link>&nbsp;&nbsp;
                                            <span>.in</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file"></span>
                                            Your Orders
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                            Your Wish List
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                            Your Recommendations
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                            Your Prime Membership
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                            Your Prime Video
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                            Your Subscribe & Save Items
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                            Memberships & Subscriptions
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                            Your Amazon Business Account
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div className="d-flex justify-content-around flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Dashboard</h1>
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={logout} >Sign Out</span>
                            </div>
                        </main>
                    </div>
                </div>
            </>
        )
    }
    const loggedOut = () => {
        return (
            <div style={{ margin: 'auto', width: '50%' }}>
                <p style={{ margin: 'auto' }}>Logout Successfully....</p>
                <h2>Reload the page to continue</h2>
            </div>
        )

    }
    return (
        <>
            {auth.logout ? loggedOut() : loggedin()}
        </>


    )
}
export default Dashboard;