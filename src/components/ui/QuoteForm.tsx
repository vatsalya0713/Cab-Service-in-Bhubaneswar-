"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address").or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  from: z.string().min(2, "Enter pickup location"),
  to: z.string().min(2, "Enter destination"),
  date: z.string().min(1, "Select a travel date"),
  passengers: z.string(),
  vehicle: z.string().optional(),
  message: z.string().optional(),
});

type QuoteForm = z.infer<typeof quoteSchema>;

const SERVICES = [
  "Local City Ride",
  "Airport Pickup",
  "Airport Drop",
  "Bhubaneswar to Puri",
  "Bhubaneswar to Konark",
  "Bhubaneswar to Chilika",
  "Bhubaneswar to Cuttack",
  "Bhubaneswar to Gopalpur",
  "Bhubaneswar to Berhampur",
  "Corporate / Monthly Rental",
  "Wedding Car",
  "Other Outstation",
];

const VEHICLES = [
  "Sedan (4 Seater)",
  "MUV (6 Seater)",
  "SUV (7 Seater)",
  "Premium SUV (7 Seater)",
  "Tempo Traveller (14+ Seater)",
  "Not sure yet",
];

export default function QuoteForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteForm>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { passengers: "1-3" },
  });

  const onSubmit = async (data: QuoteForm) => {
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hi! I'd like to book a cab.\n\n` +
      `*Name:* ${data.name}\n*Phone:* +91${data.phone}\n` +
      `*Service:* ${data.service}\n*From:* ${data.from}\n*To:* ${data.to}\n` +
      `*Date:* ${data.date}\n*Passengers:* ${data.passengers}\n` +
      (data.vehicle ? `*Vehicle:* ${data.vehicle}\n` : "") +
      (data.message ? `*Note:* ${data.message}` : "")
    );
    window.open(`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex flex-col items-center justify-center gap-4 p-10 rounded-3xl bg-[#f4f7f9] border border-[#e2e8f0] text-center ${className || ""}`}
      >
        <div className="w-16 h-16 rounded-full bg-[#FFC107]/10 flex items-center justify-center">
          <CheckCircle size={32} className="text-[#FFC107]" />
        </div>
        <h3 className="text-xl font-bold text-[#1f2937]">Opening WhatsApp!</h3>
        <p className="text-[#6B6B6E] text-sm">Your booking details have been prepared. Complete the booking on WhatsApp.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-[#FFC107] underline mt-2 hover:text-[#0d2a40] transition-colors"
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      id="cab-quote-form"
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-[#f4f7f9] rounded-3xl border border-[#e2e8f0] shadow-xl p-6 md:p-8 space-y-5 ${className || ""}`}
      noValidate
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold text-[#1f2937]">Get a Free Quote</h2>
        <p className="text-sm text-[#6B6B6E] mt-1">Fill in your details and we&apos;ll send you a WhatsApp quote instantly</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="quote-name" className="block text-sm font-medium text-[#1f2937] mb-1.5">Full Name *</label>
          <input
            id="quote-name"
            {...register("name")}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/30 focus:border-[#FFC107] transition-all"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="quote-phone" className="block text-sm font-medium text-[#1f2937] mb-1.5">Mobile Number *</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#6B6B6E]">+91</span>
            <input
              id="quote-phone"
              {...register("phone")}
              placeholder="9XXXXXXXXX"
              maxLength={10}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/30 focus:border-[#FFC107] transition-all"
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label htmlFor="quote-service" className="block text-sm font-medium text-[#1f2937] mb-1.5">Service Required *</label>
          <select
            id="quote-service"
            {...register("service")}
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/30 focus:border-[#FFC107] transition-all appearance-none"
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
        </div>

        {/* From */}
        <div>
          <label htmlFor="quote-from" className="block text-sm font-medium text-[#1f2937] mb-1.5">Pickup Location *</label>
          <input
            id="quote-from"
            {...register("from")}
            placeholder="e.g. Bhubaneswar Airport"
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/30 focus:border-[#FFC107] transition-all"
          />
          {errors.from && <p className="text-xs text-red-500 mt-1">{errors.from.message}</p>}
        </div>

        {/* To */}
        <div>
          <label htmlFor="quote-to" className="block text-sm font-medium text-[#1f2937] mb-1.5">Destination *</label>
          <input
            id="quote-to"
            {...register("to")}
            placeholder="e.g. Puri Beach"
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/30 focus:border-[#FFC107] transition-all"
          />
          {errors.to && <p className="text-xs text-red-500 mt-1">{errors.to.message}</p>}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="quote-date" className="block text-sm font-medium text-[#1f2937] mb-1.5">Travel Date *</label>
          <input
            id="quote-date"
            type="date"
            {...register("date")}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/30 focus:border-[#FFC107] transition-all"
          />
          {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>}
        </div>

        {/* Passengers */}
        <div>
          <label htmlFor="quote-passengers" className="block text-sm font-medium text-[#1f2937] mb-1.5">Passengers</label>
          <select
            id="quote-passengers"
            {...register("passengers")}
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/30 focus:border-[#FFC107] transition-all appearance-none"
          >
            <option value="1">1</option>
            <option value="1-3">1–3</option>
            <option value="4-6">4–6</option>
            <option value="7-9">7–9</option>
            <option value="10+">10+</option>
          </select>
        </div>

        {/* Vehicle */}
        <div className="sm:col-span-2">
          <label htmlFor="quote-vehicle" className="block text-sm font-medium text-[#1f2937] mb-1.5">Vehicle Type</label>
          <select
            id="quote-vehicle"
            {...register("vehicle")}
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/30 focus:border-[#FFC107] transition-all appearance-none"
          >
            <option value="">Select a vehicle (Optional)</option>
            {VEHICLES.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="quote-message" className="block text-sm font-medium text-[#1f2937] mb-1.5">Additional Notes</label>
          <textarea
            id="quote-message"
            {...register("message")}
            placeholder="Anything else we should know? (e.g. early morning pickup, return trip needed)"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/30 focus:border-[#FFC107] transition-all resize-none"
          />
        </div>
      </div>

      <motion.button
        type="submit"
        id="quote-submit-btn"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all disabled:opacity-70"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {isSubmitting ? "Sending..." : "Get Quote on WhatsApp"}
      </motion.button>

      <p className="text-xs text-center text-[#6B6B6E]">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-[#FFC107]">Privacy Policy</a>.
        We never share your data.
      </p>
    </form>
  );
}
