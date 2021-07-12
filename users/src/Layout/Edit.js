import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Edit = () => {
    const [name,uname]=useState("");
    const [number,unumber]=useState("");
    const [email,uemail]=useState("");
    const params = useParams();
    const history = useHistory();

    function getData() {
        axios.get('/user_data').then(res => {
            if (res.status === 400) {
                alert('failed');
            } else {
                res.data.map((udata,index)=>{
                    if(udata._id===params.id){
                        uname(udata.name);
                        unumber(udata.number)
                        uemail(udata.email);
                    }
                })
            }
        }).catch((err) => {
            console.log(err);
            alert("something error");
        })
    }  
    useEffect(() => {
        getData();
    }, [])

    function EditingUser(e){
        e.preventDefault();
        axios.put(`/user_edited${params.id}`,{name,email,number}).then(res => {
            if (res.status === 400) {
                alert('soryy you cant edit this time ,server is not responding');
            } else {
                alert("You edited successfully...");
                history.push('/@all_user')
            }
        }).catch((err) => {
            console.log(err);
            alert("something error");
        })

    }

    return (
        <>
            <div className="container bg-dark text-white text-center my-5">
                <h6>Edit Your Profile</h6>
            </div>
            <div className="container w-50 my-5">
                <form className="w-75 " method="PUT">
                    <div class="form-group mb-2">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" class="form-control" id="name"
                            name="name"
                            value={name}
                            onChange={(e)=>{uname(e.target.value)}}
                            placeholder="name" />
                    </div>
                    <div class="form-group mb-2">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="email"
                            name="email"
                            value={email}
                            onChange={(e)=>{uemail(e.target.value)}}
                            placeholder="Enter email" />
                    </div>
                    <div class="form-group mb-2">
                        <label for="exampleInputPassword1">number</label>
                        <input type="number" class="form-control" id="number"
                            name="number"
                            value={number}
                            onChange={(e)=>{unumber(e.target.value)}}
                            placeholder="number" />
                    </div>
                    <button type="submit" class="btn btn-primary form-control my-2" onClick={EditingUser}>edit</button>
                </form>
            </div>
        </>
    )
}
export default Edit;