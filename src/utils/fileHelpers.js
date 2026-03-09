import { SUPPORTED_EXTENSIONS } from "./constants";

export function getExtension(filename) {
  const idx = filename.lastIndexOf(".");
  return idx !== -1 ? filename.substring(idx).toLowerCase() : "";
}

export function isSupported(filename) {
  return SUPPORTED_EXTENSIONS.includes(getExtension(filename));
}

export function readFileAsText(file, path) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      resolve({
        name: file.name,
        path,
        content: reader.result,
        size: file.size,
      });
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

export function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}
