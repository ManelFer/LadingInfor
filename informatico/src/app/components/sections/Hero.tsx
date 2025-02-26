import Image from "next/image";
import Foto1 from "../../../../public/foto1.jpg"

export default function Hero() {
    return(
        <section id="home" className="pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Transformando negócios por meio de soluções inovadoras
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Nossa equipe de especialistas em tecnologia oferece soluções personalizadas para ajudar empresas a alcançar seus objetivos de negócio.
                        </p>
                        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-400 hover:text-black transition-colors">
                            Entre em contato
                        </button>
                    </div>
                    <div className="relative h-[400px]">
                        <Image
                            src={Foto1}
                            alt="Informatico"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}