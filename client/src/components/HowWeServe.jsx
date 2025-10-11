import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
export function HowWeServe(){
    return(      <section className="w-full border-t min-h-[500px] py-15 px-4 text-center  space-y-4">
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
      </section>);
}
