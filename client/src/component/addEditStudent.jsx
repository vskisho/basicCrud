import React, { useState, useEffect } from 'react';

const AddEditStudent = (props) => {
    const initialFieldValues = {
        FullName: '',
        RollNo: '',
        Subject: '',
        Class: ''
    }
    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.studentObjects[props.currentId]
            })
    }, [props.currentId, props.studentObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="col-12 col-md-12">
                <div className="card">
                    <div className="card-header" >
                        <input 
                        disabled="disabled"
                        defaultValue={props.currentId === "" ? "Add Student Info" : "Update Student Info"  } />

                    </div>
                    <div className="card-body">
                        <div className="center-form">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Full Name<span
                                            className="mandatoryFieldColor">*</span></label>
                                        <input value={values.FullName}
                                            onChange={handleInputChange} type="text" className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Roll No<span
                                            className="mandatoryFieldColor">*</span></label>
                                        <input value={values.RollNo} onChange={handleInputChange} type="text" className="form-control"
                                        />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Subject<span
                                            className="mandatoryFieldColor">*</span></label>
                                        <input value={values.Subject} onChange={handleInputChange} type="text" className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Class<span
                                            className="mandatoryFieldColor">*</span></label>
                                        <input value={values.Class} onChange={handleInputChange} type="text" className="form-control"
                                        />
                                    </div>
                                </div>

                                <div className="col-12 col-md-12">
                                    <div className="btn-group mb-3 mt-2 cmn-btn-grp">
                                        <input type="submit" value={props.currentId === "" ? "Save" : "Update"} className="btn btn-success btn-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddEditStudent;