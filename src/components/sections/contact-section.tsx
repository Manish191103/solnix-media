import React from 'react';

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from '@/components/contact-form';

const ContactSection = () => (
    <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
            <Dialog>
                <DialogTrigger>Contact Us</DialogTrigger>
                <DialogContent>
                    <ContactForm />

                </DialogContent>
            </Dialog>
        </div>

    </section>
);

export default ContactSection; 