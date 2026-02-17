"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
    text: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        text: "Comecei a usar GrupoFix Max há 2 meses e já sinto uma diferença notável na minha concentração durante o trabalho. Consigo fazer mais tarefas em menos tempo!",
        name: "João Silva",
        role: "Analista de Dados",
    },
    {
        text: "Meu desempenho criativo melhorou muito com GrupoFix Max. Sinto-me mais motivada e focada em meus projetos.",
        name: "Maria Santos",
        role: "Designer Gráfica",
    },
    {
        text: "Recomendo demais! GrupoFix Max me ajudou a melhorar minhas notas na faculdade. A memória está muito mais aguçada.",
        name: "Carlos Oliveira",
        role: "Estudante de Engenharia",
    },
    {
        text: "Como empreendedora, preciso estar sempre focada. GrupoFix Max é essencial na minha rotina diária!",
        name: "Ana Costa",
        role: "Empreendedora",
    },
    {
        text: "Incrível! Consigo debugar código muito mais rápido e com mais precisão desde que comecei a usar o produto.",
        name: "Pedro Barbosa",
        role: "Programador",
    },
    {
        text: "GrupoFix Max transformou minha produtividade. Estou muito mais confiante e focada em minhas metas diárias.",
        name: "Isabella Torres",
        role: "Gerente de Projetos",
    },
];

export default function TestimonialsSlider() {
    const [current, setCurrent] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        function update() {
            const w = window.innerWidth;
            if (w >= 1024) setItemsPerView(3);
            else if (w >= 640) setItemsPerView(2);
            else setItemsPerView(1);
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = Math.max(testimonials.length - itemsPerView, 0);

    const nextSlide = () => {
        setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemsPerView, maxIndex]);

    const slideWidth = 100 / itemsPerView;

    return (

        <>

            <h1
                className="text-black text-6xl text-center mt-10 pb-6 font-montserrat font-extralight"
            >
                Avaliações dos
                <br />
                Clientes</h1>

            <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-0 pb-10">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${current * slideWidth}%)` }}
                    >
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                style={{ flex: `0 0 ${slideWidth}%` }}
                                className="px-4"
                            >
                                <div
                                     className="p-6 rounded-xl shadow-md h-full flex flex-col justify-between"
                                     style={{ border: '3px solid #3A6594', backgroundColor: '#f3f7f3' }}
                                >
                                    <p className="text-gray-700 mb-4 font-nunito">{t.text}</p>
                                    <div className="mt-2">
                                        <div className="flex gap-1 mb-1">
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <Star className="w-4 h-4 text-yellow-400" />
                                        </div>
                                        <p className="font-bold text-gray-900 font-montserrat">{t.name}</p>
                                        <p className="text-gray-500 text-sm font-nunito">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -translate-y-1/2 left-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
                >
                    <ChevronLeft className="w-5 h-5 text-[#374836]" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -translate-y-1/2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
                >
                    <ChevronRight className="w-5 h-5 text-[#374836]" />
                </button>
            </div>
        </>
    );
}
