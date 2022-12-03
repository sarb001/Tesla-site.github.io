import React from 'react'

const SecondaryButton = ({name , type, onClick}) => 
{
  return (
    <button className='buttonSecondary'> 
      {name}
     </button>
  )
}

export default SecondaryButton