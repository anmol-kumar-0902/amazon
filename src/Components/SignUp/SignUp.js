
import React, { useEffect, useState } from 'react'
import './SignUp.css'
import logo from '../../utilities/Amazon_logo_black.svg';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, signup } from '../../User/Actions';
import { Redirect,Link } from 'react-router-dom';

function SignUp() {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [contactNumber,setcontactNumber]=useState('');
    const [error,setError]=useState('');
    const auth = useSelector(state => state.auth);
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!auth.authenticate)
            dispatch(isUserLoggedIn())
    }, []);
    const userRegister=(e)=>{
        e.preventDefault();
        const user={
            name,email,contactNumber,password
        }

        dispatch(signup(user))
    }
    if(auth.authenticate){
        return <Redirect to={`/`} />
    }
    if(user.loading){
        return <p>Loading...</p>
    }
    if(user.signUp){
        return <Redirect to={`/signIn`} />
    }
    
    return (
        <>
            <div className="SignUpWrapper">
                <div className="SignUpContainer" id="SignUpContainer_1">
                    <Link to="/"> <img src={logo} style={{ filter: 'invert' }} alt='Logo' /></Link>&nbsp;&nbsp;
                    <span>.in</span>
                </div>
                <div className="SignUpContainer" id="SignUpContainer_2">
                    <form onSubmit={userRegister}>
                        <h3>Create Account</h3>
                        <h5>Your Name</h5>
                        <input 
                             label="Name"
                                placeholder="Enter your name"
                                value={name}
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                        />
                        <h5>Mobile Number</h5>
                        <button className='countryCode'>IN +91</button>
                        <input className='inputn' 
                             label="contactNumber"
                                placeholder="Contact Number"
                                value={contactNumber}
                                type="number"
                                onChange={(e) => setcontactNumber(e.target.value)}
                        />
                        <h5>Email</h5>
                        <input
                            label="Email"
                            placeholder="Email"
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <h5>Password</h5>
                        <input 
                             label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                        />
                        <p>Passwords must be at least 6 characters.</p>
                        <p>We will send you a text to verify your phone.<br />
                            Message and Data rates may apply.</p>
                        <button className="button" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp