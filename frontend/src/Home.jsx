import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                // console.log(res);
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, [])



    return (
        <div className='d-flex vh-100 align-items-center justify-content-center bg-secondary'>
            <div className='w-50 rounded p-3 bg-white'>
                <h2>Student List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to='/create' className=' btn btn-success'>Add +</Link>
                </div>
                <table className='table '>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(data) && data.map((ele, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{ele.ID}</td>
                                    <td>{ele.Name}</td>
                                    <td>{ele.Email}</td>
                                    <td>
                                        <Link to={`/read/${ele.ID}`} className='btn btn-sm btn-info'>Read</Link>
                                        <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                                        <button className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home