import React from "react";
import { GoogleGeminiEffectDemo } from "./GoogleGeminiEffectDemo";
import { HowWeServe } from "./HowWeServe";
import FAQ from "./MAQ"
import { MacbookScrollDemo } from "./MacbookScroll";
function Home(){

    return(
        <>
        <GoogleGeminiEffectDemo/>
    <MacbookScrollDemo id="macbook-section" /> 
       <HowWeServe/>
<div className="w-full border-t py-15"><FAQ/></div>
        </>
    );
}

export default Home;