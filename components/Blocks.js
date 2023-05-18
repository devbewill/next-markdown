import Link from "next/link";
import Image from "next/image";

export default function Blocks() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-start my-12 md:my-24">
      <div className="relative min-h-[300px] p-4 lg:w-1/2 h-full">
        <Image
          src="/blocks.png"
          alt="block"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="content h-full p-4 lg:w-1/2">
        <p>The reliability on your data and processes is a critical issue.</p>
        <p>
          The door is often left open to potential errors, manipulations and
          procedural anomalies.
        </p>
        <p>
          A questionable reliability, or an actual wrong processing, may lead to
          incorrect decision-making, loss of margins or even third-party claims.
          With usual methods, ensuring trust in your data and processes by all
          stakeholders is either not possible or complex and expensive.
        </p>
      </div>
    </section>
  );
}
