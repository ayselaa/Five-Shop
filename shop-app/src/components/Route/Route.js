import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const Route = () => {

  return (
    <div>
        <Header/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
        <div className="buy-wrap">
        <Link to="/modals" className="buy-btn">
          Купить
        </Link>
      </div>
    </div>
  )
}

export default Route