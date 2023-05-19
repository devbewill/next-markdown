import Link from "next/link";

export default function QuoteTwo() {
  return (
    <section className="py-20 px-4 bg-mangrovia text-black flex-col md:flex-row items-center ">
      <div className="container mx-auto">
        <h3 className="text-white">NO BLOCKCHAIN SKILLS</h3>
        <p className=" text-3xl md:text-5xl font-bold">
          Get your own blockchain-regulated database{" "}
          <span className="text-white">without coding </span>smart contracts
        </p>
      </div>
    </section>
  );
}
