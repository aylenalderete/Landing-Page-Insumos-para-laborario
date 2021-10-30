import React from 'react'
import { ImWhatsapp } from 'react-icons/im'
import "../../styles/Home/whatsappbutton.scss"

function WhatsappButton() {
    return (
        <div>
            <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5491169684589" className="btn-wsp" target="_blank">
                <ImWhatsapp className="whatsapp-icon" />
            </a>
        </div>
    )
}

export default WhatsappButton
