import { useEffect, useState, type FormEvent } from "react";
import {
  FaCheck,
  FaClock,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaRegCopy,
} from "react-icons/fa6";
import Footer from "../components/Footer";
import NavbarAlt from "../components/NavBarAlt";

type SubmitState = "idle" | "sending" | "success" | "error";

const chicagoTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Chicago",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const getChicagoTime = () => chicagoTimeFormatter.format(new Date());

function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitFeedback, setSubmitFeedback] = useState("");
  const [copied, setCopied] = useState(false);
  const [liveTime, setLiveTime] = useState(getChicagoTime);

  const contactEmail = "ys4s@mtmail.mtsu.edu";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLiveTime(getChicagoTime());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const resolvedSubject =
      subject.length > 0
        ? subject
        : `Portfolio inquiry from ${name || "a visitor"}`;

    setSubmitState("sending");
    setSubmitFeedback("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/b1c0a88ad5504f52ba55a37328607307",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject: resolvedSubject,
            message,
            _subject: resolvedSubject,
            _replyto: email,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      const result = await response.json().catch(() => null);
      const resultSuccess = result?.success;
      const isSuccess =
        resultSuccess === true ||
        resultSuccess === "true" ||
        (response.ok && typeof resultSuccess === "undefined");

      if (!response.ok || !isSuccess) {
        throw new Error(result?.message || "Submit failed");
      }

      form.reset();
      setSubmitState("success");
      setSubmitFeedback("Your message has been sent. Thanks for reaching out.");
    } catch (error) {
      setSubmitState("error");
      setSubmitFeedback(
        error instanceof Error
          ? error.message
          : "Message could not be sent right now. Please try again or email directly.",
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#1d1d1d] text-[#f7f2e9]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-[#D4C7B4]/18 blur-3xl" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-[#D7850C]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#6a4f2a]/20 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col">
        <NavbarAlt />

        <main className="relative mx-auto flex w-full max-w-6xl flex-1 px-3 pb-4 pt-3 sm:px-6 lg:min-h-0 lg:px-8">
          <div className="grid w-full grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:min-h-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <section className="flex flex-col rounded-3xl border border-[#D4C7B4]/20 bg-gradient-to-b from-[#D4C7B4]/8 via-[#1d1d1d]/95 to-[#1d1d1d]/95 p-4 backdrop-blur-sm sm:p-6 lg:min-h-0">
              <p className="inline-block rounded-full border border-[#D4C7B4]/35 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#D4C7B4] poppins-semibold sm:tracking-[0.2em]">
                OPEN TO WORK & COLLABORATION
              </p>

              <h1 className="mt-4 font-kalnia text-[2rem] leading-tight text-[#efe4d3] sm:mt-5 sm:text-5xl lg:text-[3.3rem]">
                Have something
                <br />
                in mind?
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#f1e8d9]/85 poppins-regular sm:text-base">
                Got a project idea, internship opportunity, or just want to say
                hi? Send me a message. I&apos;d be happy to chat.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="group relative overflow-hidden rounded-2xl border border-[#D4C7B4]/25 bg-gradient-to-br from-[#D4C7B4]/12 to-[#D4C7B4]/5 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#D4C7B4]/45 hover:shadow-[0_10px_30px_rgba(212,199,180,0.16)]">
                  <div className="pointer-events-none absolute -right-4 -top-5 rotate-12 text-[#D4C7B4]/18 blur-[1px]">
                    <FaEnvelope className="text-[72px] sm:text-[92px]" />
                  </div>
                  <div className="relative mb-2 flex items-center justify-between gap-2">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#D4C7B4]/90 poppins-semibold">
                      Email
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex h-8 w-8 items-center cursor-pointer justify-center rounded-lg border border-[#D4C7B4]/35 bg-[#D4C7B4]/10 text-[#f7f2e9] transition hover:bg-[#D4C7B4]/20"
                        aria-label="Copy email"
                        title={copied ? "Copied" : "Copy email"}
                      >
                        <span className="relative h-4 w-4">
                          <span
                            className={`absolute inset-0 flex items-center justify-center transition duration-300 ${
                              copied
                                ? "scale-75 opacity-0"
                                : "scale-100 opacity-100"
                            }`}
                          >
                            <FaRegCopy size={14} />
                          </span>
                          <span
                            className={`absolute inset-0 flex items-center justify-center text-emerald-300 transition duration-300 ${
                              copied
                                ? "scale-100 opacity-100"
                                : "scale-75 opacity-0"
                            }`}
                          >
                            <FaCheck size={14} />
                          </span>
                        </span>
                      </button>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4C7B4]/35 bg-[#D4C7B4]/10 text-[#f7f2e9] transition hover:bg-[#D4C7B4]/20"
                        aria-label="Send email"
                        title="Send email"
                      >
                        <FaPaperPlane size={14} />
                      </a>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[#f7f2e9] poppins-medium">
                    {contactEmail}
                  </p>
                </div>

                <a
                  href="https://github.com/nowynreal"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative overflow-hidden rounded-2xl border border-[#D4C7B4]/25 bg-gradient-to-br from-[#D4C7B4]/12 to-[#D4C7B4]/5 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#D4C7B4]/45 hover:shadow-[0_10px_30px_rgba(212,199,180,0.16)]"
                >
                  <div className="pointer-events-none absolute -right-4 -top-5 rotate-12 text-[#D4C7B4]/18 blur-[1px]">
                    <FaGithub className="text-[72px] sm:text-[92px]" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#D4C7B4]/90 poppins-semibold">
                    GitHub
                  </p>
                  <p className="mt-2 text-sm text-[#f7f2e9] poppins-medium">
                    github.com/nowynreal
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/semihyckn/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative overflow-hidden rounded-2xl border border-[#D4C7B4]/25 bg-gradient-to-br from-[#D4C7B4]/12 to-[#D4C7B4]/5 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#D4C7B4]/45 hover:shadow-[0_10px_30px_rgba(212,199,180,0.16)]"
                >
                  <div className="pointer-events-none absolute -right-4 -top-5 rotate-12 text-[#D4C7B4]/18 blur-[1px]">
                    <FaLinkedin className="text-[72px] sm:text-[92px]" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#D4C7B4]/90 poppins-semibold">
                    LinkedIn
                  </p>
                  <p className="mt-2 text-sm text-[#f7f2e9] poppins-medium">
                    Let's connect on LinkedIn
                  </p>
                </a>
                <div className="relative overflow-hidden rounded-2xl border border-[#D4C7B4]/25 bg-gradient-to-br from-[#D4C7B4]/12 to-[#D4C7B4]/5 px-4 py-3 transition duration-300 hover:border-[#D4C7B4]/45">
                  <div className="pointer-events-none absolute -right-4 -top-5 rotate-12 text-[#D4C7B4]/18 blur-[1px]">
                    <FaClock className="text-[72px] sm:text-[92px]" />
                  </div>
                  <div className="relative flex items-center justify-between gap-2">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#D4C7B4]/90 poppins-semibold">
                      Timezone
                    </p>
                    <span className="rounded-md border border-[#D4C7B4]/30 bg-[#D4C7B4]/10 px-2 py-1 text-[11px] text-[#f7f2e9]/90 poppins-medium tabular-nums">
                      {liveTime}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#f7f2e9] poppins-medium">
                    Central Time (US)
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col rounded-3xl border border-[#D4C7B4]/20 bg-[#131313]/80 p-4 backdrop-blur-sm sm:p-6 lg:min-h-0">
              <h2 className="font-kalnia text-[1.8rem] text-[#efe4d3] sm:text-3xl">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-[#f1e8d9]/75 poppins-regular">
                Use the form below and I’ll get back to you soon.
              </p>

              <form
                className="mt-4 space-y-3 lg:overflow-y-auto lg:pr-1"
                onSubmit={handleSubmit}
              >
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#D4C7B4] poppins-semibold">
                    Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/5 px-4 py-3 text-sm text-[#f7f2e9] placeholder:text-[#f7f2e9]/40 outline-none transition focus:border-[#D4C7B4]/70"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#D4C7B4] poppins-semibold">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/5 px-4 py-3 text-sm text-[#f7f2e9] placeholder:text-[#f7f2e9]/40 outline-none transition focus:border-[#D4C7B4]/70"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#D4C7B4] poppins-semibold">
                    Subject
                  </span>
                  <input
                    name="subject"
                    type="text"
                    placeholder="What’s this about?"
                    className="w-full rounded-xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/5 px-4 py-3 text-sm text-[#f7f2e9] placeholder:text-[#f7f2e9]/40 outline-none transition focus:border-[#D4C7B4]/70"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#D4C7B4] poppins-semibold">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="What would you like to talk about?"
                    className="w-full resize-none rounded-xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/5 px-4 py-3 text-sm text-[#f7f2e9] placeholder:text-[#f7f2e9]/40 outline-none transition focus:border-[#D4C7B4]/70"
                  />
                </label>

                {submitFeedback && (
                  <p
                    className={`rounded-xl border px-3 py-2 text-sm poppins-medium ${
                      submitState === "success"
                        ? "border-green-300/40 bg-green-300/10 text-green-100"
                        : "border-red-300/40 bg-red-300/10 text-red-100"
                    }`}
                  >
                    {submitFeedback}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitState === "sending"}
                  className="cursor-pointer w-full rounded-xl border border-[#D4C7B4]/40 bg-[#D4C7B4]/95 px-4 py-3 text-sm uppercase tracking-[0.15em] text-[#1d1d1d] transition hover:bg-[#efe4d3] disabled:cursor-not-allowed disabled:opacity-70 poppins-bold"
                >
                  {submitState === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-4 pt-2 sm:px-6 lg:px-8">
        <Footer compact />
      </div>
    </div>
  );
}

export default Contact;
