import React from "react";


function Form() {
    return (
        <div>
            <form className="form">

                <h1>Registration Form</h1>
                <label htmlFor="">First Name</label>
                <input type="text" /><br /><br />

                <label htmlFor="" >Last Name</label>
                <input type="text" /><br /><br />

                <label htmlFor="" >Mobile Number</label>
                <input type="number" /><br /><br />

                <label htmlFor="" >Date of Birth</label>
                <input type="date" /><br /><br />

                <label htmlFor="" >Email id</label>
                <input type="email" /><br /><br />

                <label htmlFor="" >Upload Photo</label>
                <input type="file" /><br /><br />

                <label htmlFor="" >Address</label>
                <input type="text" /><br /><br />

                <label htmlFor="" >City</label>
                <input type="text" /><br /><br />

                <label htmlFor="" >State</label>
                <input type="text" /><br /><br />




                <button>Restt</button>
                <button>Submit</button>



            </form>





        </div>
    )
}
export default Form;