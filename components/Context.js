export default function Context() {
  return (
    <section className="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-0 mx-auto flex flex-col md:flex-row items-start">
      <div className="title h-full py-4 lg:w-1/2">
        <span className="block py-4">WHY NOW</span>
        <h2 className="font-black text-4xl">The context</h2>
      </div>
      <div className="content h-full py-4 lg:w-1/2 lg:text-xl">
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
