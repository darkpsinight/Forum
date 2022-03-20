import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, selectErrorStatus, selectRegisterStatus } from '../../features/authentication/authenticationSlice'

export default () => {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const dispatch = useDispatch()


    const handleRegister = (e) => {
        e.preventDefault();
        const data = {
            name: username,
            email: email,
            password: password
        }

        console.log(data);

        dispatch(register(data))
    }

    const status = useSelector(selectRegisterStatus)
    const error = useSelector(selectErrorStatus)



    return (
        <div id="contact" className="contact" style={{ display: "flex", justifyContent: "center" }} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <form onSubmit={handleRegister} id="contact">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="fill-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div class="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                                    <h6>Register</h6>
                                                    <h4>Get In Touch With Us <em>Now</em></h4>
                                                    <div class="line-dec"></div>
                                                </div>
                                                {
                                                    status === "loading"
                                                    &&

                                                    <div class="spinner-border" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                }

                                                {
                                                    status === "success"
                                                    &&

                                                    <div class="alert alert-success mt-5 d-flex align-items-center" role="alert">
                                                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>
                                                        <div className=''>
                                                            Successfully registered
                                                            <button className='btn btn-sucess' onClick={() => window.location.href = '/login'}>Login</button>
                                                        </div>
                                                    </div>

                                                }
                                                {
                                                    status === "failure"
                                                    &&

                                                    <div class="alert alert-danger mt-5 d-flex align-items-center" role="alert">
                                                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Failure:"></svg>
                                                        <div className=''>
                                                            {error}
                                                        </div>
                                                    </div>

                                                }

                                            </div>

                                            {
                                                status !== "success"
                                                &&
                                                <div className='col-lg-6'>
                                                    <fieldset>
                                                        <input value={username} onChange={(e) => setusername(e.target.value)} type="name" name="name" id="name" placeholder="Name" autoComplete="on" required />
                                                    </fieldset>
                                                    <fieldset>
                                                        <input value={email} onChange={(e) => setemail(e.target.value)} type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required />
                                                    </fieldset>
                                                    <fieldset>
                                                        <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" name="password" id="subject" placeholder="password" autoComplete="on" />
                                                    </fieldset>
                                                    <fieldset>
                                                        <button type='submit' id="form-submit" className="main-button ">register</button>
                                                    </fieldset>
                                                </div>
                                            }
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
