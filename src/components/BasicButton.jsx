import '../assets/css/Button.css'

export default function BasicButton ({buttonTitle, buttonOnClick}) {
  return (
    <>
      <input className="btn" type="button" value={buttonTitle} onClick={buttonOnClick}/>
    </>
  )
}