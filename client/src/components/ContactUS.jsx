import React, { useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {Label} from "./ui/label"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function ContactUS() {
  return (
    <>
      {/* Header Section */}
      <div className="border-b text-accent-foreground w-full mx-auto flex  flex-col justify-center items-center py-20 md:py-25   px-4 text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>


        <p className="text-muted-foreground">
          Have questions or need assistance? We're here to help. Reach out to us
          using any of the methods below.
        </p>
      </div>

      {/* Main Section */}
      <div className="mx-auto  my-8 py-10 max-w-4xl  flex flex-col sm:flex-row gap-6 md:justify-between px-4">
       <Card className=" sm:w-[50%] hover:shadow-xl transition03 w-full min-h-full border border-border mx-auto bg-card text-card-foreground pb-10">
  <CardHeader>
    <CardTitle className="text-2xl font-bold text-foreground">Get In Touch</CardTitle>
    <CardDescription className="text-muted-foreground">
      We're just a message or call away.
    </CardDescription>
  </CardHeader>

  <CardContent>
    <div className="flex flex-col space-y-10 mt-4">
      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="bg-secondary rounded-full p-2 flex-shrink-0">
          <img
            width={30}
            height={30}
            src="phone--v1.png"
            alt="phone icon"
            className="dark:invert dark:brightness-125"
          />
        </div>
        <div>
          <h1 className="font-semibold text-foreground">Phone</h1>
          <p className="text-muted-foreground text-sm font-bold md:font-normal md:text-base">
            +91 94906 78986
          </p>
          <p className="font-light text-sm text-muted-foreground">
            Available on weekdays, 9:00am to 9:30pm
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="bg-secondary rounded-full p-2 flex-shrink-0">
          <img
            width={30}
            height={30}
            src="new-post--v1.png"
            alt="email icon"
            className="dark:invert dark:brightness-125"
          />
        </div>
        <div>
          <h1 className="font-semibold text-foreground">Email</h1>
          <p className="text-muted-foreground text-sm font-bold md:font-normal md:text-base break-words">
            sriambicacomputers@gmail.com
          </p>
          <p className="font-light text-sm text-muted-foreground">
            We'll respond as soon as possible
          </p>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start gap-4">
        <div className="bg-secondary rounded-full p-2 flex-shrink-0">
          <img
            width={30}
            height={30}
            src="place-marker--v1.png"
            alt="address icon"
            className="dark:invert dark:brightness-125"
          />
        </div>
        <div>
          <h1 className="font-semibold text-foreground">Address</h1>
          <p className="text-muted-foreground text-sm font-bold md:font-normal md:text-base">
            Kotarubilli JN., Budathanapalli Road - 535215
          </p>
          <p className="font-light text-sm text-muted-foreground">
            Near RythuBazaar
          </p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>

        <div className="sm:w-[50%] hover:shadow-xl transition03">
          <Card className="w-full h-full border border-border mx-auto bg-card text-card-foreground pb-8">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">Send Us a Message</CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                We ensure top-notch service for your devices and respond quickly
                to your queries.
              </CardDescription>
            </CardHeader>

            <CardContent>
   <form ><div className="flex mt-2 flex-col gap-3">
          <div className="flex justify-between gap-4">
            <div className="grid w-[50%] gap-2">
              <Label htmlFor="yourme">Your Name</Label>
              <Input
                id="yourme"
                type="text"
                name="no-autofill"
                autoComplete="off"
                required
              />
            </div>
            <div className="grid w-[50%] gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Your Email</Label>
                
              </div>
              <Input id="email" type="email" autoComplete="off" required />
            </div>
          </div>
          <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="contactNumber">Contact Number</Label>
                
              </div>
              <Input id="contactNumber" type="text" autoComplete="off" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="subject">Subject</Label>
                
              </div>
              <Input id="subject" type="text" required autoComplete="off"/>
            </div><div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="message">Your Message</Label>
                
              </div>
              <Input id="yourMessage" type="text" required autoComplete="off" />
            </div>
            </div>
        </form>

            </CardContent>
            <CardFooter>
                <Button className="w-full" type="submit">Send Message</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
