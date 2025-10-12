import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title:
      "My LED TV screen has gone blank but there's sound. What should I do?",
    content:
      "A blank screen with sound often indicates issues with the backlight or display panel. Reach out to us for a thorough assessment and repair.",
  },
  {
    id: "3",
    title:
      "My laptop doesn’t turn on even when plugged in. What could be wrong?",
    content:
      "This could be due to a faulty charger, battery, or motherboard issue. Bring it in for a quick diagnosis — we’ll identify and fix the root cause.",
  },
  {
    id: "2",
    title: "Do you provide original spare parts for replacements?",
    content:
      "Yes, we use genuine spare parts to ensure longevity and optimal performance of your devices.",
  },
  {
    id: "8",
    title: "Do you provide warranty?",
    content:
      "Absolutely! We provide a 90-day warranty on all our repair services, ensuring peace of mind and quality assurance. Physical damages aren’t covered.",
  },
  {
    id: "4",
    title: "Do you install security cameras and surveillance systems?",
    content:
      "Yes, we handle complete CCTV installations, including setup of cameras and network hubs that connect to Wi-Fi for live monitoring and storage access from anywhere. If any equipment turns faulty, we coordinate replacements directly through the company as per their warranty and service policies.",
  },
  {
    id: "6",
    title: "My monitor display flickers or goes dim. Can it be fixed?",
    content:
      "Yes, we handle display issues like flickering, dim backlights, and COF bonding problems with precision tools for lasting results.",
  },
  {
    id: "7",
    title: "Can you build or upgrade desktop PCs?",
    content:
      "Absolutely! We assemble and upgrade desktops for gaming, office, or creative use — including motherboards, RAM, SSDs, and power supplies.",
  },
  
  {
    id: "9",
    title: "Do you replace laptop screens and keyboards?",
    content:
      "Yes, we replace damaged laptop displays, keyboards, and other components using genuine parts for reliable performance.",
  },
];

export default function Component() {
  return (
    <div className=" mx-auto flex flex-col items-center justify-center space-y-12 max-w-6xl px-5 md:px-2">
      <h2 className="text-center text-3xl font-bold">Most Asked Questions </h2>
      <Accordion
        type="single"
        collapsible
        className=" w-full space-y-3"
        defaultValue="2"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="hover:scale-102 hover:shadow transition03 rounded-xl border border-foreground/25 bg-background px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
          >
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0">
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
