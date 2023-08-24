import axios from 'axios';

export interface ImageUploadResponse {
  url: string;
}

export const uploadImage = async (file: File): Promise<ImageUploadResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ritrjsf5');

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dqylfup8x/image/upload?folder=Cars`,
      formData
    );

    return {
      url: response.data.secure_url,
    };
  } catch (error) {
    throw new Error('Error uploading image');
  }
};
