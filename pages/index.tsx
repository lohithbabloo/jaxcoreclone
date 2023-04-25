import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Midcontainer from './components/midContainer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Navbar />
      <Midcontainer />
    </div>
    )
}
