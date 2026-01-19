import React, { useState } from "react";
import BlogCard from "../layouts/BlogCard";
import Button from "../layouts/Button";
import blogs from "../data/blogs";
import BlogModal from "./BlogModal";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import "../styles/Navbar.css";

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
            Stay informed with the latest research, health tips, and medical
            breakthroughs Explore helpful articles, health tips, and updates
            from our medical team.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="More Articles" />
        </div>
      </div>

      {/* First scrollable row - displayedBlogs */}
      <div className="overflow-x-auto scrollbar-hide my-8">
        <div className="flex gap-5">
          {displayedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              img={blog.image}
              title={blog.title}
              description={blog.summary}
              onClick={() => handleBlogClick(blog)}
            />
          ))}
        </div>
      </div>

      {/* Second scrollable row - datas */}
      {/* <div className="overflow-x-auto scrollbar-hide my-8">
        <div className="flex gap-5 min-w-max">
          {datas.map((data, index) => (
            <BlogCard key={index} {...data} />
          ))}
        </div>
      </div> */}

      {selectedBlog && <BlogModal blog={selectedBlog} onClose={closeModal} />}
    </div>
  );
};

export default Blogs;
