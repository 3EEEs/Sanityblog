import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Generates a slug from the title
        maxLength: 200,
      },
    }),
    defineField({
      name: 'body', // Changed from 'content' to 'body' to match existing data
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}], // Array of blocks to store rich text content
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}], // Reference to an 'author' document type
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime', // Stores the date and time the post was published
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image', // Allows adding an image for the blog post
      options: {
        hotspot: true, // Allow image cropping and focus point selection
      },
    }),
  ],
})
