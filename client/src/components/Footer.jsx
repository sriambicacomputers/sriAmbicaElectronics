import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className="border-t bg-card  w-full min-h-[325px] p-6">
        <div className="lg:max-w-[90%] mx-auto flex flex-col md:flex-row justify-between  w-full space-y-6 border-b pb-6 mb-4">
            <div>
                  <Link to="/">
            <div
              className="float-left w-32 mr-4 h-30 bg-foreground ring-2 
                         [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]
                         [-webkit-mask-image:url('/logo.png')] "
              aria-label="logo-debug"
            ></div>
          </Link>
          <p className="md:max-w-sm mt-6 text-muted-foreground sm:text-base text-sm">At Sri Ambica Electronics, we specialize in providing expert gadget
          repair service with over 15 years of experience. Get Audio, Security
          Cameras, Desktops, Laptops, Monitos and LCD/LED TV repaired here with HI-Tech Machinery</p>
        </div>
        <div className="flex min-w-[50%]  md:mx-6">

<div className="flex  flex-col space-y-2  w-[50%] md:mx-auto md:w-fit px-0 md:px-8 ">
          <h1 className="text-card-foreground font-black sm:text-2xl text-xl ">Products</h1>
          <ul className=" text-muted-foreground sm:text-base text-sm">
            <Link to="/audio">
              <li className="hover:text-primary transition03">Audio Systems</li>
            </Link>
            <Link to="/securityCameras">
              <li className="hover:text-primary transition03">Security Cameras</li>
            </Link>
            <Link to="/desktop">
              <li className="hover:text-primary transition03">Desktop</li>
            </Link>
            <Link to="/laptop">
              <li className="hover:text-primary transition03">Laptop</li>
            </Link>
            <Link to="/monitor">
              <li className="hover:text-primary transition03">Monitor</li>
            </Link>
            <Link to="/tv">
              <li className="hover:text-primary transition03">LCD/LED TV</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col text-start w-fit mx-auto px-8 space-y-2">
            <h1 className="sm:text-2xl text-xl text-card-foreground font-black">About</h1>
            <ul className="text-muted-foreground sm:text-base text-sm">
                <Link to="/aboutUs"><li className="hover:text-primary  transition03">
                    About Us</li></Link>
                    <Link to="/privacyPolicy"><li className="hover:text-primary transition03">Privacy Policy</li></Link>
            </ul>
        </div>

        </div>
        <div  className="flex flex-col space-y-2">
            <h1 className="sm:text-2xl text-xl font-black text-card-foreground">Business Details</h1>
            <ul className="text-muted-foreground sm:text-base text-sm">
                <Link><li>Registered Bussiness Name - Sri Ambica Electronics</li></Link>
            </ul>
        </div>
        </div>
        <div className=" flex h-4 justify-center text-xs sm:text-base font-bold text-muted-foreground">Copyright © 2025 Ambica Electronics. All Rights Reserved.</div>
      </section>
    </>
  );
}

export default Footer;
