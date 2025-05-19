export default function Nav({ callback1, callback2, callback3 }) {
  return (
    <>
      <button onClick={callback1}>Projects</button>
      <button onClick={callback2}>News</button>
      <button onClick={callback3}>About</button>
    </>
  );
}
