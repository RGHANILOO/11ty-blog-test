import markdownIt from "markdown-it";
import { DateTime } from "luxon";
export default function (eleventyConfig) {
  // Configure Markdown-It
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));

  //date filter Add custom Nunjucks date filter using Luxon
  eleventyConfig.addNunjucksFilter("date", (date, format) => {
    return DateTime.fromJSDate(new Date(date)).toFormat(format);
  });

  // Add a collection for posts
  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("./src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
