import './index.css'

const SlideTab = props => {
  const {tabDetails, slideNumber, isActive, changeActiveSlide} = props
  const {id, heading, description} = tabDetails

  const cls = isActive ? 'slide-tab-cont active-slide' : 'slide-tab-cont'

  const onClickingSlide = () => {
    changeActiveSlide(id)
  }

  return (
    <li
      className={cls}
      test-id={`slideTab${slideNumber}`}
      onClick={onClickingSlide}
    >
      <p style={{marginRight: '10px', marginTop: '10px'}}>{slideNumber}</p>
      <div className="slide-tab-inner-cont">
        <h2 style={{color: '#0967d2', marginBottom: '0px'}}>{heading}</h2>
        <p style={{color: '#475569', marginTop: '10px'}}>{description}</p>
      </div>
    </li>
  )
}

export default SlideTab
