import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me - Brostito Antares" },
    { name: "description", content: "Learn more about Brostito Antares" },
  ];
}

export default function About() {
  return (
    <main className="pt-16 p-4 container mx-auto max-w-4xl">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed">
            Welcome to my portfolio! I'm Brostito Antares, a passionate developer and designer 
            dedicated to creating beautiful and functional digital experiences.
          </p>
        </div>
      </div>
    </main>
  );
}
