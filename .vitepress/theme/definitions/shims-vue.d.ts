// This file is used to declare Vue components in TypeScript
// Added to satisfy TypeScript's requirement for module declarations
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}