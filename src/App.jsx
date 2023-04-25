import qrCode from './assets/image-qr-code.png'
import './App.css'

function Card() {
  return (
    <div className='card'>
      <Image />
      <PrimaryText />
      <SecondaryText />
    </div>
  )
}

function Image() {
  return (
    <img src={qrCode} alt="qr-img" className='card__qr-img' />
  )
}

function PrimaryText() {
  return (
    <p className='primary-text'>Improve your front-end skills by building projects</p>
  )
}

function SecondaryText() {
  return (
    <p className='secondary-text'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  )
}

function App() {

  return (
    <>
      <div className='card-container'>
        <Card />
      </div>
    </>
  )
}

export default App
