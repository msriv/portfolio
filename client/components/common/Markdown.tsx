import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "../scss/Markdown.module.scss";
import { Headers } from "./MarkdownRenderers";

const Markdown = ({ markdown }: any) => {
  const renderers = {
    heading: Headers,
  };

  return (
    <ReactMarkdown renderers={renderers} plugins={[gfm]} children={markdown} />
  );
};

export default Markdown;
