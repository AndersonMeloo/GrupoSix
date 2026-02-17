'use client';

import React, { useEffect, Suspense, useState } from 'react';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { useUTMParams } from '../hooks/useUTMParams';
import { ChevronDown } from 'lucide-react';

function ThankYouContent() {
    const { utmParams } = useUTMParams();

    const [orderId, setOrderId] = useState<string>('');
    useEffect(() => {

        const id = `#NF-2024-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        setOrderId(id);
    }, []);

    useEffect(() => {

        type GtagFn = (...args: unknown[]) => void;
        const win = typeof window !== 'undefined' ? (window as Window & { gtag?: GtagFn }) : undefined;

        if (win?.gtag) {
            win.gtag('event', 'purchase', {
                value: 97,
                currency: 'BRL',
                items: [{ item_name: 'NeuroFocus Max', price: 97, quantity: 1 }],
                ...utmParams,
            });
        }
    }, [utmParams]);

    return (

        <>
            <section className="flex-1 py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 shadow-md">
                            <svg className="w-14 h-14 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-xl p-8 my-12 border-l-4 border-green-500">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1 font-nunito">Número do Pedido</h3>
                            <p className="text-2xl font-medium text-gray-900 font-montserrat">{orderId}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1 font-nunito">Status</h3>
                            <p className="text-2xl font-medium text-green-600 font-montserrat">✓ Pago com Sucesso</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 my-12 font-montserrat">
                        {[
                            {
                                emoji: '📧',
                                title: 'Confirmação por Email',
                                text: 'Você receberá um email com todos os detalhes do pedido.'
                            },
                            {
                                emoji: '📦',
                                title: 'Preparando seu Pedido',
                                text: 'Seu NeuroFocus Max será enviado em até 24h.'
                            },
                            {
                                emoji: '🚚',
                                title: 'Entrega Rápida',
                                text: 'Receba em 2-3 dias úteis com código de rastreamento.'
                            }
                        ].map((card) => (
                            <div key={card.title} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
                                <div className="text-5xl mb-4">{card.emoji}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                                <p className="text-gray-600 text-sm">{card.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 my-12 shadow-inner">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Como usar</h3>
                        <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                            {[
                                {
                                    step: 1,
                                    title: 'Tome 1 Cápsula',
                                    text: 'Pela manhã com água, preferencialmente no café da manhã.'
                                },
                                {
                                    step: 2,
                                    title: 'Aguarde 30min',
                                    text: 'Os nutrientes serão absorvidos rapidamente.'
                                },
                                {
                                    step: 3,
                                    title: 'Sinta a Diferença',
                                    text: 'Perceba melhora na concentração e memória.'
                                }
                            ].map((item) => (
                                <div key={item.step}>
                                    <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full font-bold mb-4">{item.step}</div>
                                    <h4 className="font-bold text-gray-900 mb-2 font-nunito">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 my-12 shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 font-nunito">Precisa de Ajuda?</h3>
                        <p className="text-gray-700 mb-6 font-nunito">Suporte das 09h ás 18h 
                            <br />
                            para tirar suas dúvidas</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center font-montserrat">
                            <a href="https://wa.me/5511988730794" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-light py-3 px-4 rounded-lg hover:bg-green-600 transition">
                                WhatsApp
                            </a>
                            <a href="mailto:andersonrodriguesmelo@hotmail.com" className="inline-block bg-blue-500 text-white font-light py-3 px-8 rounded-lg hover:bg-blue-600 transition">
                                Email
                            </a>
                        </div>
                    </div>

                    <div className="my-12 text-center">
                        <p className="text-gray-700 mb-4 font-montserrat">Compartilhe seus resultados com outras pessoas!</p>
                        <Link href="/" className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium py-4 px-12 rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-nunito">
                            Voltar à Página Principal
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
                    <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-900 mb-12 font-montserrat">Dúvidas Frequentes</h2>
                    <div className="space-y-6 font-nunito">
                        {[
                            {
                                question: 'Quando vou receber meu NeuroFocus Max?',
                                answer: 'Após confirmação do pagamento, envio em até 24h. Entrega em 2-3 dias úteis com código de rastreamento.'
                            },
                            {
                                question: 'Posso devolver se não gostar?',
                                answer: 'Sim! Garantia de 30 dias 100% de volta, sem perguntas.'
                            },
                            {
                                question: 'Tem efeitos colaterais?',
                                answer: 'NeuroFocus Max é natural, sem cafeína ou ingredientes artificiais. Sempre consulte seu médico.'
                            },
                            {
                                question: 'Quanto tempo para começar a fazer efeito?',
                                answer: 'A maioria sente diferença em 30 minutos. Uso contínuo por 30 dias para melhores resultados.'
                            }
                        ].map((faq) => (
                            <details key={faq.question} className="bg-gray-50 rounded-xl p-6 cursor-pointer shadow-sm hover:shadow-md transition">
                                <summary className="font-bold text-gray-900 flex justify-between items-center">{faq.question} <span className="text-gray-600">
                                    <ChevronDown size={18} />
                                </span></summary>
                                <p className="text-gray-700 mt-4 font-nunito">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default function ThankYouPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Suspense fallback={<div className="p-8">Carregando...</div>}>
                <ThankYouContent />
            </Suspense>
            <Footer />
        </div>
    );
}
