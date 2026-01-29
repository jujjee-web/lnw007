module.exports = function (eleventyConfig) {
  // ให้ copy โฟลเดอร์ images ไปตอน build
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
