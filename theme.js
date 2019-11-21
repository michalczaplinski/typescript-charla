import theme from "mdx-deck/themes";

export default {
  ...theme,
  font: "Futura, sans-serif",
  h1: {
    textTransform: "uppercase",
    fontWeight: 600
  },
  monospace: '"Dank Mono", monospace',
  img: {
    maxWidth: "100%"
  },
  weights: 400,
  li: {
    paddingBottom: "20px",
    fontFamily: '"Dank Mono", monospace'
  },
  ul: {
    listStyle: "none",
    paddingLeft: "20px",
    display: "inline-block"
  },
  colors: {
    text: "#fff",
    background: "#294E80",
    link: "#fff",
    pre: "#fff",
    preBackground: "#fff000",
    code: "#fff"
  }
};
