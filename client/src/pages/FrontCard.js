import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardPage.css"
import MainCard from "./pages/MainCard";


export default function FrontCard (props) {
    return (
        <div className="front">
            <div className="image-container">
                <img className="card-image" src={props.event.image}></img>
                <h1 className="title">{props.event.name}</h1>
            </div>
            <MainCard />
        </div>
    )
};

