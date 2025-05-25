import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

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
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Explore helpful articles, health tips, and updates from our medical
            team.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>

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
    </div>
  );
};

export default Blogs;
