import React from 'react'
import UtilisateursHeader from './UtilisateursHeader'
import AddUtilisateurs from './AddUtilisateurs'

const Utilisateurs = () => {
  return (
    <div className='ALL_Import' >
      <UtilisateursHeader />
      <div className="p-3 flex justify-center">
        <AddUtilisateurs />
      </div>
    </div>
  )
}

export default Utilisateurs