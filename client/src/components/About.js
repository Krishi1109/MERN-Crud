import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";

const About = () => {

    const history = useHistory()
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try { 
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    "Content-type" : "application/json",
                    Accept: "application/json"
                },
                credentials: "include"
            })

            const data = await res.json()
            console.log(data);
            setUserData(data)

            if(!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }

        } catch (err) {
            console.log(err)
            console.log("yesssss");
            history.push("/login")
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])
    
    return (
        <div>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <h2 className="heading-section">About</h2>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-12 p-2 px-5">
                            <h4 className="heading-section">User id: <i className="text-bold">{userData._id}</i> </h4>
                        </div> <br />
                        <div className="col-md-12 p-2 px-5">
                            <h4 className="heading-section">Name: <i className="text-bold">{userData.name}</i> </h4>
                        </div>
                        <div className="col-md-12 p-2 px-5">
                            <h4 className="heading-section">Email: <i className="text-bold">{userData.email}</i> </h4>
                        </div>
                        <div className="col-md-12 p-2 px-5">
                            <h4 className="heading-section">Phone: <i className="text-bold">{userData.phone}</i> </h4>
                        </div>
                        <div className="col-md-12 p-2 px-5">
                            <h4 className="heading-section">Profession: <i className="text-bold">{userData.work}</i> </h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
