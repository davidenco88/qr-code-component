import qrCode from '../../assets/image-qr-code.png'

function Image() {
    return (
        <img src={qrCode} alt="qr-img" className='card__qr-img' />
    )
}

export default Image;