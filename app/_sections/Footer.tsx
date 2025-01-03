import { Mail, Phone } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Docs", href: "#" },
    { label: "Team", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  socials: [
    { label: "X", href: "#" },
    { label: "Discord", href: "#" },
    { label: "Telegram", href: "#" },
  ],
  contact: [
    { label: "FAQs", href: "#" },
    { label: "Email", href: "#" },
    { label: "Support", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className='bg-[#1B4B66] text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex max-sm:flex-col justify-end gap-32 max-sm:gap-3'>
          <div>
            <h3 className='font-semibold text-lg mb-4'>About</h3>
            <ul className='space-y-2'>
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-4'>Socials</h3>
            <ul className='space-y-2'>
              {footerLinks.socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-4'>Contact Us</h3>
            <ul className='space-y-2'>
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-12 pt-4 border-t border-gray-600 flex justify-end'>
          <p className='text-sm text-gray-300'>
            Copyright ©BADA, 2024 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
