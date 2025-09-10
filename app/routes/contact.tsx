import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - Brostito Antares" },
    { name: "description", content: "Get in touch with Brostito Antares" },
  ];
}

export default function Contact() {
  return (
    <main className="pt-16 p-4 container mx-auto max-w-4xl">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>
        <div className="max-w-2xl">
          <p className="text-gray-600 mb-8">
            Feel free to reach out if you'd like to work together or just say hello!
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">brostito@example.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
