import React from "react"

function Contact(){
    
    return(
<div className="contact">
   
    <h2>Contact Us</h2>
<form >
    <label>name</label>
    <input type="text" name="name"/>
    <label>Email</label>
    <input type="email" name="user_email"/>
    <label>Message</label>
    <textarea name="message" rows="4"/>
  
    <input type="submit" value="Send" className="btn"/>
    
</form>

</div>

    )
} 

export default Contact;