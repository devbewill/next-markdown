export default function Context() {
  return (
    <section className="container  mx-auto flex flex-col md:flex-row items-start py-20 md:my-24">
      <div className="title h-full p-4 lg:w-1/2">
        <span className="text-mangrovia">WHY NOW</span>
        <h2 className="font-black text-5xl">The context</h2>
      </div>
      <div className="content h-full p-4 lg:w-1/2">
        <p className="font-bold">
          The reliability on your data and processes is a critical issue.
        </p>
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
