export const MiniBox = () => {
  return (
    <div className="MiniBox">
      <div
        className="MiniPhoto"
        style={{ backgroundImage: "url(static/ny.jpg)" }}
      />
      <div className="MiniDivider" />
    </div>
  );
};

export function App() {
  return <MiniBox />;
}
