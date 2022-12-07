import React, {useState} from 'react'
import Footer from './Footer';
import Header from './Header';
import Headerblock from './Headerblock';
import HeaderBlock1 from './HeaderBlock1';
import Headerblock2 from './Headerblock2';
import Headerblock3 from './Headerblock3';
import Headerblock4 from './Headerblock4';
import Menu from './Menu';

const Home = () => 
{
        const [ismenuopen,setismenuopen] = useState(false);
  return (
    <div>
            <Header ismenuopen = {ismenuopen}  setismenuopen = {setismenuopen} />
                {ismenuopen && <Menu /> } 
            <Headerblock     />
            <HeaderBlock1    />
            <Headerblock2    /> 
            <Headerblock3    />
            <Headerblock4    />
            <Footer />
    </div>
  )
}

export default Home