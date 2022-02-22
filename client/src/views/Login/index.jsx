import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/authentication/authenticationSlice'

export default () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password
        }

        console.log(data);

        dispatch(login(data))
    }

    return (
        <div id="contact" className="contact" style={{ display: "flex", justifyContent: "center" }} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <form onSubmit={handleLogin} id="contact">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="fill-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div class="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                                    <h6>Login</h6>
                                                    <h4>Get In Touch With Us <em>Now</em></h4>
                                                    <div class="line-dec"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input value={email} onChange={(e) => setemail(e.target.value)} type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required />
                                                </fieldset>
                                                <fieldset>
                                                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" name="password" id="subject" placeholder="password" autoComplete="on" />
                                                </fieldset>
                                                <fieldset>
                                                    <button type="submit" id="form-submit" className="main-button ">Login</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}