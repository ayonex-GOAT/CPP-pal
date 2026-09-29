"use client";

import { motion } from "motion/react";
import { CodeBlock } from "@astryxdesign/core/CodeBlock";
import { Card } from "@astryxdesign/core/Card";
import { Badge } from "@astryxdesign/core/Badge";
import { oneDarkPro } from "@astryxdesign/core/theme/syntax";

const sampleCode = `#include <iostream>

int main() {
    std::cout << "Hello, C++!" << '\\n';
    return 0;
}`;

function cppTokenizer(code: string) {
  const tokens: { type: string; start: number; end: number }[] = [];
  const rules = [
    { type: "comment", regex: /\/\/[^\n]*/g },
    { type: "keyword", regex: /\b(#include|int|return|using|namespace|void|char|double|float|bool|if|else|for|while)\b/g },
    { type: "string", regex: /"(?:[^"\\]|\\.)*"|'<[^>]+>'|'\\?.?'/g },
    { type: "type", regex: /<[a-zA-Z0-9_]+>|\b(std::cout|std::cin|std::endl|std|cout|cin|endl)\b/g },
    { type: "function", regex: /\b[a-zA-Z_]\w*(?=\s*\()/g },
    { type: "number", regex: /\b\d+\b/g },
    { type: "operator", regex: /<<|>>|<=|>=|==|!=|=|\+|-|\*|\//g }
  ];

  for (const { type, regex } of rules) {
    let match;
    regex.lastIndex = 0;
    while ((match = regex.exec(code)) !== null) {
      tokens.push({ type, start: match.index, end: match.index + match[0].length });
    }
  }

  return tokens.sort((a, b) => a.start - b.start);
}

const milestones = [
  {
    step: "MILESTONE 01",
    title: "Basics",
    tag: "Foundation",
    text: "Master fundamental syntax, variable declarations, primitive data types, and standard stream I/O using iostream.",
  },
  {
    step: "MILESTONE 02",
    title: "Advanced",
    tag: "Core Systems",
    text: "Dive into pointers, dynamic memory allocation, object-oriented programming, inheritance, and templates.",
  },
  {
    step: "MILESTONE 03",
    title: "Libraries",
    tag: "STL Standard",
    text: "Unlock the Standard Template Library (STL) including vectors, maps, iterators, and high-performance algorithms.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen bg-[#585562]">
        <div className="pointer-events-none absolute inset-0 grid-paper opacity-70" />
        <div className="pointer-events-none absolute -right-24 top-28 h-80 w-80 rounded-full bg-[#DCDDCC]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#3f3c49]/50 blur-3xl" />

        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
          <a className="flex items-center gap-3 font-extrabold tracking-tight" href="#top">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#3f3c49] text-lg text-white shadow-lg shadow-[#3f3c49]/30">C++</span>
            <span className="text-xl text-[#DCDDCC]">CPP<span className="text-white">-</span>Pal</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-bold text-slate-300 md:flex">
            <a className="hover:text-white" href="#milestones">Milestones</a>
            <a className="hover:text-white" href="#how-it-works">How it works</a>
            <a className="rounded-xl bg-[#DCDDCC] px-5 py-3 text-[#3f3c49] shadow-md shadow-[#3f3c49]/30 transition hover:-translate-y-0.5 hover:bg-white" href="#milestones">Start learning</a>
          </div>
          <a className="rounded-xl bg-[#DCDDCC] px-4 py-2.5 text-sm font-bold text-[#3f3c49] md:hidden" href="#milestones">Start</a>
        </nav>

        <div id="top" className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="hero-copy max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCDDCC]/40 bg-white/10 px-4 py-2 text-sm font-bold text-[#DCDDCC]">
              <span className="h-2 w-2 rounded-full bg-[#DCDDCC]" /> Built for your very first line of C++
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.04] tracking-[-.055em] text-[#DCDDCC] sm:text-6xl lg:text-7xl">
              Learn C++ by <span className="relative whitespace-nowrap text-white">writing it.<svg className="absolute -bottom-3 left-0 h-3 w-full text-white" viewBox="0 0 200 12" fill="none"><motion.path d="M3 9C18 6 29 8 43 6C64 2 77 5 94 4C117 3 132 2 150 5C168 8 181 4 197 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.99, delay: 0.45, ease: "easeInOut" }} /></svg></span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">No jargon dumps. No scary blank screen. Tiny lessons, instant feedback, and a real C++ editor by your side.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a className="rounded-2xl bg-[#DCDDCC] px-6 py-4 font-extrabold text-[#3f3c49] shadow-lg shadow-[#3f3c49]/30 transition hover:-translate-y-1 hover:bg-white" href="#milestones">Begin Milestone 1 <span className="ml-2">→</span></a>
              <span className="text-sm font-semibold text-slate-300">Free to explore · no sign-up needed</span>
            </div>
            <div className="mt-12 flex items-center gap-4 text-sm font-bold text-slate-300">
              <div className="flex -space-x-2"><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#585562] bg-[#DCDDCC] text-xs text-[#3f3c49]">C++</span><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#585562] bg-[#777380] text-xs text-white">STD</span><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#585562] bg-white text-xs text-[#3f3c49]">23</span></div>
              Made for curious beginners
            </div>
          </div>

          <div className="hero-editor relative mx-auto w-full max-w-[510px] lg:mx-0">
            <div className="absolute -inset-4 -rotate-2 rounded-[2rem] border-2 border-dashed border-[#DCDDCC]/50" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#1e1e24] p-3 shadow-card">
              <CodeBlock
                code={sampleCode}
                language="cpp"
                title="lesson-01.cpp"
                hasLineNumbers
                hasCopyButton
                hasLanguageLabel
                width="100%"
                syntaxTheme={oneDarkPro}
                tokenizer={cppTokenizer}
                highlightMode="spans"
              />
              <div className="p-3"><div className="rounded-xl bg-[#e8f8ef] px-4 py-3 text-sm font-bold text-[#178051]"><span className="mr-2">✓</span> Nice! Your first program is ready.</div></div>
            </div>
            <div className="float-card absolute -bottom-7 -left-5 rounded-2xl bg-[#DCDDCC] px-4 py-3 shadow-card"><span className="text-sm font-extrabold text-[#3f3c49]">You’ve got this!</span></div>
          </div>
        </div>
      </section>

      <section id="milestones" className="bg-[#777380] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[.18em] text-[#DCDDCC]">Learning Roadmap</p>
            <h2 className="text-4xl font-extrabold tracking-[-.04em] text-white">Three Core Milestones.</h2>
            <p className="mt-4 leading-7 text-[#DCDDCC]">Track your progression through essential C++ milestones — building a rock-solid foundation step by step.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {milestones.map((m) => (
              <Card
                key={m.step}
                className="lesson-card group rounded-3xl border border-[#DCDDCC]/40 bg-[#DCDDCC] p-7 transition hover:-translate-y-2 hover:border-white hover:shadow-card"
              >
                <div className="flex items-start justify-between">
                  <span className="mono text-xs font-extrabold tracking-wider text-[#777380]">{m.step}</span>
                  <Badge variant="blue" label={m.tag} />
                </div>
                <h3 className="mt-7 text-2xl font-extrabold text-[#3f3c49]">
                  {m.title}
                </h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-[#585562]">{m.text}</p>
                <a href={`#${m.title.toLowerCase()}`} className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#3f3c49] hover:text-[#2563eb]">
                  Explore Milestone <span className="transition group-hover:translate-x-1">→</span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#585562] px-6 py-20 text-white lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-extrabold uppercase tracking-[.18em] text-[#DCDDCC]">No pretend coding</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-.04em]">Learn it. Type it. Run it.</h2></div><div className="grid gap-5 sm:grid-cols-3">{[["1", "Understand", "A friendly explanation, one idea at a time."], ["2", "Try it", "Change real code in the editor."], ["3", "Check it", "Short quizzes make it stick."]].map(([n,t,d]) => <div key={n} className="rounded-2xl border border-white/20 bg-white/10 p-5"><span className="mono text-[#DCDDCC]">0{n}</span><h3 className="mt-5 font-extrabold">{t}</h3><p className="mt-2 text-sm leading-6 text-[#DCDDCC]">{d}</p></div>)}</div></div></section>
      <footer className="bg-[#3f3c49] px-6 py-7 text-center text-sm text-[#DCDDCC]/70">CPP-Pal · a calm place to begin your C++ journey</footer>
    </main>
  );
}
