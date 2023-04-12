import React from 'react';
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginLayout() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const firstName = router.query.firstName || "";

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: implement login logic here
        router.push("/profile");
    };


    return (
        < div className="container" >
            <main>
                <div className="row g-5">
                    <div className="col-md-4 col-lg-4">  </div>
                    <div className="col-md-4 col-lg-4">
                        <h4 className="mb-3">Register</h4>
                        <h5 className="mb-3">Login Details</h5>
                        <form className="needs-validation"  onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                         value={username} required onChange={(event) => setUsername(event.target.value)}/>
                                    <div className="invalid-feedback">
                                        Please enter your Username.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password"  
                                     value={password} required onChange={(event) => setPassword(event.target.value)}/>
                                    <div className="invalid-feedback">
                                        Please enter your Password.
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <button className="w-100 btn btn-primary btn-lg" type="submit">Register</button>
                            <div>Welcome, {firstName}!</div>
                        </form>
                    </div>
                </div>
            </main>
        </div >
    );
}