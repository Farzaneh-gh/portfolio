import React from 'react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 px-4 lg:px-0 overflow-hidden" data-aos="fade-up">
      {/* Title + Subtitle */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className=" text-2xl md:text-4xl font-bold text-zinc-800 md:mb-4">
          Contact Me
        </h2>
        <span className=" text-xs md:text-base text-zinc-600">
          Get in touch
        </span>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:gap-12 xs:grid-cols-12 max-w-3xl mx-auto px-1 ">
        {/* Contact Information */}
        <div className="space-y-6 xs:col-span-6 md:col-span-4 mb-8">
          <div className="flex items-start gap-2">
            <i className="uil uil-phone text-3xl text-indigo-600"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Call Me</h3>
              <span className="text-gray-500 text-xs">+34 644 701 638 </span>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-8">
            <i className="uil uil-envelope text-3xl text-indigo-600"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <span className="text-gray-500 text-xs">
                ghasemi.farzaneh89@gmail.com{" "}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 ">
            <i className="uil uil-map-marker text-3xl text-indigo-600"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Location
              </h3>
              <span className="text-gray-500 text-xs">Spain</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid gap-6 xs:col-span-6 md:col-span-8">
          <div className="bg-zinc-200  pt-3 pb-1 px-4 rounded-lg">
            <label htmlFor="name" className="block text-sm text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-1 focus:outline-none"
            />
          </div>

          <div className="bg-zinc-200  pt-3 pb-1 px-4 rounded-lg">
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-1 focus:outline-none"
            />
          </div>

          <div className="bg-zinc-200  pt-3 pb-1 px-4 rounded-lg">
            <label
              htmlFor="project"
              className="block text-sm text-gray-700 dark:text-gray-300"
            >
              Project
            </label>
            <input
              type="text"
              id="project"
              name="project"
              className="w-full p-1 focus:outline-none"
            />
          </div>

          <div className="bg-zinc-200  pt-3 pb-1 px-4 rounded-lg">
            <label
              htmlFor="message"
              className="block text-sm text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full p-1 focus:outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
              className="
    inline-flex items-center gap-2 
    rounded-lg font-semibold shadow-md 
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
    bg-gradient-to-r from-blue-700 to-blue-500
    text-white 
    hover:from-[#a699e8] hover:to-[#6d5abf]
    dark:from-[#8d7cd8] dark:to-[#5b47a9]
    px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base mx-auto"
          >
            Send Message
            <i className="uil uil-message"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
