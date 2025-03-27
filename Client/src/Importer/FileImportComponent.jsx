import React, { useState, useRef } from 'react';
import { CloudUpload, X } from 'lucide-react';

const FileImportComponent = () => {
    const [files, setFiles] = useState([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef(null);
  
    const handleFileUpload = (newFiles) => {
      if (newFiles && newFiles.length > 0) {
        // Convertir FileList en tableau et ajouter aux fichiers existants
        const filesArray = Array.from(newFiles);
        setFiles(prevFiles => [...prevFiles, ...filesArray]);
      }
    };

    const handleRemoveFile = (indexToRemove) => {
      setFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
      setIsDragOver(true);
    };
  
    const handleDragLeave = (event) => {
      event.preventDefault();
      setIsDragOver(false);
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      setIsDragOver(false);
      handleFileUpload(event.dataTransfer.files);
    };
  
    const handleFileInputChange = (event) => {
      handleFileUpload(event.target.files);
      // Réinitialiser la valeur pour permettre de sélectionner les mêmes fichiers à nouveau
      event.target.value = null;
    };
  
    return (
      <div className="w-300 relative">
        <div 
          className={`bg-white rounded-2xl border-3 p-4 text-center 
            ${isDragOver ? 'border-blue-500 bg-blue-50' : 'border-black-300'}
            transition-all duration-300`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mb-4">
            <CloudUpload 
              size={80} 
              className={`mx-auto mb-3 
                ${isDragOver ? 'text-blue-500' : 'text-gray-400'}
                transition-colors duration-300`}
            />
            <p className="text-gray-600 mb-3">
              {isDragOver ? 'Déposez vos fichiers ici' : 'Glissez vos fichiers ici'}
            </p>
            <p className="text-gray-500 mb-3">ou</p>
            <input 
              type="file" 
              id="file-upload" 
              ref={fileInputRef}
              className="hidden" 
              onChange={handleFileInputChange}
              multiple // Active la sélection multiple
            />
            <label 
              htmlFor="file-upload" 
              className="import_btn"
            >
              Importer
            </label>
          </div>
        </div>
        <br />
        <div className={`bg-white rounded-2xl border-3 p-4 mb-4 h-40 overflow-y-auto
          ${files.length > 0 ? 'border-blue-500' : 'border-black-300'} transition-colors duration-300`}>
          <h3 className="font-medium text-gray-700 mb-2 text-center">
            Fichiers importés 
            <span className={`ml-2 px-2 py-1 rounded-full text-xs text-white 
              ${files.length === 0 ? 'bg-red-500' : 'bg-green-500'}`}>
              {files.length}
            </span>
          </h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="truncate flex-1">{file.name}</span>
                <button 
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default FileImportComponent;

















































// import React, { useState } from 'react'
// import { CloudUpload } from 'lucide-react';

// const FileImportComponent = () => {
//     const [fileName, setFileName] = useState('');
  
//     const handleFileUpload = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         setFileName(file.name);
//       }
//     };
  
//     return (
//       <div className="w-300 ">
//         <div className="bg-white rounded-2xl border-3 border-black-500 p-4 mb-2 text-center">
//           <div className="mb-4">
//           <CloudUpload id="CloudUpload"size={80} className="mx-auto mb-3 "/>
//             <p className="text-gray-600 mb-3">Glisser votre fichier ici</p>
//             <p className="text-gray-500 mb-3">ou</p>
//             <input 
//               type="file" 
//               id="file-upload" 
//               className="hidden" 
//               onChange={handleFileUpload}
//             />
//             <label 
//               htmlFor="file-upload" 
//               className="import_btn"
//             >
//               Importer
//             </label>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-2xl border-3 border-black-500 p-3 flex items-center">
//           <span className="flex-grow text-gray-700 truncate">{fileName }</span>

//         </div>
//       </div>
//     );
//   };

// export default FileImportComponent