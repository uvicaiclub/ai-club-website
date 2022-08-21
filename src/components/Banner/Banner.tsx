import banner from './banner.png'

const Banner = () => {
  return (
    <div className="d-flex justify-content-center pb-2">
      <img
        src={banner}
        className="mw-100"
        width="450"
        alt="UVic AI Club, supporting student in pursuit of AI"
      />
    </div>
  )
}

export default Banner
