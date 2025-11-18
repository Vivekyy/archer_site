import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Archer | Contact";
  }, []);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 text-center">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-archer-purple">Let’s build together</p>
        <h1 className="text-4xl font-semibold">Contact Archer</h1>
        <p className="text-lg text-archer-gray">
          Whether you're a founder, CFO, or agency partner, we’d love to explore how natural-language banking can power your treasury.
        </p>
      </section>
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-widest text-archer-gray">Email us anytime</p>
        <a
          className="mt-4 block text-2xl font-semibold text-archer-white transition-colors duration-300 hover:text-archer-purple"
          href="mailto:ben@archer-labs.xyz"
        >
          ben@archer-labs.xyz
        </a>
        <p className="mt-4 text-sm text-archer-gray">
          Share a quick note about your company size, existing tooling, and the workflows you wish were automated.
        </p>
      </section>
    </div>
  );
}

export default Contact;
