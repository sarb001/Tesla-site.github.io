import React from 'react';

const ButtonPrimary = ({name, type, onClick}) => {
  return (
    <div>
        <button className ='buttonPrimary' onClick = {onClick} type = {type}> 
            {name}
         </button>
    </div>
  )
}

export default ButtonPrimary