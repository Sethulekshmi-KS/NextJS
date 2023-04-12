import { useState } from "react";
import { useRouter } from "next/router";

export default function RegisterLayout() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");
    const [age, setAge] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a new object
        const data = { firstName: firstName, lastName: lastName, address: address,  province: province, country: country, zip: zip, age: age,username: username};
        
        // Save the object to sessionStorage
        sessionStorage.setItem('mySessionData', JSON.stringify(data));
        router.push("/profile");
    };

    return (
        < div className="container" >
            <main>
                <div className="row g-5">
                    <div className="col-md-4 col-lg-2">  </div>
                    <div className="col-md-4 col-lg-8">
                        <h4 className="mb-3">Register</h4>
                        <form className="needs-validation" onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Firstname"
                                        value={firstName} required onChange={(event) => setFirstName(event.target.value)} />

                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Lastname"
                                        value={lastName} required onChange={(event) => setLastName(event.target.value)} />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Address"
                                        value={address} required onChange={(event) => setAddress(event.target.value)} />
                                    <div className="invalid-feedback">
                                        Please enter your address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <input type="text" className="form-control" id="province" placeholder="Province"
                                        value={province} required onChange={(event) => setProvince(event.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required value={country}
                                        onChange={(event) => setCountry(event.target.value)}>
                                        <option value="">Choose...</option>
                                        <option>Thailand</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid country.
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required
                                        value={zip} onChange={(event) => setZip(event.target.value)} />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="age" className="form-label">Age</label>
                                    <input type="text" className="form-control" id="age" placeholder="" required
                                        value={age} onChange={(event) => setAge(event.target.value)} />
                                    <div className="invalid-feedback">
                                        Please enter your age.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                        value={username} required onChange={(event) => setUsername(event.target.value)} />
                                    <div className="invalid-feedback">
                                        Please enter your Username.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password"
                                        value={password} required onChange={(event) => setPassword(event.target.value)} />
                                    <div className="invalid-feedback">
                                        Please enter your Password.
                                    </div>
                                </div>
                            </div>
                            <br></br>

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue</button>
                        </form>
                    </div>
                </div>
            </main>
        </div >
    );
}