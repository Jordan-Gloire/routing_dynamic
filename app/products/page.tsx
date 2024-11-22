import Link from "next/link";
import Header from "../components/Header";
async function  getAllProduct(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_URL}`);
    const data = await response.json();
    return data;
}

export default async function page() {
    const products = await getAllProduct();
    console.log("mes donées", products);
    
    return (
       <div>
         <Header />
        <div className="max-w-7xl mx-auto py-10 px-4">
  <h1 className="text-4xl font-bold text-blue-600 mb-12 text-center">
    Liste des Produits
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {products.map((product: any) => (
      <div
        key={product.id}
        className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out overflow-hidden"
      >
        <Link href={`/products/${product.id}`}>
          <div className="relative group">
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Quick View */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <span className="text-white text-sm bg-blue-600 px-3 py-1 rounded-full">
                Voir Détails
              </span>
            </div>
          </div>
          {/* Product Info */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              {product.title}
            </h3>
            <p className="text-sm text-gray-600 truncate">{product.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-blue-600 font-semibold">{product.category}</span>
              <span className="text-lg font-bold text-gray-900">$ {product.price}</span>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>
       </div>

    );
}
