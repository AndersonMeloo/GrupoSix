import Image from "next/image";

export default function Benefits() {

  return (

    <section className="bg-[#EDE9E2] w-full py-20 lg:mt-2">
      <div className="w-[90%] lg:w-[85%] mx-auto text-black">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-16 font-montserrat">
          Por que nossa
          <br />
          fórmula funciona?
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="flex flex-col gap-10 text-center lg:text-left max-w-md">

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 font-nunito">
                Fórmula Científica Avançada
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-montserrat">
                Desenvolvido com anos de pesquisa utilizando os melhores ingredientes naturais que combinam sinergicamente para potencializar sua cognição de forma rápida e segura.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 font-nunito">
                100% Natural e Seguro
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-montserrat">
                Toda a fórmula vem de ingredientes naturais certificados, sem aditivos artificiais, estimulantes danosos ou contaminantes.
              </p>
            </div>

          </div>

          <div className="flex gap-6 [@media(min-width:320px)_and_(max-width:375px)]:flex-col">
            <div className="relative w-40 h-64 sm:w-48 sm:h-72 md:w-56 md:h-80 bg-white rounded-2xl shadow-md">
              <Image
                src="/capsula.jpg"
                fill
                className="object-cover rounded-2xl"
                alt="Cápsula"
                quality={100}
              />

            </div>
            <div className="relative w-40 h-64 sm:w-48 sm:h-72 md:w-56 md:h-80 bg-white rounded-2xl shadow-md">
              <Image
                src="/capsula1.webp"
                fill
                className="object-cover rounded-2xl"
                alt="Cápsula"
                quality={100}
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 text-center lg:text-left max-w-md">

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 font-nunito">
                Absorção Ultrarrápida
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-montserrat">
                Tecnologia de absorção acelerada garante que os nutrientes cheguem à sua corrente sanguínea em apenas 30 minutos, deixando você pronto para enfrentar o dia.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 font-nunito">
                Aprovado e Testado
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-montserrat">
                Passou por rigorosos testes de qualidade e possui respaldo de múltiplos estudos clínicos independentes que comprovam sua efetividade.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
