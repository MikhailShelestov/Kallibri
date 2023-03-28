import React, {Component} from 'react';
function ListItem(props){
    const id = props.id
    const title = props.title
    const text = props.text
    return (

        <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
                {/*<strong className="d-inline-block mb-2 text-primary">World</strong>*/}
                <h3 className="mb-0">
                    <a className="text-dark" href="#">{title}</a>
                </h3>
                {/*<div className="mb-1 text-muted">Nov 12</div>*/}
                <p className="card-text mb-auto">{text}</p>
                {/*<a href="#">Continue reading</a>*/}
            </div>
        </div>
    )
}

export default ListItem;