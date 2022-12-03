import React, {useState} from 'react'
import Header from './Header';
import Headerblock from './Headerblock';
import Menu from './Menu';



const Home = () => {
    const [ismenuopen,setismenuopen] = useState(false);
  return (
    <div>
        <Header ismenuopen = {ismenuopen}  setismenuopen = {setismenuopen} />
                {ismenuopen && <Menu /> } 
            <Headerblock />
    </div>
  )
}

export default Home