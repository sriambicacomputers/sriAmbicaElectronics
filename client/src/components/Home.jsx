import React from "react";
import { GoogleGeminiEffectDemo } from "./GoogleGeminiEffectDemo";
import { HowWeServe } from "./HowWeServe";
import FAQ from "./comp-344"
function Home(){

    return(
        <>
        <GoogleGeminiEffectDemo/>
       <HowWeServe/>
<div className="w-full border-t py-15"><FAQ/></div>
        </>
    );
}

export default Home;