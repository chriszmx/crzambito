import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://getform.io/f/43e5fa3d-721d-41c1-8217-7b1cab45984b", {
                method: 'POST',
                body: JSON.stringify(formState),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            setFormState({
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            });

            toast.success("Form submitted successfully!");

        } catch (error) {
            console.error(error);
            toast.error("An error occurred, please try again.");
        }
    };

    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" value={formState.name} onChange={handleInputChange} required/>
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Phone</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" value={formState.phone} onChange={handleInputChange} required/>
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" value={formState.email} onChange={handleInputChange} required/>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" value={formState.subject} onChange={handleInputChange} required/>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" name="message" value={formState.message} onChange={handleInputChange} required/>
                </div>
                <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg" type="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;



// import React from "react";

// const Contact = () => {
//     return (
//         <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
//             <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
//                 Contact
//             </h1>
//             <form action="https://getform.io/f/43e5fa3d-721d-41c1-8217-7b1cab45984b" method="POST" encType="multipart/form-data">
//                 <div className="grid md:grid-cols-2 gap-4 w-full py2">
//                     <div className="flex flex-col">
//                         <label className="uppercase text-sm py-2">Name</label>
//                         <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
//                     </div>

//                     <div className="flex flex-col">
//                         <label className="uppercase text-sm py-2">Phone</label>
//                         <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
//                     </div>
//                 </div>

//                 <div className="flex flex-col py-2">
//                     <label className="uppercase text-sm py-2">Email</label>
//                     <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
//                 </div>

//                 <div className="flex flex-col py-2">
//                     <label className="uppercase text-sm py-2">Subject</label>
//                     <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="email" />
//                 </div>

//                 <div className="flex flex-col py-2">
//                     <label className="uppercase text-sm py-2">Message</label>
//                     <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" name="message" />
//                 </div>
//                 <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
//                     Send Message
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Contact;
