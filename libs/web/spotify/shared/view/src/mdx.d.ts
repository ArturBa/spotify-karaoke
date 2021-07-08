declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  // let MDXComponent: any;
  export default MDXComponent;
}
