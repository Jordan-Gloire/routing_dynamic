import React from "react";
import Header from "@/app/components/Header";
async function detailBlog(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?slug=${slug}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch the post");
    }

    const data = await response.json();

    // Si aucun post correspondant n'est trouvé
    if (!data || data.length === 0) {
      return null;
    }

    return data[0]; // Retourne le premier post correspondant au slug
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

const Page = async ({ params }: any) => {
  const data = await detailBlog(params.slug);

  if (!data) {
    return <div className="text-center text-red-500">Article non trouvé</div>;
  }

  return (
    <div>
        <Header />
    <div className="">
        <div className="max-w-3xl mx-auto py-10 px-4  ">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        {data.title.rendered}
      </h1>
      <div
        className="text-gray-700 text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: data.content.rendered }}
      ></div>
    </div>
    </div>
    </div>
  );
};

export default Page;
