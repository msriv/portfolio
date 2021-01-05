import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "../scss/Markdown.module.scss";
import { Headers } from "./MarkdownRenderers";
import Prism from "prismjs";

const Markdown = ({ markdown }: any) => {
  const renderers = {
    heading: Headers,
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <ReactMarkdown renderers={renderers} plugins={[gfm]} children={markdown} />
  );
};

export default Markdown;
