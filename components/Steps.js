import Link from "next/link";
import Image from "next/image";

export default function Steps() {
  return (
    <section className="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-0 mx-auto">
      <div className="title h-full py-4 lg:w-1/2">
        <span className="block py-4 uppercase">how magic happens</span>
        <h2 className="font-black text-4xl">How it works</h2>
      </div>
      <div class="grid gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 justify-items-center  md:grid-cols-2">
        <div class="mt-4 md:mt-0 lg:order-last">
          <h2 class="mb-4 text-3xl tracking-tight  text-gray-900 dark:text-white">
            Models
          </h2>
          <p class="font-light text-gray-500 lg:text-xl dark:text-gray-400">
            Datome works by allowing you to define the general abstraction of
            the asset you want to track, which we call a Model. A Model is a
            JSON scheme that describes the properties, statuses and relations of
            an asset.
          </p>
        </div>
        <Image
          src="/howworks/how1.png"
          alt="item"
          width="400"
          height="200"
          className=""
        />
      </div>
      {/* separator */}
      <div class="grid gap-8 items-center py-8  mx-auto max-w-screen-xl xl:gap-16 justify-items-center md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-3xl tracking-tight  text-gray-900 dark:text-white">
            Relations
          </h2>
          <p class=" font-light text-gray-500 lg:text-xl dark:text-gray-400">
            For example, you can define a Model for a drug pill, a drug blister
            and a drug packaging, and how they are related to each other.
          </p>
        </div>
        <Image
          src="/howworks/how2.png"
          alt="item"
          width="400"
          height="200"
          className=""
        />
      </div>
      {/* separator */}
      <div class="grid gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 justify-items-center md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div class="mt-4 md:mt-0 lg:order-last">
          <h2 class="mb-4 text-3xl tracking-tight  text-gray-900 dark:text-white">
            Mutations
          </h2>
          <p class=" font-light text-gray-500 lg:text-xl dark:text-gray-400">
            Each Model also defines the rules and conditions for creating and
            updating an asset, as well as the privileges required for different
            users.
          </p>
        </div>
        <Image
          src="/howworks/how3.png"
          alt="item"
          width="400"
          height="200"
          className=""
        />
      </div>
      {/* separator */}
      <div class="grid gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 justify-items-center md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-3xl tracking-tight  text-gray-900 dark:text-white">
            Groups
          </h2>
          <p class="mb-6 font-light text-gray-500 lg:text-xl dark:text-gray-400">
            Users lives in a groups and can be legacy applications, human
            beings, IoT devices or even external organizations. For example, you
            can specify that only a certified manufacturer can create a drug
            pill, and only a licensed pharmacist can update its status to sold.
          </p>
        </div>
        <Image
          src="/howworks/how4.png"
          alt="item"
          width="400"
          height="200"
          className=""
        />
      </div>
      {/* separator */}
      <div class="grid gap-8 items-center py-8  mx-auto max-w-screen-xl xl:gap-16 justify-items-center md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div class=" mt-4 md:mt-0 lg:order-last">
          <h2 class="mb-4 text-3xl tracking-tight  text-gray-900 dark:text-white">
            Assets
          </h2>
          <p class=" font-light text-gray-500 lg:text-xl dark:text-gray-400">
            Once you have defined your Models, you can start creating assets and
            having them go through the designed flow.
          </p>
        </div>
        <Image
          src="/howworks/how5.png"
          alt="item"
          width="400"
          height="200"
          className=""
        />
      </div>
      {/* separator */}
      <div class="grid gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 justify-items-center md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-3xl tracking-tight  text-gray-900 dark:text-white">
            Details
          </h2>
          <p class="font-light text-gray-500 lg:text-xl dark:text-gray-400">
            For each asset, you get a customizable public web page that
            certifies the history of the changes and the rules that were
            followed. This way, you can ensure the transparency and
            accountability of your assets.
          </p>
        </div>
        <Image
          src="/howworks/how6.png"
          alt="item"
          width="500"
          height="200"
          className=""
        />
      </div>
      {/* separator */}
    </section>
  );
}
