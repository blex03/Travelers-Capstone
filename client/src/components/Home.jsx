import { Featured } from '../components/Featured'
import { Search } from '../components/Search'
import { Categories } from '../components/Categories'
import { LoginButton } from '../components/LoginButton'
import { CartButton } from '../Components/CartButton'
import { Navbar } from '../Components/Navbar'

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