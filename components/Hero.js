import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container z-10 p-4 mx-auto flex flex-col w-full relative ">
        <Image
          src="/hero.svg"
          alt="item"
          width="400"
          height="100"
          className="absolute -z-10 -top-40 -right-20 opacity-10  lg:top-0 lg:right-0 lg:opacity-60"
        />
        <div className="max-w-4xl">
          <Image
            src="/gradient1.svg"
            alt="item"
            width="150"
            height="100"
            className="pt-30 lg:pt-0 py-3"
          />
          <h1 className="font-black text-4xl md:text-7xl my-5">
            Embed trust in your data and processes
          </h1>
          <p className="text-1xl md:text-2xl my-6">
            Bring intelligence into data and flows to get a more efficient and
            safe IT ecosystem. Leverage in self-provisioning the real benefits
            of the blockchain.
          </p>
          <div className="flex my-5">
            <button className="inline-block bg-black  text-white hover:text-white hover:bg-gray-700   transition-colors">
              Try now for free
            </button>
            <button className="inline-block hover:text-gray-700  text-gray-900 transition-colors">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
