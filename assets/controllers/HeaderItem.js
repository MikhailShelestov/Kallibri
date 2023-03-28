import React, {useEffect, useState} from 'react';

function HeaderItem(props) {

    const value = props.value
    const link = props.link ?? value
    // let [select, setSelect] = useState(null);
    // useEffect(()=>{
    //     select = setSelect(true)
    // })
    const selectButtonStyle = 'd-flex align-items-center mb-2 mb-lg-0 active text-decoration-none';
    const nonSelectButtonStyle = 'd-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none';
    // nav-link px-2 text-white
    return (
        <li className='nav-link px-2 text-white'><a className={nonSelectButtonStyle}  href={link.toLowerCase()}>{value}</a></li>
    );
}

export default HeaderItem;