import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKeyboard,
  faChartLine,
  faUsers,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import consoleMockup from "../assets/mockup.png";
import bridgeLogo from "../assets/bridge.png";
import kilnLogo from "../assets/kiln.png";
import archerLogo from "../assets/archer-logo.svg";

type Pillar = {
  title: string;
  copy: string;
  icon: IconDefinition;
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
  logo: string;
  url: string;
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
    icon: faKeyboard,
  },
  {
    title: "Programmable Treasury",
    copy: "Route idle balances into yield, automate liquidity buffers, or set policy-based guardrails while keeping CFOs in full control.",
    icon: faChartLine,
  },
  {
    title: "Employee Ecosystem",
    copy: "Give every teammate a non-custodial account that syncs with payroll, expenses, and KPIs. Employees use Archer just like their traditional bank account.",
    icon: faUsers,
  },
  {
    title: "TradFi + DeFi Rails",
    copy: "Bridge ACH, wires, and corporate cards with stablecoin speed. Settlement windows shrink from days to seconds.",
    icon: faLink,
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
    logo: bridgeLogo,
    url: "https://www.bridge.xyz",
  },
  {
    name: "Kiln.fi",
    detail: "5–10% yield on idle stablecoin balances",
    logo: kilnLogo,
    url: "https://www.kiln.fi",
  },
  {
    name: "Archer SDK",
    detail: "APIs that let trusted AI agents move money safely",
    logo: archerLogo,
    url: "https://archer.xyz",
  },
];

function Home() {
  useEffect(() => {
    document.title = "Archer | Home";
  }, []);

  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isHighlightFading, setIsHighlightFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const heroCardRef = useRef<HTMLDivElement | null>(null);

  const startHighlightCycle = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIsHighlightFading(true);
      fadeTimeoutRef.current = setTimeout(() => {
        setHighlightIndex((prev) => (prev + 1) % heroHighlights.length);
        setIsHighlightFading(false);
      }, 500);
    }, 4500);
  }, []);

  const stopHighlightCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;
    }
  }, []);

  const resumeCycle = useCallback(() => {
    if (isPaused) {
      setIsPaused(false);
    }
    startHighlightCycle();
  }, [isPaused, startHighlightCycle]);

  useEffect(() => {
    startHighlightCycle();
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        heroCardRef.current &&
        !heroCardRef.current.contains(event.target as Node)
      ) {
        resumeCycle();
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      stopHighlightCycle();
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [resumeCycle, startHighlightCycle, stopHighlightCycle]);

  const setHighlightManually = (index: number, pause = true) => {
    if (index === highlightIndex) {
      if (!pause) {
        stopHighlightCycle();
      }
      return;
    }
    stopHighlightCycle();
    if (pause) {
      setIsPaused(true);
      setIsHighlightFading(true);
      setTimeout(() => {
        setHighlightIndex(index);
        setIsHighlightFading(false);
      }, 500);
    } else {
      setIsPaused(false);
      setIsHighlightFading(false);
      setHighlightIndex(index);
    }
  };

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
        <div
          ref={heroCardRef}
          className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-base md:text-lg font-medium text-archer-white shadow-card"
        >
          <p
            className={`transition-opacity duration-500 ${
              isHighlightFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {heroHighlights[highlightIndex]}
          </p>
          <nav className="mt-4 flex gap-2">
            {heroHighlights.map((_, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHighlightManually(idx, false)}
                onMouseLeave={resumeCycle}
                className={`h-1.5 flex-1 cursor-pointer rounded-full transition-colors ${
                  idx === highlightIndex
                    ? "bg-white/60"
                    : "bg-white/20 hover:bg-white/60"
                }`}
                aria-label={`Show highlight ${idx + 1}`}
              />
            ))}
          </nav>
        </div>
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
              className="rounded-3xl border border-white/10 bg-archer-dark/60 p-6 shadow-card transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(8,6,24,0.6)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <FontAwesomeIcon
                    icon={pillar.icon}
                    className="text-archer-white text-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
              </div>
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
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors"
            >
              <span className="shimmer-text bg-gradient-to-r from-archer-purple via-white to-archer-lilac bg-clip-text text-3xl font-bold text-transparent">
                {point.stat}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{point.label}</h3>
              <p className="text-sm text-archer-gray">{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-semibold">Workflow superpowers</h2>
          <p className="text-archer-gray">
            The Archer console pairs AI reasoning with deterministic execution
            so finance teams stay confident.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded-[32px] border border-white/10 bg-archer-dark/60 p-2 shadow-card">
            <div className="rounded-[28px] bg-gradient-to-br from-white/10 to-white/5 p-4">
              <img
                src={consoleMockup}
                alt="Archer prompt console mockup"
                className="w-full rounded-3xl border border-white/10 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {workflowMoments.map((moment) => (
              <article
                key={moment.title}
                className="group rounded-2xl border border-white/5 bg-archer-dark/60 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-archer-dark/80 hover:shadow-[0_20px_35px_rgba(6,4,18,0.6)]"
              >
                <h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-xl group-hover:mb-1">
                  {moment.title}
                </h3>
                <p className="text-sm text-archer-gray transition-all duration-300">
                  {moment.copy}
                </p>
              </article>
            ))}
          </div>
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
              className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-6 transition-colors"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 text-archer-white transition-colors group-hover:text-archer-purple">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 p-2 transition-shadow group-hover:shadow-[0_10px_25px_rgba(8,8,22,0.45)]">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <strong className="text-lg font-semibold">{item.name}</strong>
                </div>
                <span className="block text-sm text-archer-gray transition-colors group-hover:text-archer-white">
                  {item.detail}
                </span>
              </a>
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
