import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
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
      className="overflow-hidden container px-4 py-10 lg:px-0 mx-auto"
      data-aos="fade-up"
    >
      {/* Title + Subtitle */}
      <div className="mb-12 text-center md:mb-20">
        <h2 className="section-title gradient-text">{t("contact.title")}</h2>
        <p className="section-subtitle">{t("contact.subtitle")}</p>
      </div>

      {/* Grid Container */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex items-start gap-3">
            <i className="uil uil-phone text-2xl text-indigo-600"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {t("contact.phone.title")}
              </h3>
              <p className="text-xs text-gray-500">+34 644 701 638</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="uil uil-envelope text-2xl text-indigo-600"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {t("contact.email.title")}
              </h3>
              <p className="text-xs text-gray-500">
                ghasemi.farzaneh89@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="uil uil-map-marker text-2xl text-indigo-600"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {t("contact.location.title")}
              </h3>
              <p className="text-xs text-gray-500">Spain</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
          {[
            {
              id: "name",
              label: t("contact.form.name.label"),
              type: "text",
              validation: {
                required: t("contact.form.name.required"),
                minLength: { value: 3, message: t("contact.form.name.min") },
                maxLength: { value: 100, message: t("contact.form.name.max") },
              },
            },
            {
              id: "email",
              label: t("contact.form.email.label"),
              type: "email",
              validation: {
                required: t("contact.form.email.required"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("contact.form.email.invalid"),
                },
              },
            },
            {
              id: "subject",
              label: t("contact.form.subject.label"),
              type: "text",
              validation: {
                required: t("contact.form.subject.required"),
                minLength: { value: 5, message: t("contact.form.subject.min") },
                maxLength: {
                  value: 100,
                  message: t("contact.form.subject.max"),
                },
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
                <span className="text-xs text-red-500">
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
              {t("contact.form.message.label")}
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
            {t("contact.form.submit")}
            <i className="uil uil-message"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
