"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Car } from "lucide-react";
import { VEHICLE_COLOR_MAP } from "@/lib/constants";

export interface DestinationCardProps {
  originCity: string;
  destinationCity: string;
  distanceKm: number;
  durationHrs: string; // e.g. "1.5 hrs"
  startingFare: number; // e.g. 700
  vehicles: readonly string[]; // e.g. ["Dzire", "Ertiga", "Innova"]
  badge?: string; // e.g. "Most booked", "Best value" — optional
  label?: string; // e.g. "POPULAR ROUTE" — optional, only render header strip if either badge or label is present
  href: string; // link to the route detail page
  whatsappMessage?: string; // pre-filled WhatsApp text for the Book button
}

export function DestinationCard({
  originCity,
  destinationCity,
  distanceKm,
  durationHrs,
  startingFare,
  vehicles,
  badge,
  label,
  href,
  whatsappMessage,
}: DestinationCardProps) {
  const showHeaderStrip = badge || label;

  const whatsappUrl = whatsappMessage 
    ? `https://wa.me/919958829539?text=${encodeURIComponent(whatsappMessage)}`
    : href;

  // For vehicles not in the map, we rotate through fallback colors based on their index.
  const fallbackColors = [
    { bg: "#F3E8FF", text: "#9333EA" },
    { bg: "#FEF2F2", text: "#DC2626" },
    { bg: "#ECFEFF", text: "#0891B2" }
  ];

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-[18px] w-full max-w-[540px] flex flex-col group overflow-hidden mx-auto h-full"
      style={{
        boxShadow: "0 20px 50px -12px rgba(0,0,0,0.5)",
      }}
    >
      {/* 1. TOP HEADER STRIP */}
      {showHeaderStrip && (
        <div
          className="flex items-center justify-between px-[22px] py-[14px] border-b border-[#EEF1F5]"
          style={{
            background: "linear-gradient(to bottom, rgba(37,99,235,0.06), transparent)",
          }}
        >
          {label ? (
            <span
              className="text-[#8A94A6] uppercase font-semibold"
              style={{ fontSize: "11px", letterSpacing: "0.5px" }}
            >
              {label}
            </span>
          ) : (
            <span />
          )}
          {badge && (
            <span
              className="text-[#2563EB] bg-[rgba(37,99,235,0.08)] font-semibold whitespace-nowrap"
              style={{
                fontSize: "11px",
                padding: "3px 10px",
                borderRadius: "20px",
              }}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      {/* 2. ROUTE ROW */}
      <div className="flex items-center px-[22px] pt-[22px] pb-[16px] gap-2">
        {/* Origin */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div
            className="w-[9px] h-[9px] rounded-full bg-[#22C55E]"
            style={{ boxShadow: "0 0 8px rgba(34,197,94,0.35)" }}
          />
          <span className="text-[#111827] text-[18px] font-bold">{originCity}</span>
        </div>

        {/* Dashed Line & Car */}
        <div className="flex-1 relative mx-2 h-full flex items-center justify-center">
          <div
            className="w-full h-[1px] absolute top-1/2 left-0 -translate-y-1/2"
            style={{
              background: "repeating-linear-gradient(90deg, #D6DBE3 0 6px, transparent 6px 12px)",
            }}
          />
          <div className="bg-white px-2 relative z-10">
            <Car size={15} color="#2563EB" />
          </div>
        </div>

        {/* Destination */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[#111827] text-[18px] font-bold">{destinationCity}</span>
          <div
            className="w-[9px] h-[9px] rounded-full bg-[#EF4444]"
            style={{ boxShadow: "0 0 8px rgba(239,68,68,0.35)" }}
          />
        </div>
      </div>

      {/* 3. BODY ROW */}
      <div className="px-[22px] pb-[20px] flex flex-row gap-5 items-stretch flex-grow">
        {/* LEFT BLOCK */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex gap-[20px] mb-[16px]">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} color="#8A94A6" />
              <span className="text-[#111827] text-[16px] font-semibold">{distanceKm} km</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} color="#8A94A6" />
              <span className="text-[#111827] text-[16px] font-semibold">{durationHrs}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-[6px]">
            {vehicles.map((v, i) => {
              const colorInfo = VEHICLE_COLOR_MAP[v] || fallbackColors[i % fallbackColors.length];
              return (
                <span
                  key={v}
                  className="font-semibold"
                  style={{
                    fontSize: "12px",
                    padding: "5px 14px",
                    borderRadius: "20px",
                    backgroundColor: colorInfo.bg,
                    color: colorInfo.text,
                  }}
                >
                  {v}
                </span>
              );
            })}
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="flex-[0.75] flex flex-col justify-between items-end min-h-full shrink-0">
          <div className="text-right">
            <div className="text-[#1D4ED8] text-[28px] font-[800] leading-none mb-1">
              ₹{startingFare}
            </div>
            <div className="text-[#8A94A6] text-[11px] font-medium uppercase tracking-wider">
              starting from
            </div>
          </div>

          <Link
            href={whatsappUrl}
            target={whatsappMessage ? "_blank" : "_self"}
            rel={whatsappMessage ? "noopener noreferrer" : undefined}
            className="mt-[10px] bg-[#15456b] text-white hover:bg-[#0d2a40] flex items-center justify-center gap-[6px] transition-colors duration-200 group/btn"
            style={{
              padding: "9px 18px",
              borderRadius: "9px",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <span>Book</span>
            <ArrowRight 
              size={13} 
              className="transition-transform duration-200 ease-out group-hover/btn:translate-x-[3px]" 
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
