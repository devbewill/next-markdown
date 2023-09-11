import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero bg-white relative">
      <div className=" container p-4 flex h-screen mx-auto w-full items-center justify-around">
        <div className="flex-col max-w-xl">
          <Image
            src="/gradient1.svg"
            alt="item"
            width="150"
            height="100"
            className="pt-30 lg:pt-0 py-3"
          />
          <h1 className=" text-4xl font-black md:text-5xl my-5">
            Embed trust in your data and processes.
          </h1>
          <p className="text-1xl  my-6">
            Bring intelligence into data and flows to get a more efficient and
            safe IT ecosystem. Leverage in self-provisioning the real benefits
            of the blockchain.
          </p>
          <div className="flex flex-col my-5 max-w-xs">
            <button className="bg-mangrovia my-4 text-white hover:text-white hover:bg-gray-700 transition-colors rounded-xl">
              Try now for free
            </button>
            <button className=" hover:text-gray-700 bg-mangroviaLight text-mangrovia transition-colors rounded-xl">
              Book a demo
            </button>
          </div>
        </div>
        <div className="flex items-center relative">
          <div className="absolute top-0 left- right-0 bottom-0 border-spacing-50 bg-mangrvia"></div>
          <Image
            src="/landing-hero.png"
            alt="item"
            width="1000"
            height="100"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
