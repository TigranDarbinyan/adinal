import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      setVisible(window.innerWidth <= 768);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.wrapper}>
      <a href="tel:+1XXXXXXXXXX" style={styles.call}>
        Call
      </a>
      <a
        href="https://www.fresha.com/"
        target="_blank"
        rel="noopener"
        style={styles.book}
      >
        Book
      </a>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    zIndex: 999,
    height: "56px",
  },
  call: {
    flex: 1,
    background: "#111",
    color: "#fff",
    textAlign: "center",
    lineHeight: "56px",
    textDecoration: "none",
    fontWeight: 600,
  },
  book: {
    flex: 1,
    background: "#f2f2f2",
    color: "#000",
    textAlign: "center",
    lineHeight: "56px",
    textDecoration: "none",
    fontWeight: 600,
  },
};
