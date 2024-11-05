export default function Root({ children }) {
  return (
    <div
      className="rvo-theme"
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        fontFamily: 'var(--rvo-font-sans-serif-font-family)',
      }}
    >
      {children}
    </div>
  );
}
