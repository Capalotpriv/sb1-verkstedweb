import emailjs from '@emailjs/browser';

interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
  to_name: string;
}

export const initEmailJS = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};

export const sendEmail = async (data: EmailData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    data
  );
};