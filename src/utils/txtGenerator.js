const SEPARATOR = "---------------------";

export function generateTxtContent(files) {
  return files
    .map(
      (f) =>
        `Name: ${f.name}\nPath: ${f.path}\nContent:\n${f.content}\n${SEPARATOR}`,
    )
    .join("\n\n");
}

export function downloadTxt(content, filename = "summary.txt") {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
