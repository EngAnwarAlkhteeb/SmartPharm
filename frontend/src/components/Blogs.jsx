import React, { useState } from "react";
import BlogCard from "../layouts/BlogCard";
import Button from "../layouts/Button";
import blogs from "../data/blogs";
import BlogModal from "./BlogModal";

const datas = [
  {
    img: img1,
    headlines: "Unraveling the Mysteries of Sleep",
    description:
      "Discover how quality sleep affects your body and ways to improve it.",
  },
  {
    img: img2,
    headlines: "The Heart-Healthy Diet",
    description:
      "Learn about foods that promote cardiovascular health and energy.",
  },
  {
    img: img3,
    headlines: "Understanding Pediatric Vaccinations",
    description:
      "Everything parents need to know about vaccines and child immunity.",
  },
  {
    img: img4,
    headlines: "Navigating Mental Health",
    description:
      "Tips and insights on managing stress, anxiety, and emotional wellness.",
  },
  {
    img: img5,
    headlines: "The Importance of Regular Exercise",
    description:
      "Why staying active matters and how to build a simple workout routine.",
  },
  {
    img: img6,
    headlines: "Skin Health 101",
    description:
      "From hydration to SPF — how to keep your skin healthy every day.",
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Get the first 3 blogs for display
  const displayedBlogs = blogs.slice(0, 3);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Medical Posts
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Stay informed with the latest research, health tips, and medical breakthroughs
            Explore helpful articles, health tips, and updates from our medical
            team.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="More Articles" />
        </div>
      </div>


      <div className="flex flex-col md:flex-row gap-5 pt-14">
        {displayedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            img={blog.image}
            title={blog.title}
            description={blog.summary}
            onClick={() => handleBlogClick(blog)}
          />
        ))}
        <div className="my-8">
          <div className="flex flex-wrap justify-center gap-5">
            {datas.map((data, index) => (
              <BlogCard
                key={index}
                {...data}
              />
            ))}
          </div>
        </div>

        {/* Blog Modal */}
        {selectedBlog && (
          <BlogModal blog={selectedBlog} onClose={closeModal} />
        )}
      </div>
    </div>
  );
}

export default Blogs;

