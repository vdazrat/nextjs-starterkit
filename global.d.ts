declare module 'global'
declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
declare module '*.png'
declare module '*.WAV'
declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode

  export = Schema
}
