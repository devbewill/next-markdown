import Link from "next/link";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-start my-12 md:my-24">
      <div className="relative min-h-[300px] p-4 lg:w-1/2 h-full">
        <Image src="/blocks.png" alt="block" fill objectFit="contain" />
      </div>
      <div className="lg:w-1/2 h-screen">
        <div className="mx-auto w-3/4  overflow-hidden">
          <div>
            <input
              type="radio"
              name="tailwind_accordion"
              id="tab1"
              className="accordion__input px-2 py-4 hidden"
            />
            <label
              htmlFor="tab1"
              className="accordion__label p-4 block font-bold cursor-pointer relative items-center border-b-2"
            >
              Safeguard data integrity
            </label>
            <div className="accordion__content bg-white leading-relaxed p-4 hidden">
              <p>
                Safeguard the integrity of the data when it is written by
                different applications
              </p>
            </div>
          </div>
          {/* tab2 */}
          <div>
            <input
              type="radio"
              name="tailwind_accordion"
              id="tab2"
              className="accordion__input px-2 py-4 hidden"
            />
            <label
              htmlFor="tab2"
              className="accordion__label p-4 block font-bold cursor-pointer relative transition border-b-2"
            >
              Validate information
            </label>
            <div className="accordion__content bg-white leading-relaxed p-4 hidden">
              <p>Validate incoming information from customers or suppliers</p>
            </div>
          </div>
          {/* tab3 */}
          <div>
            <input
              type="radio"
              name="tailwind_accordion"
              id="tab3"
              className="accordion__input px-2 py-4 hidden"
            />
            <label
              htmlFor="tab3"
              className="accordion__label peer-checked:block p-4 block font-bold cursor-pointer relative transition border-b-2"
            >
              Enable sharing
            </label>
            <div className="accordion__content bg-white leading-relaxed p-4 hidden">
              <p>Enable sharing between third parties of the same register</p>
            </div>
          </div>
          {/* tab4 */}
          <div>
            <input
              type="radio"
              name="tailwind_accordion"
              id="tab4"
              className="accordion__input px-2 py-4 hidden"
            />
            <label
              htmlFor="tab4"
              className="accordion__label peer-checked:block p-4 block font-bold cursor-pointer relative transition border-b-2"
            >
              Protect your organization
            </label>
            <div className="accordion__content bg-white leading-relaxed p-4 hidden">
              <p>Protect your organization against third party claims</p>
            </div>
          </div>
          {/* tab5 */}
          <div>
            <input
              type="radio"
              name="tailwind_accordion"
              id="tab5"
              className="accordion__input px-2 py-4 hidden"
            />
            <label
              htmlFor="tab5"
              className="accordion__label peer-checked:block p-4 block font-bold cursor-pointer relative transition border-b-2"
            >
              Protect your organization
            </label>
            <div className="accordion__content bg-white leading-relaxed p-4 hidden">
              <p>Protect your organization against third party claims</p>
            </div>
          </div>
          {/* tab6 */}
          <div>
            <input
              type="radio"
              name="tailwind_accordion"
              id="tab6"
              className="accordion__input px-2 py-4 hidden"
            />
            <label
              htmlFor="tab6"
              className="accordion__label peer-checked:block p-4 block font-bold cursor-pointer relative transition border-b-2"
            >
              One single environment
            </label>
            <div className="accordion__content bg-white leading-relaxed p-4 hidden">
              <p>
                Bring all the business logic into one single environment to
                simplify the interactions between different systems
              </p>
            </div>
          </div>
          {/* tab7 */}
          <div>
            <input
              type="radio"
              name="tailwind_accordion"
              id="tab7"
              className="accordion__input px-2 py-4 hidden"
            />
            <label
              htmlFor="tab7"
              className="accordion__label peer-checked:block p-4 block font-bold cursor-pointer relative transition border-b-2"
            >
              Tracks assets{" "}
            </label>
            <div className="accordion__content bg-white leading-relaxed p-4 hidden">
              <p>
                Tracks assets along the supply chain or along any process and
                return consistent and valid information htmlFor all actors
              </p>
            </div>
          </div>
          {/* tab8 */}
          <div>
            <input
              type="radio"
              name="tailwind_accordion"
              id="tab8"
              className="accordion__input px-2 py-4 hidden"
            />
            <label
              htmlFor="tab8"
              className="accordion__label peer-checked:block p-4 block font-bold cursor-pointer relative transition border-b-2"
            >
              Simplify data orchestration{" "}
            </label>
            <div className="accordion__content bg-white leading-relaxed p-4 hidden">
              <p>
                Simplify data orchestration when your company is leveraging data
                streaming (e.g. Kafka){" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
