import React from 'react'
import MagasinHeader from './MagasinHeader'
import Add_Magasin from './Add_Magasin'

const Magasin = () => {
  return (
    <div className='ALL_Import' >
      <MagasinHeader />
      <div className="p-3 flex justify-center">
        <Add_Magasin />
      </div>
    </div>
  )
}

export default Magasin