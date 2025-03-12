import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'my-blog',

  projectId: 'khp2f1nz',
  dataset: 'production',

  plugins: [deskTool(), visionTool()], // Fix: Replaced structureTool() with deskTool()

  schema: {
    types: schemaTypes, // Ensure this is an array
  },
})
