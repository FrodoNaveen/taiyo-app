import React, { useEffect, useState } from "react"
import ContactPage from "./ContactPage"


const EditContactPage = ({ index }) => {

    const [saveEdittedContact, setSaveEdittedContact] = useState(false)
    const [savedContact, setSavedContact] = useState([])

    useEffect(() => {
        setSaveEdittedContact(false)
    }, [index])

    useEffect(() => {

        let data = JSON.parse(localStorage.getItem("contacts"))
        // let newData = data.filter((ele, index) => {
        //     return index === props.index
        // })

        let newData = data[index]
        setSavedContact(newData)

    }, [index])

    useEffect(() => {
        console.log(savedContact)

    }, [savedContact])



    function handleChange(e) {
        setSavedContact((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })

    }

    function handleSubmit() {

        setSaveEdittedContact(true)
        let data = JSON.parse(localStorage.getItem("contacts"))
        data[index] = savedContact
        let newData = JSON.stringify(data)
        localStorage.setItem("contacts", newData)
        alert("contact editted")

    }

    return (
        <div>
            {saveEdittedContact ? <ContactPage /> :
                <div>
                    <h1 className="text-center mt-5">Edit Contact Page</h1>
                    <div className="card createContact mt-5">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
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
                                            value={savedContact.firstName}
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
                                            value={savedContact.lastName}
                                            autoComplete="off"
                                            required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <label className="w-100 mt-1 text-center"><h5>Status:</h5></label>
                                    </div>
                                    <div className="col-9">
                                        {savedContact.status === "Active" ?
                                            <div>
                                                <div>
                                                    <span>
                                                        <input
                                                            type="radio"
                                                            name="status"
                                                            required
                                                            value="Active"
                                                            onClick={handleChange}
                                                            checked
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
                                            </div> :
                                            <div>
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
                                                            checked
                                                        /> Inactive</span>
                                                </div>
                                            </div>}
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-success w-100">Save Editted Contact</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}
export default EditContactPage