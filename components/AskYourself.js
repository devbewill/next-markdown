import Link from "next/link";
import Image from "next/image";

export default function Askyourself() {
  return (
    <section className="bg-black text-white">
      <div className="py-20 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-0">
        <h3 className="text-white p-2">ASK YOURSELF IF</h3>
        <div className="flex flex-wrap flex-col md:flex-row items-start my-5 md:mt-5">
          <div className="item h-full md:w-1/3">
            <div className="lg:text-lg py-4 md:h-44 border-white border border-l-0 border-b-0 border-t-0 font-bold ">
              Can you defend against third-party claims challenging the proper
              execution of a process ?
            </div>
          </div>
          <div className="item h-full md:w-1/3">
            <div className="lg:text-lg py-4 md:h-44 lg:px-4 border-white border border-l-0 border-b-0 border-t-0 font-bold ">
              How painful is it writing a business logic in many different
              places?
            </div>
          </div>
          <div className="item h-full md:w-1/3">
            <div className="lg:text-lg  py-4 md:h-44 lg:px-4 border-white border-b font-bold ">
              Incoming information from customers or suppliers. Do you have full
              control on the context when such data should be validated?
            </div>
          </div>
          <div className="item h-full md:w-1/3">
            <div className="lg:text-lg py-4 md:h-36  border-white border border-l-0 border-b-0 font-bold ">
              Different applications writing on the same database, are such
              applications always adopting coherent rules?
            </div>
          </div>
          <div className="item h-full md:w-1/3">
            <div className="lg:text-lg py-4 md:h-36 lg:px-4 border-white border border-l-0 border-b-0 font-bold ">
              Do you have a full and trustworthy tracking from the very start to
              the very end of a process?
            </div>
          </div>
          <div className="item h-full md:w-1/3">
            <div className="lg:text-lg py-4 md:h-36 lg:px-4 border-white border-t font-bold ">
              Who and when took actions along the way? Can you really trust such
              a tracking?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
