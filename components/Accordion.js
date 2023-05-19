import React from "react";
import Container from "./Container";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Accordion = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto">
        {accordionData.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-6 text-left  hover:text-mangrovia border-0 border-b-2">
                    <span className="text-2xl">{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-6 h-6 text-mangrovia`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2">
                      {item.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const accordionData = [
  {
    question: "Safeguard data integrity",
    answer:
      "Safeguard the integrity of the data when it is written by different applications",
  },
  {
    question: "Validate information",
    answer: "Validate incoming information from customers or suppliers",
  },
  {
    question: "Enable sharing",
    answer: "Enable sharing between third parties of the same register",
  },
  {
    question: "Protect your organization",
    answer: "Protect your organization against third party claims",
  },
  {
    question: "One single environment",
    answer:
      "Bring all the business logic into one single environment to simplify the interactions between different systems",
  },
  {
    question: "Tracks assets",
    answer:
      "Tracks assets along the supply chain or along any process and return consistent and valid information for all actors",
  },
  {
    question: "Simplify data orchestration",
    answer:
      "Simplify data orchestration when your company is leveraging data streaming (e.g. Kafka)",
  },
];

export default Accordion;
