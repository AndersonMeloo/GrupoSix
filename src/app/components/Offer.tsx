"use client";

import { useRouter } from 'next/navigation';
import { Produtos } from './Produtos';
import { Garantia } from './Garantia';

export function Offer() {
    const router = useRouter();

    const handleCTA = () => {
        router.push('/checkout');
    };

    return (
        
        <div className="bg-[#e9e7e3]">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-center">

                <div className="lg:w-1/2 font-nunito">
                    <Produtos
                        description="Descrição do produto"
                        price={197}
                        originalPrice={297}
                        benefits={[
                            "Aumenta concentração em até 3 horas",
                            "Melhora memória de curto e longo prazo",
                            "Reduz fadiga mental",
                            "Fórmula 100% natural",
                            "Sem glúten e lactose",
                            "Resultado em 30 minutos",
                            "15+ estudos clínicos",
                            "Garantia de 30 dias",
                        ]}
                        ctaText="Comprar Agora com 50% de Desconto"
                        onCTA={handleCTA}
                    />
                </div>

                <div className="lg:w-1/2 font-montserrat">
                    <Garantia />
                </div>

            </div>
        </div>
    );
}
