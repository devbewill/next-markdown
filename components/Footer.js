import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./Container";

export default function Footer() {
  const navigation = ["Home", "About", "Faq", "Docs", "Privacy Policy"];
  return (
    <div className="relative bg-slate-100">
      <Container>
        <div className="grid grid-cols-1 gap-10 mx-auto mt-5  lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width="100"
                  height="100"
                  className="w-1/3"
                />
              </Link>
            </div>
            <p className="font-bold pt-3">
              Embed trust in your data and processes
            </p>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              <p>
                Mangrovia Blockchain Solutions Srl<br></br>Corso Venezia 54,
                Milano <br></br>VAT: IT10301800966
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div>Follow us</div>
            <div className="flex justify-start mt-5 space-x-5 text-black">
              <a href="mailto:info@datome.io" target="_blank" rel="noopener">
                <span className="sr-only">Twitter</span>
                <Email />
              </a>
              <a
                href="https://www.linkedin.com/company/mangroviasolutions"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
              <a
                href="https://www.linkedin.com/company/mangroviasolutions"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Linkedin</span>
                <Discord />
              </a>
            </div>
          </div>
        </div>

        <div className=" text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made by{" "}
          <a href="https://mangrovia.solutions/" target="_blank">
            Mangrovia
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}

const Linkedin = ({ size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const Discord = ({ size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
  >
    <path
      className="cls-1"
      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
    />
  </svg>
);

const Email = ({ size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
  </svg>
);
