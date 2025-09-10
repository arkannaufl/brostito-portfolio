import type { Route } from "./+types/works";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Works - Brostito Antares" },
    { name: "description", content: "View my portfolio of works and projects" },
  ];
}

export default function Works() {
  return (
    <main className="pt-16 p-4 container mx-auto max-w-4xl">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project 1</h3>
            <p className="text-gray-600">Description of your first project</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project 2</h3>
            <p className="text-gray-600">Description of your second project</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project 3</h3>
            <p className="text-gray-600">Description of your third project</p>
          </div>
        </div>
      </div>
    </main>
  );
}
