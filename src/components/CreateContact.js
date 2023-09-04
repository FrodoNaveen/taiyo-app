import React, { useState, memo, useEffect } from "react"

const CreateContact = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        status: "",
    })

    const [dataBase, setDataBase] = useState([])

    useEffect(() => {

        const dataBaseDetails = JSON.parse(localStorage.getItem("contacts")) || []
        setDataBase(dataBaseDetails)
    }, [])




    function handleChange(e) {
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    function formSubmit() {

        function checkContact() {
            for (let i = 0; i < dataBase.length; i++) {
                if (dataBase[i].firstName === formData.firstName ||
                    dataBase[i].lastName === formData.lastName
                ) {
                    return true
                }
            }
        }

        let db = [...dataBase]
        db.push(formData)
        let newData = JSON.stringify(db)

        const success = () => {
            alert("contact Saved")
            localStorage.setItem("contacts", newData)
        }

        return checkContact() ? alert("contact already exist") : success()

    }




    return (
        <div>

            <div className="conatiner mt-5">
                <h1 className="text-center">CreateNewContact</h1>
                <div className="card createContact mt-5">
                    <div className="card-body">
                        <form onSubmit={formSubmit}>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label className="w-100 mt-1"><h5>FirstName:</h5></label>
                                </div>
                                <div className="col-9">
                                    <input
                                        name="firstName"
                                        type="text"
                                        className="form-control"
                                        placeholder="FirstName"
                                        onChange={handleChange}
                                        value={formData.firstName}
                                        autoComplete="off"
                                        required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label className="w-100 mt-1"><h5>LastName:</h5></label>
                                </div>
                                <div className="col-9">
                                    <input
                                        name="lastName"
                                        type="text"
                                        className="form-control"
                                        placeholder="LastName"
                                        onChange={handleChange}
                                        value={formData.lastName}
                                        autoComplete="off"
                                        required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label className="w-100 mt-1 text-center"><h5>Status:</h5></label>
                                </div>
                                <div className="col-9">
                                    <div>
                                        <span>
                                            <input
                                                type="radio"
                                                name="status"
                                                required
                                                value="Active"
                                                onClick={handleChange}
                                            /> Active</span>
                                    </div>
                                    <div>
                                        <span>
                                            <input
                                                type="radio"
                                                name="status"
                                                value="Inactive"
                                                onClick={handleChange}
                                            /> Inactive</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-success w-100">Save Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(CreateContact)