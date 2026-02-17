export default function Benefits() {

  return (

    <section className="bg-[#EDE9E2] w-full py-20 lg:mt-2">
      <div className="w-[90%] lg:w-[85%] mx-auto text-black">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Por que NeuroFocus Max funciona?
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="flex flex-col gap-10 text-center lg:text-left max-w-md">

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                🧠 Fórmula Científica Avançada
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Desenvolvido com anos de pesquisa utilizando os melhores ingredientes naturais que combinam sinergicamente para potencializar sua cognição de forma rápida e segura.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                🌿 100% Natural e Seguro
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Toda a fórmula vem de ingredientes naturais certificados, sem aditivos artificiais, estimulantes danosos ou contaminantes.
              </p>
            </div>

          </div>

          <div className="flex gap-6">
            <div className="w-40 h-64 sm:w-48 sm:h-72 md:w-56 md:h-80 bg-white rounded-2xl shadow-md" />
            <div className="w-40 h-64 sm:w-48 sm:h-72 md:w-56 md:h-80 bg-white rounded-2xl shadow-md" />
          </div>

          <div className="flex flex-col gap-10 text-center lg:text-left max-w-md">

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                ⚡ Absorção Ultrarrápida
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Tecnologia de absorção acelerada garante que os nutrientes cheguem à sua corrente sanguínea em apenas 30 minutos, deixando você pronto para enfrentar o dia.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                ✅ Aprovado e Testado
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Passou por rigorosos testes de qualidade e possui respaldo de múltiplos estudos clínicos independentes que comprovam sua efetividade.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
