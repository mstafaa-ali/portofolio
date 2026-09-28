"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mustafali22" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mustafaali" },
  { name: "Instagram", href: "https://instagram.com/" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`error: ${errorData.message}`);
      }
    } catch (error) {
      setStatus(`error: ${error}`);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center min-h-screen bg-[#141414] text-[#F2EDE6] gap-16 md:gap-24 px-4 sm:px-6 md:px-12 py-20 md:py-28"
    >
      <div>
        <p className="text-xs font-primary uppercase tracking-widest text-[#8A847E] mb-4">
          Initiate Collaboration
        </p>
        <h2 className="text-[#F2EDE6] text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-clash font-semibold uppercase tracking-tight">
          Let&apos;s{" "}
          <span className="group relative inline-block cursor-default">
            <span className="transition-colors duration-300 group-hover:text-[#A39080]">
              Talk
            </span>
            <span className="absolute bottom-1 left-0 h-[3px] md:h-[5px] w-0 bg-[#A39080] transition-all duration-500 ease-out group-hover:w-full" />
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 text-[#F2EDE6] font-primary w-full lg:w-1/2"
        >
          <div className="flex flex-col gap-1 border-b border-[#2E2B28] focus-within:border-[#A39080] transition-colors duration-300 pb-2">
            <label className="text-[11px] uppercase tracking-wider text-[#8A847E]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              required
              className="bg-transparent py-2 text-[#F2EDE6] placeholder:text-[#4A4642] font-light focus:outline-none text-base sm:text-lg"
            />
          </div>

          <div className="flex flex-col gap-1 border-b border-[#2E2B28] focus-within:border-[#A39080] transition-colors duration-300 pb-2">
            <label className="text-[11px] uppercase tracking-wider text-[#8A847E]">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              required
              className="bg-transparent py-2 text-[#F2EDE6] placeholder:text-[#4A4642] font-light focus:outline-none text-base sm:text-lg"
            />
          </div>

          <div className="flex flex-col gap-1 border-b border-[#2E2B28] focus-within:border-[#A39080] transition-colors duration-300 pb-2">
            <label className="text-[11px] uppercase tracking-wider text-[#8A847E]">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              required
              rows={4}
              className="bg-transparent py-2 text-[#F2EDE6] placeholder:text-[#4A4642] font-light focus:outline-none resize-none text-base sm:text-lg"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-fit rounded-full font-primary uppercase text-xs tracking-widest px-8 py-4 border border-[#3E3A36] text-[#F2EDE6] hover:bg-[#A39080] hover:text-[#141414] hover:border-[#A39080] transition-all duration-300 mt-2 disabled:opacity-50"
          >
            {status === "sending" ? "Sending Message..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-emerald-400 font-primary text-xs uppercase tracking-wider">
              &bull; Thank you! Your message has been sent successfully.
            </p>
          )}
          {status.startsWith("error") && (
            <p className="text-rose-400 font-primary text-xs uppercase tracking-wider">
              &bull; Failed to send message. {status.replace("error: ", "")}
            </p>
          )}
        </form>

        <div className="flex flex-col justify-between gap-10 lg:w-1/3">
          <div className="space-y-8">
            <div>
              <p className="text-[#8A847E] uppercase text-xs tracking-widest mb-2 font-primary">
                Direct Email
              </p>
              <a
                href="mailto:mustafali.0522@gmail.com"
                className="font-clash text-xl md:text-2xl text-[#F2EDE6] hover:text-[#A39080] transition-colors"
              >
                mustafali.0522@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[#8A847E] uppercase text-xs tracking-widest mb-2 font-primary">
                Current Location
              </p>
              <p className="font-clash text-xl md:text-2xl text-[#F2EDE6]">
                Malang, Indonesia <span className="text-sm font-primary text-[#8A847E]">[GMT+7]</span>
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#8A847E] uppercase text-xs tracking-widest mb-4 font-primary">
              Connect & Socials
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b border-[#262422] text-[#F2EDE6] hover:text-[#A39080] transition-colors"
                >
                  <span className="font-primary text-sm uppercase tracking-wider">
                    {social.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8A847E] group-hover:text-[#A39080] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
