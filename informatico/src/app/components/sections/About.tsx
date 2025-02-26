import Image from "next/image";
import Foto2 from "../../../../public/foto2.jpg";

export default function About() {
    return (
        <section id="about" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px]">
                        <Image
                            src={Foto2}
                            alt="Informatico"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre nós</h2>
                        <p className="text-gray-600 mb-6">
                        Com anos de experiência e paixão pela excelência, ajudamos
                        Inúmeros negócios atingem seus objetivos. Nossa equipe de especialistas é
                            dedicado a fornecer resultados excelentes.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Missão
                                </h3>
                                <p className="text-gray-600">
                                    Nossa missão e ajudar empresas a alcançar seus objetivos de negócios
                                    com soluções inovadoras.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Valores
                                </h3>
                                <p className="text-gray-600">
                                    Nossa equipe de especialistas em tecnologia oferece soluções
                                    personalizadas para ajudar empresas a alcancar seus objetivos de negócios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}