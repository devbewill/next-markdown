import Layout from "../components/Layout";
import Image from "next/image";
import AccordionFaq from "../components/AccordionFaq";
import Footer from "../components/Footer";

export default function Faq() {
  return (
    <Layout>
      <div className="overflow-hidden flex items-center bg-slate-100 pt-60 pb-28">
        <div className="container p-4  mx-auto flex flex-col w-full ">
          <div className="max-w-4xl">
            <Image
              src="/gradient1.svg"
              alt="item"
              width="150"
              height="100"
              className="pt-30 lg:pt-0 py-3"
            />
            <h1 className="font-black text-4xl md:text-7xl my-5">
              Frequently Asked Questions
            </h1>
            <p className="text-1xl md:text-2xl my-6">
              Questions related to Datome services
            </p>
          </div>
        </div>
      </div>
      <div className=" m-auto w-2/3 py-20">
        <AccordionFaq></AccordionFaq>
      </div>

      <Footer></Footer>
    </Layout>
  );
}
