import "./CardPage.css"

import React, { useState } from "react";
import MainCard from "./MainCard";


export default function FrontCard () {
    return (
        <div className="front">
            <div className="image-container">
                <img className="card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>
                <h1 className="title">test</h1>
            </div>
            <MainCard />
        </div>
    )
};

