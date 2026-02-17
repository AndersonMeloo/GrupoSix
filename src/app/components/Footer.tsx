import Link from "next/link";
import { Instagram, Youtube, Linkedin, AppWindow } from "lucide-react";

interface FooterProps {
    disclaimerText?: string;
}

export function Footer({ disclaimerText }: FooterProps) {
    return (

        <>
            <footer className="bg-[#f3f3f3] text-gray-700 pt-16 pb-8">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-4 gap-12 mb-16">

                        <div>
                            <h2 className="text-4xl font-bold text-black mb-6">
                                Grupo<span className="text-blue-600">Six</span>
                            </h2>

                            <p className="text-xl font-semibold mb-2">
                                (11) 98873-0794
                            </p>
                            <p className="text-sm text-gray-500 mb-6">
                                Segunda a Sexta: 9h às 18h
                            </p>
                        </div>

                        {/* <div>
                            <h3 className="text-blue-600 font-semibold mb-4 uppercase tracking-wide text-sm">
                                Company
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="#">Sobre</Link></li>
                                <li><Link href="#">Serviços</Link></li>
                                <li><Link href="#">Equipe</Link></li>
                                <li><Link href="#">Blog</Link></li>
                                <li><Link href="#">Contato</Link></li>
                            </ul>
                        </div> */}

                        <div>
                            <h3 className="text-blue-600 font-semibold mb-4 uppercase tracking-wide text-sm">
                                Informações Legais
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="#">Política de Privacidade</Link></li>
                                <li><Link href="#">Termos & Condições</Link></li>
                                <li><Link href="#">Cookies</Link></li>
                                <li><Link href="#">FAQ</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-blue-600 font-semibold mb-4 uppercase tracking-wide text-sm">
                                Redes Sociais
                            </h3>

                            <div className="flex gap-4 mb-6">
                                <a
                                    href="https://portfolio-anderson-nine.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="text-gray-700 hover:text-blue-600 transition"
                                >
                                    <AppWindow />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/andersonrodriguesmelo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-gray-700 hover:text-blue-600 transition"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>

                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className="text-gray-700 hover:text-blue-600 transition"
                                >
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="border-t border-gray-300 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>
                            © {new Date().getFullYear()} GrupoSix Max. Todos os direitos reservados.
                        </p>

                        <div className="flex gap-6">
                            <Link href="/politica-privacidade" className="hover:text-black">
                                Política de Privacidade
                            </Link>
                            <Link href="/termos-uso" className="hover:text-black">
                                Termos de Uso
                            </Link>
                        </div>
                    </div>

                    {disclaimerText && (
                        <div className="mt-8 text-xs text-gray-400 leading-relaxed border-t border-gray-200 pt-6">
                            {disclaimerText}
                        </div>
                    )}
                </div>
            </footer>
        </>
    );
}
