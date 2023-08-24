'use client'
import React from 'react';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';

const Hero: React.FC = () => {
  const handleUploadSuccess = (response: any) => {
    console.log('Image uploaded successfully:', response);
    // Perform any desired actions with the uploaded image response
  };

  const handleUploadFailure = (error: string) => {
    console.error('Error uploading image:', error);
    // Handle the upload error accordingly
  };

  return (
    <div>
      <h1>Home Page</h1>
      <CloudinaryUploadWidget
        onSuccess={handleUploadSuccess}
        onFailure={handleUploadFailure}
        folder="Cars"
      />
      {/* Additional content */}
    </div>
  );
};

export default Hero;
