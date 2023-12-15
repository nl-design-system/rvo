export default function Root({ children }) {
  return (
    <div className="rvo-theme" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {children}
    </div>
  );
}
