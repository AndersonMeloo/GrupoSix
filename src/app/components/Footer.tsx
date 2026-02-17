import React from 'react';
import Link from 'next/link';

interface FooterProps {
    disclaimerText?: string;
}

export function Footer({ disclaimerText }: FooterProps) {

    const defaultDisclaimer = `
    Aviso Legal: Os resultados apresentados neste site são exemplos e histórias de clientes reais. 
    No entanto, resultados individuais podem variar. NeuroFocus Max é um suplemento dietético 
    e não é medicamento. As declarações feitas não foram avaliadas pela ANVISA. 
    Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. 
    Consulte seu médico antes de usar este produto.
  `;

    return (

        <>
            <footer className="bg-gray-900 text-gray-300 py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-white font-bold mb-4">NeuroFocus Max</h3>
                            <p className="text-sm">
                                Suplemento natural para potencializar seu foco e memória.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-4">Links Úteis</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link
                                        href="/#beneficios"
                                        className="hover:text-white transition"
                                    >
                                        Benefícios
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#testemunhos"
                                        className="hover:text-white transition"
                                    >
                                        Testemunhos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#garantia"
                                        className="hover:text-white transition"
                                    >
                                        Garantia 30 Dias
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-4">Contato</h3>
                            <p className="text-sm">
                                Email: contato@neurofocusmax.com.br
                                <br />
                                Telefone: (11) 9999-9999
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-8 mb-8">
                        <h4 className="text-white font-bold mb-4">Disclaimer Legal</h4>
                        <p className="text-xs leading-relaxed text-gray-400">
                            {disclaimerText || defaultDisclaimer}
                        </p>
                    </div>

                    <div className="border-t border-gray-700 pt-8 text-center text-xs">
                        <p>
                            © {new Date().getFullYear()} NeuroFocus Max. Todos os direitos
                            reservados.
                        </p>
                        <p className="mt-2">
                            <Link href="/politica-privacidade" className="hover:text-white">
                                Política de Privacidade
                            </Link>
                            {' | '}
                            <Link href="/termos-uso" className="hover:text-white">
                                Termos de Uso
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
