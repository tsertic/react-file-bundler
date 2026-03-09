import { theme } from "../styles/theme";

const styles = {
  wrapper: {
    textAlign: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    margin: 0,
    color: theme.colors.heading,
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textMuted,
    marginTop: 8,
    lineHeight: 1.5,
  },
};

export default function Header() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>📦 File Bundler</h1>
      <p style={styles.subtitle}>
        Upload files or an entire folder — the app merges them into a single TXT
        document.
      </p>
    </div>
  );
}
