import React, { useEffect, useState, memo } from "react"
import CreateContact from "./CreateContact"
import EditContactPage from "./EditContactPage"

const ContactPage = () => {

    const [contactList, setContactList] = useState([])
    const [createContact, setCreateContact] = useState(false)
    const [isContactEditable, setIsContactEditable] = useState(false)
    const [indexNum, setIndexNum] = useState()

    useEffect(() => {
        setCreateContact(false)
        setIsContactEditable(false)
        let newData = JSON.parse(localStorage.getItem("contacts"))
        setContactList(newData)
    }, [])

    function createNewContact(index) {
        setCreateContact(true)
        setIndexNum(index)
    }

    function deleteContact(id) {
        let newData = JSON.parse(localStorage.getItem("contacts"))
        let deleteContact = newData.filter((ele) => {
            return ele.firstName !== id
        })
        setContactList(deleteContact)
        localStorage.setItem("contacts", JSON.stringify(deleteContact))
    }

    function editContact(index) {
        setIsContactEditable(true)
        setIndexNum(index)
    }



    return (
        <div>
            {createContact ? <CreateContact /> : <div>
                {contactList.length >= 1 ? isContactEditable ? <EditContactPage index={indexNum} /> :
                    <div className="mt-5 text-center">
                        <button className="btn btn-primary mb-5" onClick={createNewContact}><b>Create Contact</b></button>
                        <div className="card contactListBody">
                            {contactList.map((ele, index) => (
                                <div className="row" key={index}>
                                    <div className="card contactCard">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <b>Firstname:</b>
                                                </div>
                                                <div className="col-6 text-start">
                                                    {ele.firstName}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <b>LastName:</b>
                                                </div>
                                                <div className="col-6 text-start">
                                                    {ele.lastName}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <b>Status:</b>
                                                </div>
                                                <div className="col-6 text-start">
                                                    {ele.status}
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-6">
                                                    <button className="btn btn-outline-success w-100" onClick={() => editContact(index)}>Edit</button>
                                                </div>
                                                <div className="col-6">
                                                    <button className="btn btn-outline-danger w-100" onClick={() => deleteContact(ele.firstName)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div className="mt-5 text-center">

                        {/* Create newContact button  */}

                        <button className="btn btn-primary mb-5" onClick={createNewContact}><b>Create Contact</b></button>
                        <div className="p-5 alertBox">
                            <div className="text-start">
                                <div className="alert alert-warning alert-dismissible fade show">
                                    <p>No Contact Found Please add contact from Create Contact button.</p>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>}
        </div>
    )
}
export default memo(ContactPage)