import React from "react";

const contact = () => {
  return (
    <section className="flex flex-col justify-center h-screen bg-black gap-32 px-12">
      <h1 className="text-white text-9xl font-primary">Let&apos;s Talk</h1>

      <div className="flex gap-10">
        <form className="flex flex-col gap-10 text-white font-primary w-1/2">
          <div className="flex flex-col gap-2 border-b-1 border-white">
            <input
              type="text"
              placeholder="Name"
              className="focus:outline-none p-3"
            />
          </div>

          <div className="flex flex-col gap-2  border-b-1 border-white">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="focus:outline-none p-3"
            />
          </div>
          <div className="flex flex-col gap-2 border-b-1 border-white">
            <textarea
              placeholder="message"
              className="focus:outline-none p-3"
            />
          </div>

          <button type="submit" className="w-fit px-4 py-2 border border-solid">
            Send
          </button>
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

export default contact;
