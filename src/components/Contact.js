import React, { useState } from "react"
import ContactPage from "./ContactPage"
import Chart from "./Chart"

const Contact = () => {


    const sideMenu = ["Contacts", "Charts and Maps"]

    const [sideIndex, setSideIndex] = useState("")
    const [sideMenuBar, setSideMenuBar] = useState("")

    function goToContactPage(index, ele) {
        setSideMenuBar(ele)
        setSideIndex(index)
    }



    return (
        <div>
            <div className="container mt-5 ">
                <div>
                    {sideMenuBar === "Charts and Maps" ?
                        <h1 className="bg-primary text-center text-white p-2">Charts and Maps Page</h1> :
                        <h1 className="bg-primary text-center text-white p-2">Contact Page</h1>}
                </div>

                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="card card-size">
                            <div className="card-body">
                                <div className="mb-3">
                                    {sideMenu.map((ele, index) => (
                                        index === sideIndex ? <span key={index} className="btn side-menu contactPage w-100 text-start" onClick={() => goToContactPage(ele, index)}><b>{ele}</b></span>
                                            : <span key={index} className="btn side-menu w-100 text-start" onClick={() => goToContactPage(index, ele)}><b>{ele}</b></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-10">
                        <div className="card card-size">
                            <div className="card-body">
                                <div>
                                    {sideMenuBar === "Charts and Maps" ? <Chart /> : <ContactPage />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact