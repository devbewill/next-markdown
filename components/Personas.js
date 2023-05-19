import Image from "next/image";

export default function Personas() {
  return (
    <section className=" py-20 md:my-24 bg-slate-100">
      <h2 className="font-black text-center text-5xl">Personas</h2>
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-40 items-start py-10">
        <div className="h-full p-4 lg:w-1/2">
          <Image
            src="/personas1.svg"
            height={400}
            width={500}
            alt=""
            style={{
              width: "30%",
              height: "auto",
              padding: "2em 0",
            }}
            className="m-auto"
          />
          <p>
            <span className="text-mangrovia text-bold">Final custumers</span>{" "}
            can use Datome in self provisioning or with the consultancy of our
            staff. ‍ Are you a CEO, CIO or Risk Manager? Tell your Dev Team to
            try our <strong>30 days free </strong>sandbox or book a meeting.
          </p>
        </div>
        <div className=" h-full p-4 lg:w-1/2">
          <Image
            src="/personas2.svg"
            height={400}
            width={500}
            alt=""
            style={{
              width: "30%",
              height: "auto",
              padding: "2em 0",
            }}
            className="m-auto"
          />
          <p className="">
            <span className="text-mangrovia text-bold">System integrators</span>{" "}
            and software houses may use Datome to enable{" "}
            <strong>new features </strong>within their solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
