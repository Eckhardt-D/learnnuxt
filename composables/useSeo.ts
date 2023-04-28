type HeadOptions = {
  title?: string;
  description?: string;
  image?: string;
};

const defaultOptions = {
  title: "Learn Nuxt - from beginner to advanced",
  description:
    "Take your Nuxt skills to the next level with over 16 chapters, 5+ projects and multiple interactive quizes.",
  image: "https://learnnuxt.co/images/social_learn_nuxt-min.webp",
} satisfies HeadOptions;

export default (options: HeadOptions = {}) => {
  const { title, description, image } = Object.assign(defaultOptions, options);

  useHead({
    title,
    meta: [{ name: "description", content: description }],
  });

  useServerSeoMeta({
    title,
    description,
    author: "Learn Nuxt",
    twitterTitle: title,
    twitterCard: "summary_large_image",
    twitterDescription: description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
  });
};
