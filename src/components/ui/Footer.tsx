// src/components/ui/Footer.tsx

// --- PERUBAHAN: Terima props 'settings' ---
const Footer = ({ settings }) => {
  const currentYear = new Date().getFullYear();

  // --- PERUBAHAN: Susun teks footer secara dinamis ---
  const footerText = settings.footer_text
    .replace('{YEAR}', currentYear)
    .replace('{EMAIL}', settings.contact_email);

  return (
    <footer className="bg-gray-100 text-center py-6 mt-16 text-xs text-gray-600">
      <p>
        {footerText}
      </p>
    </footer>
  );
};

export default Footer;