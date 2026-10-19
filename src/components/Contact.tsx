import React, { useState } from 'react';
import { Mail, Send, Check, Copy, ArrowUpRight, AlertCircle, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const PROJECT_TYPES = [
  'Web Design & Development',
  'AI-Powered Solutions',
  'Motion Graphics & Video',
  'Creative Content & Branding',
  'Consulting & Other',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: 'Web Design & Development',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [copied, setCopied] = useState(false);

  const contactEmail = 'contact.maruf27@gmail.com';

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or organization.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a brief description of your project or idea.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a little more detail (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailtoLink = (data: FormData) => {
    const subject = encodeURIComponent(`Project Inquiry: ${data.projectType} — ${data.name}`);
    const body = encodeURIComponent(
      `Hello Maruf Scale Labs,\n\nMy name is ${data.name} (${data.email}).\n\nProject Scope:\n${data.projectType}\n\nProject Details:\n${data.message}\n\nBest regards,\n${data.name}`
    );
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#E53935]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#666666] font-semibold">
              HAVE A PROJECT IN MIND?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.15] text-balance">
            Let’s make something meaningful.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666]">
            Have an idea, a project, or a collaboration in mind? Let’s talk about how we can bring it to life.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact & Info Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#F5F5F5] border border-[#E5E5E5] space-y-6">
              <h3 className="text-xl font-bold text-[#111111] font-mono tracking-tight">
                Direct Communication
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Whether you need a full digital redesign, an interactive AI demo, or tailored brand visuals, we’re ready to discuss your goals.
              </p>

              {/* Email Card */}
              <div className="pt-4 border-t border-[#E5E5E5] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#666666]">
                  Studio Email
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 border border-[#E5E5E5]">
                  <a
                    href={`mailto:${contactEmail}`}
                    data-cursor="hover"
                    className="font-mono text-sm font-semibold text-[#111111] hover:text-[#E53935] transition-colors break-all"
                  >
                    {contactEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    data-cursor="hover"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F5] hover:bg-[#111111] hover:text-white text-xs font-mono transition-colors shrink-0 cursor-pointer"
                    aria-label="Copy studio email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Availability Note */}
              <div className="pt-2 text-xs text-[#666666] space-y-1">
                <div className="flex items-center gap-2 text-[#111111] font-medium">
                  <span className="w-2 h-2 bg-[#E53935]" />
                  <span>Response Timeframe</span>
                </div>
                <p>Typically responding within 24 to 48 business hours.</p>
              </div>

              {/* Verified Social Handles (Placeholder indicators) */}
              <div className="pt-4 border-t border-[#E5E5E5]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-3">
                  Connect & Social Channels
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {['GitHub', 'LinkedIn', 'Twitter / X', 'Dribbble'].map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-white border border-[#E5E5E5] text-[#666666]"
                      title="Placeholder link: to be linked with verified accounts"
                    >
                      {platform} <span className="text-[#999999] text-[10px]">(demo)</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            {submittedData ? (
              /* Success / Client-Side Demo State with Direct Mailto Fallback */
              <div
                role="status"
                className="p-8 sm:p-10 bg-[#F5F5F5] border-2 border-[#111111] space-y-6 animate-in fade-in duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#E53935] text-white shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#111111] mb-2">
                      Inquiry Draft Ready
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed">
                      Thank you, <strong className="text-[#111111]">{submittedData.name}</strong>! Your client-side message draft has been validated. Since this frontend demo is not connected to a server database, you can send it directly through your preferred email client using the button below.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-[#E5E5E5] space-y-2 text-xs font-mono">
                  <div><strong className="text-[#111111]">Scope:</strong> {submittedData.projectType}</div>
                  <div><strong className="text-[#111111]">Contact:</strong> {submittedData.email}</div>
                  <div className="text-[#666666] border-t border-[#E5E5E5] pt-2 line-clamp-3">
                    "{submittedData.message}"
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={generateMailtoLink(submittedData)}
                    data-cursor="hover"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm transition-colors text-center"
                  >
                    <span>Send via Email Client</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    data-cursor="hover"
                    className="px-6 py-3.5 bg-white border border-[#111111] hover:border-[#E53935] hover:text-[#E53935] text-[#111111] text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold mb-2">
                    Your Name or Organization <span className="text-[#E53935]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Alex Morgan / Studio Design"
                    className={`w-full px-4 py-3.5 bg-[#F5F5F5] border text-sm text-[#111111] placeholder:text-[#999999] transition-colors focus:bg-white focus:outline-none ${
                      errors.name ? 'border-[#E53935]' : 'border-[#E5E5E5] focus:border-[#111111]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#E53935] flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold mb-2">
                    Email Address <span className="text-[#E53935]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="alex@domain.com"
                    className={`w-full px-4 py-3.5 bg-[#F5F5F5] border text-sm text-[#111111] placeholder:text-[#999999] transition-colors focus:bg-white focus:outline-none ${
                      errors.email ? 'border-[#E53935]' : 'border-[#E5E5E5] focus:border-[#111111]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-[#E53935] flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Project Type Selector */}
                <div>
                  <label htmlFor="project-type" className="block text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold mb-2">
                    Project Type / Scope <span className="text-[#E53935]">*</span>
                  </label>
                  <select
                    id="project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#F5F5F5] border border-[#E5E5E5] text-sm text-[#111111] transition-colors focus:bg-white focus:border-[#111111] focus:outline-none"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold mb-2">
                    Project Overview / Message <span className="text-[#E53935]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us about your project timeline, requirements, or concept..."
                    className={`w-full px-4 py-3.5 bg-[#F5F5F5] border text-sm text-[#111111] placeholder:text-[#999999] transition-colors focus:bg-white focus:outline-none resize-y ${
                      errors.message ? 'border-[#E53935]' : 'border-[#E5E5E5] focus:border-[#111111]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-[#E53935] flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    data-cursor="hover"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#c62828] active:translate-y-0.5 text-white font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                  <span className="block mt-3 text-[11px] text-[#666666]">
                    Client demo validation included. Working mailto fallback provided upon completion.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
