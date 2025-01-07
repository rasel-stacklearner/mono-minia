import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-600">
            We d love to hear from you. Send us a message and we ll respond as
            soon as possible.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
