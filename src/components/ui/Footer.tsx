const Footer = () => {
    const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini
  
    return (
      <footer className="bg-gray-100 text-center py-6 mt-16 text-xs text-gray-600"> {/* Styling dasar */}
        <p>
          © {currentYear} gaianata | hello@gaianata.id | ALL RIGHTS RESERVED
        </p>
      </footer>
    );
  };
  
  export default Footer;