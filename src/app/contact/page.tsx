import { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ContactEmail from "@/components/contact-email";



export const metadata: Metadata = {
    title: "Contact Us | Solnix Media",
    description: "Get in touch with Solnix Media's expert team for tailored digital solutions, web development, and marketing services for your business. We're here to help you succeed online.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Solnix Media | Get In Touch With Our Team",
        description: "Reach out to Solnix Media for personalized digital solutions. Let's discuss how we can help your business grow online.",
        url: "/contact",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Solnix Media | Get In Touch With Our Team",
        description: "Reach out to Solnix Media for personalized digital solutions. Let's discuss how we can help your business grow online.",
    },
};

export default function ContactPage() {
    return (
        <>
            <HeroHeader />

            <ContactEmail />

            <FooterSection />


        </>
    );
} 