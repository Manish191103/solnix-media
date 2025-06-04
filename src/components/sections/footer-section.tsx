import Footer from "@/components/footer"
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"

export default function FooterSection() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Background Beams as background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <BackgroundBeamsWithCollision className="w-full h-full">{/* background only */}<></></BackgroundBeamsWithCollision>
            </div>
            {/* Footer content above background */}

            <div className="relative z-10">
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    Imagining impactful{" "}
                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">Solnix Media.</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">Solnix Media.</span>
                        </div>
                    </div>
                </h2>
                <div className="container mx-auto px-4 mt-8">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

