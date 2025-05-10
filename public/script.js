import Showdown from "showdown";
window.onload = () => {
    let converter = new Showdown.Converter();
    let pad = document.getElementById("pad");
    let MarkdownArea = document.getElementById("markdown");
    let ConvertTextAreaToMarkdown = () => {
        let markdownText = pad.value;
        let html = converter.makeHtml(markdownText);
        MarkdownArea.innerHTML = html;
        console.log(pad.value);
    };
    pad.addEventListener("input", ConvertTextAreaToMarkdown);
    ConvertTextAreaToMarkdown();
};
