import { FooterOne, FooterTwo, FooterThree } from "@/components/dashboard/Footer";
import SelectDate from "@/components/dashboard/SelectDate";
import SelectPayment from "@/components/dashboard/SelectPayment";

export const cardData = [
  {
    id: 0,
    step: "Choose theme",
    title: "Choose your theme",
    subtitle: "Choose your preferred studio",
    body: <p>select theme from images</p>,
    footer: ({ onNext }: { onNext: () => void }) => <FooterOne onNext={onNext} />,
  },
  {
    id: 1,
    step: "Session",
    title: "Pick a date & time",
    subtitle: "Choose a date and time that suits you",
    body: <SelectDate />,
    footer: ({ onNext, onBack }: any) => <FooterTwo onNext={onNext} onBack={onBack} />,
  },
  {
    id: 2,
    step: "Your Details",
    title: "Your Details",
    subtitle: "Please fill in your details",
    body: <p>add details form</p>,
    footer: ({ onNext, onBack }: any) => <FooterTwo onNext={onNext} onBack={onBack} />,
  },
  {
    id: 3,
    step: "Payment",
    title: "Payment",
    subtitle: "Please Select a Payment Method",
    body: <SelectPayment/>,
    footer: ({ onNext, onBack }: any) => <FooterTwo onNext={onNext} onBack={onBack} />,
  },
  {
    id: 4,
    step: "Summary",
    title: "Order Summary",
    subtitle: "Please Check If All Details Are Correct",
    body: <p>add payment selector</p>,
    footer: ({ onBack }: { onBack: () => void }) => <FooterThree onBack={onBack} />,
  },
];
