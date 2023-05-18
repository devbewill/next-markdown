import Link from "next/link";

export default function Askyourself() {
  return (
    <section className="container mx-auto flex flex-wrap flex-col md:flex-row items-start my-12 md:my-24">
      <div className="item h-full md:w-1/3">
        <div className=" m-5  p-4 border-black border-2 border-l-0 border-b-0 font-bold ">
          Can you defend against third-party claims challenging the proper
          execution of a process ?
        </div>
      </div>
      <div className="item h-full md:w-1/3">
        <div className=" m-5  p-4 border-black border-2 border-l-0 border-b-0 font-bold ">
          How painful is it writing a business logic in different places?
        </div>
      </div>
      <div className="item h-full md:w-1/3">
        <div className=" m-5  p-4 border-black border-2 border-l-0 border-b-0 font-bold ">
          Incoming information from customers or suppliers. Do you have full
          control on the context when such data should be validated?
        </div>
      </div>
      <div className="item h-full md:w-1/3">
        <div className=" m-5   p-4 border-black border-2 border-l-0 border-b-0 font-bold ">
          Different applications writing on the same database, are such
          applications always adopting coherent rules?
        </div>
      </div>
      <div className="item h-full md:w-1/3">
        <div className=" m-5   p-4 border-black border-2 border-l-0 border-b-0 font-bold ">
          Do you have a full and trustworthy tracking from the very start to the
          very end of a process?
        </div>
      </div>
      <div className="item h-full md:w-1/3">
        <div className=" m-5   p-4 border-black border-2 border-l-0 border-b-0 font-bold ">
          Who and when took actions along the way? Can you really trust such a
          tracking?
        </div>
      </div>
    </section>
  );
}
