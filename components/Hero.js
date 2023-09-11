import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="pt-20 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-0">
        <h1 class="mb-10 lg:max-w-screen-lg mr-0 ml-auto  font-extrabold uppercase tracking-tight leading-none text-gray-900 lg:text-right text-3xl lg:text-hero dark:text-white">
          <span class="block lg:text-right text-gray-300">datome</span>
          Embed trust in your data and processes
        </h1>
        <p class="mb-14 lg:mb-1 lg:text-xl lg:max-w-screen-md text-gray-500 dark:text-gray-400 lg:leading-8">
          Bring intelligence into data and flows to get a more efficient and
          safe IT ecosystem. Leverage in self-provisioning the real benefits of
          the blockchain.
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-end sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-white rounded-3xl bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Try now for free
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-gray-900 rounded-3xl border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Book a demo
          </a>
        </div>
        <div class="mx-auto pt-10 lg:max-w-screen-lg text-center">
          <span class="font-semibold text-gray-400 uppercase"></span>
          <div class="hidden md:grid md:grid-cols-5 pb-10 grayscale ">
            <div class="px-5">
              <img src="/partners/ey.png" alt="mockup" />
            </div>
            <div class="px-5">
              <img src="/partners/ibm.png" alt="mockup" />
            </div>
            <div class=" px-5">
              <img src="/partners/oracle.png" alt="mockup" />
            </div>
            <div class="px-5">
              <img src="/partners/infocert.png" alt="mockup" />
            </div>
            <div class="px-5">
              <img src="/partners/tinaba.png" alt="mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
