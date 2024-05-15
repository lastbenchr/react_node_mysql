import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {

    const [student, setStudent] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchStudent()
    }, [])

    const fetchStudent = () => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                console.log("data from selected id", res.data)
                setStudent(res.data[0])

            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Student Detail</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{student.Name}</td>
                            <td>{student.Email}</td>
                            <td>
                                <Link to={`/`} className='btn btn-sm btn-info'>Back</Link>
                                <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                            </td>
                        </tr>
                    </tbody>



                </table>
            </div>
        </div>
    )
}

export default Read