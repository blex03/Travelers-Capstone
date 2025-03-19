import { Featured } from '../components/Featured'
import { Search } from '../components/Search'
import { Categories } from '../components/Categories'
import { LoginButton } from '../components/LoginButton'

export const Home = () => {
    return(
        <>
            <LoginButton />
            <h1>Travengers Online Store</h1>
            <Featured />
            <Search />
            <Categories />
        </>
    )
}