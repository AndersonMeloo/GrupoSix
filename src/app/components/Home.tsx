'use client'

import { AlarmClock } from "lucide-react";
import Benefits from "./Benefits";
import { VideoPlayer } from "./VideoPlayer";
import { useUTMParams } from "../hooks/useUTMParams";
import { generatedUTMQueryString } from '../utils/utm';
import Metrics from "./Metrics";
import TestimonialsSlider from "./Testimonial";
import { Produtos } from "./Produtos";
import { Offer } from "./Offer";
import Headline from "./Headline";

export default function HomeContent() {

    const { utmParams } = useUTMParams();
    const checkoutLink = `/checkout${generatedUTMQueryString(utmParams)}`;
    const handleCTA = () => { window.location.href = checkoutLink; };

    return (

        <>
            <div className="text-center bg-[#EDE9E2] pt-10">
                <span className="flex items-center w-2xs m-auto gap-2 bg-red-500 text-white  rounded-full text-sm font-bold p-2 font-nunito">
                    <AlarmClock size={16} />
                    Oferta limitada - 50% nesta semana!
                </span>
            </div>

            <section className="bg-[#EDE9E2] w-full min-h-screen pt-10 md:pt-20">
                <div className="w-[90%] md:w-[80%] m-auto text-black">

                    <div className="flex flex-col md:flex-row items-center md:items-center justify-evenly gap-6 md:gap-20 mb-12 md:mb-20 text-center md:text-left">

                        <Headline text="Transforme sua vida hoje: descubra o método inovador que já mudou milhares de histórias!" />

                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 text-center md:text-left">

                        <h2 className="text-lg sm:text-xl md:text-2xl leading-relaxed font-montserrat">
                            Solução natural para <br className="hidden md:block" />
                            Aumentar seu foco e memória em 30 dias.
                        </h2>

                        <div className="text-xl sm:text-2xl md:text-3xl font-semibold font-nunito">
                            <p>Foco</p>
                            <p>Memória</p>
                        </div>

                    </div>

                </div>

                <div className="w-full max-w-3xl mx-auto pt-10 md:pt-30 px-4">
                    <VideoPlayer url="https://www.youtube.com/embed/dQw4w9WgXcQ" />
                </div>

                <div className="text-center mt-10">
                    <button
                        onClick={handleCTA}
                        className="bg-gradient-to-r from-[#0f766e] to-[#06b6d4] text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-xl shadow-md text-sm sm:text-base md:text-lg lg:text-xl hover:scale-105 transition-transform duration-200 cursor-pointer font-montserrat"
                    >
                        Quero Minha Cápsula Agora!
                    </button>
                </div>


                <Benefits />
                <Metrics />
                <TestimonialsSlider />
                <Offer/>
            </section>
        </>
    );
}


