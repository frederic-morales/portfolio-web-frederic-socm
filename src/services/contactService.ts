import emailjs from '@emailjs/browser';

// Definimos la interfaz que ya tenías
export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (data: ContactMessage) => {
  // Estos IDs deben ir en tu archivo .env por seguridad
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    name: data.name,
    email: data.email,
    message: data.message,
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return response;
  } catch (error) {
    throw new Error('Error al enviar el correo a través de EmailJS');
  }
};