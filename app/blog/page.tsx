import Link from 'next/link';
import React from 'react'
import Header from '../components/Header';

export async function getPosts() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`);
        console.log("mon API URL:", process.env.NEXT_PUBLIC_WORDPRESS_API_URL); // Vérifie la valeur ici

        
        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!Array.isArray(data)) {
            console.error("Unexpected API response:", data);
            return [];
        }
        
        return data;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}

const Blog = async () => {
    const posts = await getPosts();
    
    if (!posts.length) {
        return (
            <div>
                <h1>Nos articles de Blog</h1>
                <p>Aucun article trouvé.</p>
            </div>
        );
    }

    return (
       <div>
         <Header/>
        <div className="min-h-screen bg-blue-50 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
            Nos articles de Blog
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-2"
              >
                <div className="relative">
                  {/* Image de couverture */}
                  <img
                    src={post.featured_image || "https://via.placeholder.com/300x200"} 
                    alt={post.title.rendered}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  {/* Icône */}
                  <div className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20l9-9-9-9-9 9 9 9z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  {/* Titre */}
                  <h2 className="text-xl font-semibold text-blue-600 group-hover:text-blue-500 transition duration-300">
                    {post.title.rendered}
                  </h2>
                  {/* Extrait */}
                  <p
                    className="mt-4 text-gray-600 text-sm group-hover:text-gray-800 transition duration-300"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  ></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
       </div>
    );
};

export default Blog;
