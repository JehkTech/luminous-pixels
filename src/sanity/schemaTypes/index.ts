import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from '@/sanity/schemas/blog'
import { caseStudy } from '@/sanity/schemas/caseStudy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, caseStudy],
}

