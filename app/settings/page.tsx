import Header from "../components/Header";
export default function SettingsPage() {
    return (
        <div>
          <Header />
        <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-blue-600">Paramètres</h1>
  
        {/* Section Informations personnelles */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Informations personnelles</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-sm text-gray-600">Nom complet</span>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="Jean Dupont"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-600">Adresse email</span>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="jean.dupont@example.com"
              />
            </label>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
            Enregistrer
          </button>
        </section>
  
        {/* Section Notifications */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Notifications</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="h-5 w-5 text-blue-600 rounded focus:ring focus:ring-blue-200" />
              <span className="text-gray-700">Recevoir des emails de notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="h-5 w-5 text-blue-600 rounded focus:ring focus:ring-blue-200" />
              <span className="text-gray-700">Recevoir des alertes par SMS</span>
            </label>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
            Enregistrer
          </button>
        </section>
  
        {/* Section Changer le mot de passe */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Changer le mot de passe</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-sm text-gray-600">Ancien mot de passe</span>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="••••••••"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-600">Nouveau mot de passe</span>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="••••••••"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-600">Confirmer le nouveau mot de passe</span>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="••••••••"
              />
            </label>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
            Changer le mot de passe
          </button>
        </section>
      </div>
      </div>
    );
  }
  