import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Cab Service in Bhubaneswar",
  description: "Privacy Policy for Cab Service in Bhubaneswar. Learn how we collect, use, and protect your personal data.",
  alternates: { canonical: `${SITE_CONFIG.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70">Last updated: December 2024</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto prose prose-sm">
          <div className="space-y-8">
            {[
              {
                title: "1. Introduction",
                content: `Cab Service in Bhubaneswar ("we", "us", or "our") is operated by Aspira Med Group. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website cabserviceinbhubaneswar.com or contact us to book our cab services.`
              },
              {
                title: "2. Information We Collect",
                content: `We may collect the following information: (a) Contact information such as your name, phone number, and email address when you submit a trip enquiry or contact us; (b) Trip information including pickup location, destination, date, and time; (c) Device and usage data such as IP address, browser type, and pages visited, collected automatically through cookies and analytics tools; (d) WhatsApp conversation data when you contact us through our WhatsApp business number.`
              },
              {
                title: "3. How We Use Your Information",
                content: `We use the information we collect to: (a) Process and confirm your cab booking; (b) Communicate with you about your trip; (c) Send you confirmation and updates about your booking; (d) Improve our website and services; (e) Comply with legal obligations. We do not sell, rent, or share your personal information with third parties for marketing purposes.`
              },
              {
                title: "4. WhatsApp Communication",
                content: `When you contact us via WhatsApp, your messages are subject to WhatsApp's own privacy policy in addition to this policy. We use WhatsApp for booking confirmations and customer communication. We do not use your WhatsApp number for unsolicited marketing messages.`
              },
              {
                title: "5. Cookies",
                content: `Our website uses cookies and similar tracking technologies to enhance your experience, analyse site traffic, and understand where our visitors are coming from. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`
              },
              {
                title: "6. Data Security",
                content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage method is 100% secure.`
              },
              {
                title: "7. Third-Party Services",
                content: `Our website may use third-party services including Google Analytics and Google Maps. These services have their own privacy policies. We encourage you to review them.`
              },
              {
                title: "8. Your Rights",
                content: `You have the right to access, correct, or request deletion of your personal data that we hold. To exercise these rights, contact us at ${SITE_CONFIG.email}.`
              },
              {
                title: "9. Contact",
                content: `If you have questions about this Privacy Policy, contact us at ${SITE_CONFIG.email} or call ${SITE_CONFIG.phone}.`
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-[#1f2937] mb-3">{section.title}</h2>
                <p className="text-[#6B6B6E] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
