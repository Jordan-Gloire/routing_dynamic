import React from "react";
import Header from "@/app/components/Header";
async function detailuser(id: string) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_USERS_API_URL}/${id}`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch the user");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}

const page = async ({ params }: any) => {    
    const data = await detailuser(params.id);    
    return (
        <div>
            <Header />
        <div className="max-w-4xl mx-auto py-12 px-6 bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
                Profil de l'utilisateur
            </h1>
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img
                        src={`https://i.pravatar.cc/50?img=${data.id}`} 
                        alt={data.name?.firstname}
                        className="w-12 h-12 rounded-full border border-blue-200 shadow-sm"
                    />
                </div>
                <div>
                    <p className="text-lg font-semibold text-gray-800">
                        {data.name?.firstname} {data.name?.lastname}
                    </p>
                    <p className="text-gray-600">{data.email}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default page;