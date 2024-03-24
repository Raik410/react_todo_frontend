// vite-env.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// declare module "*.svg" {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}