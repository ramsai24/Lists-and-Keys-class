import UserProfile from './components/Userprofile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
    uniqueNo: 2,
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
    uniqueNo: 3,
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
    uniqueNo: 4,
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {/* {userDetailsList.map(each => {
        const eachItems = each
        return <UserProfile userDetails={eachItems} />
      })} */}
      {/* or */}
      {userDetailsList.map(each => (
        <UserProfile userDetails={each} key={each.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
