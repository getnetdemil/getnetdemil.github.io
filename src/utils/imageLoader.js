// Utility to dynamically load all images from conference_pictures folder
// This uses webpack's require.context to automatically import all images

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Auto-import all images from conference_pictures folder
let conferenceImages = {};
try {
  const imageContext = require.context('../assests/images/conference_pictures', false, /\.(png|jpe?g|svg|gif)$/);
  conferenceImages = importAll(imageContext);
} catch (error) {
  console.log('Conference pictures folder not found or empty, using fallback images');
}

// Convert imported images to slideshow format
export const getConferenceImages = () => {
  const imageKeys = Object.keys(conferenceImages);
  
  if (imageKeys.length === 0) {
    // Fallback to existing university/institution images if conference_pictures is empty
    return [
      {
        src: require('../assests/images/oulu.jpg'),
        title: "University of Oulu - Doctoral Research",
        description: "Starting my doctoral journey in AI and Remote Sensing at University of Oulu, Finland",
        location: "Oulu, Finland",
        filename: "oulu.jpg"
      },
      {
        src: require('../assests/images/ub.png'), 
        title: "University of Bordeaux - IPCV Program",
        description: "Studying Image Processing and Computer Vision as part of Erasmus Mundus Joint Master's Degree",
        location: "Bordeaux, France",
        filename: "ub.png"
      },
      {
        src: require('../assests/images/uam.png'),
        title: "Autonomous University of Madrid",
        description: "Exchange semester focusing on Computer Vision and Deep Learning techniques",
        location: "Madrid, Spain",
        filename: "uam.png"
      },
      {
        src: require('../assests/images/ppke.png'),
        title: "Pazmany Peter Catholic University",
        description: "Learning fundamentals of Image Processing and Computer Vision methodologies", 
        location: "Budapest, Hungary",
        filename: "ppke.png"
      },
      {
        src: require('../assests/images/bdu.png'),
        title: "Bahir Dar University - Best Project Award",
        description: "Received Best Project Award for innovative work in Communication System Engineering",
        location: "Bahir Dar, Ethiopia",
        filename: "bdu.png"
      },
      {
        src: require('../assests/images/usa.jpg'),
        title: "American Space Ethiopia - Technology Officer",
        description: "Leading technology initiatives and organizing events for Ethiopian youth development",
        location: "Bahir Dar, Ethiopia",
        filename: "usa.jpg"
      }
    ];
  }

  // Generate slideshow data from conference_pictures folder
  return imageKeys.map((filename, index) => {
    // Extract title from filename (remove extension and format)
    const baseName = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ');
    const title = baseName.charAt(0).toUpperCase() + baseName.slice(1);
    
    return {
      src: conferenceImages[filename],
      title: title || `Conference Event ${index + 1}`,
      description: `Academic conference, workshop, or professional event`,
      location: "Academic Event",
      filename: filename
    };
  });
};

// For manual addition of conference images with metadata
export const addConferenceImageMetadata = (images) => {
  const metadataMap = {
    // You can add specific metadata for your conference images here
    'sigir_2024.jpg': {
      title: 'SIGIR 2024 Workshop - Climate Change and AI',
      description: 'Presented research on leveraging social media for real-time climate impact monitoring',
      location: 'SIGIR 2024, Washington DC'
    },
    'oulu_conference.jpg': {
      title: 'University of Oulu Research Symposium',
      description: 'Presenting doctoral research progress in AI applications for Remote Sensing',
      location: 'Oulu, Finland'
    },
    'ipcv_graduation.jpg': {
      title: 'IPCV Program Graduation Ceremony',
      description: 'Successful completion of Erasmus Mundus Joint Master\'s Degree',
      location: 'Europe'
    },
    // Add more as needed...
  };

  return images.map(image => {
    const metadata = metadataMap[image.filename];
    return {
      ...image,
      ...(metadata && {
        title: metadata.title,
        description: metadata.description,
        location: metadata.location
      })
    };
  });
};

export default { getConferenceImages, addConferenceImageMetadata };