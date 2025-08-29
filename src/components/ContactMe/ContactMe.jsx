import { useForm } from "react-hook-form";
import swal from "sweetalert";


export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
     swal({
       title: "Message Sent!",
       text: "Thank you for contacting me. I will get back to you soon.",
       icon: "success",
       button: "OK",
     });
    reset();
  };

  return (
    <section
      id="contact"
      className="overflow-hidden px-4 py-10 lg:px-0"
      data-aos="fade-up"
    >
      {/* Title + Subtitle */}
      <div className="mb-12 text-center md:mb-20">
        <h2 className="mb-2 text-2xl font-bold text-zinc-800 md:mb-4 md:text-4xl">
          Contact Me
        </h2>
        <p className="text-xs text-zinc-600 md:text-base">Get in touch</p>
      </div>

      {/* Grid Container */}
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-12 px-1 xs:grid-cols-12">
        {/* Contact Information */}
        <div className="space-y-8 xs:col-span-6 md:col-span-4">
          <div className="flex items-start gap-3">
            <i className="uil uil-phone text-2xl text-indigo-600"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Call Me</h3>
              <p className="text-xs text-gray-500">+34 644 701 638</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="uil uil-envelope text-2xl text-indigo-600"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="text-xs text-gray-500">
                ghasemi.farzaneh89@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="uil uil-map-marker text-2xl text-indigo-600"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Location</h3>
              <p className="text-xs text-gray-500">Spain</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 xs:col-span-6 md:col-span-8"
        >
          {[
            {
              id: "name",
              label: "Name",
              type: "text",
              validation: {
                required: "Name is required",
                minLength: { value: 3, message: "At least 3 characters" },
                maxLength: { value: 100, message: "Max 100 characters" },
              },
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              validation: {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              },
            },
            {
              id: "subject",
              label: "Subject",
              type: "text",
              validation: {
                required: "Subject is required",
                minLength: { value: 5, message: "At least 5 characters" },
                maxLength: { value: 100, message: "Max 100 characters" },
              },
            },
          ].map(({ id, label, type, validation }) => (
            <div key={id}>
              <div className="rounded-lg bg-zinc-200 px-4 pt-3 pb-1">
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <input
                key={id}
                  type={type}
                  id={id}
                  {...register(id, validation)}
                  className="w-full border-none bg-transparent p-1 focus:outline-none"
                />
              </div>
              {/* Show validation error */}
              {errors[id] && (
                <span className="text-xs text-red-500" >
                  {errors[id].message}
                </span>
              )}
            </div>
          ))}

          <div className="rounded-lg bg-zinc-200 px-4 pt-3 pb-1">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              {...register("message", {
                required: "Message is required",
                maxLength: { value: 500, message: "Max 500 characters" },
                minLength: { value: 10, message: "At least 10 characters" },
              })}
              rows={6}
              className="w-full resize-none border-none bg-transparent p-1 focus:outline-none"
            ></textarea>
          </div>
          {errors.message && (
            <span className="text-xs text-red-500">
              {errors.message.message}
            </span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mx-auto inline-flex items-center gap-2 rounded-lg 
                       bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3 
                       text-sm font-semibold text-white shadow-md transition-all 
                       duration-300 hover:from-[#a699e8] hover:to-[#6d5abf] 
                       focus:outline-none focus:ring-2 focus:ring-purple-400 
                       focus:ring-offset-2 sm:text-base"
          >
            Send Message
            <i className="uil uil-message"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
