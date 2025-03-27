import React from 'react'
import ImporterHeader from './ImporterHeader'
import FileImportComponent from './FileImportComponent'

const Importer = () => {
  return (
    <div className='ALL_Import' >
      <ImporterHeader />
      <div className="p-3 flex justify-center">
        <FileImportComponent />
      </div>
    </div>
  )
}

export default Importer