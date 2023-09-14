import Link from "next/link";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className=" bg-black text-white">
      <div className="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-0 mx-auto">
        <div className="title h-full py-4 lg:w-1/2 mb-16">
          <span className="block py-4 uppercase">how magic happens</span>
          <h2 className="font-black text-4xl">Benefits</h2>
        </div>

        <div className="lg:flex py-10 border-b-2">
          <h1 className=" pb-5 text-2xl font-extrabold lg:w-1/3 lg:pr-24">
            Secure Data Management
          </h1>
          <div className="lg:text-xl lg:w-2/3">
            Utilize blockchain technology and digital certificates for secure,
            tamper-proof data storage and operations.
          </div>
        </div>
        <div className="lg:flex py-10 border-b-2">
          <h1 className=" pb-5  text-2xl font-extrabold lg:w-1/3 lg:pr-24">
            Operational Efficiency
          </h1>
          <div className="lg:text-xl lg:w-2/3">
            Cut down on time and resources spent on data management, boosting
            operational efficiency by as much as 16%.
          </div>
        </div>
        <div className="lg:flex py-10 border-b-2">
          <h1 className=" pb-5  text-2xl font-extrabold lg:w-1/3 lg:pr-24">
            Intelligent Workflows
          </h1>
          <div className="lg:text-xl lg:w-2/3">
            Customize your workflows and dataset settings as your company
            evolves, allowing for greater adaptability.
          </div>
        </div>
        <div className="lg:flex py-10 border-b-2">
          <h1 className=" pb-5  text-2xl font-extrabold lg:w-1/3 lg:pr-24">
            User Access Control
          </h1>
          <div className="lg:text-xl lg:w-2/3">
            Precise control over who can access and modify data, thanks to
            specialized user groups and permissions.
          </div>
        </div>
        <div className="lg:flex py-10 border-b-2">
          <h1 className=" pb-5  text-2xl font-extrabold lg:w-1/3 lg:pr-24">
            Asset and Model Relationships
          </h1>
          <div className="lg:text-xl lg:w-2/3">
            Create one-to-one or one-to-many relationships between different
            assets and models, allowing for flexible data organization
          </div>
        </div>
        <div className="lg:flex py-10">
          <h1 className=" pb-5  text-2xl font-extrabold lg:w-1/3 lg:pr-24">
            No-Code and Advanced Editing
          </h1>
          <div className="lg:text-xl lg:w-2/3">
            Design your data models in a no-code environment or take control
            with advanced JSON editing capabilities.
          </div>
        </div>
        <div className="lg:flex py-10">
          <h1 className=" pb-5  text-2xl font-extrabold lg:w-1/3 lg:pr-24">
            Easy Integration
          </h1>
          <div className="lg:text-xl lg:w-2/3">
            Seamlessly integrate Datome with existing systems like ERP, CRM, and
            more.
          </div>
        </div>
      </div>
    </section>
  );
}
