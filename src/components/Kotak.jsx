export default function Kotak({value, onSquareClick}) {
  return (
    <>
      <button className="square" onClick={onSquareClick}>{value}</button>
    </>
  )
}