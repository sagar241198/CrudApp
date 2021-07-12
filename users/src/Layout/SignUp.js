import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const [Data, setData] = useState({ name: "", email: "", number: "" });
    const history = useHistory()

    let name;
    let value;
    function handleInput(e) {
        name = e.target.name;
        value = e.target.value;
        setData({ ...Data, [name]: value });
    }
    function Resister(e) {
        e.preventDefault();
        console.log(Data);
        const { name, email, number } = Data
        axios.post('/Resister',
            { name, email, number })
            .then(res => {
                if (res.status === 400) {
                    alert('resistration failed');
                } else {
                    alert('resistration successfull');
                    history.push('/@all_user')
                }
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="container w-50 my-5">
                <form className="w-75 " method="POST">
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" class="form-control" id="name"
                            name="name"
                            value={Data.name}
                            onChange={handleInput}
                            placeholder="name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="email"
                            name="email"
                            value={Data.email}
                            onChange={handleInput}
                            placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">number</label>
                        <input type="number" class="form-control" id="number"
                            name="number"
                            value={Data.number}
                            onChange={handleInput}
                            placeholder="number" />
                    </div>
                    <button type="submit" onClick={Resister} class="btn btn-primary form-control my-2">Resister</button>
                </form>
            </div>
        </>
    )
}
export default SignUp;