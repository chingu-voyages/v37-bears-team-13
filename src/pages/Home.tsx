import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import StockViewer from '../components/StockViewer'

const Home = (): JSX.Element => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
        <Link to={isLoggedIn ? '/logout' : '/login'}>
            <Button btnText={isLoggedIn ? 'Log Out' : 'Log In'} />
        </Link>
        <Button btnText={'Create New Account'} />
        <StockViewer stockView={isLoggedIn ? 'User Stock View' : 'Example Stock View'} />
    </div>
  )
}

export default Home