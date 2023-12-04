export default function Root({ children }) {
  return (
    <div className="rvo-rijkshuisstijl" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {children}
    </div>
  );
}
