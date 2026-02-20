import { useEffect, useState } from "react";

const BOOKING_URL =
  "https://www.fresha.com/a/adinal-laser-studio-scottsdale-6730-east-mcdowell-road-p7f05klt/booking?menu=true&share=true&pId=2786063&cartId=22e40be6-bfd4-45de-8b09-7fcee8b55612";

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
      <a href="tel:+16028933883" style={styles.call} aria-label="Call Adinal Laser Studio">
        Call
      </a>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.book}
        aria-label="Book an appointment"
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
