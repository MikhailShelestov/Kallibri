import listItem from "./ListItem";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListItem from "./ListItem";
export default function List(props) {
    const value = props.value;
    return (
    <ul>
        {/*{console.log(value)}*/}
        {props.value.map(function (num) {
            // console.log(num['id'])
            return <ListItem key={num['id']} id={num['id']} title={num['title']} text={num['content']}></ListItem>

            // return num['id']
        })}
    </ul>
);
}