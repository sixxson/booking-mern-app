import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Register from './pages/Register'
import Hero from './components/Hero'
import SignIn from './pages/SignIn'
import AddHotels from './pages/AddHotels'
import { useAppContext } from './contexts/AppContext'
import Myhotels from './pages/Myhotels'
import EditHotel from './pages/EditHotel'
import Search from './pages/Search'
import Detail from './pages/Detail'
import Booking from './pages/Booking'

function App() {
  const { isLoggedIn } = useAppContext()

  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <Layout>
              <Hero />
              <p>home pages</p>
            </Layout>
          }
        />
        <Route path="/search"
          element={
            <Layout>
              <Hero />
              <Search />
            </Layout>
          }
        />
        <Route path="/detail/:hotelId"
          element={
            <Layout>
              <Hero />
              <Detail />
            </Layout>
          }
        />
        <Route path='/register' element={
          <Layout>
            <Register />
          </Layout>
        } />
        <Route path='/signin' element={
          <Layout>
            <SignIn />
          </Layout>
        } />
        {isLoggedIn && (
          <>
            <Route
              path="/hotel/:hotelId/booking"
              element={
                <Layout>
                  <Booking />
                </Layout>
              }
            />
            <Route
              path='/add-hotel'
              element={
                <Layout>
                  <AddHotels />
                </Layout>
              }
            />
            <Route
              path='/edit-hotel/:hotelId'
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            />
            <Route
              path='/my-hotels'
              element={
                <Layout>
                  <Myhotels />
                </Layout>
              }
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}

export default App
