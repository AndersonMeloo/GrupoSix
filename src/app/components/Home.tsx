import Benefits from "./Benefits";
import { VideoPlayer } from "./VideoPlayer";

export default function HomeContent() {
    return (
        <section className="bg-[#EDE9E2] w-full min-h-screen pt-20 md:pt-40">
            <div className="w-[90%] md:w-[80%] m-auto text-black">

                <div className="flex flex-col md:flex-row items-center md:items-center justify-evenly gap-6 md:gap-20 mb-12 md:mb-20 text-center md:text-left">

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        Domine seu foco,
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl">
                        com uma única cápsula ao dia
                    </p>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 text-center md:text-left">

                    <h2 className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                        solução natural para <br className="hidden md:block" />
                        turboboostar seu foco e memória em 30 dias.
                    </h2>

                    <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        <p>Foco</p>
                        <p>Memória</p>
                    </div>

                </div>

            </div>

            <Benefits />

            <div className="w-full max-w-3xl mx-auto pb-10 px-4">
                <VideoPlayer url="https://www.youtube.com/embed/dQw4w9WgXcQ" />
            </div>
        </section>
    );
}
