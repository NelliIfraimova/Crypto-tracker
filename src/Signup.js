import React from 'react'
import './Signup.css'


const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* <div className='fill'> */}
                    <h2>Enter your email to recieve the latest news on all things Crypto.</h2>
                    <div className='input-container'>
                        <input type='email' className='input-field' placeholder='Enter your email' />
                        <button className='btn-email'>Submit</button>
                    {/* </div> */}
                </div>

            </div>
        </div>
    )
}

export default Signup