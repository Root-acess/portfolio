import React from 'react'
import '../element/button.css'

const Button = () => {
    const redirectTo = (url) => {
      window.location.href = url;
    };

    return (
        <button onClick={() => redirectTo('https://www.instagram.com/oy_aakuu?igsh=M3l2ZnRjeTVweDNt')}>
            <span>Contact Me</span>
        </button>
    )
}

export default Button;