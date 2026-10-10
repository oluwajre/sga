import { EmailIcon, PhoneIcon, WhatsAppIcon } from "../common/Icons";

const phoneNumbers = [
  "+234 704 408 6794",
  "+234 913 781 9540",
  "+234 701 929 8464",
];

const whatsappNumbers = [
  {
    display: "+234 704 408 6794",
    number: "2347044086794",
  },
  {
    display: "+234 913 781 9540",
    number: "2349137819540",
  },
  {
    display: "+234 701 929 8464",
    number: "2347019298464",
  },
];

export default function ContactOptions() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-2xl">
          <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
            Reach Us Directly
          </p>

          <h2 className="mt-3 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Choose the way that works best for you.
          </h2>

          <p className="mt-4 font-sga-body text-base leading-relaxed text-slate-600">
            Prefer a quick conversation, WhatsApp message, or email? You can
            reach the School Growth Academy through any of these channels.
          </p>
        </div>

        {/* Contact options */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Call */}
          <div className="rounded-sga border border-slate-200 bg-sga-off-white p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sga-navy text-white">
              <PhoneIcon />
            </div>

            <h3 className="mt-6 font-sga-heading text-xl font-bold text-sga-navy">
              Call Us
            </h3>

            <p className="mt-2 font-sga-body text-sm leading-relaxed text-slate-600">
              Speak directly with the SGA team.
            </p>

            <div className="mt-5 space-y-3">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block font-sga-body text-sm font-semibold text-sga-navy transition-colors hover:text-sga-emerald"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <div className="rounded-sga border border-slate-200 bg-sga-off-white p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sga-emerald text-white">
              <WhatsAppIcon />
            </div>

            <h3 className="mt-6 font-sga-heading text-xl font-bold text-sga-navy">
              WhatsApp
            </h3>

            <p className="mt-2 font-sga-body text-sm leading-relaxed text-slate-600">
              Send us a message/call directly on WhatsApp.
            </p>

            <div className="mt-5 space-y-3">
              {whatsappNumbers.map((item) => (
                <a
                  key={item.number}
                  href={`https://wa.me/${item.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-sga-body text-sm font-semibold text-sga-navy transition-colors hover:text-sga-emerald"
                >
                  {item.display}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="rounded-sga border border-slate-200 bg-sga-off-white p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sga-amber text-sga-navy">
              <EmailIcon />
            </div>

            <h3 className="mt-6 font-sga-heading text-xl font-bold text-sga-navy">
              Email Us
            </h3>

            <p className="mt-2 font-sga-body text-sm leading-relaxed text-slate-600">
              Send an enquiry and we&apos;ll get back to you.
            </p>

            <div className="mt-5">
              <a
                href="mailto:support@novance.com.ng"
                className="break-all font-sga-body text-sm font-semibold text-sga-navy transition-colors hover:text-sga-emerald"
              >
                support@novance.com.ng
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}