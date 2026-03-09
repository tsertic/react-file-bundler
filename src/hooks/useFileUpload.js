import { useState, useRef, useCallback } from "react";
import { isSupported, readFileAsText } from "../utils/fileHelpers";

export function useFileUpload() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const folderInputRef = useRef(null);

  const processFiles = useCallback(async (fileList, isFolder) => {
    const promises = [];

    for (const file of fileList) {
      if (!isSupported(file.name)) continue;

      const path = isFolder ? file.webkitRelativePath : file.name;

      promises.push(readFileAsText(file, path));
    }

    const results = await Promise.all(promises);
    if (results.length === 0) return;

    setFiles((prev) => {
      const existingPaths = new Set(prev.map((f) => f.path));
      const unique = results.filter((r) => !existingPaths.has(r.path));
      return [...prev, ...unique];
    });
  }, []);

  const removeFile = useCallback((index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearAll = useCallback(() => {
    setFiles([]);
  }, []);

  return {
    files,
    fileInputRef,
    folderInputRef,
    processFiles,
    removeFile,
    clearAll,
  };
}
