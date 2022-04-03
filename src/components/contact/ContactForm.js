import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjwawrk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row">
        <input
          className="mr-3 w-full rounded border px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
          placeholder="Name"
          type="text"
          id="name"
          name="name"
        />
        <input
          className="mt-6 w-full rounded border px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
          placeholder="Email"
          type="email"
          id="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <textarea
        className="mt-6 w-full rounded border px-4 py-3 font-body text-black md:mt-8"
        placeholder="Message"
        id="message"
        cols="30"
        rows="10"
        name="message"
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
      >
        Send
        <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
      </button>
    </form>
  );
}

export default ContactForm;
