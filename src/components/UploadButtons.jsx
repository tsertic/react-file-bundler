import { theme } from "../styles/theme";

const styles = {
  row: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    marginBottom: 24,
  },
  btnPrimary: {
    padding: "12px 24px",
    fontSize: 14,
    fontWeight: 600,
    border: "none",
    borderRadius: theme.radii.sm,
    cursor: "pointer",
    background: theme.colors.primary,
    color: "#fff",
    transition: "all 0.2s",
  },
  btnSecondary: {
    padding: "12px 24px",
    fontSize: 14,
    fontWeight: 600,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radii.sm,
    cursor: "pointer",
    background: "transparent",
    color: theme.colors.text,
    transition: "all 0.2s",
  },
};

export default function UploadButton({
  fileInputRef,
  folderInputRef,
  onFiles,
}) {
  return (
    <>
      <input
        type="file"
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => {
          onFiles(e.target.files, false);
          e.target.value = "";
        }}
      />
      <input
        type="file"
        ref={folderInputRef}
        style={{ display: "none" }}
        webkitdirectory=""
        onChange={(e) => {
          onFiles(e.target.files, true);
          e.target.value = "";
        }}
      />

      <div style={styles.row}>
        <button
          style={styles.btnPrimary}
          onClick={() => fileInputRef.current.click()}
        >
          📄 Upload Files
        </button>
        <button
          style={styles.btnSecondary}
          onClick={() => folderInputRef.current.click()}
        >
          📁 Upload Folder
        </button>
      </div>
    </>
  );
}
