import Showdown from "showdown";

window.onload = () => {
  let converter = new Showdown.Converter();
  let pad = document.getElementById("pad")! as HTMLTextAreaElement;
  let MarkdownArea = document.getElementById("markdown")! as HTMLElement;

  let ConvertTextAreaToMarkdown = () => {
    let markdownText = pad.value;
    let html = converter.makeHtml(markdownText);
    MarkdownArea.innerHTML = html;
    console.log(pad.value);
  };

  pad.addEventListener("input", ConvertTextAreaToMarkdown);

  ConvertTextAreaToMarkdown();
};
