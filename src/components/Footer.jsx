import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className="container">
            <div className="bg-white py-4">
                <div className="item">
                    <div className="item social">
                        <FontAwesomeIcon className="a mx-2" icon={faFacebook} />
                        <FontAwesomeIcon className="a mx-2" icon={faInstagram} />
                        <FontAwesomeIcon className="a mx-2" icon={faTwitter} />
                    </div>
                </div>
                <p className="copyright">Copyright &copy; 2021.</p>
            </div>
        </div>
    )
}
