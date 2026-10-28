import React from "react";
import Header from "../../../common/parts/Header";
import Footer from "../../../common/parts/Footer";
import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlineSparkles } from "react-icons/hi2";
import { AdminEmail, SaraAILink } from "../../../common/links";

function Contact() {
  const info = [
    { icon: <HiOutlineEnvelope />, label: "Email", value: AdminEmail, href: `mailto:${AdminEmail}` },
    { icon: <HiOutlineMapPin />, label: "Location", value: "Thanjavur, Tamil Nadu, India" },
    { icon: <HiOutlineSparkles />, label: "Need quick help?", value: "Ask Sara AI", href: SaraAILink },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-weave-soft">
      <Header />
      <section id="contact" className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 md:px-8">
        <div className="ww-blob -left-20 top-20 h-72 w-72 bg-brand-400 opacity-30" />
        <div className="relative mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let's <span className="text-weave">talk</span>
          </h1>
          <p className="mt-3 text-gray-600">
            Questions, feedback or partnership ideas — the WebWeave team reads every message.
          </p>
        </div>

        <div className="relative grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-3">
              {info.map((i) => {
                const body = (
                  <>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-weave text-xl text-white">{i.icon}</div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">{i.label}</div>
                    <div className="mt-1 break-all text-sm font-medium text-gray-900">{i.value}</div>
                  </>
                );
                return i.href ? (
                  <a key={i.label} href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:shadow-glow">
                    {body}
                  </a>
                ) : (
                  <div key={i.label} className="rounded-2xl glass p-5">{body}</div>
                );
              })}
            </div>
            <div className="min-h-[280px] flex-grow overflow-hidden rounded-3xl glass p-2">
              <iframe
                title="WebWeave location map"
                className="h-full min-h-[280px] w-full rounded-2xl"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125432.38285197991!2d79.1314494!3d10.7528199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89cea453039%3A0xe113da9b1f632be6!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699945692037!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>

          <form
            action="https://formsubmit.co/0b4ee2cd42a0e78f61eb1715e33bb409"
            method="POST"
            className="flex flex-col gap-4 rounded-3xl glass p-6 sm:p-8 lg:col-span-2"
          >
            <h2 className="text-xl font-semibold text-gray-900">Send us a message</h2>
            <label className="text-sm font-medium text-gray-700">
              Name
              <input required type="text" name="name" className="ww-input mt-1" />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Email
              <input required type="email" name="email" className="ww-input mt-1" />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Message
              <textarea required name="message" rows={5} className="ww-input mt-1 resize-none" />
            </label>
            <button className="btn-weave mt-2 w-full">Send message</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
