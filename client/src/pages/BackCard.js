import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardPage.css"
import MainCard from "./pages/MainCard";


export default function BackCard (props) {
    return (
        <div className="back">
            <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
            <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
            <MainCard />
        </div>
    )
};

