import React, { useEffect, useState } from 'react'
import logo from '../../utilities/Amazon_logo_black.svg';
import { Link, Redirect } from "react-router-dom";
import './SignIn.css'
import { isUserLoggedIn, login } from '../../User/Actions'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, seterror] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!auth.authenticate)
            dispatch(isUserLoggedIn())
    }, [])

    const userLogin = (e) => {
        e.preventDefault();

        const user = {
            email, password
        }
        dispatch(login(user));
    }
    if (auth.authenticate) {
        console.log(auth.authenticate);
        return <Redirect to='/' />
    }
    return (
        <>

            <div className="SignInWrapper">
                <div className="SignInItem" id="SignInItem_1">
                    <Link to="/"> <img src={logo} style={{ filter: 'invert' }} alt='Logo' /></Link>&nbsp;&nbsp;
                    <span>.in</span>
                </div>
                <div className="SignInItem" id="SignInItem_2">
                    <span className="SignInItem2Item" id="SignInItem2Item_1">
                        Sign-In
                    </span>

                    <form className="form" onSubmit={userLogin}>
                        <span className="SignInItem2Item" id="SignInItem2Item_2">Email or mobile phone number</span>
                        <span className="SignInItem2Item" id="SignInItem2Item_3">
                            <input
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>


                        <span className="SignInItem2Item" id="SignInItem2Item_2">Password</span>

                        <span className="SignInItem2Item" id="SignInItem2Item_3">
                            <input label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)} />

                        </span>
                        <button className="button" type="submit">Continue</button>
                    </form>
                    <span className="SignInItem2Item" id="SignInItem2Item_5">
                        By continuing, you agree to Amazon's
                        <Link to="/SignInCondition" style={{ fontSize: 12 }}>
                            <span id="cond"> Conditions of Use</span>
                        </Link> and
                        <Link to="\SignInPolicy">
                            <span id="cond"> Privacy Notice.</span>
                        </Link>
                    </span>
                    <details className="SignInItem2Item" id="SignInItem2Item_6">
                        <summary className="needHelp"><ArrowRightIcon /><span>Need Help?</span></summary>
                        <div id="help">Forgot Password</div>
                        <div id="help">Other issues with Sign-In</div>
                    </details>
                </div>
                <div className="SignInItem" id="SignInItem_3">
                    <h5>New to Amazon?</h5>
                </div>
                <div className="SignInItem" id="SignInItem_4">
                    <button>Create your Amazon account</button>
                </div>
            </div>
        </>
    )
}
export default SignIn;