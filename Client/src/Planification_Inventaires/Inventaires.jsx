import React from 'react'
import Planification_InventairesHeader from './Planification_InventairesHeader'
import Planification_Inventaires from './Planification_Inventaires'

const Inventaires = () => {
  return (
    <div className='ALL_Import' >
      <Planification_InventairesHeader />
      <div className="p-3 flex justify-center">
        <Planification_Inventaires />
      </div>
    </div>
  )
}

export default Inventaires