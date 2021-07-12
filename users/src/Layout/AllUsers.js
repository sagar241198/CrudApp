import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const AllUsers = () => {
    const [userData, setData] = useState([{ name: "", email: "", number: "" }]);
    function getData() {
        axios.get('/user_data').then(res => {
            if (res.status === 400) {
                alert('resistration failed');
            } else {
                setData(res.data);
            }
        }).catch((err) => {
            console.log(err);
            alert("something error");
        })
    }
    const UserDeleting = (id, indexId) => {
        axios.delete(`/deleting${id}`).then(res => {
            if (res.status === 400) {
                alert('deletion failed');
            } else {
                alert("Deleted one User from the list");
                const remainData = userData.filter((data, index) => {
                    if (index != indexId) {
                        return data;
                    }
                })
                setData(remainData);
            }
        }).catch((err) => {
            console.log(err);
            alert("something error");
        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className="container my-5 w-50 ">
                <h4 className="bg-dark text-white text-center">User's Log</h4>
            </div>
            <div className="container ">
                <table className="table">
                    <thead className="text-white bg-dark">
                        <tr>
                             <th scope="col">SN.</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Number</th>
                            <th scope="col"> </th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((Data, index) => {
                                const url = `/User_@editation=${Data._id}`
                                return (
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{Data._id}</td>
                                        <td>{Data.name}</td>
                                        <td>{Data.email}</td>
                                        <td>{Data.number}</td>
                                        <td><NavLink to={url} className="btn btn-outline-success" >edit</NavLink></td>
                                        <td><a className="btn btn-outline-danger" onClick={() => { UserDeleting(Data._id, index) }}>Delete</a></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default AllUsers;