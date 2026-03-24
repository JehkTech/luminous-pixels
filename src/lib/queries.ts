// Blog posts — list view
export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    "coverImageUrl": coverImage.asset->url
  }
`;

// Single blog post by slug
export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    "coverImageUrl": coverImage.asset->url,
    body
  }
`;

// Case studies — list view
export const caseStudiesQuery = `
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    outcome,
    metrics,
    "coverImageUrl": coverImage.asset->url
  }
`;

// Single case study by slug
export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    industry,
    outcome,
    metrics,
    "coverImageUrl": coverImage.asset->url,
    body
  }
`;
