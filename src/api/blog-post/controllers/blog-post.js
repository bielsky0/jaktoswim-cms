"use strict";

/**
 * blog-post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::blog-post.blog-post",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db.query("api::blog-post.blog-post").findOne({
        where: { slug: id },
        populate: [
          "Blog",
          "Blog.featuredImage",
          "Blog.blog_posts.Blog.featuredImage",
        ],
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
    async find(ctx) {
      await this.validateQuery(ctx);

      const { results, pagination } = await strapi
        .service("api::blog-post.blog-post")
        .find({
          populate: ["Blog", "Blog.featuredImage"],
        });

      const sanitizedResults = await this.sanitizeOutput(results, ctx);

      return this.transformResponse(sanitizedResults, { pagination });
    },
  })
);
