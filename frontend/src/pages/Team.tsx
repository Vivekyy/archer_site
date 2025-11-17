import { useEffect } from "react";
import benPortrait from "../assets/ben.png";
import vivekPortrait from "../assets/vivek.png";

type TeamMember = {
  name: string;
  role: string;
  highlights: string[];
  voice: string;
  photo: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Benjamin Nguyen",
    role: "Co-founder & CEO",
    photo: benPortrait,
    highlights: [
      "2x founder; previously COO/founding team at Absinthe Labs",
      "Scaled growth from 0 → 50+ clients with Serotonin, Hype, PayPal, Polkadot partners",
      "Operations Research @ Columbia; CSOP regional runner-up 2022",
    ],
    voice:
      "Ben builds irresistible Trojan-horse GTM motions that pair enterprise relationships with embedded consumer upside.",
  },
  {
    name: "Vivek Yanamadula",
    role: "Co-founder & CTO",
    photo: vivekPortrait,
    highlights: [
      "Full-stack engineer at Amazon shipping consumer-scale AI products",
      "IEEE-published researcher in Quantum & AI under Dr. Ronghui Gu (CertiK founder)",
      "M.A. Computer Science & Math @ Columbia; Machine Learning Track",
    ],
    voice:
      "Vivek architects programmable banking infrastructure—secure non-custodial wallets, AI prompt engines, and TradFi integrations.",
  },
];

function Team() {
  useEffect(() => {
    document.title = "Archer | Team";
  }, []);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12">
      <section className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.4em] text-archer-purple">
          Meet the founders
        </p>
        <h1 className="text-4xl font-semibold">The operators behind Archer.</h1>
        <p className="max-w-3xl text-lg text-archer-gray">
          Years of shipping for fintechs, DeFi ecosystems, and global
          enterprises taught us that banking needed a programmable reboot.
        </p>
      </section>
      <div className="grid gap-6 md:grid-cols-2">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="rounded-3xl border border-white/10 bg-archer-dark/60 p-6 shadow-card"
          >
            <div className="mb-5">
              <img
                src={member.photo}
                alt={member.name}
                className="h-40 w-40 rounded-3xl border border-white/20 object-cover shadow-[0_10px_30px_rgba(10,5,30,0.5)]"
              />
            </div>
            <header>
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-sm uppercase tracking-widest text-archer-gray">
                {member.role}
              </p>
            </header>
            <p className="mt-4 text-sm text-archer-gray">{member.voice}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-archer-white/90">
              {member.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Team;
