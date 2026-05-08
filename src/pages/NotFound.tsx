import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function NotFound() {
  const historyRef = useRef<HTMLDivElement | null>(null);
  const [history, setHistory] = useState([
    "        a8      ,a888a,            a8 ",
    '      ,d88    ,8P"\' `"Y8,        ,d88  ',
    "     a8P88   ,8P       Y8,      a8P88  ",
    '   ,d8" 88   88         88    ,d8" 88  ',
    "  a8P\'  88   88         88   a8P\'  88  ",
    ',d8"    88   88         88 ,d8"    88  ',
    "888888888888 88         88 888888888888",
    "        88   `8b       d8'         88  ",
    "        88    `8ba, ,ad8'          88  ",
    '        88      "Y888P"            88  ',
    "\n",

    "Type 'help' to see available commands.",
  ]);
  const [input, setInput] = useState("");

  const runCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let response = "";

    if (command === "help") {
      response =
        "Available: ls, cd home, cd projects, cd about, cd contact, cd zort, map, clear";
    } else if (command === "ls") {
      response = "home  projects  about  contact  zort";
    } else if (command === "map") {
      response = `
          ┌───────────────┬───────────────┐
          │ HOME          │ PROJECTS      │
          │  route: /     │  route: /projects
          ├───────────────┼───────────────┤
          │ ABOUT         │ CONTACT       │
          │  route: /about│  route: /contact
          └───────────────┴───────────────┘

          [X] YOU ARE HERE: /404

          Shortcuts:
          - cd home     -> go back to the landing page
          - cd projects -> open the project gallery
          - cd about    -> jump to the about section
          - cd contact  -> jump to the contact page
          - ls          -> list known routes
      `;
    } else if (command === "cd home" || command === "back") {
      window.location.href = "/";
      return;
    } else if (command === "cd projects") {
      window.location.href = "/projects";
      return;
    } else if (command === "cd about") {
      window.location.href = "/about";
      return;
    } else if (command === "cd contact") {
      window.location.href = "/contact";
      return;
    } else if (command === "cd zort") {
      window.location.href = "/zort";
      return;
    } else if (command === "clear") {
      setHistory([]);
      return;
    } else {
      response = `Command not found: ${cmd}`;
    }

    setHistory((prev) => [
      ...prev,
      `user@portfolio:~/nowhere$ ${cmd}`,
      response,
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input);
    setInput("");
  };

  useEffect(() => {
    historyRef.current?.scrollTo({
      top: historyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#1d1d1d] px-4 py-12">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#D7850C]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#D4C7B4]/3 blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-kalnia text-3xl font-bold text-[#efe4d3] sm:text-4xl md:text-5xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#D4C7B4] sm:text-lg">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          variants={itemVariants}
          className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7850C] to-transparent"
        />

        {/* Primary CTA */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#D7850C] bg-[#D7850C]/10 px-6 py-3 font-poppins-medium text-[#efe4d3] transition-all duration-300 hover:bg-[#D7850C] hover:text-[#1d1d1d] sm:px-8"
          >
            <span>Back to Home</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Secondary Navigation */}
      </motion.div>

      {/* Terminal Section */}
      <motion.div
        className="relative z-10 mt-12 w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="rounded-lg border border-[#D7850C]/30 bg-[#1d1d1d]/80 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-[#D7850C]/20 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <p className="ml-3 font-poppins-regular text-xs sm:text-sm text-[#D7850C]/80">
                user@portfolio:~/nowhere
              </p>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
            {/* History */}
            <div
              ref={historyRef}
              className="mb-4 max-h-56 overflow-y-auto text-[#D4C7B4]/80 sm:max-h-64"
            >
              {history.map((line, index) => (
                <p
                  key={index}
                  className="whitespace-pre-wrap text-[#D4C7B4]/70 leading-tight"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-[#D7850C] whitespace-nowrap">
                user@portfolio:~/nowhere$
              </span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Try 'help' or 'cd home'"
                className="flex-1 bg-transparent outline-none text-[#efe4d3] placeholder-[#D4C7B4]/40"
                autoFocus
              />
            </form>
          </div>

          {/* Terminal Footer */}
          <div className="border-t border-[#D7850C]/20 text-center py-2 sm:py-3 font-poppins-regular text-xs text-[#D4C7B4]/50">
            Type <span className="text-[#D7850C]">'help'</span> to explore
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements - Below Console */}

      {/* Decorative Elements - Below Console */}
      {/* Subtle floating accent */}
      <motion.div
        className="absolute bottom-20 right-10 h-24 w-24 rounded-full border border-[#D7850C]/15 opacity-40"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-24 left-8 h-16 w-16 rounded-full border border-[#D4C7B4]/20 opacity-30"
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
}

export default NotFound;
