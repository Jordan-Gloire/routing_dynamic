import Link from 'next/link';
import React from 'react'
import Header from '../components/Header';
async function getUsers() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USERS_API_URL}`);
    const data = await response.json();
    return data;
}

const Users = async () => {
    const users = await getUsers();
    return (
       <div>
         <Header/>
        <div className="max-w-4xl mx-auto py-12 px-6 bg-gray-50 rounded-lg shadow-lg">
        {/* Titre */}
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Liste des Utilisateurs
        </h1>

        {/* Liste des utilisateurs */}
        <ul className="space-y-4">
            {users.map((user: any) => (
            <li key={user.id}>
                <Link
                href={`/users/${user.id}`}
                className="block bg-white hover:bg-blue-100 rounded-lg p-4 shadow transition duration-300 ease-in-out"
                >
                <div className="flex items-center space-x-4">
                    {/* Avatar aléatoire */}
                    <div className="flex-shrink-0">
                    <img
                        src={`https://i.pravatar.cc/50?img=${user.id}`}
                        alt={user.name?.firstname}
                        className="w-12 h-12 rounded-full border border-blue-200 shadow-sm"
                    />
                    </div>
                    {/* Informations utilisateur */}
                    <div>
                    <p className="text-lg font-semibold text-gray-800">
                        {user.name?.firstname} {user.name?.lastname}
                    </p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm text-gray-500">{user.phone}</p>
                    </div>
                </div>
                </Link>
            </li>
            ))}
        </ul>
        </div>
       </div>

    );
};

export default Users