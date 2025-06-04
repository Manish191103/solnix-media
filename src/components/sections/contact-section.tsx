import React from 'react';
import FeaturesSectionDemo from "@/components/ui/features-section-demo-2";



import ContactEmail from '../contact-email';
const ContactSection = () => (
    <section id="contact" className="-py-30">

        <FeaturesSectionDemo />
        <div className="container mx-auto px-4">
            <ContactEmail />
        </div>
    </section>
);

export default ContactSection; 