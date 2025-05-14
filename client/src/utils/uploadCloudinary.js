
// // const upload_preset = import.meta.env.VITE_UPLOAD_PRESET

// // const cloud_name = import.meta.env.VITE_CLOUD_NAME

// // const uploadImageToCloudinary = async file => {

// //   const uploadData = new FormData()

// //   uploadData.append('file', file)
// //   uploadData.append('upload_preset', upload_preset)
// //   uploadData.append('cloud_name', cloud_name)

// //   const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
// //     method:'post',
// //     body:uploadData,
// //   })

// //   const data = await res.json()

// //   return data;

// // }

// // export default uploadImageToCloudinary








// const uploadImageToCloudinary = async (file) => {
//   const uploadData = new FormData();
//   uploadData.append('file', file);
//   uploadData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET); // "health-chat"

//   try {
//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
//       {
//         method: 'POST',
//         body: uploadData,
//       }
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.error?.message || 'Upload failed');
//     }

//     return data;
//   } catch (err) {
//     console.error('Cloudinary upload error:', err.message);
//     return { error: err.message };
//   }
// };

// export default uploadImageToCloudinary;







/**
 * Uploads an image file to Cloudinary
 * @param {File} file - The image file to upload
 * @returns {Promise} - Promise resolving to upload response or error
 */
const uploadImageToCloudinary = async (file) => {
  // Fallback values in case environment variables aren't working
  const cloudName = import.meta.env.VITE_CLOUD_NAME || "codewithfouzia";
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET || "health-chat";
  
  console.log("Cloudinary config:", {
    cloudName,
    uploadPreset
  });
  
  const uploadData = new FormData();
  uploadData.append('file', file);
  uploadData.append('upload_preset', uploadPreset);

  try {
    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    console.log("Uploading to:", apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: uploadData
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error("Cloudinary API error response:", data);
      throw new Error(data.error?.message || 'Failed to upload image');
    }

    return {
      url: data.secure_url,
      public_id: data.public_id,
      ...data
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return { 
      error: error.message || 'Image upload failed'
    };
  }
};

export default uploadImageToCloudinary;