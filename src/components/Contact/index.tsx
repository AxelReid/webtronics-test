import requests from "@/requests";
import React, { FormEvent, useEffect, useState } from "react";
import Glow from "../Glow";

type EventTargetType = EventTarget &
  Record<"name" | "email" | "phone", { value: string }>;
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [response, setRes] = useState<{ fail: boolean; msg: null | string }>({
    fail: false,
    msg: null,
  });

  useEffect(() => {
    if (response.msg) {
      const wait = setTimeout(() => setRes({ fail: false, msg: null }), 2500);
      return () => clearTimeout(wait);
    }
  }, [response]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as EventTargetType;

    const body = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
    };

    setLoading(true);
    const res = await requests.feedback.create(body);
    const err = res.data?.error;
    setRes({ fail: !!err, msg: err || "Successfully sent!" });
    setLoading(false);
  };
  return (
    <section
      id="contact"
      className="b-linear-blue container relative mt-10 mb-20 flex
      flex-col items-center justify-center rounded-[20px] p-14 backdrop-blur-sm"
    >
      <h1 className="title">Contact us</h1>
      <p className="mt-4 mb-6 text-center">
        Do you have any kind of help please contact with us.
      </p>
      <form
        onSubmit={submit}
        className="flex w-full max-w-[493px] flex-col space-y-4"
      >
        <input required type="text" name="name" placeholder="Name" />
        <input required type="text" name="phone" placeholder="Phone" />
        <input required type="email" name="email" placeholder="E-mail" />
        <button className="relative !mt-6" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
        {response.msg && (
          <p
            className={`text-center ${
              response.fail ? "text-red-500" : "text-green-500"
            }`}
          >
            {response.msg}
          </p>
        )}
      </form>
      <Glow className="-top-[85%] -right-[42%]" />
    </section>
  );
};

export default Contact;
