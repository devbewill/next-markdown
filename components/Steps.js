import Link from "next/link";
import Image from "next/image";

export default function Steps() {
  return (
    <section className="relative container mx-auto py-40">
      <Image
        src="/gradient3.svg"
        alt="item"
        width="200"
        height="200"
        className="absolute right-0 -top-1"
      />
      <span className="text-mangrovia"></span>
      <h2 className="font-black text-5xl px-4">How it works</h2>

      <div className="flex flex-wrap flex-col md:flex-row items-start my-12 md:my-24">
        <div className="item h-full md:w-1/2">
          <div className=" m-5 p-4 ">
            <h2 className="font-bold text-4xl ">
              <span className="text-mangrovia">1.</span>Create
            </h2>
            <p>
              Create digital models Use our APIs to define an asset (e.g. a
              physical object, a ticket, a set of data) and then design the
              possible states it can pass though.
            </p>
          </div>
        </div>
        <div className="item h-full md:w-1/2">
          <div className=" m-5  p-4 ">
            <h2 className="font-bold text-4xl">
              <span className="text-mangrovia">2.</span>Set
            </h2>
            <p>
              Set rules, relations and privileges Define who has the right to
              change a state, write/read data and under what circumstances.
            </p>
          </div>
        </div>
        <div className="item h-full md:w-1/2">
          <div className=" m-5 p-4 ">
            <h2 className="font-bold text-4xl">
              <span className="text-mangrovia">3.</span>Connect
            </h2>
            <p>
              Connect legacy applications Use our APIs to connect your existing
              systems or any third party.
            </p>
          </div>
        </div>
        <div className="item h-full md:w-1/2">
          <div className=" m-5 p-4 ">
            <h2 className="font-bold text-4xl">
              <span className="text-mangrovia">4.</span>Certify
            </h2>
            <p>
              Certify each run Get your assets certified, tacked and automated
              effortlessly on your private blockchain. You can share a public
              page showing the history of each asset that run through the Datome
              process. The public page can be tailored with your own editorial
              content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
