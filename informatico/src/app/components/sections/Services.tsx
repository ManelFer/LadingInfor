import Image from "next/image";

import { Code, Lightbulb, TrendingUp } from "lucide-react";
import Foto4 from "../../../../public/foto4.jpeg"

export default function Services(){
    const services = [
        {
            icon: <Code size={64} />,
            title: "Desenvolvimento de sites",
            description: "Desenvolvimento de sites responsivos e seguros para qualquer tipo de negocio."
        },
        {
            icon: <TrendingUp size={64} />,
            title: "Manutenção em desktops, notebooks e servidores",
            description: "Manutenção preventiva e corretiva em desktops, notebooks e servidores."
        },
        {
            icon: <Lightbulb size={64} />,
            title: "Manutenção em celulares e tablets",
            description: "Manutenção preventiva e corretiva em celulares e tablets."
        },
    ];

    return (
        <section id="services" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Nossos serviços
                        </h2>
                        <div className="grid gap-8">
                            {services.map((service, index)=> (
                                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                                    <div className="text-primary">{service.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px]">
                        <Image
                            src={Foto4}
                            alt="Serviços"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}