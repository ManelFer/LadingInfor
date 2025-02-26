'use client';

import { useState } from "react";
import Image from "next/image";
import Foto3 from "../../../../public/foto3.jpeg"

export default function Contact(){
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return(
        <section id="contact" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Entrar em contato
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    name
                                </label>
                                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})
                                } className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})
                                } className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required 
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                                 rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required 
                                ></textarea>

                            </div>
                            <button className="w-full bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-500 hover:text-black transition-colors duration-300">
                                Enviar
                            </button>
                        </form>
                    </div>
                    <div className="relative h-[400px]">
                        <Image src={Foto3} alt="Contact us" fill className="object-cover rounded-lg"/>
                    </div>
                </div>
            </div>
        </section>
    )
}