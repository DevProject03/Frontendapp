import React from "react"

export default function Signup() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    console.log(formData.favColor)
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
    }
    
    // React.useEffect(() => {
    //     async function getDetails() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setFormData(data.data.memes)
    //     }
    //     getMemes()
    // }, [])    
    
    return (
        <main>
            <div className="card">
            <form className="form">
                <br />
                <input 
                    type="text"
                    placeholder="Firstname"
                    className="form--input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Middlename"
                    className="form--input"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Lastname"
                    className="form--input"
                    name="lastName"
                    value={formData.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="BVN"
                    className="form--input"
                    name="bvn"
                    value={formData.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="D.O.B"
                    className="form--input"
                    name="dob"
                    value={formData.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="BVN"
                    className="form--input"
                    name="bvn"
                    value={formData.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Email Address"
                    className="form--input"
                    name="topText"
                    value={formData.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Password"
                    className="form--input"
                    name="topText"
                    value={formData.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Confirm Password"
                    className="form--input"
                    name="topText"
                    value={formData.topText}
                    onChange={handleChange}
                />
                <select className="form--input"
                        id="accountType" 
                        value={formData.accountType}
                        onChange={handleChange}
                        name="accountType"
                    >
                        <option className="form--input" value="0">Account Type:</option>
                        <option className="form--input" value="1">Current</option>
                        <option className="form--input" value="2">Savings</option>
                    </select>
                <button 
                    className="form--button"
                >
                    SIGN UP
                </button>
            </form>
            </div>
        </main>
    )
}