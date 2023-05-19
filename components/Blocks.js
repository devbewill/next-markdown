import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Blocks() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-start my-12 md:my-24 ">
      <div className="content h-full  lg:w-1/2">
        <Image
          src="/blocks.png"
          height={400}
          width={500}
          alt=""
          style={{
            width: "70%",
            height: "auto",
          }}
        />
      </div>
      <div className="content h-full p-4 lg:w-1/2">
        <p className="font-bold">
          Datome combines blockchain technology, data management, and business
          process management.
        </p>
        <p>
          This perfect mix of technologies is crucial to create a robust, secure
          and scalable Platform As A Service that you can easily configure in
          self provisioning.
        </p>
        <p>
          Datome lets you have a trustworthy database that can embed your
          processes and connect to your users, legacy applications and existing
          BPM or DM.
        </p>
      </div>
    </section>
  );
}
