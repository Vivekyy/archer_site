import { useEffect } from "react";
import { Link } from "react-router-dom";

type Pillar = {
  title: string;
  copy: string;
};

type ProofPoint = {
  stat: string;
  label: string;
  detail: string;
};

type WorkflowMoment = {
  title: string;
  copy: string;
};

type Integration = {
  name: string;
  detail: string;
};

const heroHighlights: string[] = [
  "Natural-language programmable monetary workflows",
  "24/7 instant settlement on stablecoin rails",
  "Zero transaction fees on wires and transfers",
  "Native wire, ACH, and card integration",
];

const pillars: Pillar[] = [
  {
    title: "Prompt Console",
    copy: "Program treasury, payroll, and vendor workflows with plain English prompts. Archer translates intent into compliant, auditable smart instructions.",
  },
  {
    title: "Programmable Treasury",
    copy: "Route idle balances into yield, automate liquidity buffers, or set policy-based guardrails while keeping CFOs in full control.",
  },
  {
    title: "Employee Ecosystem",
    copy: "Give every teammate a non-custodial account that syncs with payroll, expenses, and KPIs. Employees use Archer just like their traditional bank account.",
  },
  {
    title: "TradFi + DeFi Rails",
    copy: "Bridge ACH, wires, and corporate cards with stablecoin speed. Settlement windows shrink from days to seconds.",
  },
];

const proofPoints: ProofPoint[] = [
  {
    stat: "50M+",
    label: "Funding across signed LOIs",
    detail: "Web3 treasuries and agencies ready for beta",
  },
  {
    stat: "5-10%",
    label: "Yield share",
    detail: "On idle deposits with integrated DeFi partners",
  },
  {
    stat: "0 fees",
    label: "On Archer-native transfers",
    detail: "Programmable workflows stay costless",
  },
];

const workflowMoments: WorkflowMoment[] = [
  {
    title: "Predictive treasury intelligence",
    copy: "Use AI to query income sources, forecast on/off months, and automatically rebalance reserves.",
  },
  {
    title: "Cross-border payroll in one prompt",
    copy: "Tell Archer “Pay LATAM contractors from the USDC buffer every Friday.” Funds route instantly with audit logs.",
  },
  {
    title: "Automated compliance & reporting",
    copy: "Generate ISO 20022-ready reports, sync to ERP systems, and share snapshots with auditors in seconds.",
  },
];

const integrations: Integration[] = [
  {
    name: "Bridge.xyz",
    detail: "Card issuance, compliance, and on/off-ramping",
  },
  {
    name: "Kiln.fi",
    detail: "5–10% yield on idle stablecoin balances",
  },
  {
    name: "Agentic SDK",
    detail: "APIs that let trusted AI agents move money safely",
  },
];

function Home() {
  useEffect(() => {
    document.title = "Archer | Home";
  }, []);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16">
      <section className="flex flex-col gap-6 pt-4">
        <p className="text-xs uppercase tracking-[0.4em] text-archer-purple">
          Programmable Stablecoin Neobank
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Money that moves at the speed of prompts.
        </h1>
        <p className="max-w-4xl text-lg text-archer-gray">
          Archer is the NLP-driven banking stack that powers smarter, faster
          financial operations for businesses. Launch autonomous workflows,
          settle in seconds, and unify TradFi access with DeFi performance.
        </p>
        <ul className="grid gap-3 md:grid-cols-2">
          {heroHighlights.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-archer-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-3xl font-semibold">Why Archer</h2>
          <p className="text-archer-gray">
            Everything legacy banking promised—rebuilt for the agentic era.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-archer-dark/60 p-6 shadow-card"
            >
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-archer-gray">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div>
          <h2 className="text-3xl font-semibold">Momentum &amp; trust</h2>
          <p className="text-archer-gray">
            We are shipping with real operators across agencies, Web3
            treasuries, and AI-native startups.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {proofPoints.map((point) => (
            <article
              key={point.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <span className="bg-gradient-to-r from-archer-purple to-archer-lilac bg-clip-text text-3xl font-bold text-transparent">
                {point.stat}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{point.label}</h3>
              <p className="text-sm text-archer-gray">{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Workflow superpowers</h2>
          <p className="text-archer-gray">
            The Archer console pairs AI reasoning with deterministic execution
            so finance teams stay confident.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {workflowMoments.map((moment) => (
            <article
              key={moment.title}
              className="rounded-2xl border border-white/5 bg-archer-dark/60 p-4"
            >
              <h3 className="text-lg font-semibold">{moment.title}</h3>
              <p className="text-sm text-archer-gray">{moment.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div>
          <h2 className="text-3xl font-semibold">
            Connected to the rails you trust
          </h2>
          <p className="text-archer-gray">
            Seamlessly move between card networks, ACH, wires, and instant
            stablecoin settlement.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {integrations.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5"
            >
              <strong className="block text-lg font-semibold">
                {item.name}
              </strong>
              <span className="text-sm text-archer-gray">{item.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-archer-purple/20 to-archer-dark/40 p-8 text-center">
        <h2 className="text-3xl font-semibold">
          Ready for banking without friction?
        </h2>
        <p className="mt-2 text-archer-gray">
          Join the beta cohort and watch treasury, payroll, and vendor payments
          run themselves—securely and instantly.
        </p>
        <Link
          className="mt-6 inline-flex rounded-full bg-gradient-to-r from-archer-purple to-archer-lilac px-6 py-3 text-base font-semibold text-archer-dark shadow-card"
          to="/contact"
        >
          Request Access
        </Link>
      </section>
    </div>
  );
}

export default Home;
