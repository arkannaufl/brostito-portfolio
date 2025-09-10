import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Brostito Antares - Portfolio" },
    { name: "description", content: "Welcome to Brostito Antares portfolio website" },
  ];
}

export default function Home() {
  return (
    <main className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-medium mb-6">
          <span className="text-[#B3B4BB]">Hello, I'm</span> <span className="text-[#363636]">Antares</span> <span className="text-[#363636]">who loves perfect design & unique user experiences.</span>
        </h1>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#"
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            View My CV
          </a>
          <a
            href="#"
            className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Copy Email
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
            <div className="text-gray-600">Years Of Experiences</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
            <div className="text-gray-600">Works</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">40+</div>
            <div className="text-gray-600">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-gray-600">Certificates</div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="mb-20">
          <div className="relative overflow-hidden">
            <div className="flex items-center space-x-8 md:space-x-12 animate-scroll">
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/spotify-logo.svg" alt="Spotify" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/twitch-logo.svg" alt="Twitch" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/behance-logo.svg" alt="Behance" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/youtube-logo.svg" alt="YouTube" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/zoom-logo.svg" alt="Zoom" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/linkedin-logo.svg" alt="LinkedIn" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/apple-music-logo.svg" alt="Apple Music" className="h-8 md:h-10" />
              </a>
              {/* Duplicate for seamless loop */}
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/spotify-logo.svg" alt="Spotify" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/twitch-logo.svg" alt="Twitch" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/behance-logo.svg" alt="Behance" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/youtube-logo.svg" alt="YouTube" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/zoom-logo.svg" alt="Zoom" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/linkedin-logo.svg" alt="LinkedIn" className="h-8 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
                <img src="/assets/apple-music-logo.svg" alt="Apple Music" className="h-8 md:h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
