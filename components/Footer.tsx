"use client";

import React, { useRef, useState } from "react";
import { socialMedia } from "@/data";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeams";
import DottedWorldMap from "./ui/DottedMap";

const field =
  "w-full rounded-md bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:ring-1 focus:ring-purple";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = "idle" | "sending" | "sent" | "error";

const Footer = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const submittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;

    // validasi format email sebelum mengirim apa pun
    if (!EMAIL_RE.test((data.email ?? "").trim())) {
      setStatus("error");
      setErrorMsg("Invalid email format. Please check the address.");
      return;
    }

    submittingRef.current = true;
    setStatus("sending");
    setErrorMsg("");

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch("https://formspree.io/f/xjygzozv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      if (!res.ok) {
        // gagal: tampilkan pesan lalu berhenti, tanpa kirim ulang
        let message = "Failed to send the message. Please try again later.";
        try {
          const body = await res.json();
          const emailErr = body?.errors?.find(
            (er: { field?: string }) => er.field === "email",
          );
          if (emailErr) message = "Email is invalid or cannot be accepted.";
          else if (body?.errors?.[0]?.message) message = body.errors[0].message;
        } catch {
          /* respons bukan JSON */
        }
        setStatus("error");
        setErrorMsg(message);
        return;
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof DOMException && err.name === "AbortError"
          ? "The request took too long. Check your connection and try again."
          : "Cannot reach the server. Check your internet connection.",
      );
    } finally {
      clearTimeout(timer);
      submittingRef.current = false;
    }
  };

  return (
    <footer id="contact" className="mt-[-5rem] w-full pb-24 md:pb-0">
      <BackgroundBeamsWithCollision className="h-auto min-h-0 bg-none bg-transparent from-transparent to-transparent md:min-h-[45rem] dark:from-transparent dark:to-transparent">
        <div className="flex h-auto min-h-0 w-full flex-col justify-between px-4 pb-10 pt-16 md:min-h-[45rem] md:pt-20">
          {/* bagian atas: Contact */}
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-500/30 bg-white/[0.06] text-xl text-blue-500 shadow-[0_2px_0_0_rgba(59,130,246,0.6)]">
                <FaEnvelope />
              </div>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Contact <span className="text-purple">me</span>
              </h2>
              <p className="mt-6 max-w-md text-neutral-400">
                Have a project, an idea, or an opportunity? Send me a message
                and I&apos;ll get back to you as soon as I can.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-300">
                <a
                  href="mailto:mkevinrinaldi@gmail.com"
                  className="hover:text-white"
                >
                  mkevinrinaldi@gmail.com
                </a>
                <span className="text-neutral-600">•</span>
                <a
                  href="https://github.com/kevnrnldi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <FaGithub /> GitHub
                </a>
                <span className="text-neutral-600">•</span>
                <a
                  href="https://linkedin.com/in/mkevinrinaldi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>

              <DottedWorldMap />
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-zinc-500/30  bg-white/[0.04] p-6 md:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-neutral-200"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-neutral-200"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-neutral-200"
                  >
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    className={field}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-neutral-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Type your message here"
                    className={field}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 rounded-md border border-zinc-500/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/20 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
              {status === "sent" && (
                <p className="mt-4 text-sm text-emerald-400">
                  Message sent. Thank you!
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="mt-4 text-sm text-red-400">
                  {errorMsg}
                </p>
              )}
            </form>
          </div>

          {/* bagian bawah: copyright dan ikon sosial */}
          <div className="mt-10 flex w-full flex-col items-center justify-between gap-3 md:mt-16 md:flex-row">
            <p className="text-center text-sm font-light md:text-base md:font-normal">
              Copyright © 2026 Kevin Rinaldi
            </p>
            <div className="flex items-center gap-4 md:gap-3">
              {socialMedia.map((profile) => (
                <div
                  key={profile.id}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 backdrop-blur-lg"
                >
                  <img
                    src={profile.img}
                    alt={String(profile.id)}
                    width={20}
                    height={20}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </footer>
  );
};

export default Footer;
