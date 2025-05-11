import Showdown from "showdown";
import sharejs from "share";
window.onload = () => {
  let converter = new Showdown.Converter();
  let pad = document.getElementById("pad")! as HTMLTextAreaElement;
  let MarkdownArea = document.getElementById("markdown")! as HTMLElement;
  let previousMarkDownText: string | number;
  let ConvertTextAreaToMarkdown = () => {
    let markdownText = pad.value;
    previousMarkDownText = markdownText;
    let html = converter.makeHtml(markdownText);
    MarkdownArea.innerHTML = html;
    console.log(pad.value);
  };

  let DidChangeOccur = (): boolean => {
    if (previousMarkDownText != pad.value) {
      return true;
    } else return false;
  };

  setInterval(() => {
    if (DidChangeOccur()) {
      ConvertTextAreaToMarkdown();
    }
  }, 1000);

  sharejs.open("home", "text", (error: Error, doc: any) => {
    doc.attach_textArea(pad);
    ConvertTextAreaToMarkdown();
  });

  pad.addEventListener("input", ConvertTextAreaToMarkdown);
};
