import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = ["About", "Faq", "Docs"];

  return (
    <div className="fixed top-3 left-0 right-0 mx-2 sm:mx-auto bg-white bg-opacity-75 backdrop-blur-sm z-20 rounded-xl sm:max-w-lg">
      <nav className=" relative flex items-center justify-between p-1 w-full ">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="pl-2 w-full lg:w-auto flex">
                <Link href="/">
                  <Image src="/logo.svg" alt="logo" width="120" height="100" />
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto  text-gray-500  lg:hidden z-10 border-0 bg-transparent"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex  w-full my-5 top-10 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="w-full px-4 py-2 -ml-4"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      href="https://trial.datome.io/auth/login/"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-mangrovia rounded-md lg:ml-5"
                    >
                      login
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <Link
                href="/about"
                className="inline-block px-2 py-2  font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                About
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link
                href="/faq"
                className="inline-block px-2 py-2  font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                Faq
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link
                href="https://doc.datome.io/"
                target="_blank"
                className="inline-block px-2 py-2 font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                Docs
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden  rounded-xl lg:flex nav__item">
          <Link
            href="https://trial.datome.io/auth/login/"
            className="px-5 py-3 font-bold rounded-xl text-white bg-mangrovia"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
