import Link from "next/link";
import Image from "next/image";
import Accordion from "./accordion";

export default function Benefits() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-start my-12 md:my-24 ">
      <div className="title h-full p-4 lg:w-1/2">
        <span className="text-mangrovia">WHY DATOME</span>
        <h2 className="font-black text-5xl">The benefits</h2>
        <Image
          src="/gradient4.svg"
          height={400}
          width={500}
          alt=""
          style={{
            width: "70%",
            height: "auto",
            padding: "5em 0",
          }}
        />
      </div>
      <Accordion></Accordion>
    </section>
  );
}
