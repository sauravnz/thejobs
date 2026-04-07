/**
 * Recruiting Website - Modern Vibrant Energy Design
 * Design Philosophy: Contemporary startup aesthetic with bold color blocking,
 * dynamic gradients, and playful sophistication. Electric purple and bright orange
 * accents create visual interest while maintaining focus on the job board iframe.
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Header Section */}
      <header className="relative overflow-hidden border-b border-purple-500/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-orange-600/10" />
        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-orange-300 to-purple-300 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              Discover exciting opportunities and grow your career with us
            </p>
            <p className="text-sm text-gray-400">
              Explore open positions and apply directly below
            </p>
          </div>
        </div>
        {/* Decorative gradient blob */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </header>

      {/* Main Content */}
      <main className="relative flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-sm font-medium text-purple-200">Now Hiring</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Available Positions
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Browse our current job openings and find the perfect fit for your career goals.
            </p>
          </div>

          {/* Job Board iframe Container */}
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-sm shadow-2xl">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-orange-600/20 pointer-events-none" />
            
            {/* iframe */}
            <div className="relative z-10">
              <iframe
                src="https://theresume.io/board/theresume?embed=true"
                width="100%"
                height="900"
                style={{
                  border: "none",
                  borderRadius: "1rem",
                }}
                loading="lazy"
                title="Job Board"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/20 backdrop-blur-sm bg-gradient-to-r from-slate-950/50 to-purple-950/50">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">About Us</h3>
              <p className="text-gray-400 text-sm">
                We're building a great team of talented individuals. Join us and make an impact.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-300 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-purple-300 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Connect</h3>
              <p className="text-gray-400 text-sm">
                Have questions? Reach out to our team at careers@company.com
              </p>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Recruiting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
