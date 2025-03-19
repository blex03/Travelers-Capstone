import { Featured } from '../components/Featured'
import { Search } from '../components/Search'
import { Categories } from '../components/Categories'

export const Home = () => {
    return(
        <>
            <h1>Travengers Online Store</h1>
            <Featured />
            <Search />
            <Categories />
        </>
    )
}