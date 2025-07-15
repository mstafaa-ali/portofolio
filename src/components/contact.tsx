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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      className="flex flex-col justify-center h-screen bg-black gap-32 px-12"
    >
      <h1 className="text-white text-5xl md:text-8xl xl:text-9xl font-primary">
        Let&apos;s Talk
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 text-white font-primary w-full md:w-1/2"
        >
          <div className="flex flex-col gap-2 border-b-1 border-white">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="bg-black p-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2  border-b-1 border-white">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              className="bg-black p-3 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 border-b-1 border-white">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="message"
              required
              className="min-h-[100px] bg-black p-3 focus:outline-none"
            />
          </div>

          <button type="submit" className="w-fit px-4 py-2 border border-solid">
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "success" && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {status.startsWith("error") && (
            <p className="text-red-500">
              Failed to send message. {status.replace("error: ", "")}
            </p>
          )}
        </form>

        <div className="flex flex-col gap-6">
          <div className="font-primary ">
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>
            <p>mustafali.0522@gmail.com</p>
          </div>

          <div className="font-primary ">
            <label htmlFor="location" className="text-gray-500">
              Location
            </label>
            <p>Malang, Indonesia</p>
          </div>

          <div className="font-primary ">
            <label htmlFor="email" className="text-gray-500">
              Social
            </label>
            <p>mustafali.0522@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
