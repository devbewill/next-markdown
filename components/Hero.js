import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex items-center bg-slate-100">
      <div className="container mx-auto flex flex-col w-full">
        <Image
          src="/hero.svg"
          alt="item"
          width="400"
          height="100"
          className="absolute right-40"
        />
        <div className="max-w-5xl">
          <Image
            src="/gradient1.svg"
            alt="item"
            width="150"
            height="100"
            className="py-3"
          />
          <h1 className="font-black text-7xl my-5">
            Embed trust in your data and processes
          </h1>
          <p className=" text-2xl my-6">
            Bring intelligence into data and flows to get a more efficient and
            safe IT ecosystem. Leverage in self-provisioning the real benefits
            of the blockchain.
          </p>
          <div className="flex my-5">
            <button className="inline-block bg-black  text-white hover:text-white  ">
              Try now for free
            </button>
            <button className="inline-block hover:bg-gray-900  text-gray-900 ">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
