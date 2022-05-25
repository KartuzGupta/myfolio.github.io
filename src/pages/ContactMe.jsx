import React , { useState } from 'react'
import './css/Contact.css';
import Loader from '../components/Loader';

const Input = ({placeholder, name, type, value, handleChange, newClass}) => (
  <input 
      placeholder={placeholder}
      type={type} 
      name={name} 
      value={value}
      onChange= {(e) => handleChange(e,name)} 
      className={`inputBox ${newClass}`}    
    />
)

const ContactMe = () => {

    const [nameRed, setNameRed] = useState(false);
    const [emailRed, setEmailRed] = useState(false);
    const [messageRed, setMessageRed] = useState(false);
        
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        name:"",
        email:"",
        message:""
    });

    const { name, email, message } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name || !email || !message){
            if(!name) setNameRed(true);
            else setNameRed(false);

            if(!email) setEmailRed(true);
            else setEmailRed(false);

            if(!message) setMessageRed(true);
            else setMessageRed(false);

            return;
        }
        try {
            setNameRed(false);
            setEmailRed(false);
            setMessageRed(false);
            setIsLoading(true);
            const response = await fetch(
                "https://v1.nocodeapi.com/njack/google_sheets/JBrfLbFmSBfCRyeh?tabId=Sheet1" , {
                method: 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify([[name, email, message, new Date().toLocaleString()]])
                }
            );
            
            await response.json();

            setData({...data, 
            name:"",
            email:"",
            message:""
            });
            setIsLoading(false);      
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="formBox">
            <div className="inputBoxes">
                <Input placeholder="Name" name="name"  type="text" handleChange={handleChange} newClass={nameRed ? ("name redBox") : ("name")} value={name}/>
                <Input placeholder="Email" name="email"  type="email" handleChange={handleChange} newClass={emailRed ? ("email redBox") : ("email")} value={email}/>
                <textarea placeholder="Enter your message" name="message" type="text" onChange= {(e) => handleChange(e,name)} className={messageRed ? ("inputBox message redBox") : ("inputBox message")} value={message}/>
                {isLoading ? (<Loader text="Sending"/>) :
                (<button onClick={handleSubmit} className="submitBtn" >
                    Send
                </button>)}
            </div>
        </div>
        
    );
}

export default ContactMe;