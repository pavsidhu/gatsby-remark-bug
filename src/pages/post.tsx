import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function BlogPost({ data: { mdx } }) {
  return (
    <MDXProvider
      components={{
        p: (props) => <p style={{ color: "red" }}>{props.children}</p>,
      }}
    >
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  );
}

export const query = graphql`
  query {
    mdx {
      body
    }
  }
`;
