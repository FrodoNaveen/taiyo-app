import React, { useState } from "react"
import ContactPage from "./ContactPage"
import Chart from "./Chart"

const Contact = () => {


    const sideMenu = ["Contacts", "Charts and Maps"]

    const [sideIndex, setSideIndex] = useState()
    const [sideMenuBar, setSideMenuBar] = useState("")

    function goToContactPage(index, ele) {
        setSideMenuBar(ele)
        setSideIndex(index)
    }



    return (
        <div>
            <div class="container mt-5 ">
                <div>
                    {sideMenuBar === "Charts and Maps" ?
                        <h1 class="bg-primary text-center text-white p-2">Charts and Maps Page</h1> :
                        <h1 class="bg-primary text-center text-white p-2">Contact Page</h1>}
                </div>

                <div class="row">
                    <div class="col-12 col-md-2">
                        <div class="card card-size">
                            <div class="card-body">
                                <div class="mb-3">
                                    {sideMenu.map((ele, index) => (
                                        index === sideIndex ? <span key={index} class="btn side-menu contactPage w-100 text-start" onClick={() => goToContactPage(ele, index)}><b>{ele}</b></span>
                                            : <span key={index} class="btn side-menu w-100 text-start" onClick={() => goToContactPage(index, ele)}><b>{ele}</b></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-10">
                        <div class="card card-size">
                            <div class="card-body">
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