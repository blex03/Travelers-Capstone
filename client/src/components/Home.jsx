import { Featured } from './Featured'
import { Search } from './Search'
import { Categories } from './Categories'
import { LoginButton } from './LoginButton'
import { CartButton } from './CartButton'
import { Navbar } from './Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
   
    return(
        <>
            <h1>Travengers Online Store</h1>
            <Search/>
            <Featured />
            <Categories />
        </>
    )
}