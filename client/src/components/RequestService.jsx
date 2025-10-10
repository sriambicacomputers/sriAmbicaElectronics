import React from "react";
import { Link } from "react-router-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function RequestService() {
  return (
    <>
      <section className=" w-full px-1 ">
        <div className="py-15 md:py-20">
          <h1 className="text-[36px] font-bold flex justify-center text-foreground">
            Request a Service{" "}
          </h1>
          <p className="mt-5  text-center  md:text-lg max-w-3xl mx-auto text-muted-foreground">
            Fill out the form below to request a service. Our team will get back
            to you as soon as possible to confirm your appointment.
          </p>
        </div>
        <div className="mx-auto my-10 pb-10 max-w-5xl flex flex-col md:flex-row gap-6 md:justify-between px-4">
          <div className="md:w-[50%]  flex flex-col md:justify-between gap-4">
            <Card className="hover:shadow-xl transition03 transition-all">
              <CardHeader>
                <CardTitle className="text-center font-bold text-2xl text-card-foreground my-2">
                  What Are You Looking For?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6 justify-items-center mb-8">
                  <Link to="/tv">
                    <div className="hover:scale-110 transition03 rounded-lg flex  flex-col justify-center min-h-28 items-center w-25">
                      <img
                        width="64"
                        height="64"
                        src="tv.png"
                        alt="imac"
                        className="w-[64px] dark:invert dark:brightness-125"
                      />
                      <p className="text-center"> LCD/LED TV</p>
                    </div>
                  </Link>
                  <Link to="/audio">
                    <div className=" hover:scale-110 transition-all  p-2 rounded-lg flex  flex-col justify-center items-center w-25 transition03">
                      <img
                        width="64"
                        height="64"
                        src="subwoofer.png"
                        alt="external-speaker-party-and-celebration-outline-02-chattapat-"
                        className="w-[64px] dark:invert dark:brightness-125"
                      />
                      <p className="text-center">Audio </p>
                    </div>
                  </Link>
                  <Link to="/cctv">
                    <div className="hover:scale-110 transition-all p-2 rounded-lg  flex  flex-col justify-center items-center w-25 transition03">
                      <img
                        src="wallmount-camera.png"
                        alt="bullet-camera"
                        className="w-[64px] dark:invert dark:brightness-125"
                      />
                      <p>CCTV</p>
                    </div>
                  </Link>
                  <Link to="/laptop">
                    {" "}
                    <div className="hover:scale-110 transition-all p-2 rounded-lg flex  flex-col justify-center items-center w-25 transition03">
                      <img
                        src="mac-book-air.png"
                        alt="laptop"
                        className="w-[64px] dark:invert dark:brightness-125"
                      />
                      <p>Laptop</p>
                    </div>
                  </Link>
                  <Link to="/desktop">
                    <div className="hover:scale-110 transition-all p-2 rounded-lg flex  flex-col justify-center items-center w-25 transition03">
                      <img
                        src="server.png"
                        alt="desktop"
                        className="w-[64px] dark:invert dark:brightness-125"
                      />
                      <p>Desktop</p>
                    </div>
                  </Link>
                  <Link to="/monitor">
                    <div className="hover:scale-110 transition-all p-2 rounded-lg flex  flex-col justify-center items-center w-25 transition03">
                      <img
                        src="imac.png"
                        alt="monitor"
                        className="w-[64px] dark:invert dark:brightness-125"
                      />
                      <p>Monitor</p>
                    </div>
                  </Link>
                </div>{" "}
              </CardContent>
            </Card>
            <Card className="text-card-foreground transition03 hover:shadow-xl transition-all">
              <CardHeader className="text-start">
                <CardTitle className="text-2xl font-bold">
                  Need immediate assistance?
                </CardTitle>
                <CardDescription>
                  If you need urgent service or have any questions, please
                  contact us directly at:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 font-medium">
                <div className="flex h-5 items-center gap-2 ">
                  <img
                    width="20"
                    height="30"
                    src="phone--v1.png"
                    alt="phone--v1"
                    className="dark:invert dark:brightness-125"
                  />
                  <p>+91 94906 78986</p>
                </div>
                <div className="flex h-5  items-center gap-2">
                  <img
                    width="20"
                    src="new-post--v1.png"
                    alt="new-post--v1"
                    className="dark:invert dark:brightness-125"
                  />
                  <p>sriambicacomputer@gmail.com</p>
                </div>
              </CardContent>
            </Card>
            <div></div>
          </div>

          <Card className="h-full md:w-[50%] transition03 hover:shadow-xl transition-all">
            <CardHeader className="text-center text-card-foreground">
              <CardTitle className="text-2xl font-bold ">
                Fill the form below
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                We will get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex my-2  flex-col gap-5 text-sm">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center ">
                      <Label htmlFor="contactNumber">Contact Number</Label>
                    </div>
                    <Input
                      id="contactNumber"
                      type="tel"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="grid gap-2 ">
                    <div className="flex items-center">
                      <Label htmlFor="contactNumber">Product</Label>
                    </div>
                    <div>
                      <Select defaultValue="">
                        <SelectTrigger id="product" className="w-full">
                          <SelectValue placeholder="Select Product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tv">LCD/LED TV</SelectItem>
                          <SelectItem value="audio">Audio</SelectItem>
                          <SelectItem value="cctv">CCTV</SelectItem>
                          <SelectItem value="laptop">Laptop</SelectItem>
                          <SelectItem value="desktop">Desktop</SelectItem>
                          <SelectItem value="monitor">Monitor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2 ">
                    <div className="flex items-center">
                      <Label htmlFor="city">City</Label>
                    </div>
                    <div>
                      <Select defaultValue="">
                        <SelectTrigger id="city" className="w-full">
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tv">LCD/LED TV</SelectItem>
                          <SelectItem value="audio">Audio</SelectItem>
                          <SelectItem value="cctv">CCTV</SelectItem>
                          <SelectItem value="laptop">Laptop</SelectItem>
                          <SelectItem value="desktop">Desktop</SelectItem>
                          <SelectItem value="monitor">Monitor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="description">Describe the Issue</Label>
                    </div>
                    <Textarea
                      id="description"
                      className="resize-none"
                    ></Textarea>
                  </div>
                </div>
                <Button type="submit" className="my-5 w-full">
                  {" "}
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full border-t min-h-[500px] py-15 px-4 text-center  space-y-4">
        <h1 className="text-3xl  font-bold">How We Serve</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Simple steps to get your products repaired with professional care
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:justify-center items-center mt-10  max-w-7xl mx-auto h-fit">
          <Card className=" hover:shadow-xl hover:scale-105 transition03  transition-all w-[300px] min-h-full mx-auto">
            <CardHeader>
              <img
                className="mx-auto w-[50px] mb-3 dark:invert dark:brightness-125 "
                src="overtime--v1.png"
                alt="schedule"
              />
              <CardTitle>Schedule Your Service</CardTitle>
              <CardDescription>
                Choose service, share details, select your convenient time and
                leave it on us
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition03 hover:shadow-xl transition-all w-[300px]  min-h-full   mx-auto">
            <CardHeader>
              <img
                className="mx-auto w-[50px] mb-3 dark:invert dark:brightness-125"
                src="work.png"
                alt="work"
              />
              <CardTitle>Professional Care</CardTitle>
              <CardDescription>
                We ensure top-notch service for your devices and take
                responsibility for the repairs
              </CardDescription>
            </CardHeader>
          </Card>{" "}
          <Card className="hover:scale-105 transition03 hover:shadow-xl transition-all w-[300px] flex  mx-auto">
            <CardHeader>
              <img
                className="mx-auto w-[50px] mb-3 dark:invert dark:brightness-125"
                src="task-completed.png"
                alt="task-completed"
              />
              <CardTitle>Complete Task</CardTitle>
              <CardDescription>
                We will complete the task in the scheduled time and keep you
                updated
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition03 hover:shadow-xl transition-all w-[300px] min-h-full mx-auto">
            <CardHeader>
              <img
                className="mx-auto w-[50px] mb-3 dark:invert dark:brightness-125"
                src="online-support--v1.png"
                alt="online-support--v1"
              />
              <CardTitle>Professional Support</CardTitle>
              <CardDescription>
                Afterwork support provided in professional hours for any kind of
                help
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </>
  );
}

export default RequestService;
