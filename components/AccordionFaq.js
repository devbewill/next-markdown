import React from "react";
import Container from "./Container";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const AccordionFaq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-screen-lg p-2 mx-auto">
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
                      <div
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      ></div>
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
    question: "What are the advantages of Datome over a traditional database?",
    answer:
      "In a relational database a user known as a client with specific permissions associated with their account can modify entries stored on a centralized server, by modifying the master copy; control of the database remains with a designated authority, which authenticates a user's credentials before providing access to the database. Since this authority is responsible for managing the database, if the security of the authority is compromised, the data can be changed or even deleted. Compared to a traditional information management via relational databases, Datome guarantees a series of tangible benefits: <br><ul><li> Immutability</li><li>Decentralization</li><li>Disintermediation</li><li>Traceability</li><li>Transparency</li><li>Verifiability</li> <li>Confidentiality</li></ul>",
  },
  {
    question: "How Datome streamlines audit procedures?",
    answer:
      "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments.",
  },
  {
    question:
      "How Datome simplifies data processes involving external parties?",
    answer:
      "The validation with cryptographic keys and the sequentiality in the registration of the data blocks ensures the immutability of all the information managed by Datome, mathematically guaranteeing the reliability of the data exchanged also towards subjects external to the organization owner of the Datome Account.<br><br>The possibility offered to selectively decentralize the ledger on multiple Nodes provides a further element of guaranteeing reliability for all the Users involved in the information chain.<br>Unlike traditional data management via database, Datome therefore allows you to easily share an information environment between different parties, eliminating the problems related to information misalignment between data warehouses managed independently by each organization.",
  },
  {
    question:
      "I already use a business process management system: what benefits does Datome provide?",
    answer:
      "Datome does not replace your current business process management system, but it allows you to extend its functionality without having to face the complexity of the blockchain technology, thanks to the Datome abilities of notarizing selected information and processes, enabling workflow automations certified by blockchain, ensuring trust and information reliability also outside your organization, or providing enhanced tracking for the data lifecycle.<br><br>Through the full-featured APIs available, Datome can be easily integrated into your current business process management solution, both saas or on-premise (ie. VirtusFlow, Wrike, Quixy, Kintone, BreakOut, …).",
  },
  {
    question: "Does Datome guarantee database-like performance?",
    answer:
      "According to <strong>Hyperledger Caliper</strong> (a blockchain benchmark tool that allows developers to measure the performance of a blockchain implementation), Datome can boast excellent metrics in terms of speed (X.Xk tps) and latency time, even compared to a traditional solution based on MySQL or similar database.To maximize performance on data reading/writing, Datome also allows limiting the recording on the blockchain exclusively to data, metadata and validation hashes, maintaining your current private or external cloud service for media and document resources (or optionally by activating a dedicated Cloud already synchronized with your Datome Account).",
  },
  {
    question: "Does Datome allow it to be GDPR compliant?",
    answer:
      "Datome's architecture allows only the proof of integrity (hash) of sensitive data to be recorded on-chain, guaranteeing full compliance with the user's right to be forgotten introduced by the GDPR legislation.<br><br>Here below the data stored on-chain by Datome:metadata about the blocksa header with the block numbera hash and the previous block hash (thanks to them the whole blockchain is interlinked and resistant to manipulations)metadata with signatures of the block creatorsome low-level data for ensuring the consistency of the statethe list of transactions with client application signatures, chaincode names, input parameters, reads and writes to the world state, and lists of transaction execution outputs from all required organizations.",
  },
  {
    question: "Is it possible to try Datome before subscribing?",
    answer:
      "Yes, a 30-days free trial of Datome is available by filling this form. <br>By activating the trial you will be able to test the main features of Datome in a guided sandbox environment for a month, with the possible support of our team in case you need it. <br>‍<br>Then, click here to get a free 30 day trial or contact us for more information.",
  },
  {
    question: "How to activate a Datome subscription?",
    answer:
      "Datome is a subscription-based solution, available in saas or on-premise mode.<br>To obtain an active Datome account it is necessary to subscribe to one of the available tiers. You can request a quote for subscribing to Datome by filling the appropriate online form or contacting us for more information.",
  },
  {
    question: "How does blockchain technology work?",
    answer:
      "The blockchain is a shared and 'immutable' data structure, a digital register whose entries are grouped into 'blocks', concatenated in chronological order, and whose integrity is guaranteed by the use of cryptography. Its content, once written through a regulated process, can no longer be modified or eliminated, unless the entire process is invalidated. These technologies are included in the broader family of distributed ledgers, i.e. systems based on a distributed ledger, which can be read and modified by multiple nodes on a network.<br><br>The nodes involved do not need to know each other's identity or trust each other because, to ensure consistency between the various copies, the addition of a new block is globally governed by a shared protocol. Once the addition of the new block is authorized, each node updates its private copy. The very nature of the data structure ensures that it will not be manipulated in the future.  Datome is a saas or on-premise subscription solution, suitable for any organization and able to make the full potential of blockchain technology accessible and easily integrated without having to deal with its intrinsic technological complexity.",
  },
  {
    question:
      "What are the differences between public and private blockchains?",
    answer:
      "Public blockchains are permissionless and allow anyone to participate. All members of the blockchain have the same rights to read, modify and validate the blockchain. People primarily use public blockchains to trade and mine cryptocurrencies such as Bitcoin, Ethereum, and Litecoin. Permissioned blockchains use an access control layer to control who accesses the network.<br><br>They are therefore characterized by network access restricted to a few authorized participants and by a validation process delegated to a small group of players. Consortium blockchains are permissioned blockchains where consensus processes are managed by a set of pre-selected nodes and they are also considered as 'partially decentralized blockchains', however, fully private blockchains are private blockchains where access and write permissions are centrally managed by an organization. Hybrid blockchains combine elements of private and public networks in order to set up private and permission-based systems alongside a public system. In this way, control over access to the data stored in the blockchain is guaranteed, while keeping the rest of the data public.<br>&zwj;<br>Datome has an agnostic approach to blockchain technology, but in its standard version it natively integrates Hyperledger Fabric, a permissioned blockchain framework, and it is capable of being distributed on federated or consortium scenarios, and also hybridized with public or third-party blockchain networks.",
  },
  {
    question: "What is Hyperledger Fabric?",
    answer:
      "Hyperledger Fabric platform is an open source, enterprise-grade, permissioned blockchain framework hosted by The Linux Foundation, with an active and growing community of developers.<br><br>Datome has an agnostic approach to blockchain technology, but in its standard version it natively integrates the Hyperledger Fabric framework.",
  },
];

export default AccordionFaq;
