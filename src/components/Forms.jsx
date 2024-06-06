import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Forms = () => {
    const [name, setName] = useState("");
    const [name_constructora, setName_Constructora] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState(""); // Nuevo campo: Asunto
    const [description, setDescription] = useState(""); // Nuevo campo: Descripción
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = (email) => {
        // Expresión regular para validar el formato de correo electrónico básico
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setIsValidEmail(false);
            return;
        }

        // Maneja el envío del formulario (por ejemplo, enviar un correo electrónico)
        console.log("Correo electrónico:", email);
        console.log("Nombre:", name);
        console.log("Nombre de su constructora::", name_constructora);
        console.log("Asunto:", subject);
        console.log("Descripción:", description);

        // Abre la ventana de chat de WhatsApp con el mensaje predefinido
        const ccinnovaMessage = `¡Hola CCINNOVA! Estamos interesados en contratar sus servicios para un proyecto de construcción. A continuación, nuestros detalles:
    
Correo electrónico: ${email}
Nombre: ${name}
Nombre de su constructora: ${name_constructora}
Asunto: ${subject}
Descripción: ${description}

Esperamos su pronta respuesta. ¡Gracias!`;

        const encodedMessage = encodeURIComponent(ccinnovaMessage);
        const url = `https://wa.me/3023666885?text=${encodedMessage}`;
        window.open(url, "_blank").focus();
    };

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                // Validación: solo letras (sin números ni caracteres especiales)
                setName(e.target.value.replace(/[^A-Za-z\s]/g, ""));
                break;
            case "name_constructora":
                setName_Constructora(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                setIsValidEmail(true); // Restablecer el estado de validación
                break;
            case "subject":
                setSubject(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="bg-white rounded-xl w-full pl-3 pr-3">
            <br/>
            <h1 className="place-content-center text-4xl font-bold md:text-5xl lg:text-6xl">Contáctanos</h1>
            <br/>
            <div className="p-2">
                <form onSubmit={handleSubmit}>
                    {/* Campo de nombre */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={name}
                        onChange={handleChange}
                        className="w-full p-5 mb-5 border border-gray-300 rounded-lg box-border font-sans"
                    />
                    <br/>
                    <br/>
                    {/* Campo de nombre de constructora */}
                    <input
                        type="text"
                        name="name_constructora"
                        placeholder="Nombre de la Constructora"
                        value={name_constructora}
                        onChange={handleChange}
                        className="w-full p-5 mb-5 border border-gray-300 rounded-lg box-border font-sans"
                    />
                    <br/>
                    <br/>
                    {/* Campo de correo electrónico */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={handleChange}
                        className={`w-full p-5 mb-5 border ${
                            isValidEmail ? "border-gray-300" : "border-red-500"
                        } rounded-lg box-border font-sans`}
                    />
                    <br/>
                    <br/>
                    {!isValidEmail && (
                        <p className="text-red-500">Ingresa un correo electrónico válido.</p>
                    )}

                    {/* Campo de asunto */}
                    <input
                        type="text"
                        name="subject"
                        placeholder="Asunto"
                        value={subject}
                        onChange={handleChange}
                        className="w-full p-5 mb-5 border border-gray-300 rounded-lg box-border font-sans"
                    />
                    <br/>
                    <br/>
                    {/* Campo de descripción */}
                    <textarea
                        name="description"
                        placeholder="Descripción"
                        value={description}
                        onChange={handleChange}
                        className="w-full p-5 mb-5 border border-gray-300 rounded-lg box-border font-sans"
                    />
                    <br/>
                    <br/>
                    {/* Botón de envío */}
                    <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-600 text-white text-primary-foreground hover:bg-primary/90 py-1 px-2.5 rounded flex items-center w-full font-semibold"
                    >
                        ¡Descubra el siguiente paso!
                        <ArrowRight className="ml-1 h-5 w-5" />
                    </button>
                    <br/>
                </form>
            </div>
            
        </div>
    );
};

export default Forms;
