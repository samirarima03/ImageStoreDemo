'use client'
import { ImageUploadResponse } from '@/api/cloudinary';
// import { ImageUploadResponse } from '@/api/cloudinary';
// import { useEffect, useState } from 'react';

// interface CloudinaryUploadWidgetProps {
//   onSuccess: (response: ImageUploadResponse) => void;
//   onFailure: (error: string) => void;
// }

// const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({ onSuccess, onFailure }) => {
//   const [widget, setWidget] = useState<any>(null);

//   useEffect(() => {
//     const cloudinaryWidget = (window as any).cloudinary.createUploadWidget(
//       {
//         cloudName: 'dqylfup8x',
//         uploadPreset: 'ritrjsf5',
//       },
//       (error: any, result: any) => {
//         if (!error && result && result.event === 'success') {
//           const { secure_url } = result.info;
//           onSuccess({ url: secure_url });
//         } else if (error) {
//           onFailure('Error uploading image');
//         }
//       }
//     );

//     setWidget(cloudinaryWidget);

//     return () => {
//       cloudinaryWidget.close();
//     };
//   }, [onSuccess, onFailure]);

//   const openWidget = () => {
//     if (widget) {
//       widget.open();
//     }
//   };

//   return (
//     <div>
//       <button onClick={openWidget}>Open Cloudinary Upload Widget</button>
//     </div>
//   );
// };

// export default CloudinaryUploadWidget;

import { useEffect, useRef, useState } from 'react';

interface CloudinaryUploadWidgetProps {
  onSuccess: (response: ImageUploadResponse) => void;
  onFailure: (error: string) => void;
  folder: string;
}

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({ onSuccess, onFailure, folder }) => {
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
    script.async = true;
    script.onload = handleScriptLoad;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleScriptLoad = () => {
    const widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: 'dqylfup8x',
        uploadPreset: 'ritrjsf5',
        folder: 'Cars'
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          const { secure_url } = result.info;
          onSuccess({ url: secure_url });
        } else if (error) {
          onFailure('Error uploading image');
        }
      }
    );

    widgetRef.current = widget;
  };

  const openWidget = () => {
    if (widgetRef.current) {
      widgetRef.current.open();
    }
  };

  return (
    <div>
      <button onClick={openWidget}>Open Cloudinary Upload Widget</button>
    </div>
  );
};

export default CloudinaryUploadWidget;
