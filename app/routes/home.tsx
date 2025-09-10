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
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium mb-12 tracking-tight" data-aos="fade-up" data-aos-delay="50">
          <span className="text-[#B3B4BB]">Hello, </span> <span className="text-[#363636]">I'm Antares</span>
          <br />
          <span className="text-[#363636]">who loves perfect design&</span>
          <br />
          <span className="text-[#363636]">unique user experiences.</span>
        </h1>
        
        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center md:mb-16" data-aos="fade-up" data-aos-delay="150">
          <a
            href="#"
            className="bg-[#363636] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#616161] transition-colors"
          >
            View My CV
          </a>
          <a
            href="#"
            className="border border-gray-300 text-[#363636] hover:text-[#616161] px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Copy Email
          </a>
        </div>

      </div>

      {/* Stats Section - Full Width */}
      <div className="w-full max-w-7xl mx-auto flex justify-center items-center mb-12 py-8 px-6" data-aos="fade-up" data-aos-delay="200">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-36">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#363636] mb-2">3+</div>
            <div className="text-[#979797]">Years Of Experiences</div>
          </div>
          <div className="w-full h-px md:w-px md:h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#363636] mb-2">3+</div>
            <div className="text-[#979797]">Works</div>
          </div>
          <div className="w-full h-px md:w-px md:h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#363636] mb-2">40+</div>
            <div className="text-[#979797]">Projects</div>
          </div>
          <div className="w-full h-px md:w-px md:h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#363636] mb-2">3</div>
            <div className="text-[#979797]">Certificates</div>
          </div>
        </div>
      </div>

      {/* Company Logos Section - Full Width */}
      <div className="w-full px-10 md:mb-20" data-aos="fade-up" data-aos-delay="250">
        <div className="relative overflow-hidden">
          <div className="flex items-center space-x-12 md:space-x-16 lg:space-x-20 xl:space-x-24 animate-scroll">
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/spotify-logo.svg" alt="Spotify" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/twitch-logo.svg" alt="Twitch" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/behance-logo.svg" alt="Behance" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/youtube-logo.svg" alt="YouTube" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/zoom-logo.svg" alt="Zoom" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/linkedin-logo.svg" alt="LinkedIn" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/apple-music-logo.svg" alt="Apple Music" className="h-10 md:h-12" />
            </a>
            {/* Duplicate for seamless loop */}
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/spotify-logo.svg" alt="Spotify" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/twitch-logo.svg" alt="Twitch" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/behance-logo.svg" alt="Behance" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/youtube-logo.svg" alt="YouTube" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/zoom-logo.svg" alt="Zoom" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/linkedin-logo.svg" alt="LinkedIn" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/apple-music-logo.svg" alt="Apple Music" className="h-10 md:h-12" />
            </a>
            {/* Additional logos for longer scroll */}
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/spotify-logo.svg" alt="Spotify" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/twitch-logo.svg" alt="Twitch" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/behance-logo.svg" alt="Behance" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/youtube-logo.svg" alt="YouTube" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/zoom-logo.svg" alt="Zoom" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/linkedin-logo.svg" alt="LinkedIn" className="h-10 md:h-12" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0">
              <img src="/assets/apple-music-logo.svg" alt="Apple Music" className="h-10 md:h-12" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Showcase Section */}
      <div id="projects" className="max-w-7xl mx-auto py-20 px-6" data-aos="fade-up" data-aos-delay="300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Healthy In Project Card */}
          <div className="lg:col-span-7 bg-[#1F222A] rounded-2xl overflow-hidden relative group cursor-pointer" data-aos="fade-right" data-aos-delay="350">
            <div className="pt-8 pl-8">
              <img 
                src="/assets/healthyin-projects.png" 
                alt="Healthy In Hospital Management System Dashboard" 
                className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent p-6 lg:p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1">
                  Healty In : Hospital Management System Dashboard
                </h3>
                <p className="text-gray-400 text-sm lg:text-base">Work 2025</p>
              </div>
            </div>
          </div>

          {/* Drivo Project Card */}
          <div className="lg:col-span-5 bg-[#3596FF] rounded-2xl overflow-hidden relative flex items-end justify-center group cursor-pointer" data-aos="fade-left" data-aos-delay="400">
            <img 
              src="/assets/drivo-projects.png" 
              alt="Drivo One Stop Solution for Vehicle & Transportation Needs" 
              className="h-auto w-3/5 mt-10 sm:mt-0 sm:w-2/3 lg:w-2/4 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent p-6 lg:p-10 h-60 lg:h-80 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
              <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-0 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1">
                  Drivo : One Stop Solution for Vechile & Transpotations Needs
                </h3>
                <p className="text-blue-100 text-sm lg:text-base">Case Study 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore My Offerings Section */}
      <div className="max-w-7xl mx-auto py-20 px-6" data-aos="fade-up" data-aos-delay="450">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-4xl lg:text-5xl font-medium mb-6">
            <span className="text-[#363636]">Explore</span> <span className="text-[#B3B4BB]">My Offerings</span> <span className="text-[#363636]">for You</span>
          </h2>
          <p className="text-[#979797] text-lg max-w-2xl mx-auto">
            Explore personalized designs crafted with passion, detail, and purpose for meaningful experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* UI Design Card */}
          <div className="bg-white border-1 border-[#ECECEC] rounded-2xl p-5" data-aos="fade-up" data-aos-delay="550">
            <div className="w-14 h-14 bg-white border-1 border-[#ECECEC] rounded-full flex items-center justify-center mb-6">
            <img
                  src="/assets/ui-design.svg"
                  alt="UI Design"
                  className="w-7 h-8"
                />
            </div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2">User Interface Design</h3>
            <p className="text-[#979797]">Creating aesthetic and functional interfaces.</p>
          </div>

          {/* UX Design Card */}
          <div className="bg-white border-1 border-[#ECECEC] rounded-2xl p-5" data-aos="fade-up" data-aos-delay="600">
            <div className="w-14 h-14 bg-white border-1 border-[#ECECEC] rounded-full flex items-center justify-center mb-6">
              <img
                  src="/assets/ux-design.svg"
                  alt="UX Design"
                  className="w-7 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2">User Experience Design</h3>
            <p className="text-[#979797]">Designing smooth and engaging user journeys.</p>
          </div>

          {/* Mobile App Design Card */}
          <div className="bg-white border-1 border-[#ECECEC] rounded-2xl p-5" data-aos="fade-up" data-aos-delay="650">
            <div className="w-14 h-14 bg-white border-1 border-[#ECECEC] rounded-full flex items-center justify-center mb-6">
              <img src="/assets/mobile-design.svg" about="Mobile App Design" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2">Mobile App Design</h3>
            <p className="text-[#979797]">Crafting intuitive apps for iOS & Android.</p>
          </div>

          {/* Responsive Web Design Card */}
          <div className="bg-white border-1 border-[#ECECEC] rounded-2xl p-5" data-aos="fade-up" data-aos-delay="700">
            <div className="w-14 h-14 bg-white border-1 border-[#ECECEC] rounded-full flex items-center justify-center mb-6">
              <img src="/assets/responsive-design.svg" alt="Responsive" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2">Responsive Web Design</h3>
            <p className="text-[#979797]">Building flexible, cross-device websites.</p>
          </div>

          {/* Product Prototyping Card */}
          <div className="bg-white border-1 border-[#ECECEC] rounded-2xl p-5" data-aos="fade-up" data-aos-delay="750">
            <div className="w-14 h-14 bg-white border-1 border-[#ECECEC] rounded-full flex items-center justify-center mb-6">
              <img src="/assets/product-prototyping.svg" alt="Prototyping" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2">Product Prototyping</h3>
            <p className="text-[#979797]">Transforming ideas into interactive prototypes.</p>
          </div>

          {/* Wireframing & Mockups Card */}
          <div className="bg-white border-1 border-[#ECECEC] rounded-2xl p-5" data-aos="fade-up" data-aos-delay="800">
            <div className="w-14 h-14 bg-white border-1 border-[#ECECEC] rounded-full flex items-center justify-center mb-6">
              <img src="/assets/wireframing&mockups.svg" alt="Wireframing" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2">Wireframing & Mockups</h3>
            <p className="text-[#979797]">Visualizing concepts with clear structures.</p>
          </div>
        </div>
      </div>

      {/* Experiences Section */}
      <div className="max-w-7xl mx-auto mb-20 px-6" data-aos="fade-up" data-aos-delay="850">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="900">
            <h2 className="text-4xl lg:text-5xl font-medium leading-tight">
              <span className="text-[#B3B4BB]">Experiences</span> <span className="text-[#363636]">with</span><br />
              <span className="text-[#363636]">Passion, Precision</span><br />
              <span className="text-[#363636]">and Purpose</span>
            </h2>
          </div>
          <div className="text-left" data-aos="fade-left" data-aos-delay="950">
            <p className="text-[#979797] text-lg mb-6 leading-relaxed tracking-wide">
              Where Every Pixel Tells a Story: Crafting Tailored Solutions with Expertise in User Experience Design, Interface Design, and Prototyping to Elevate Your Digital Presence and Create Lasting Impressions
            </p>
            <button className="bg-[#363636] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#616161] transition-colors flex items-center gap-2">
              Let's Talk
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Works Section */}
      <div className="max-w-7xl mx-auto py-20 px-6" data-aos="fade-up" data-aos-delay="1000">
        {/* Main Project - IDN Boarding School */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="1050">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <div className="lg:col-span-1">
              <h3 className="text-xl font-medium text-[#006BFF] mb-1">IDN Boarding School, <span className="text-[#363636]">Bogor, Indonesia</span></h3>
              <div className="flex items-center">
                <div className="w-1 h-1 bg-gray-600 rounded-full mr-2"></div>
                <p className="text-[#979797] text-sm">July 2023 - Present</p>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-start lg:justify-center">
              <div className="text-left lg:text-center">
                <p className="text-[#979797]">Innovated designs, New York,</p>
                <p className="text-[#979797]">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-start lg:justify-end">
              <span className="inline-block border border-[#363636] bg-white text-[#363636] px-3 py-1 rounded-full text-sm font-medium">UI/UX</span>
            </div>
          </div>
          
          {/* Main Project Visual */}
          <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
            <img src="/assets/inovative-smart-web.png" alt="IDN Boarding School" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            {/* Gradient Overlay - Hidden by default, shown on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000] via-[#363636]/80 to-transparent p-6 lg:p-10 h-52 sm:h-80 md:h-96 lg:h-130 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
              <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-0 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1">News : Innovative News Website Smart</h4>
                <p className="text-gray-300 text-sm lg:text-base">Work 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects List */}
        <div className="space-y-6">
          {/* Darul Hikmah School */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4 border-b border-gray-200" data-aos="fade-up" data-aos-delay="1100">
            <div className="lg:col-span-1">
              <h4 className="text-xl font-medium text-[#006BFF] mb-1">Darul Hikmah School, <span className="text-[#363636]">Narathiwat, Thailand</span></h4>
              <div className="flex items-center">
                <div className="w-1 h-1 bg-gray-600 rounded-full mr-2"></div>
                <p className="text-[#979797] text-sm">February 2025 - February 2025</p>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-start lg:justify-center">
              <div className="text-left lg:text-center">
                <p className="text-[#979797]">Innovated designs, New York,</p>
                <p className="text-[#979797]">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-start lg:justify-end">
              <span className="inline-block border border-[#363636] bg-white text-[#363636] px-3 py-1 rounded-full text-sm font-medium">UI/UX</span>
            </div>
          </div>

          {/* Gumroad */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4 border-b border-gray-200" data-aos="fade-up" data-aos-delay="1150">
            <div className="lg:col-span-1">
              <h4 className="text-xl font-medium text-[#006BFF] mb-1">Gumroad <span className="text-[#363636]">Jakarta, Indonesia</span></h4>
              <div className="flex items-center">
                <div className="w-1 h-1 bg-gray-600 rounded-full mr-2"></div>
                <p className="text-[#979797] text-sm">September 2024 - Present</p>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-start lg:justify-center">
              <div className="text-left lg:text-center">
                <p className="text-[#979797]">Innovated designs, New York,</p>
                <p className="text-[#979797]">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-start lg:justify-end">
              <span className="inline-block border border-[#363636] bg-white text-[#363636] px-3 py-1 rounded-full text-sm font-medium">UI/UX</span>
            </div>
          </div>

          {/* Freepik */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4 border-b border-gray-200" data-aos="fade-up" data-aos-delay="1200">
            <div className="lg:col-span-1">
              <h4 className="text-xl font-medium text-[#006BFF] mb-1">Freepik <span className="text-[#363636]">Jakarta, Indonesia</span></h4>
              <div className="flex items-center">
                <div className="w-1 h-1 bg-gray-600 rounded-full mr-2"></div>
                <p className="text-[#979797] text-sm">March 2025 - Present</p>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-start lg:justify-center">
              <div className="text-left lg:text-center">
                <p className="text-[#979797]">Innovated designs, New York,</p>
                <p className="text-[#979797]">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-start lg:justify-end">
              <span className="inline-block border border-[#363636] bg-white text-[#363636] px-3 py-1 rounded-full text-sm font-medium">UI</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between" data-aos="fade-up" data-aos-delay="1250">
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight mb-6 lg:mb-0">
            <span className="text-[#B3B4BB]">From collaboration to</span><br />
            <span className="text-[#363636]">groundbreaking innovation</span><br />
          </h2>
          <button className="bg-[#363636] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#616161] transition-colors flex items-center gap-2 w-fit">
              Let's Talk
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div id="contact" className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-4">
                  Let's Connect
                  <span className="flex items-center gap-4 md:gap-6 mt-4">
                    There
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </span>
                </h2>
              </div>
              
              <div className="space-y-1 text-[#9E9E9E] text-lg">
                <p>Always open to connect with individuals, communities, and collaborators.</p>
                <p>Let's talk, share ideas, or explore potential partnerships.</p>
                <p>Feel free to reach out let's grow and create together!</p>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[#9E9E9E] hover:text-white transition-colors cursor-pointer">
                  <img src="/assets/mail-icon.svg" alt="Email" className="w-8 h-8" />
                  <div className="flex items-center gap-3">
                    <span className="text-xl">Email</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-[#9E9E9E] hover:text-white transition-colors cursor-pointer">
                  <img src="/assets/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8" />
                  <div className="flex items-center gap-3">
                    <span className="text-xl">Linkedin</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-[#9E9E9E] hover:text-white transition-colors cursor-pointer">
                  <img src="/assets/insta-icon.svg" alt="Instagram" className="w-8 h-8" />
                  <div className="flex items-center gap-3">
                    <span className="text-xl">Instagram</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-[#9E9E9E] hover:text-white transition-colors cursor-pointer">
                  <img src="/assets/dribbble-icon.svg" alt="Dribbble" className="w-8 h-8" />
                  <div className="flex items-center gap-3">
                    <span className="text-xl">Dribbble</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Graphic Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img src="/assets/big-star-icon.svg" alt="Star Icon" className="w-64 h-64 lg:w-120 lg:h-120" />
              </div>
            </div>
          </div>
          
          {/* Footer dengan garis memanjang */}
          <div className="pt-8 mt-12">
            <div className="border-t border-[#262626] w-full"></div>
            <div className="flex justify-between items-center pt-4">
              <p className="text-[#9E9E9E]">Created by Brostito Antares</p>
              <p className="text-[#9E9E9E]">Copyright 2025</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
