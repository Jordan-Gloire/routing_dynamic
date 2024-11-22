import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barre latérale */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold">Mon Dashboard</h1>
        </div>
        <nav className="mt-6 flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="block px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="block px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
              >
                Utilisateurs
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
              >
                Produits
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="block px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
              >
                Paramètres
              </Link>
            </li>
          </ul>
        </nav>
        <div className="px-6 py-4">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded shadow transition">
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Zone de contenu */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4">
          <h2 className="text-xl font-bold text-gray-700">Tableau de bord</h2>
        </header>

        {/* Contenu principal */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
