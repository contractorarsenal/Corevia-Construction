import { useState, type FormEvent } from "react";
import { business, projectTypes } from "../data/business";

type FormState = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  details: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (field: keyof FormState) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter a phone number.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter an email address.";
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.projectType) nextErrors.projectType = "Please select a project type.";
    if (!form.details.trim()) nextErrors.details = "Please share a few project details.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const fieldClasses =
    "w-full border border-paper/25 bg-paper/8 px-4 py-3 text-paper placeholder:text-paper/45 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

  return (
    <section id="contact" className="scroll-mt-18 bg-ink py-18 text-paper sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold leading-snug text-paper sm:text-4xl">
              Tell Us About Your Project
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-paper/80">
              Located in King or Pierce County? Share a few details about
              the work you have in mind.
            </p>

            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="text-paper/55">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={business.phoneHref}
                    className="text-base font-medium text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-paper"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-paper/55">Email</dt>
                <dd className="mt-1">
                  <a
                    href={business.emailHref}
                    className="text-base font-medium text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-paper"
                  >
                    {business.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-paper/55">Based in</dt>
                <dd className="mt-1 text-base text-paper">
                  Tacoma, Washington
                </dd>
              </div>
              <div>
                <dt className="text-paper/55">Serving</dt>
                <dd className="mt-1 text-base text-paper">
                  King County and Pierce County
                </dd>
              </div>
            </dl>
          </div>

          <div>
            {submitted ? (
              <div
                role="status"
                className="border border-paper/20 bg-paper/5 p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold text-paper">
                  This is a demo form.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/80">
                  No request was actually sent. To discuss a real project,
                  please reach out directly:
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <a
                    href={business.phoneHref}
                    className="block w-fit text-paper underline decoration-paper/30 underline-offset-4"
                  >
                    Call Now — {business.phone}
                  </a>
                  <a
                    href={business.emailHref}
                    className="block w-fit text-paper underline decoration-paper/30 underline-offset-4"
                  >
                    Email Us — {business.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialState);
                  }}
                  className="mt-6 text-sm text-paper/70 underline underline-offset-4 hover:text-paper"
                >
                  Edit and fill out again
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs text-paper/60">
                  Demo form. Please call or email to discuss your project.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm text-paper/80">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`mt-2 ${fieldClasses}`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-amber-300">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-paper/80">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`mt-2 ${fieldClasses}`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-amber-300">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-paper/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`mt-2 ${fieldClasses}`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-amber-300">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm text-paper/80">
                    Project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={update("projectType")}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={
                      errors.projectType ? "projectType-error" : undefined
                    }
                    className={`mt-2 ${fieldClasses} bg-ink`}
                  >
                    <option value="" disabled className="bg-paper text-ink">
                      Select a project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-paper text-ink">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" className="mt-1.5 text-xs text-amber-300">
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm text-paper/80">
                    Project details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={form.details}
                    onChange={update("details")}
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={errors.details ? "details-error" : undefined}
                    className={`mt-2 ${fieldClasses} resize-none`}
                  />
                  {errors.details && (
                    <p id="details-error" className="mt-1.5 text-xs text-amber-300">
                      {errors.details}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark sm:w-auto"
                >
                  Send Project Details
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
