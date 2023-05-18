import Link from "next/link";

export default function Hero() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
        <p className="uppercase tracking-loose"> Tagline</p>
        <h1 className="font-bold text-3xl my-4">
          Embed trust in your data and processes
        </h1>
        <p className="leading-normal mb-4">
          Bring intelligence into data and flows to get a more efficient and
          safe IT ecosystem. Leverage in self-provisioning the real benefits of
          the blockchain.
        </p>
        <div className="flex">
          <button className="inline-block bg-black  hover:bg-gray-900 text-white hover:text-white rounded shadow hover:shadow-lg mr-2 py-2 px-4  border border-gray-900 hover:border-transparent">
            Super Button
          </button>
          <button className="inline-block hover:bg-gray-900  text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">
            Super Button
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:py-6 text-center"></div>
    </section>
  );
}
