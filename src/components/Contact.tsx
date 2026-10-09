import { useState, type FormEvent } from "react";
import {
  business,
  projectTypes,
  timingOptions,
  type ProjectType,
} from "../data/business";

type FormState = {
  projectType: ProjectType | "";
  city: string;
  details: string;
  timing: string;
  name: string;
  phone: string;
  email: string;
};

const initialState: FormState = {
  projectType: "",
  city: "",
  details: "",
  timing: "",
  name: "",
  phone: "",
  email: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClasses =
  "w-full border border-line bg-paper px-4 py-3.5 text-ink placeholder:text-stone focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const progressSteps = ["Project", "Details", "Contact"] as const;

type ContactProps = {
  presetProjectType: ProjectType | null;
};

export default function Contact({ presetProjectType }: ContactProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [lastPreset, setLastPreset] = useState<ProjectType | null>(null);

  if (presetProjectType && presetProjectType !== lastPreset) {
    setLastPreset(presetProjectType);
    setForm((prev) => ({ ...prev, projectType: presetProjectType }));
    setSubmitted(false);
    setStep(1);
  }

  const update =
    (field: keyof FormState) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const goToStep1 = () => setStep(1);
  const goToStep2 = () => {
    if (!form.projectType) {
      setErrors({ projectType: "Please choose a project type." });
      return;
    }
    setErrors({});
    setStep(2);
  };
  const goToStep3 = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.city.trim()) nextErrors.city = "Please enter a city or ZIP code.";
    if (!form.details.trim())
      nextErrors.details = "Please share a few project details.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setStep(3);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.phone.trim() && !form.email.trim()) {
      nextErrors.phone = "Please enter a phone number or email address.";
      nextErrors.email = "Please enter a phone number or email address.";
    } else if (form.email.trim() && !emailPattern.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm(initialState);
    setErrors({});
    setStep(1);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-ink py-18 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-light">
              LET&rsquo;S GET STARTED
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-snug text-paper sm:text-4xl">
              Your Next Project
              <br />
              Starts Here.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-paper/80">
              Choose your project type and tell us what you have in mind.
              Still exploring your options? That&rsquo;s a good place to
              start.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={business.phoneHref}
                className="inline-flex w-fit items-center gap-2 border border-paper/25 px-5 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:border-paper/50"
              >
                Call Our Team
              </a>
              <a
                href={business.emailHref}
                className="block w-fit items-center gap-2 border border-paper/25 px-5 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:border-paper/50"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="rounded-[20px] bg-paper p-6 sm:p-10">
            {submitted ? (
              <div role="status">
                <h3 className="text-xl font-semibold text-ink">
                  This is a preview form.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  No request was actually sent. To discuss a real project,
                  please reach out directly.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={business.phoneHref}
                    className="inline-flex h-13 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-accent-dark"
                  >
                    Call Our Team
                  </a>
                  <a
                    href={business.emailHref}
                    className="inline-flex h-13 items-center justify-center rounded-lg border border-line px-6 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-paper-dim"
                  >
                    Email Us
                  </a>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 text-sm text-ink-soft underline underline-offset-4 hover:text-ink"
                >
                  Start a new project inquiry
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit}>
                <div aria-live="polite" className="mb-8 flex gap-2">
                  {progressSteps.map((label, i) => {
                    const stepNum = i + 1;
                    const isActive = step === stepNum;
                    const isDone = step > stepNum;
                    return (
                      <div key={label} className="flex-1">
                        <p
                          className={`text-xs font-semibold ${
                            isActive
                              ? "text-accent"
                              : isDone
                                ? "text-ink"
                                : "text-stone"
                          }`}
                        >
                          {stepNum}. {label}
                        </p>
                        <span
                          className={`mt-2 block h-1 rounded-full transition-colors duration-300 ${
                            isActive || isDone ? "bg-accent" : "bg-line"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>

                <p className="mb-6 text-xs text-stone">
                  Preview form. To discuss a project, please call or email.
                </p>

                {step === 1 && (
                  <fieldset>
                    <legend className="text-lg font-semibold text-ink">
                      Your Project
                    </legend>
                    <p className="mt-1 text-sm text-ink-soft">
                      What kind of project are you planning?
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type}
                          className={`relative block cursor-pointer ${
                            type === "Other" ? "col-span-2" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type}
                            checked={form.projectType === type}
                            onChange={() =>
                              setForm((prev) => ({ ...prev, projectType: type }))
                            }
                            className="peer sr-only"
                          />
                          <span className="flex items-center justify-between gap-2 border border-line px-4 py-3.5 text-sm font-medium text-ink-soft transition-colors duration-300 peer-checked:border-accent peer-checked:bg-accent/8 peer-checked:text-accent peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2">
                            {type}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              aria-hidden="true"
                              className="opacity-0 peer-checked:opacity-100"
                            >
                              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.projectType && (
                      <p role="alert" className="mt-3 text-sm text-red-700">
                        {errors.projectType}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={goToStep2}
                      className="mt-7 inline-flex h-13 w-full items-center justify-center rounded-lg bg-accent px-7 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-accent-dark sm:w-auto"
                    >
                      Continue
                    </button>
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset>
                    <legend className="text-lg font-semibold text-ink">
                      The Details
                    </legend>

                    <div className="mt-5 space-y-5">
                      <div>
                        <label htmlFor="city" className="block text-sm text-ink-soft">
                          City or ZIP code
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          autoComplete="address-level2"
                          value={form.city}
                          onChange={update("city")}
                          aria-invalid={Boolean(errors.city)}
                          aria-describedby={errors.city ? "city-error" : undefined}
                          className={`mt-2 ${fieldClasses}`}
                        />
                        {errors.city && (
                          <p id="city-error" role="alert" className="mt-1.5 text-xs text-red-700">
                            {errors.city}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="details" className="block text-sm text-ink-soft">
                          Project description
                        </label>
                        <textarea
                          id="details"
                          name="details"
                          rows={4}
                          value={form.details}
                          onChange={update("details")}
                          aria-invalid={Boolean(errors.details)}
                          aria-describedby={errors.details ? "details-error" : undefined}
                          className={`mt-2 resize-none ${fieldClasses}`}
                        />
                        {errors.details && (
                          <p id="details-error" role="alert" className="mt-1.5 text-xs text-red-700">
                            {errors.details}
                          </p>
                        )}
                      </div>

                      <div>
                        <span className="block text-sm text-ink-soft">
                          Preferred timing (optional)
                        </span>
                        <div className="mt-2 grid grid-cols-2 gap-3">
                          {timingOptions.map((option) => (
                            <label key={option} className="relative block cursor-pointer">
                              <input
                                type="radio"
                                name="timing"
                                value={option}
                                checked={form.timing === option}
                                onChange={() =>
                                  setForm((prev) => ({ ...prev, timing: option }))
                                }
                                className="peer sr-only"
                              />
                              <span className="block border border-line px-3 py-3 text-center text-sm text-ink-soft transition-colors duration-300 peer-checked:border-accent peer-checked:bg-accent/8 peer-checked:text-accent peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2">
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 flex gap-3">
                      <button
                        type="button"
                        onClick={goToStep1}
                        className="inline-flex h-13 items-center justify-center rounded-lg border border-line px-7 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-paper-dim"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={goToStep3}
                        className="inline-flex h-13 flex-1 items-center justify-center rounded-lg bg-accent px-7 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-accent-dark sm:flex-none"
                      >
                        Continue
                      </button>
                    </div>
                  </fieldset>
                )}

                {step === 3 && (
                  <fieldset>
                    <legend className="text-lg font-semibold text-ink">
                      Your Contact Info
                    </legend>

                    <div className="mt-5 space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm text-ink-soft">
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
                          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-700">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="phone" className="block text-sm text-ink-soft">
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
                            <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-700">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm text-ink-soft">
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
                            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-700">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 border-t border-line pt-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-ink">Project summary</p>
                        <div className="flex gap-3 text-xs">
                          <button
                            type="button"
                            onClick={goToStep1}
                            className="text-accent underline underline-offset-4"
                          >
                            Edit project type
                          </button>
                          <button
                            type="button"
                            onClick={goToStep2}
                            className="text-accent underline underline-offset-4"
                          >
                            Edit details
                          </button>
                        </div>
                      </div>
                      <dl className="mt-3 space-y-1.5 text-sm text-ink-soft">
                        <div className="flex gap-2">
                          <dt className="font-medium text-ink">Project type:</dt>
                          <dd>{form.projectType || "Not selected"}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="font-medium text-ink">Location:</dt>
                          <dd>{form.city || "Not provided"}</dd>
                        </div>
                        {form.timing && (
                          <div className="flex gap-2">
                            <dt className="font-medium text-ink">Timing:</dt>
                            <dd>{form.timing}</dd>
                          </div>
                        )}
                        <div>
                          <dt className="font-medium text-ink">Details:</dt>
                          <dd className="mt-0.5">{form.details || "Not provided"}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-7 flex gap-3">
                      <button
                        type="button"
                        onClick={goToStep2}
                        className="inline-flex h-13 items-center justify-center rounded-lg border border-line px-7 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-paper-dim"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="inline-flex h-13 flex-1 items-center justify-center rounded-lg bg-accent px-7 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-accent-dark sm:flex-none"
                      >
                        Send Project Details
                      </button>
                    </div>
                  </fieldset>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
