import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardPage.css"


export default function MainCard (props) {
    return (   
        <div className="main-area">
            <div className="blog-post">
                <p className="date">{props.event.date}</p>
                <p className="blog-content">{props.event.name}</p>
                <p className="armypoints">{props.event.armypoints]}</p>
            </div>
        </div>
    )
};