import './index.css'

const Header = () => (
  <nav className="nav-cont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
      alt="nxt slides logo"
      style={{
        width: '100px',
        height: '40px',
        marginRight: '20px',
      }}
    />
    <h1
      style={{
        color: '#334155',
        fontFamily: 'Bree Serif',
        fontSize: '30px',
        fontWeight: '200',
      }}
    >
      Nxt Slides
    </h1>
  </nav>
)

export default Header
