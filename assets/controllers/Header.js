import React, {Component} from 'react';
import HeaderItem from "./HeaderItem";

export default function Header(props) {
    return (

        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <HeaderItem value={'Home'} link={'/'}></HeaderItem>
                        <HeaderItem value={'Features'}></HeaderItem>
                        <HeaderItem value={'Pricing'}></HeaderItem>
                        <HeaderItem value={'FAQs'}></HeaderItem>
                        <HeaderItem value={'About'}></HeaderItem>
                    </ul>


                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );

}

