import React, { useState, useEffect } from 'react';
import AddEditStudent from './addEditStudent';

const Studentinfo = () => {

    var [currentId, setCurrentId] = useState('');
    var [studentObjects, setStudentObjects] = useState({})


    // useEffect(() => {
    //     firebaseDb.child('Student').on('value', snapshot => {
    //         if (snapshot.val() != null) {
    //             setStudentObjects({
    //                 ...snapshot.val()
    //             });
    //         } else {
    //             setStudentObjects({});
    //         }
    //     })
    // }, [])


    // const addOrEdit = (obj) => {
    //     if (currentId === '')
    //        Db.child('Student').push(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             })
    //     else
    //      Db.child(`Student/${currentId}`).set(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             })
    // }

    // const onDelete = id => {
    //     if (window.confirm('Are you sure to delete this record?')) {
    //       Db.child(`Student/${id}`).remove(
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             })
    //     }
    // }


    return (
        <div className="card">
            <div className="card-body pb-0">
                <div className="card">
                    <div className="card-header main-search dash-search">
                        <h3>
                            Student Information Details
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <AddEditStudent {...({ currentId, studentObjects })}></AddEditStudent>

                    <div className="col-12 col-md-12">
                        <div className="card">
                            <div className="card-header">Student Management</div>
                            <div className="card-body position-relative">
                                <div className="table-responsive cnstr-record product-tbl">
                                    <table className="table table-bordered heading-hvr">
                                        <thead>
                                            <tr>
                                                <th className="active">Student Name</th>
                                                <th>Faculty</th>
                                                <th>Course</th>
                                                <th>Address</th>
                                                <th width="60">&nbsp;</th>
                                                <th width="60">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                Object.keys(studentObjects).map((key) => (
                                                    <tr key={key}>
                                                        <td>{studentObjects[key].studentName}</td>
                                                        <td>{studentObjects[key].faculty}</td>
                                                        <td>{studentObjects[key].course}</td>
                                                        <td>{studentObjects[key].address}</td>

                                                        <td className="case-record">
                                                            <button type="button" className="btn btn-primary"
                                                                onClick={() => { setCurrentId(key) }}>Edit</button>

                                                        </td>
                                                        <td> <button type="button" className="btn btn-danger"
                                                            onClick={() => { }}>Delete</button></td>
                                                    </tr>
                                                ))
                                            }
                                                    <tr >
                                                    <td>studentName</td>
                                                    <td>faculty</td>
                                                    <td>course</td>
                                                    <td>address</td>

                                                    <td className="case-record">
                                                        <button type="button" className="btn btn-primary"
                                                            >Edit</button>

                                                    </td>
                                                    <td> <button type="button" className="btn btn-danger">Delete</button></td>
                                                </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Studentinfo;