import { Hero } from "@/components/home/Hero";
import { Treatments } from "@/components/home/Treatments";
import { CasesTeaser } from "@/components/home/CasesTeaser";
import { Locations } from "@/components/home/Locations";
import { CtaBand } from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Treatments />
      <CasesTeaser />
      <Locations />
      <CtaBand />
    </>
  );
}
