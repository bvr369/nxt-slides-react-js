import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import Header from './components/Header'
import SlideTab from './components/SlideTab'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeSlideId: initialSlidesList[0].id,
    slidesList: initialSlidesList,
    activeHeading: null,
    activeDesc: null,
    isHeadingActive: true,
    isDescActive: true,
  }

  changeActiveSlide = id => {
    this.setState({activeSlideId: id})
  }

  insertNewSlide = () => {
    const {slidesList, activeSlideId} = this.state

    const index = slidesList.findIndex(each => each.id === activeSlideId)
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    const newActiveSlideId = newSlide.id

    slidesList.splice(index + 1, 0, newSlide)
    this.setState({slidesList, activeSlideId: newActiveSlideId})
  }

  updateActiveHeading = event => {
    const {activeSlideId, slidesList} = this.state
    const newIndex = slidesList.findIndex(each => each.id === activeSlideId)
    this.setState(prevState => ({
      slidesList: prevState.slidesList.map((each, index) => {
        if (newIndex === index) {
          return {
            ...each,
            heading: event.target.value,
          }
        }
        return each
      }),
    }))
  }

  changeHeading = () => {
    this.setState({isHeadingActive: false})
  }

  changeIsActiveHeading = event => {
    // const {slidesList, activeSlideId} = this.state
    // const activeIndex = slidesList.findIndex(each => each.id === activeSlideId)

    // const slideHeading = slidesList[activeIndex].heading
    if (event.target.value === '') {
      this.setState({isHeadingActive: true, activeHeading: 'Heading'})
    } else {
      this.setState({isHeadingActive: true, activeHeading: null})
    }
  }

  //   renderHeading = () => {
  //       const {activeHeading} = this.state
  //       if (activeHeading === null) {
  //           return
  //       }
  //   }

  render() {
    const {
      slidesList,
      activeSlideId,
      isHeadingActive,
      isDescActive,
      activeHeading,
    } = this.state

    const activeIndex = slidesList.findIndex(each => each.id === activeSlideId)

    const slideHeading = slidesList[activeIndex].heading
    const slideDesc = slidesList[activeIndex].description

    return (
      <div>
        <Header />
        <button type="button" className="new-btn" onClick={this.insertNewSlide}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            style={{width: '20px'}}
          />
          <p>New</p>
        </button>
        <div className="slides-main-cont">
          <ol className="left-cont">
            {slidesList.map(eachItem => (
              <SlideTab
                tabDetails={eachItem}
                slideNumber={
                  slidesList.findIndex(each => each.id === eachItem.id) + 1
                }
                key={eachItem.id}
                isActive={eachItem.id === activeSlideId}
                changeActiveSlide={this.changeActiveSlide}
              />
            ))}
          </ol>
          <div className="right-cont">
            {isHeadingActive ? (
              <h1
                style={{color: '#0967d2', fontSize: '50px'}}
                onClick={this.changeHeading}
              >
                {activeHeading === null ? `${slideHeading}` : 'Heading'}
              </h1>
            ) : (
              <input
                type="text"
                value={slideHeading}
                onChange={this.updateActiveHeading}
                onBlur={this.changeIsActiveHeading}
              />
            )}
            <p style={{color: '#475569', fontSize: '30px'}}>{slideDesc}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
