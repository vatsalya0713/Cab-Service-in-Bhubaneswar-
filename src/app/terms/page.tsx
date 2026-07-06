import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service | Cab Service in Bhubaneswar",
  description: "Terms of Service for Cab Service in Bhubaneswar. Read our booking terms, cancellation policy, and passenger guidelines.",
  alternates: { canonical: `${SITE_CONFIG.url}/terms` },
};

export default function TermsPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #A5811C 0%, #C9A227 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/70">Last updated: December 2024</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By booking a cab with Cab Service in Bhubaneswar (operated by Aspira Med Group), you agree to these Terms of Service. If you do not agree with any part of these terms, please do not use our services.",
              },
              {
                title: "2. Booking & Confirmation",
                content: "All bookings are subject to vehicle availability. A booking is considered confirmed only when you receive an explicit confirmation from our team via WhatsApp, SMS, or call with the driver's name and contact number. We reserve the right to decline any booking at our discretion.",
              },
              {
                title: "3. Fare Structure",
                content: "Fares quoted at the time of booking are final unless the actual trip distance or duration significantly exceeds what was communicated. Additional charges may apply for: waiting time beyond 15 minutes, toll fees, parking charges, state permit fees for inter-state trips, and driver night allowance for trips ending after midnight.",
              },
              {
                title: "4. Cancellation Policy",
                content: "You may cancel your booking free of charge if you do so more than 2 hours before the scheduled pickup time. Cancellations made within 2 hours of the scheduled pickup may attract a cancellation fee of ₹200 or 20% of the fare (whichever is higher). No-shows (failure to arrive for a pre-booked cab) will be charged the full fare.",
              },
              {
                title: "5. Passenger Conduct",
                content: "Passengers are expected to treat our drivers and vehicles with respect. We reserve the right to refuse service to passengers who are abusive, intoxicated, or otherwise posing a safety risk. Smoking is strictly prohibited in all our vehicles. Any damage caused to a vehicle by a passenger will be billed to the passenger.",
              },
              {
                title: "6. Luggage",
                content: "Reasonable luggage is included in all bookings. For unusually large quantities of luggage or oversized items (bicycles, large musical instruments, etc.), please inform us at the time of booking so we can arrange an appropriate vehicle.",
              },
              {
                title: "7. Liability",
                content: "Cab Service in Bhubaneswar is not liable for delays caused by traffic, road conditions, weather, or other factors beyond our control. We are not responsible for any personal belongings left in the vehicle, though we will make reasonable efforts to recover and return such items.",
              },
              {
                title: "8. Complaints & Disputes",
                content: `If you have a complaint about our service, please contact us within 48 hours of the trip at ${SITE_CONFIG.email} or ${SITE_CONFIG.phone}. We will respond within 24 hours and make every effort to resolve the issue fairly.`,
              },
              {
                title: "9. Governing Law",
                content: "These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha.",
              },
              {
                title: "10. Changes to Terms",
                content: "We reserve the right to update these terms at any time. The most current version will always be available on our website. Continued use of our services after changes are posted constitutes acceptance of the updated terms.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-[#F5F1E8] mb-3">{section.title}</h2>
                <p className="text-[#9BA3AE] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
