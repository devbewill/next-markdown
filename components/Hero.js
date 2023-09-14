import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class=" pt-10 px-4 mx-auto max-w-screen-xl lg:px-0">
        <a
          href="#"
          class=" inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span class="text-xs bg-pink-500 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span class="text-sm font-medium">Ready for Digital Passport</span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 class="mb-10  mr-0 ml-auto  font-extrabold uppercase tracking-tight leading-none text-gray-900 lg:text-right text-2xl lg:text-hero dark:text-white">
          <span class="block lg:text-right text-gray-300">datome</span>
          Unlock Real-Time Process Control with Blockchain
        </h1>
        <p class="mb-14 lg:mb-1 lg:text-xl lg:max-w-screen-md text-gray-500 dark:text-gray-400 lg:leading-8">
          Datome brings transparency, traceability, and regulatory compliance to
          your enterprise operations, all without requiring a background in
          blockchain technology.
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
