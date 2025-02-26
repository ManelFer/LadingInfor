import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return(
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Informatico</h3>
                        <p className="text-gray-400"> Transformando negócios por meio de soluções inovadoras.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contato</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-white">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#services" className="text-gray-400 hover:text-white">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4"> Contact Info</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>165 rua da compania </li>
                            <li>Nossa Senhora do Socorro, Sergipe</li>
                            <li>Telefone: (79) 9999-9999</li>
                            <li>Email: teste@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Social Media</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h6 w-6"/>
                            </a>

                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h6 w-6"/>
                            </a>

                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h6 w-6"/>
                            </a>

                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h6 w-6"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} CompanyName. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}