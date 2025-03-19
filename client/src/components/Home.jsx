import { Featured } from './Featured'
import { Search } from './Search'
import { Categories } from './Categories'
import { LoginButton } from './LoginButton'
import { CartButton } from './CartButton'
import { Navbar } from './Navbar'

export const Home = () => {
    return(
        <>
            <Navbar />
            <h1>Travengers Online Store</h1>
            <Featured />
            <Search />
            <Categories />
        </>
    )
}