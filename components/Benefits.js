import Link from "next/link";
import Image from "next/image";
import Accordion from "./accordion";

export default function Benefits() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-start my-12 md:my-24">
      <div className="relative min-h-[300px] p-4 lg:w-1/2 h-full">
        <Image src="/blocks.png" alt="block" fill objectFit="contain" />
      </div>
      <Accordion></Accordion>
    </section>
  );
}
