import type { BlogPost, CaseStudy } from "@/types";
import { client } from "@/lib/sanity";
import {
  blogPostBySlugQuery,
  blogPostsQuery,
  caseStudiesQuery,
  caseStudyBySlugQuery,
} from "./queries";

export async function getBlogPosts() {
  return client.fetch<BlogPost[]>(blogPostsQuery);
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug });
}

export async function getCaseStudies() {
  return client.fetch<CaseStudy[]>(caseStudiesQuery);
}

export async function getCaseStudyBySlug(slug: string) {
  return client.fetch<CaseStudy | null>(caseStudyBySlugQuery, { slug });
}

