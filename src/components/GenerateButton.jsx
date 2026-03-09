import { theme } from "../styles/theme";

const styles = {
  btn: {
    width: "100%",
    padding: "14px 24px",
    fontSize: 15,
    fontWeight: 600,
    border: "none",
    borderRadius: theme.radii.sm,
    background: theme.colors.success,
    color: "#fff",
    transition: "all 0.2s",
  },
};

export default function GenerateButton({ disabled, onClick }) {
  return (
    <button
      style={{
        ...styles.btn,
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      ⬇️ Generate TXT
    </button>
  );
}
