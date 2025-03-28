import React, { useState, useRef } from 'react';
import { CloudUpload, X } from 'lucide-react';

const FileImportComponent = () => {
    const [files, setFiles] = useState([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef(null);
  
    const handleFileUpload = (newFiles) => {
      if (newFiles && newFiles.length > 0) {
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
      event.target.value = null;
    };
  
    return (
      <div className="w-300 relative">
        <div 
          className={`bg-white rounded-2xl border-3 p-4 text-center 
            ${isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
            transition-all duration-300`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mb-4">
            <CloudUpload 
              size={60} 
              className={`mx-auto mb-3 
                ${isDragOver ? 'text-blue-500' : 'text-gray-400'}
                transition-colors duration-300`}
              strokeWidth={0.75}
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
              multiple
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
        <div className={`bg-white rounded-2xl border-3 p-4 mb-4 max-h-96 overflow-y-auto
          ${files.length > 0 ? 'border-blue-500' : 'border-gray-300'} transition-colors duration-300`}>
          <h3 className="font-medium text-gray-700 mb-2 text-center">
            Fichiers importés
            <span className={`ml-2 px-2 py-1 rounded-full text-xs text-white 
              ${files.length === 0 ? 'bg-red-500' : 'bg-green-500'}`}>
              {files.length}
            </span>
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Nom du fichier</th>
                  <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Taille</th>
                  <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-center">
                {files.map((file, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 truncate max-w-xs">
                      {file.name}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                      {(file.size / 1024).toFixed(2)} KB
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                      {file.type || 'Inconnu'}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => handleRemoveFile(index)}
                          className="remove_Inv p-1 rounded-full hover:bg-red-100"
                          title="Supprimer"
                        >
                          <X size={16}  />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {files.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-4 py-4 text-center text-sm text-gray-500">
                      Aucun fichier importé
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default FileImportComponent;