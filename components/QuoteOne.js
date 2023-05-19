import Link from "next/link";

export default function QuoteOne() {
  return (
    <section className=" py-20 bg-slate-100 flex-col md:flex-row items-center my-12 md:my-24">
      <div className="container mx-auto">
        <h3 className="text-mangrovia">WHAT WE BELIEVE IN</h3>
        <p className=" text-5xl font-bold">
          Datome is the solution that enables ecosystems to{" "}
          <span className="text-mangrovia">trust data</span> and the processes
          that manipulate it.
        </p>
      </div>
    </section>
  );
}
