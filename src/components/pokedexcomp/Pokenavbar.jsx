import React from 'react';
import reactLogo from '../../assets/react.svg';
import bootstrapLogo from '../../assets/bootstrap-logo-shadow.png';
import bdevelopmentLogo from '../../assets/Media/imgs/logoWhite.png';

const Pokenavbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={reactLogo} alt="" className="d-inline-block align-text-top react-logo" />
                    <img src={bootstrapLogo} alt="" className="d-inline-block align-text-top bootstrap-logo" />
                    <h3><strong>Entregrable 5</strong> - Berselis J. Mendoza M.</h3>
                </a>
                <img src={bdevelopmentLogo} alt="BJMM" className='bdevelopment-logo' />
            </div>
        </nav>
    )
}

export default Pokenavbar