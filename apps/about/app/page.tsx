import { CoreValues } from "@/components/CoreValues";
import Image from "next/image";
import ManPhoto from "@/assets/man.jpg";
import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Building the future of technology with innovation and excellence
          </p>
          <Link
            className="mt-8 text-lg font-bold underline hover:text-gray-300"
            href={"/"}
          >
            Home
          </Link>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                We are passionate about creating innovative solutions that
                empower businesses and individuals to achieve their goals. With
                years of experience and a dedicated team of experts, we strive
                to deliver excellence in everything we do.
              </p>
              <p className="text-gray-600">
                Our commitment to quality and customer satisfaction has made us
                a trusted partner for organizations worldwide.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={ManPhoto.src}
                alt="Our Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValues />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
