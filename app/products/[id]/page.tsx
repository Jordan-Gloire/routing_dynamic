import Header from "@/app/components/Header";

async function  detailProduct(id: string) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/${id}`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch the product");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

export default async function page({ params }: any) {
    const data = await detailProduct(params.id);
    return (
        <div className="min-h-screen bg-gray-100">
          <Header />
          <div className="max-w-6xl mx-auto py-12 px-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image du produit */}
              <div className="relative h-80 bg-gray-200">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-4 py-1 rounded-full shadow">
                  {data.category}
                </div>
              </div>
      
              {/* Informations sur le produit */}
              <div className="p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{data.name}</h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {data.description}
                </p>
      
                {/* Détails supplémentaires */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-blue-600">
                    $ {data.price}
                  </span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
}