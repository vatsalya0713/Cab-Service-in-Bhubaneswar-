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
        className={`flex flex-col items-center justify-center gap-4 p-10 rounded-3xl bg-white border border-[#E7E2D8] text-center ${className || ""}`}
      >
        <div className="w-16 h-16 rounded-full bg-[#136F63]/10 flex items-center justify-center">
          <CheckCircle size={32} className="text-[#136F63]" />
        </div>
        <h3 className="text-xl font-bold text-[#1C1C1E]">Opening WhatsApp!</h3>
        <p className="text-[#6B6B6E] text-sm">Your booking details have been prepared. Complete the booking on WhatsApp.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-[#136F63] underline mt-2 hover:text-[#0F4C4C] transition-colors"
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
      className={`bg-white rounded-3xl border border-[#E7E2D8] shadow-xl p-6 md:p-8 space-y-5 ${className || ""}`}
      noValidate
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold text-[#1C1C1E]">Get a Free Quote</h2>
        <p className="text-sm text-[#6B6B6E] mt-1">Fill in your details and we&apos;ll send you a WhatsApp quote instantly</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="quote-name" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">Full Name *</label>
          <input
            id="quote-name"
            {...register("name")}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-[#E7E2D8] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#136F63]/30 focus:border-[#136F63] transition-all"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="quote-phone" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">Mobile Number *</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#6B6B6E]">+91</span>
            <input
              id="quote-phone"
              {...register("phone")}
              placeholder="9XXXXXXXXX"
              maxLength={10}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#E7E2D8] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#136F63]/30 focus:border-[#136F63] transition-all"
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label htmlFor="quote-service" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">Service Required *</label>
          <select
            id="quote-service"
            {...register("service")}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E2D8] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#136F63]/30 focus:border-[#136F63] transition-all appearance-none"
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
        </div>

        {/* From */}
        <div>
          <label htmlFor="quote-from" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">Pickup Location *</label>
          <input
            id="quote-from"
            {...register("from")}
            placeholder="e.g. Bhubaneswar Airport"
            className="w-full px-4 py-3 rounded-xl border border-[#E7E2D8] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#136F63]/30 focus:border-[#136F63] transition-all"
          />
          {errors.from && <p className="text-xs text-red-500 mt-1">{errors.from.message}</p>}
        </div>

        {/* To */}
        <div>
          <label htmlFor="quote-to" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">Destination *</label>
          <input
            id="quote-to"
            {...register("to")}
            placeholder="e.g. Puri Beach"
            className="w-full px-4 py-3 rounded-xl border border-[#E7E2D8] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#136F63]/30 focus:border-[#136F63] transition-all"
          />
          {errors.to && <p className="text-xs text-red-500 mt-1">{errors.to.message}</p>}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="quote-date" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">Travel Date *</label>
          <input
            id="quote-date"
            type="date"
            {...register("date")}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E2D8] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#136F63]/30 focus:border-[#136F63] transition-all"
          />
          {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>}
        </div>

        {/* Passengers */}
        <div>
          <label htmlFor="quote-passengers" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">Passengers</label>
          <select
            id="quote-passengers"
            {...register("passengers")}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E2D8] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#136F63]/30 focus:border-[#136F63] transition-all appearance-none"
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
          <label htmlFor="quote-vehicle" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">Vehicle Type</label>
          <select
            id="quote-vehicle"
            {...register("vehicle")}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E2D8] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#136F63]/30 focus:border-[#136F63] transition-all appearance-none"
          >
            <option value="">Select a vehicle (Optional)</option>
            {VEHICLES.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="quote-message" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">Additional Notes</label>
          <textarea
            id="quote-message"
            {...register("message")}
            placeholder="Anything else we should know? (e.g. early morning pickup, return trip needed)"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E2D8] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#136F63]/30 focus:border-[#136F63] transition-all resize-none"
          />
        </div>
      </div>

      <motion.button
        type="submit"
        id="quote-submit-btn"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base text-white transition-all disabled:opacity-70"
        style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}
      >
        <Send size={18} />
        {isSubmitting ? "Sending..." : "Get Quote on WhatsApp"}
      </motion.button>

      <p className="text-xs text-center text-[#6B6B6E]">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-[#136F63]">Privacy Policy</a>.
        We never share your data.
      </p>
    </form>
  );
}
