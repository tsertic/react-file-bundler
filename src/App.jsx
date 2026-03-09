import { useFileUpload } from "./hooks/useFileUpload";
import { generateTxtContent, downloadTxt } from "./utils/txtGenerator";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import UploadButtons from "./components/UploadButtons";
import FileList from "./components/FileList";
import GenerateButton from "./components/GenerateButton";

const styles = {
  container: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: theme.fonts.base,
    color: theme.colors.text,
    minHeight: "100vh",
    background: theme.colors.bgGradient,
  },
};

export default function App() {
  const {
    files,
    fileInputRef,
    folderInputRef,
    processFiles,
    removeFile,
    clearAll,
  } = useFileUpload();

  const handleGenerate = () => {
    const content = generateTxtContent(files);
    downloadTxt(content);
  };

  return (
    <div style={styles.container}>
      <Header />
      <UploadButtons
        fileInputRef={fileInputRef}
        folderInputRef={folderInputRef}
        onFiles={processFiles}
      />
      <FileList files={files} onRemove={removeFile} onClearAll={clearAll} />
      <GenerateButton disabled={files.length === 0} onClick={handleGenerate} />
    </div>
  );
}
