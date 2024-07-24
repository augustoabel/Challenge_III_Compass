import React from 'react'
import Logo from '../img/logo.png'

const Loading = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <img src={Logo} alt="Logo" className='w-12' />
        </div>
    )
}

export default Loading