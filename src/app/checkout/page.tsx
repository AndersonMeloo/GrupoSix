'use client';

import React, { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useUTMParams } from '../hooks/useUTMParams';
import { useFormData } from '../hooks/useFormData';
import { generatedUTMQueryString, saveUTMParams } from '../utils/utm';
import { formatPrice } from '../utils/formatting';
import { Footer } from '../components/Footer';
import type { FormData as FormDataType } from '../types/index';

const product = {
    name: 'NeuroFocus Max',
    price: 97,
    originalPrice: 194,
    features: [
        'Cápsulas para 30 dias',
        'Entrega Expressa (2-3 dias úteis)',
        'Rastreamento de envio incluso',
        '30 dias de garantia sem riscos',
        'Suporte via chat 24/7',
    ],
};

function CheckoutContent() {
    const router = useRouter();
    const { utmParams } = useUTMParams();
    const { formData, updateField, isValid } = useFormData();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');
    const [quantity, setQuantity] = useState(1);

    const totalPrice = product.price * quantity;

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        setError('');

        if (!isValid()) {
            setError('Por favor, preencha validamente todos os campos obrigatórios.');
            return;
        }

        setIsProcessing(true);

        try {
            
            await new Promise((resolve) => setTimeout(resolve, 2000));
            saveUTMParams(utmParams);
            const thankYouLink = `/obrigado${generatedUTMQueryString(utmParams)}`;
            router.push(thankYouLink);

        } catch (err) {
            setError('Erro ao processar o pedido. Por favor, tente novamente.');
            console.error(err);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        
        <>
            <div className="bg-gradient-to-r from-[#ecfeff] to-[#f3f9ff] border-b border-transparent py-8">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                    <h1 className="text-4xl sm:text-5xl font-medium text-slate-900 font-montserrat">Finalizar Compra</h1>
                    <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-2xl font-nunito">
                        Preencha seus dados abaixo para completar o pedido — entrega rápida e garantia de satisfação.
                    </p>
                </div>
            </div>

            <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="md:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100/60 shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center justify-between font-montserrat">
                                        Resumo da Compra
                                        <span className="bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm font-nunito">
                                            50% OFF
                                        </span>
                                    </h3>
                                    <div className="space-y-3 font-montserrat">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-600">Produto:</span>
                                            <span className="font-semibold text-slate-900">{product.name}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-600">Preço unitário:</span>
                                            <span className="font-semibold text-slate-900">{formatPrice(product.price)}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[#059669] font-semibold">
                                            <span>Desconto:</span>
                                            <span>-{formatPrice(product.originalPrice - product.price)}</span>
                                        </div>
                                    </div>
                                </div>

                                <fieldset className="space-y-4 border-b pb-6 pt-6">
                                    <h3 className="text-lg font-semibold text-slate-900 font-nunito">Dados Pessoais</h3>
                                    <div className="space-y-4">
                                        {(['name', 'email', 'phone'] as (keyof FormDataType)[]).map((field) => (
                                            <div key={field}>
                                                <label
                                                    htmlFor={field}
                                                    className="block text-sm font-medium text-slate-700 mb-2 capitalize font-nunito"
                                                >
                                                    {field === 'phone'
                                                        ? 'Telefone (WhatsApp)'
                                                        : field === 'name'
                                                        ? 'Nome completo *'
                                                        : 'Email *'}
                                                </label>
                                                <input
                                                    type={field === 'email' ? 'email' : 'text'}
                                                    id={field}
                                                    value={formData[field] || ''}
                                                    onChange={(e) => updateField(field, e.target.value)}
                                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent outline-none transition placeholder-slate-400 text-gray-900"
                                                    placeholder={
                                                        field === 'phone'
                                                            ? '(11) 99999-9999'
                                                            : field === 'name'
                                                            ? 'Anderson Melo'
                                                            : 'seu@email.com'
                                                    }
                                                    required={field !== 'phone'}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>

                                <fieldset className="space-y-4 border-b pb-6 pt-6">
                                    <h3 className="text-lg font-semibold text-slate-900 font-montserrat">Método de Pagamento</h3>
                                    <div className="space-y-3">
                                        {['pix', 'boleto', 'card'].map((method) => (
                                            <label
                                                key={method}
                                                className="flex items-center p-4 border border-slate-200 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow bg-white/90 font-nunito"
                                            >
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value={method}
                                                    defaultChecked={method === 'pix'}
                                                    className="w-4 h-4 text-[#059669]"
                                                />
                                                <span className="ml-3 flex-1">
                                                    <span className="font-semibold text-slate-900 capitalize">
                                                        {method === 'pix'
                                                            ? 'PIX Imediato'
                                                            : method === 'boleto'
                                                            ? 'Boleto Bancário'
                                                            : 'Cartão de Crédito'}
                                                    </span>
                                                    <p className="text-sm text-slate-500">
                                                        {method === 'pix'
                                                            ? 'Aprovação instantânea'
                                                            : method === 'boleto'
                                                            ? 'Vence em 3 dias úteis'
                                                            : 'Parcelado em até 12x'}
                                                    </p>
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>

                                <div className="flex items-start space-x-3 pt-4">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        required
                                        className="w-4 h-4 mt-1 border border-slate-300 rounded text-[#059669]"
                                    />
                                    <label htmlFor="terms" className="text-sm text-slate-600 font-montserrat" >
                                        Concordo com os{' '}
                                        <a href="#" className="text-[#059669] hover:underline">
                                            Termos de Uso
                                        </a>{' '}
                                        e a{' '}
                                        <a href="#" className="text-[#059669] hover:underline font-nunito">
                                            Política de Privacidade
                                        </a>
                                    </label>
                                </div>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                                        <p className="text-sm text-red-700">{error}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-gradient-to-r from-[#0f766e] to-[#06b6d4] text-white font-semibold py-4 px-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed text-lg font-nunito"
                                >
                                    {isProcessing ? 'Processando...' : `Finalizar Compra - ${formatPrice(totalPrice)}`}
                                </button>

                                <p className="text-center text-sm text-gray-500 pt-2">
                                    ✓ 100% Seguro • Pagamento Encriptado • Garantia de 30 dias
                                </p>
                            </form>
                        </div>

                        <div className="md:col-span-1">
                            <div className="bg-gradient-to-b from-white/70 to-slate-50 rounded-3xl p-6 sticky top-6 shadow-lg border border-slate-100">
                                <h3 className="text-lg font-semibold text-slate-900 mb-6">Seu Pedido</h3>

                                <div className="w-full h-44 bg-gradient-to-br from-[#ecfeff] to-[#eef2ff] rounded-2xl flex items-center justify-center mb-6">
                                    <div className="text-8xl">💊</div>
                                </div>

                                <div className="space-y-4 mb-6 border-b border-slate-100 pb-6 font-montserrat">
                                    <div className="flex justify-between transition-all duration-300">
                                        <span className="text-slate-500">Subtotal:</span>
                                        <span className="font-bold text-slate-900">{formatPrice(totalPrice)}</span>
                                    </div>
                                    <div className="flex justify-between text-[#059669] font-semibold transition-all duration-300">
                                        <span>Desconto (50%):</span>
                                        <span>-{formatPrice((product.originalPrice - product.price) * quantity)}</span>
                                    </div>
                                    <div className="flex justify-between transition-all duration-300">
                                        <span className="text-slate-500">Frete:</span>
                                        <span className="font-bold text-slate-900">Grátis!</span>
                                    </div>
                                </div>

                                <div className="flex justify-between mb-6 text-xl sm:text-2xl font-extrabold transition-all duration-300 text-black font-light font-nunito">
                                    <span>Total:</span>
                                    <span className="text-[#059669]">{formatPrice(totalPrice)}</span>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-slate-100">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <span className="text-[#059669] text-lg mt-0.5">✓</span>
                                            <span className="text-slate-500 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function CheckoutPage() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col font-montserrat">
            <Suspense fallback={<div className="p-8">Carregando...</div>}>
                <CheckoutContent />
            </Suspense>
            <Footer />
        </div>
    );
}
