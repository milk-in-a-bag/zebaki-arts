import ContactHeader from "../components/headers/ContactHeader";
import ContactFooter from "../components/footers/ContactFooter";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0e10] dark:text-white transition-colors duration-300">
      <ContactHeader />
      <main className="max-w-7xl mx-auto px-6 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
      <ContactFooter />
    </div>
  );
}
