import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { InlineMath, BlockMath } from "react-katex";
import math from "remark-math";
import "katex/dist/katex.min.css";

export const Headers = ({ level, children }: any) => {
  switch (level) {
    case 1: {
      return <h1 className="text-4xl font-bold">{children[0]}</h1>;
    }
    case 2: {
      return <h2 className="text-3xl font-bold">{children[0]}</h2>;
    }
    case 3: {
      return <h3 className="text-2xl font-bold">{children[0]}</h3>;
    }
    case 4: {
      return <h4 className="text-xl font-bold">{children[0]}</h4>;
    }
    case 5: {
      return <h5 className="text-lg font-bold">{children[0]}</h5>;
    }
    case 6: {
      return <h6 className="text-base font-bold">{children[0]}</h6>;
    }
  }
};

export const Code = ({ language, value }) => (
  <SyntaxHighlighter language={language} children={value} />
);
export const MathInline = ({ value }) => <InlineMath math={value} />;
export const MathBlock = ({ value }) => <BlockMath math={value} />;
