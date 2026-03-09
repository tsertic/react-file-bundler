import { theme } from "../styles/theme";
import { formatBytes } from "../utils/fileHelpers";

const styles = {
  zone: {
    border: `2px dashed ${theme.colors.border}`,
    borderRadius: theme.radii.md,
    padding: "48px 20px",
    textAlign: "center",
    marginBottom: 24,
    minHeight: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.colors.surfaceAlpha,
  },
  emptyText: {
    color: theme.colors.textDim,
    fontSize: 14,
    margin: 0,
  },
  list: {
    borderRadius: theme.radii.md,
    marginBottom: 24,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 14px",
    borderRadius: theme.radii.sm,
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${theme.colors.border}`,
  },
  itemInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    overflow: "hidden",
  },
  itemName: {
    fontSize: 13,
    fontWeight: 600,
    color: theme.colors.text,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  itemPath: {
    fontSize: 11,
    color: theme.colors.textDim,
    fontFamily: theme.fonts.mono,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  itemRight: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexShrink: 0,
  },
  itemSize: {
    fontSize: 11,
    color: theme.colors.textDim,
  },
  removeBtn: {
    background: "none",
    border: "none",
    color: theme.colors.textDim,
    cursor: "pointer",
    fontSize: 16,
    padding: "2px 6px",
    borderRadius: 4,
    transition: "color 0.15s",
  },
  clearBtn: {
    background: "none",
    border: `1px solid ${theme.colors.border}`,
    color: theme.colors.textMuted,
    cursor: "pointer",
    fontSize: 12,
    padding: "6px 14px",
    borderRadius: theme.radii.sm,
    marginBottom: 10,
    alignSelf: "flex-end",
  },
};

export default function FileList({ files, onRemove, onClearAll }) {
  if (files.length === 0) {
    return (
      <div style={styles.zone}>
        <p style={styles.emptyText}>
          No files uploaded yet. Click one of the buttons above to get started.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.list}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <span style={{ fontSize: 13, color: theme.colors.textMuted }}>
          {files.length} file{files.length !== 1 ? "s" : ""} loaded
        </span>
        <button style={styles.clearBtn} onClick={onClearAll}>
          Clear all
        </button>
      </div>

      {files.map((file, index) => (
        <div key={file.path} style={styles.item}>
          <div style={styles.itemInfo}>
            <span style={styles.itemName}>{file.name}</span>
            <span style={styles.itemPath}>{file.path}</span>
          </div>
          <div style={styles.itemRight}>
            <span style={styles.itemSize}>{formatBytes(file.size)}</span>
            <button style={styles.removeBtn} onClick={() => onRemove(index)}>
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
