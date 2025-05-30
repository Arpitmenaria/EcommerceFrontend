import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='Container'>
        <form>
        <h2>
            Contact Us
        </h2>
        <input type="text" name="Name" id="" placeholder='Name'/>
        <input type="text" name="Email" id="" placeholder='Email'/>
        <br />
        <input type="text" name="" id=""  placeholder='Subject'/>
        <br />
        <input type="text" name="" id="" placeholder='Leave a Comment here'/>
        <br />
        <button>Send</button>
        </form>

    </div>
  )
}

export default Contact;