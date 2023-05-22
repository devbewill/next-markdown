import Layout from "../components/Layout";
import Image from "next/image";
import Footer from "../components/Footer";

export default function About({ frontmatter, markdownBody, title }) {
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
            <h1 className="font-black text-4xl md:text-7xl my-5">About us</h1>
            <p className="text-1xl md:text-2xl my-6">Who we are</p>
          </div>
        </div>
      </div>
      <div className=" m-auto w-2/3 py-20 flex gap-20 flex-col lg:flex-row">
        <div className="w-1/2">
          <Image
            src="/mangrovia-logo.png"
            alt="item"
            width="400"
            height="100"
            className="pt-30 py-3"
          />
        </div>
        <div className="lg:w-1/2">
          <p>
            Mangrovia Blockchain Solutions S.r.l. is the leading company in the
            design and development of enhanced services and fully integrated
            solutions based on distributed ledgers and blockchain technologies,
            for a more efficient, reliable and certified management of data and
            information flows.
          </p>
          <p>
            Mangrovia’s solutions guarantee digitization processes that are
            agile, sustainable and perfectly integrated to IT ecosystem of the
            organization.
          </p>
          <p>
            The seniority and multidisciplinary nature of our team allows us to
            offer a complete and coordinated management of complex projects,
            with careful planning of activities, from the feasibility study to
            the design of customized solutions, from the development of a
            proof-of-concept to the implementation of fully integrated and
            large-scale projects.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
}
