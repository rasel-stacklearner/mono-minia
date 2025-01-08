import { Zap, Shield, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Secure Login Solutions for Your Application
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  GoodLogin provides robust, easy-to-implement authentication
                  services to keep your users safe and your data secure.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-purple-600 text-white hover:bg-purple-700 h-10 py-2 px-4"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-purple-200 hover:bg-purple-50 h-10 py-2 px-4"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-50 via-pink-50 to-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose GoodLogin?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Fast Integration</h3>
                <p className="text-gray-600">
                  Implement secure login in minutes, not days.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Shield className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Top-Notch Security</h3>
                <p className="text-gray-600">
                  State-of-the-art encryption and security practices.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Users className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">User-Friendly</h3>
                <p className="text-gray-600">
                  Smooth login experience for your users.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-tr from-pink-50 via-purple-50 to-pink-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Secure Your App?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Join thousands of developers who trust GoodLogin for their
                  authentication needs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-purple-600 text-white hover:bg-purple-700 h-10 py-2 px-4"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
