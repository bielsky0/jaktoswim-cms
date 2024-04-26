import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsBlog extends Schema.Component {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'Blog';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    featuredImage: Attribute.Media;
    blog_posts: Attribute.Relation<
      'elements.blog',
      'oneToMany',
      'api::blog-post.blog-post'
    >;
  };
}

export interface ElementsFaQs extends Schema.Component {
  collectionName: 'components_elements_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsReviews extends Schema.Component {
  collectionName: 'components_reviews_reviews';
  info: {
    displayName: 'Reviews';
    description: '';
  };
  attributes: {
    review: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface ElementsService extends Schema.Component {
  collectionName: 'components_elements_services';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    cover: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsAboutUs extends Schema.Component {
  collectionName: 'components_sections_aboutuses';
  info: {
    displayName: 'AboutUs';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    button_cta: Attribute.String;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsBillboard extends Schema.Component {
  collectionName: 'components_billboard_billboards';
  info: {
    displayName: 'Billboard';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String & Attribute.Required;
    showreel: Attribute.Media & Attribute.Required;
    second_showreel: Attribute.Media & Attribute.Required;
    button_cta: Attribute.String & Attribute.Required;
  };
}

export interface SectionsFaQs extends Schema.Component {
  collectionName: 'components_sections_fa_qs';
  info: {
    displayName: 'FAQs';
    description: '';
  };
  attributes: {
    button_cta: Attribute.String & Attribute.Required;
    faqs: Attribute.Component<'elements.fa-qs', true>;
  };
}

export interface SectionsFeaturedBlogPosts extends Schema.Component {
  collectionName: 'components_featured_blog_posts_featured_blog_posts';
  info: {
    displayName: 'Featured Blog Posts';
    description: '';
  };
  attributes: {
    blog_posts: Attribute.Relation<
      'sections.featured-blog-posts',
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    button_cta: Attribute.String & Attribute.Required;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    button_cta: Attribute.String;
    coverImage: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsImageCarousel extends Schema.Component {
  collectionName: 'components_sections_image_carousels';
  info: {
    displayName: 'ImageCarousel';
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
    button_cta: Attribute.String & Attribute.Required;
  };
}

export interface SectionsReviews extends Schema.Component {
  collectionName: 'components_sections_reviews';
  info: {
    displayName: 'Reviews';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    button_cta: Attribute.String & Attribute.Required;
    reviews: Attribute.Relation<
      'sections.reviews',
      'oneToMany',
      'api::review.review'
    >;
  };
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    button_cta: Attribute.String & Attribute.Required;
    services: Attribute.Component<'elements.service', true>;
    cover: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.blog': ElementsBlog;
      'elements.fa-qs': ElementsFaQs;
      'elements.reviews': ElementsReviews;
      'elements.service': ElementsService;
      'sections.about-us': SectionsAboutUs;
      'sections.billboard': SectionsBillboard;
      'sections.fa-qs': SectionsFaQs;
      'sections.featured-blog-posts': SectionsFeaturedBlogPosts;
      'sections.hero': SectionsHero;
      'sections.image-carousel': SectionsImageCarousel;
      'sections.reviews': SectionsReviews;
      'sections.services': SectionsServices;
    }
  }
}
