import React from "react";
import "/css/components/roadmap.css";

const releases = [
  {
    startDate: "December 2022",
    title: "Pre-Alpha",
    version: "0.4.16",
    updates: {
      "DripVerse Platform": {
        description:
          "The first testnet release of DripVerse Platform marks the beginning of public testing.",
        features: {
          Login: {
            Metamask: "",
          },
          Networks: {
            "Polygon Testnet": "",
          },
          NFT: ["Mint", "Transfer", "Claim"],
          Utility: {
            "Token Gating": "docs link",
          },
        },
        blog: "",
        tweet: "",
        status: {
          active: "green",
        },
      },
      "DripVerse SDK": {
        description:
          "The first stable testnet release of DripVerse SDK on npm.",
        docs: "",
        features: {
          Networks: {
            "Polygon Testnet": "",
          },
          NFT: ["Custodial Mint"],
          Utility: {
            "Token Gating": "docs link",
          },
        },
        blog: "",
        link: "",
        status: {
          active: "green",
        },
      },
      "Twitter Bot": {
        description:
          "A twitter bot is released to mint NFT of any tweet that someone wants. Simply mention '@DripThisTweet' and the bot would mint NFT and reply to your tweet with the NFT link. You'd have to then claim the NFT from DripVerse Platform. It'll be reserved to the twitter handle via which the NFT minting request came. So, you'd also need to verify if you are the owner of the Twitter Account.",
        features: {
          Networks: {
            "Polygon Testnet": "",
          },
          NFT: ["Custodial Mint"],
        },
        blog: "",
        tweet: "",
        link: "",
        status: {
          active: "green",
        },
      },
    },
  },
  {
    startDate: "August 2022",
    title: "Ideation",
    version: "0.0.1",
    updates: {
      Vision: {
        description:
          "A complete vision towards Cyberspace and open Metaverse OS is formed.",
        link: "",
        status: {
          active: "green",
        },
      },
    },
  },
  {
    startDate: "April 2022",
    title: "Concept",
    version: "0.0.1",
    updates: {
      "Smart NFT Litepaper": {
        description:
          "Smart NFT Litepaper describes the first step towards DripVerse Protocol.",
        link: "",
        status: {
          active: "green",
        },
      },
    },
  },
];

const UpdateItem = ({ title, description }) => {
  return (
    <p>
      <strong>{title}</strong>
      <br />
      {description}
    </p>
  );
};

const Milestone = ({ milestone }) => {
  // console.log("milestone:", milestone);
  return (
    <li className="timeline-event">
      <label className="timeline-event-icon"></label>
      <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">{milestone.startDate}</p>
        <h3>{milestone.title}</h3>
        <h4>{milestone.version}</h4>
        {Object.keys(milestone.updates).map((title) => (
          <UpdateItem
            title={title}
            description={milestone.updates[title].description}
          />
        ))}
      </div>
    </li>
  );
};

const Roadmap = ({ releases }) => {
  return (
    <ul className="timeline">
      {Object.keys(releases).map((key) => (
        <Milestone milestone={releases[key]} />
      ))}
    </ul>
  );
};

// Get Version History and display in table.
export function RoadmapV1() {
  return (
    <>
      <Roadmap releases={releases} />
    </>
  );
}
