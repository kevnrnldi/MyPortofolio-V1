"use client";

import React from "react";
import { FaBookOpen, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const tags = [
  "EfficientNetV2-S",
  "Xception",
  "Spatial Rich Models",
  "TensorFlow",
];

const stats = [
  { label: "Peak Accuracy", value: "99.7%", accent: true },
  { label: "Base Model", value: "EfficientNetV2-S" },
  { label: "Publication", value: "Vol. 10 Issue 2" },
];

export function RecentPublications() {
  return (
    <section className="w-full py-20" id="publications">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Research &amp; <span className="text-zinc-400">Publications</span>
        </h1>
      </div>

      <div className="mx-auto max-w-4xl px-4">
        <div className="group relative rounded-3xl bg-linear-to-b from-zinc-500/50 via-zinc-800/60 to-zinc-700/40 p-[2px] transition duration-500 hover:from-zinc-300/70 hover:to-zinc-500/50">
          <div className="relative overflow-hidden rounded-[22px] bg-[#0a0a0b] p-6 md:p-10">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-zinc-300/70 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-zinc-300/10 blur-3xl transition duration-500 group-hover:bg-zinc-300/20" />

            <div className="relative mb-6 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                <FaCheckCircle size={12} /> Accepted • February 2026
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-400">
                SINKRON · Jurnal &amp; Penelitian Teknik Informatika
              </span>
            </div>

            <h3 className="relative mb-4 text-xl font-bold leading-snug tracking-tight text-white md:text-3xl">
              Application of Two-Stream Late Fusion on EfficientNetV2 based on
              Transfer Learning to Classify AI-Generated Paintings
            </h3>

            <p className="relative mb-5 text-sm leading-relaxed text-zinc-300 md:text-base">
              Mengembangkan arsitektur Two-Stream Late Fusion yang
              mengintegrasikan ekstraksi fitur visual dari EfficientNetV2-S
              dengan analisis artefak noise menggunakan Xception dan Spatial
              Rich Models untuk mendeteksi karya seni buatan AI secara akurat.
            </p>

            <div className="relative mb-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative mb-8 grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((s) => (
                <div key={s.label} className="p-4 md:p-5">
                  <span className="block text-[11px] uppercase tracking-widest text-zinc-500">
                    {s.label}
                  </span>
                  <span
                    className={
                      s.accent
                        ? "mt-1 block text-2xl font-bold text-emerald-400"
                        : "mt-1 block text-sm font-semibold text-white md:text-base"
                    }
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative flex justify-end">
              <a
                href="https://jurnal.polgan.ac.id/index.php/sinkron/article/view/15814"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-black shadow-md transition hover:bg-white active:scale-95"
              >
                <FaBookOpen size={14} />
                Read Journal
                <FaExternalLinkAlt
                  size={11}
                  className="transition group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
