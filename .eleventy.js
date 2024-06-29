import markdownIt from "markdown-it";
import { DateTime } from "luxon";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";


export default function (eleventyConfig) {

  

  // eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
  // Configure Markdown-It
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));

  //date filter Add custom Nunjucks date filter using Luxon
  eleventyConfig.addNunjucksFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_FULL);
  });

  // Add a collection for posts
  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("./src/posts/*.md");
  });

  // add html base plugin
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  

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
