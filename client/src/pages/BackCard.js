import "./CardPage.css"

import React, { useState } from "react";
import MainCard from "./MainCard";


export default function BackCard () {
    return (
        <div className="back">
            <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
            <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
            <MainCard />
        </div>
    )
};

