"use client";
import React, { useState } from "react";

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

      console.log(response);

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
      className="flex flex-col justify-center min-h-screen bg-[#1A1A1A] gap-16 md:gap-32 px-4 sm:px-6 md:px-12 py-16 md:py-0"
    >
      <h1 className="text-[#F2EDE6] text-4xl sm:text-5xl md:text-8xl xl:text-9xl font-primary uppercase">
        Let&apos;s{" "}
        <span className="group relative inline-block cursor-default">
          <span className="transition-colors duration-300 group-hover:text-[#E8734A]">
            Talk
          </span>
          <span className="absolute bottom-0 left-0 h-[2px] md:h-[3px] w-0 bg-[#E8734A] transition-all duration-500 ease-out group-hover:w-full" />
        </span>
      </h1>

      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 md:gap-10 text-[#F2EDE6] font-primary w-full md:w-1/2"
        >
          <div className="flex flex-col gap-2 border-b border-[#E0DBD5]/30">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="bg-transparent p-3 text-[#F2EDE6] placeholder:text-[#6B6560] font-light focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 border-b border-[#E0DBD5]/30">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              className="bg-transparent p-3 text-[#F2EDE6] placeholder:text-[#6B6560] font-light focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 border-b border-[#E0DBD5]/30">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="min-h-[100px] bg-transparent p-3 text-[#F2EDE6] placeholder:text-[#6B6560] font-light focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-fit rounded-full font-extralight px-6 py-3 border border-[#E0DBD5]/30 text-[#F2EDE6] hover:bg-[#A39080] hover:text-[#F2EDE6] hover:border-[#A39080] transition-colors"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 font-light text-sm">
              Message sent successfully!
            </p>
          )}
          {status.startsWith("error") && (
            <p className="text-red-400 font-light text-sm">
              Failed to send message. {status.replace("error: ", "")}
            </p>
          )}
        </form>

        <div className="flex flex-col gap-8 text-[#F2EDE6]">
          <div className="font-primary">
            <p className="text-[#6B6560] uppercase text-xs tracking-widest mb-1">
              Email
            </p>
            <p className="font-light">mustafali.0522@gmail.com</p>
          </div>

          <div className="font-primary">
            <p className="text-[#6B6560] uppercase text-xs tracking-widest mb-1">
              Location
            </p>
            <p className="font-light">Malang, Indonesia</p>
          </div>

          <div className="font-primary">
            <p className="text-[#6B6560] uppercase text-xs tracking-widest mb-1">
              Social
            </p>
            <p className="font-light">mustafali.0522@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
