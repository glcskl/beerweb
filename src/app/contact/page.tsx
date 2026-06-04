"use client";

import Link from "next/link";

const contactItems = [
  {
    label: "Пивоварня",
    value: (
      <span>
        г. Псков
        <br />
        ул. Хмельная, 7
      </span>
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
        <path d="M12 22s-8-7.5-8-13a8 8 0 1 1 16 0c0 5.5-8 13-8 13z" />
        <circle cx="12" cy="9" r="3" />
      </svg>
    ),
  },
  {
    label: "Телефон",
    value: (
      <a
        href="tel:+78112123456"
        className="font-semibold text-[#E5A04A] transition-colors hover:text-[#F5C97D]"
      >
        +7 (8112) 12-34-56
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
    label: "E-mail",
    value: (
      <a
        href="mailto:info@breezinghead.ru"
        className="font-semibold text-[#E5A04A] transition-colors hover:text-[#F5C97D]"
      >
        info@breezinghead.ru
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
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Время работы",
    value: (
      <span>
        Пн – Пт: 10:00 – 22:00
        <br />
        Сб – Вс: 12:00 – 02:00
      </span>
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
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

        <div className="my-2 h-[2px] w-32 bg-gradient-to-r from-transparent via-[#F5C97D] to-transparent" />

        <div className="grid w-full gap-4 md:grid-cols-2">
          {contactItems.map((item) => (
            <ContactItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>

        <Link
          href="/"
          className="mt-6 inline-flex w-full max-w-md items-center justify-center rounded-xl bg-[#E5A04A] px-5 py-4 text-center text-lg font-bold uppercase tracking-wide text-[#1A0F08] transition-colors duration-150 hover:bg-[#F5C97D] md:text-xl"
        >
          Закрыть
        </Link>
      </div>
    </main>
  );
}
