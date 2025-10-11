import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    id: "1",
    title: "My LED TV screen has gone blank but there's sound. What should i do?",
    content:
      "A blank screen with sound often indicates issues with backlight or display panel. Reach out to us for a thorough assessment and repair works.",
  },
  {
    id: "2",
    title: "Do you provide spare parts for replacements?",
    content:
      "Yes, we use genuine spare parts to ensure longetivity and optimal performance of your devices.",
  },
  {
    id: "3",
    title: "How long does a typical appliance repair take?",
    content:
      "Repair durations vary based on the issue's complexity. However, most standard repairs are completed within 1-2 hours.",
  },
  {
    id: "4",
    title: "Do you provide warranty?",
    content:
      "Absolutely, We provide a 90-day warranty on all our reoair services, ensuring peace of mind and quality assurance but physical damages won't be covered.",
  },{
    id:"5",
    title:"Can u help with emergency repairs?",
    content:"Yes, we understand that some repairs can't wait. We offer priority scheduling for emergency situations to minimize disruptions for life"
  }
]

export default function Component() {
  return (
    <div className=" mx-auto flex flex-col items-center justify-center space-y-12 max-w-6xl px-5 md:px-2">
      <h2 className="text-center text-3xl font-bold">Most Asked Questions </h2>
      <Accordion type="single" collapsible className=" w-full space-y-3" defaultValue="2">
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="hover:scale-102 hover:shadow transition03 rounded-xl border border-foreground/25 bg-background px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50">
            <AccordionTrigger
            className="py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-muted-foreground/105">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
