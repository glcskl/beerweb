"use client";

import Link from "next/link";

const contactItems = [
  {
    label: "Telegram",
    value: (
      <a
        href="https://t.me/PozitiveVasilev"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#E5A04A] transition-colors hover:text-[#F5C97D]"
      >
        @PozitiveVasilev
      </a>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 shrink-0"
      >
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
      </svg>
    ),
  },
  {
    label: "Телефон",
    value: (
      <a
        href="tel:+79857643822"
        className="font-semibold text-[#E5A04A] transition-colors hover:text-[#F5C97D]"
      >
        +7 (985) 764-38-22
      </a>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6 shrink-0"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Untappd",
    value: (
      <a
        href="https://untappd.com/Breezinghead"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#E5A04A] transition-colors hover:text-[#F5C97D]"
      >
        untappd.com/Breezinghead
      </a>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6 shrink-0"
      >
        <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
        <path d="M9 12v6" />
        <path d="M13 12v6" />
        <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.92 3 .5 1.43-.42 1.5-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.28 0-.54-.09-.5-.5" />
        <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
      </svg>
    ),
  },
];

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-[#E5A04A]/20 bg-[#2A1810]/40 p-4 transition-colors duration-200 hover:border-[#E5A04A]/50">
      <div className="mt-0.5 text-[#E5A04A]">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C97D]">
          {label}
        </span>
        <span className="text-base text-[#F5E8D0]">{value}</span>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#1A0F08] text-[#F5E8D0]">
      <div className="pointer-events-none absolute inset-0 bg-[#0F0805] opacity-50" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 opacity-10">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full text-[#E5A04A]"
        >
          <path
            id="wavy-path"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            d="M 0,100 Q 25,80 50,100 T 100,100 T 150,100 T 200,100 T 250,100 T 300,100 T 350,100 T 400,100"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            d="M 0,100 Q 25,120 50,100 T 100,100 T 150,100 T 200,100 T 250,100 T 300,100 T 350,100 T 400,100"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 py-16">
        <h1 className="text-balance text-center text-4xl font-black uppercase tracking-wide text-[#E5A04A] md:text-5xl">
          Свяжитесь с нами
        </h1>

        <p className="max-w-2xl text-balance text-center text-base leading-relaxed text-[#F5E8D0] md:text-lg">
          Мы забрались в самую глубь Псковской области, поближе к чистейшей
          воде и диким садам, чтобы делать для вас вкуснейшее{" "}
          <span className="font-bold text-[#E5A04A]">пиво и сидр</span>.
        </p>

        <div className="my-2 h-[2px] w-32 bg-gradient-to-r from-transparent via-[#F5C97D] to-transparent" />

        <div className="grid w-full gap-4 md:grid-cols-3">
          {contactItems.map((item) => (
            <ContactItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>

        <p className="mt-2 text-center text-sm italic text-[#F5C97D]/80 md:text-base">
          пиши конечно только хорошее
        </p>

        <Link
          href="/"
          className="mt-4 inline-flex w-full max-w-md items-center justify-center rounded-xl bg-[#E5A04A] px-5 py-4 text-center text-lg font-bold uppercase tracking-wide text-[#1A0F08] transition-colors duration-150 hover:bg-[#F5C97D] md:text-xl"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
