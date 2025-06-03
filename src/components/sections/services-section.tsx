import React from 'react';
import { VideoText } from "@/components/magicui/video-text";
import { BentoDemo } from "@/components/ui/bento-demo"

const ServicesSection = () => (
    <section id="services" className="-mt-25 pb-0 sm:pt-20 sm:pb-5">
        <div className="container mx-auto px-4">
            <div className="w-full flex flex-col items-center justify-center min-h-[220px] md:min-h-[300px] lg:min-h-[320px] py-8 md:py-14 lg:py-20">
                <VideoText
                    src="https://cdn.magicui.design/ocean-small.webm"
                    className="flex items-center justify-center w-full h-[80px] md:h-[120px] lg:h-[140px]"
                    fontSize={10}
                >
                    OUR
                </VideoText>
                <div className="w-16 h-1 mb-2 md:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
                <VideoText
                    src="https://cdn.magicui.design/ocean-small.webm"
                    className="flex items-center justify-center w-full h-[80px] md:h-[120px] lg:h-[140px]"
                    fontSize={10}
                >
                    EXPERTISE
                </VideoText>
            </div>
            <div className="-mt-10 pt-6 sm:mt-10 sm:pt-10 mb-20">
                <BentoDemo />
            </div>
        </div>
    </section>
);

export default ServicesSection; 