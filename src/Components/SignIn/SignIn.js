import React from 'react'
import logo from '../../utilities/Amazon_logo_black.svg';
import { Link } from "react-router-dom";
import './SignIn.css'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function SignIn() {
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
                    <span className="SignInItem2Item" id="SignInItem2Item_2">Email or mobile phone number</span>
                    <form action="#">
                        <span className="SignInItem2Item" id="SignInItem2Item_3">

                            <input />
                            <button>Continue</button>
                        </span>

                    </form>
                    <span className="SignInItem2Item" id="SignInItem2Item_5">
                        By continuing, you agree to Amazon's 
                        <Link path="/SignInCondition" style={{fontSize:12}}> 
                        <span id="cond"> Conditions of Use</span> 
                        </Link> and 
                        <Link path="\SignInPolicy"> 
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