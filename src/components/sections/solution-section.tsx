import React from 'react';
import { WordRotate } from "@/components/magicui/word-rotate";
import IntegrationsSection from '@/components/integrations-7';
import WobbleCardDemo from "@/components/ui/wobble-card-demo";

const SolutionSection = () => (
    <div>
        <section id="solution" className="py-4 bg-background">
            <div className="container mx-auto px-4">
                <div className="w-16 h-1 mb-2 md:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
                <WordRotate
                    words={["Effectively", "Thinked", "Solutions"]}
                    className="text-6xl font-bold mb-6"
                />
                <IntegrationsSection />
                <div className="mt-20">
                    <WobbleCardDemo />
                </div>
            </div>
        </section>
    </div>
);

export default SolutionSection; 