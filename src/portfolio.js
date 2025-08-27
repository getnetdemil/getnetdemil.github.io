/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Getnet Demil's Portfolio",
  description:
  " I am a Doctoral researcher at University of Oulu, holder of three joint master's degrees in Image Processing and Computer Vision from France, Spain and Hungary.",
  og: {
    title: "Getnet Demil Portfolio",
    type: "website",
    url: "http://getnetdemil.github.io/",
  },
};

//Home Page
const greeting = {
  title: "GetNet Demil",
  logo_name: "GetNet Demil",
  nickname: "የያጤነሽ ልጅ - Yatenesh's Son",
  subTitle:
    "I'm a Doctoral researcher at University of Oulu, holder of Erasmus Mundus Joint Master's Degrees in Image Processing and Computer Vision from France, Spain and Hungary.",
  resumeLink:
    "https://flowcv.com/resume/pwg1rj0mti",
  portfolio_repository: "https://www.linkedin.com/in/getnetdemil/",
  githubProfile: "https://github.com/getnetdemil",
  // displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/getnetdemil",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/getnetdemil/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/getnetdemil",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:getnetd24@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/getnetdemil",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/GrayHat/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/getnet_demil_jr/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "I can speak",
      fileName: "DataScienceImg",
      skills: [
        // "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        // "⚡ Experience of working with Computer Vision and NLP projects",
        // "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon-cplusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matlab",
          fontAwesomeClassname: "devicon-matlab",
          style: {
            backgroundColor: "transparent",
            // color: "#D00000",
          },
        },
      ],
    },
    {
      title: "Frameworks",
      fileName: "FullStackImg",
      skills: [
        // "⚡ Building responsive website front end using React-Redux",
        // "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        // "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [

        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        
        {
          skillName: "Keras",
          fontAwesomeClassname: "devicon-keras",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "devicon-opencv",
          style: {
            backgroundColor: "transparent",

          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "devicon-scikitlearn",
          style: {
            backgroundColor: "transparent",

          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon-matplotlib",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "devicon-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon-pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pillow",
          imageSrc: "pillow.png",
        },
        {
          skillName: "Skimage",
          imageSrc: "skimage.png",

        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Tools",
      fileName: "CloudInfraImg",
      skills: [
        // "⚡ Experience working on multiple cloud platforms",
        // "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        // "⚡ Deploying deep learning models on cloud to use on mobile devices",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Latex",
          fontAwesomeClassname: "devicon-latex",
        style: {
          backgroundColor: "transparent",
          },
        },
        {
          skillName: "VScode",
          fontAwesomeClassname: "devicon-vscode",
          style: {
            backgroundColor: "transparent",

          },
        },
        {
          skillName: "Anaconda",
          fontAwesomeClassname: "devicon-anaconda",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Colab",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "devicon-jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon-git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SAP ERP",
          fontAwesomeClassname: "logos:sap",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "OptiSystem",
          imageSrc: "opti.png",
        },
      ],
    },
    {
      title: "Awards",
      fileName: "DesignImg",
      skills: [
        "⚡ Erasmus+ Grante, 2023",
        "⚡ IPCV Excellence Scholarship, 2022",
        "⚡ African Top 50 Project of The Year, 2019",
        "⚡ Bahir Dar University Best Project of The Year, 2018",
        
      ],
      softwareSkills: [
        {
          skillName: "Erasmus+ Grante",
          imageSrc: "ipcv.png",
        },
        {
          skillName: "IPCV Excellence Scholarship",
          // fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "African Top 50 Project of The Year, 2019",
          imageSrc: "au.png",

        },
        {
          skillName: "Bahir Dar University Best Project of The Year, 2018",
          imageSrc: "bdu.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
   {
      siteName: "Finland",
      iconifyClassname: "twemoji:flag-finland",
      style: {
        backgroundColor: "transparent",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "France",
      iconifyClassname: "twemoji:flag-france",
      style: {
        backgroundColor: "transparent",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "Spain",
      iconifyClassname: "twemoji:flag-spain",
      style: {
        backgroundColor: "transparent",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "Hungary",
      iconifyClassname: "twemoji:flag-hungary",
      style: {
        backgroundColor: "transparent",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "Ethiopia",
      iconifyClassname: "twemoji:flag-ethiopia",
      style: {
        backgroundColor: "transparent",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Oulu - Finland",
      subtitle: "Doctoral Researcher in AI, Remote Sensing and Hydrology Modelling",
      logo_path: "oulu.jpg",
      alt_name: "UO",
      duration: "2024 - Present",
      descriptions: [
        "⚡ Doctoral Researcher focusing on AI applications in Remote Sensing",
        "⚡ Specializing in Hydrology Modelling and advanced machine learning techniques",
      ],
      website_link: "https://www.oulu.fi/en",
    },
    {
      title: "University of Bordeaux - France",
      subtitle: "M.Sc. in Image Processing and Computer Vision",
      logo_path: "ub.png",
      alt_name: "UBx",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Exchange Student in Image Processing and Computer Vision",
        "⚡ I studied Deep learning, Augmented Reality, 3D Reconstruction, Explainable AI",
      ],
      website_link: "https://www.u-bordeaux.fr/en",
    },
    {
      title: "Autonomous University of Madrid - Spain",
      subtitle: "M.Sc. in Image Processing and Computer Vision",
      logo_path: "uam.png",
      alt_name: "UAM",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Exchange Student in Image Processing and Computer Vision",
        "⚡ I studied Computer vision, Deep learning",
      ],
      website_link: "https://www.uam.es",
    },
    {
      title: "Pazmany Peter Catholic University - Hungary",
      subtitle: "M.Sc. in Image Processing and Computer Vision",
      logo_path: "ppke.png",
      alt_name: "PPKE",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ M.Sc, Computer Science and Engineering Specialization in Image Processing and Computer Vision",
        "⚡ I studied Basics of Image Processing",
      ],
      website_link: "https://www.ppke.hu",
    },
    {
      title: "Bahir Dar University - Ethiopia",
      subtitle: "M.Sc. in Communication System Engineering",
      logo_path: "bdu.png",
      alt_name: "BDU",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have Studied Communication System Engineering",
        "⚡ My research interest has been in millimeter wave radio over fiber",
      ],
      website_link: "https://www.bdu.edu.et",
    },
    {
      title: "Bahir Dar University - Ethiopia",
      subtitle: "B.Sc. in Electrical (Electronics and Communication System) Engineering",
      logo_path: "bdu.png",
      alt_name: "BDU",
      duration: "2013 - 2018",
      descriptions: [
        "⚡ I have studied Electrical Engineering with hand on lab practices",
        "⚡ I have specialized in Electronics and Communication System Engineering ",
      ],
      website_link: "https://www.bdu.edu.et",
    },
  ],
};

// Certificate
const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many companies and research teams.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Doctoral Researcher",
          company: "University of Oulu",
          company_url: "https://www.oulu.fi/en",
          logo_path: "oulu.jpg",
          duration: "2024 - Present",
          location: "Oulu, Finland",
          description:
            "Conducting research in AI applications for Remote Sensing and Hydrology Modelling.",
          color: "#0071C5",
        },
        {
          title: "Junior Electrical Engineer",
          company: "Ethiopian Electric Utility",
          company_url: "https://eeu.gov.et",
          logo_path: "eeu.png",
          duration: "3.5 Years",
          location: "Bahir Dar, Ethiopia",
          description:
            "I have worked as a junior Electrical Engineer.",
          color: "#0879bf",
        },
        {
          title: "Technology Officer",
          company: "American Space Ethiopia",
          company_url: "https://et.usembassy.gov/",
          logo_path: "usa.jpg",
          duration: "1.5 Years",
          location: "Bahir Dar, Ethiopia",
          description:
            "I have organized and managed daily technology events for the youth.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Image Processing and Computer Vision Intern",
          company: "University of Oulu",
          company_url:
            "https://www.oulu.fi",
          logo_path: "oulu.jpg",
          duration: "Feb 2024 - July 2024",
          location: "Oulu, Finland",
          description:
            "This intern position is responsible for water depth estimation from social media posts. ",
          color: "#0071C5",
        },
        {
          title: "Operations and Maintenance Engineer Intern",
          company: "Ethiopia Telecommunication",
          company_url: "https://www.etc.gov.et",
          logo_path: "etc.jpg",
          duration: "4 Months.",
          location: "Bahir Dar, Ethiopia",
          description:
            "Operations and Maintenance Engineer Intern was responsible for maintaining the network infrastructure of ETC.",
          color: "#000000",
        },
        {
          title: "Radio and TV Broadcast Engineer Intern",
          company: "Amhara Media Corporation",
          company_url: "https://www.ameco.et/",
          logo_path: "ameco.png",
          duration: "4 Months.",
          location: "Bahir Dar, Ethiopia",
          description:
            "Radio and TV Broadcast Engineer Intern was responsible for TV and Radio broadcast services in the Amhara Region of Ethiopia.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          "title": "Junior Electrical Engineer",
          "company": "Ethiopian Electric Utility",
          "company_url": "https://www.eeu.gov.et/",
          "logo_path": "eeu.png",
          "duration": "3 years.",
          "location": "Bahir Dar, Ethiopia",
          "description": "Help them by Automated File management system.",
          "color": "#33691E"
        },
        {
          "title": "Technology Support Grantee",
          "company": "American Spaces Ethiopia",
          "company_url": "https://et.usembassy.gov/",
          "logo_path": "usa.jpg",
          "duration": "Present",
          "location": "Bahir Dar, Ethiopia",
          "description": "",
          "color": "#1A237E"
        },
        {
          "title": "President",
          "company": "Bahir Dar University Electrical and Computer Engineering Students Association",
          "company_url": "https://www.bdu.edu.et",
          "logo_path": "bdu.png",
          "duration": "1 Year",
          "location": "Bahir Dar, Ethiopia",
          "description": "I led the association for 1 year",
          "color": "#FF6F00"
        },
        {
          "title": "Project Supervisor",
          "company": "Bahir Dar University Electrical and Computer Engineering Students Association",
          "company_url": "https://www.bdu.edu.et",
          "logo_path": "bdu.png",
          "duration": "1 year",
          "location": "Bahir Dar, Ethiopia",
          "description": "I supervised the association projects",
          "color": "#B71C1C"
        },
        {
          "title": "Train Engineer Intern",
          "company": "Ethiopian Tele Communication",
          "company_url": "etc.gov.et",
          "logo_path": "etc.jpg",
          "duration": "4 months",
          "location": "Bahir Dar, Ethiopia",
          "description": "As an intern, I support the maintenance team.",
          "color": "#004D40"
        },
        {
          "title": "Train Engineer Intern",
          "company": "Amahara Media Corporation",
          "company_url": "https://www.ameco.et/",
          "logo_path": "ameco.png",
          "duration": "4 months",
          "location": "Bahir Dar, Ethiopia",
          "description": "as an Intern I gave support to the team.",
          "color": "#004D40"
        },
        {
          "title": "American Space Badges",
          "company": "American Space Ethiopia",
          "company_url": "https://et.usembassy.gov/",
          "logo_path": "usa.jpg",
          "duration": "1 year",
          "location": "Bahir Dar, Ethiopia",
          "description": "I led the technology team",
          "color": "#1A237E"
        }
      ],
    },
  ],
};

// Open Source Projects Configuration
const openSource = {
  githubConvertedToken: "Z2hwX25UQmpLMWRqS0hIT0NKbDZVZGNUVUs1bGZVQU5KMDExZXpmUg==", // Replace with your actual token
  githubUserName: "getnetdemil", // Your GitHub username
  showGithubProfile: true,
  display: true // Set to false if you don't want to display projects
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I was involved in several research projects that applied image processing and computer vision techniques to solve various problems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "My research contributions in Image Processing, Computer Vision, and Artificial Intelligence through peer-reviewed publications.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "pub_001",
      title: "Advances in image-based estimation of snow variable: A systematic literature review on recent studies",
      authors: "Getnet Demil, Ali Torabi Haghighi, Björn Klöve, Mourad Oussalah",
      year: 2025,
      type: "Journal",
      venue: "Journal of Hydrology",
      abstract: "This comprehensive systematic literature review examines recent advances in using image-based techniques for estimating snow hydrology parameters. The paper focuses on snow coverage mapping and snow depth estimation, which are crucial for water resource dynamics, flood forecasting, and environmental management in snow-influenced regions. We highlight the transformative potential of deep learning architectures and uncertainty quantification in snow hydrology modeling.",
      citations: "",
      impact: "High",
      doi: "https://doi.org/10.1016/j.jhydrol.2025.132855",
      pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0022169425001933",
      url: "https://www.sciencedirect.com/science/article/pii/S0022169425001933"
    },
    {
      id: "pub_002", 
      title: "Seeing through the clouds: enhanced snow and cloud segmentation in sentinel-2 imagery with mDeepLabV3+",
      authors: "Getnet Demil, Ali Torabi Haghighi, Björn Klöve, Mourad Oussalah",
      year: 2025,
      type: "Journal",
      venue: "Earth Science Informatics",
      abstract: "This research addresses the challenge of snow hydrology parameter estimation using satellite-based remote sensing by proposing a novel deep-learning framework based on a modified DeepLabV3+ architecture. Our approach classifies background, snow, and cloud regions in multispectral Sentinel-2 imagery, incorporating an elevated dilation rate of 24 and leveraging cross-domain transfer learning with ResNet-50 and ResNet-101 backbones. The mDeepLabV3+ model achieves exceptional precision (99.9%), F1 score (98.0%), and mean Intersection over Union (mIOU) of 91.13%, demonstrating significant improvements over existing methods for snow and cloud segmentation.",
      citations: "",
      impact: "High",
      doi: "https://doi.org/10.1007/s12145-025-01950-6",
      pdfUrl: "https://www.researchgate.net/publication/394079658_Seeing_through_the_clouds_enhanced_snow_and_cloud_segmentation_in_sentinel-2_imagery_with_mDeepLabV3",
      url: "https://link.springer.com/article/10.1007/s12145-025-01950-6"
    },
     {
      id: "pub_003", 
      title: "AI-based Approach in Early Warning Systems: Focus on Emergency Communication Ecosystem and Citizen Participation in Nordic Countries",
      authors: "Getnet Demil, Fuzel Shaik, Mourad Oussalah",
      year: 2025,
      type: "Book Chapter",
      venue: "ArXiv",
      abstract: "Climate change and natural disasters are recognized as worldwide challenges requiring complex and efficient ecosystems to deal with social, economic, and environmental effects. This chapter advocates a holistic approach, distinguishing preparedness, emergency responses, and postcrisis phases. The role of the Early Warning System (EWS), Risk modeling and mitigation measures are particularly emphasized. The chapter reviews the various Artificial Intelligence (AI)-enabler technologies that can be leveraged at each phase, focusing on the INFORM risk framework and EWSs. Emergency communication and psychological risk perception have been emphasized in emergency response times. Finally, a set of case studies from Nordic countries has been highlighted.",
      citations: "",
      impact: "High",
      doi: "https://doi.org/10.48550/arXiv.2506.18926",
      pdfUrl: "https://doi.org/10.48550/arXiv.2506.18926",
      url: "https://doi.org/10.48550/arXiv.2506.18926"
    },
    {
      id: "pub_004",
      title: "Deep Learning Based Snow Hydrology Parameter Estimation from Image Sensors",
      authors: "Getnet Demil, Prof Jenny Benois-Pineau, Prof Mourad Oussalah",
      year: 2024,
      type: "MSc Thesis",
      venue: "EMJMD IPCV Thesis",
      abstract: "We present a comprehensive data processing pipeline using deep learning techniques to estimate snow hydrology parameters from imagery data. The framework incorporates advanced data acquisition methods, model selection strategies, training methodologies, and comprehensive performance evaluation metrics for accurate snow parameter estimation from various image sensors.",
      citations: "",
      impact: "Medium",
      doi: "",
      pdfUrl: "",
      url: ""
    },
    {
      id: "pub_005",
      title: "Leveraging Social Media for Real-Time Monitoring of Local Climate Impact",
      authors: "Getnet Demil, Mourad Oussalah",
      year: 2024,
      type: "Workshop",
      venue: "SIGIR 2024 Workshop on Climate Change and AI",
      abstract: "This research explores the potential of social media as a dynamic, real-time data source for monitoring localized climate change impacts. We demonstrate how social media data can complement traditional meteorological measurements to provide comprehensive climate monitoring capabilities, particularly for understanding local community impacts of climate phenomena.",
      citations: "",
      impact: "Medium",
      doi: "",
      pdfUrl: "",
      url: ""
    },
    {
      id: "pub_006",
      title: "Performance Analysis of Coherent Optical OFDM System for 70 GHz Radio-Over-Fiber (ROF)",
      authors: "Getnet Demil, Prof Push",
      year: 2024,
      type: "MSc Thesis",
      venue: "Bahir Dar University",
      abstract: "This study applies advanced semantic segmentation techniques including U-Net, Attention U-Net, and DeepLabV3+ to UAV imagery for precision agriculture applications. We demonstrate effective classification of crop fields, background areas, and weed detection, providing valuable insights for modern agricultural management and crop monitoring systems.",
      citations: "",
      impact: "Medium",
      doi: "",
      pdfUrl: "",
      url: ""
    },
    {
      id: "pub_007",
      title: "Information Retrieval for Climate Impact-Report on the MANILA24 Workshop",
      authors: "Getnet Demil et al.",
      year: 2024,
      type: "Workshop",
      venue: "ACM",
      abstract: "This report summarizes the key discussions and findings from the MANILA24 workshop, focusing on the intersection of information retrieval technologies and climate impact analysis. The workshop highlighted innovative approaches to leveraging information retrieval for enhancing climate change research and policy-making.",
      citations: "",
      impact: "High",
      doi: "https://doi.org/10.1145/3626772.3657993",
      pdfUrl: "https://doi.org/10.1145/3626772.3657993",
      url: "https://doi.org/10.1145/3626772.3657993"
    }
  ],
};

// Contact Page
// News Page
const newsData = {
  news: [
    // {
    //   id: "news_001",
    //   title: "New Research Paper Published in Journal of Hydrology",
    //   date: "2025-03-01",
    //   category: "Publication",
    //   content: "Excited to announce that our comprehensive systematic literature review on 'Advances in image-based estimation of snow variable' has been published in the Journal of Hydrology. This work examines recent advances in using image-based techniques for estimating snow hydrology parameters.",
    //   link: "https://doi.org/10.1016/j.jhydrol.2025.132855",
    //   image: "snow_research.jpg",
    //   tags: ["Research", "Snow Hydrology", "Deep Learning"]
    // },
    {
      id: "news_002", 
      title: "mDeepLabV3+ Architecture Published in Earth Science Informatics",
      date: "2025-06-01",
      category: "Publication",
      content: "Our novel deep-learning framework based on modified DeepLabV3+ for snow and cloud segmentation in Sentinel-2 imagery has been published. The model achieves exceptional precision of 99.9% and F1 score of 98.0%.",
      link: "https://doi.org/10.1007/s12145-025-01950-6",
      image: "deeplab_research.jpg", 
      tags: ["Computer Vision", "Remote Sensing", "Deep Learning"]
    },
    {
      id: "news_003",
      title: "Doctoral Research at University of Oulu",
      date: "2024-09-01",
      category: "Academic",
      content: "Celebrating one year of doctoral research in AI applications for Remote Sensing and Hydrology Modelling at the University of Oulu. Working on cutting-edge applications of artificial intelligence in environmental monitoring.",
      link: "https://www.oulu.fi/en",
      image: "oulu_campus.jpg",
      tags: ["PhD Journey", "AI", "Remote Sensing"]
    },
    {
      id: "news_004",
      title: "SIGIR 2024 Workshop Participation - Climate Change and AI",
      date: "2024-07-20",
      category: "Conference",
      content: "Presented research on 'Leveraging Social Media for Real-Time Monitoring of Local Climate Impact' at the SIGIR 2024 Workshop on Climate Change and AI. Exploring innovative ways to use social media data for climate monitoring.",
      link: "",
      image: "sigir_workshop.jpg",
      tags: ["Social Media", "Climate Change", "AI"]
    },
    {
      id: "news_005",
      title: "Successful Completion of Erasmus Mundus IPCV Program",
      date: "2024-06-30",
      category: "Academic",
      content: "Successfully completed the Erasmus Mundus Joint Master's Degree in Image Processing and Computer Vision with excellence. Studied across three countries: France (University of Bordeaux), Spain (UAM), and Hungary (PPKE).",
      link: "",
      image: "graduation.jpg",
      tags: ["Graduation", "IPCV", "Erasmus Mundus"]
    }
  ]
};

// Event Images for Slideshow
const eventImages = [
  {
    src: "oulu.jpg",
    title: "University of Oulu - Doctoral Research",
    description: "Starting my doctoral journey in AI and Remote Sensing at University of Oulu, Finland",
    location: "Oulu, Finland"
  },
  {
    src: "ub.png", 
    title: "University of Bordeaux - IPCV Program",
    description: "Studying Image Processing and Computer Vision as part of Erasmus Mundus Joint Master's Degree",
    location: "Bordeaux, France"
  },
  {
    src: "uam.png",
    title: "Autonomous University of Madrid",
    description: "Exchange semester focusing on Computer Vision and Deep Learning techniques",
    location: "Madrid, Spain"
  },
  {
    src: "ppke.png",
    title: "Pazmany Peter Catholic University",
    description: "Learning fundamentals of Image Processing and Computer Vision methodologies", 
    location: "Budapest, Hungary"
  },
  {
    src: "bdu.png",
    title: "Bahir Dar University - Best Project Award",
    description: "Received Best Project Award for innovative work in Communication System Engineering",
    location: "Bahir Dar, Ethiopia"
  },
  {
    src: "usa.jpg",
    title: "American Space Ethiopia - Technology Officer",
    description: "Leading technology initiatives and organizing events for Ethiopian youth development",
    location: "Bahir Dar, Ethiopia"
  },
  {
    src: "experience.svg",
    title: "Research Conference Presentation",
    description: "Presenting latest research findings on AI applications in environmental monitoring",
    location: "Academic Conference"
  },
  {
    src: "education.svg",
    title: "Academic Workshop Participation",
    description: "Participating in workshops on cutting-edge computer vision and machine learning techniques",
    location: "Research Workshop"
  }
];

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "getnet_profile.png",
    description:
      "Send me messages and I will get back to you soon",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Read my blogs on Medium",
    link: "https://medium.com/@getnetdemil/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Yliopistokatu xx, 90570 Oulu, Finland",
    locality: "Oulu",
    country: "FI",
    region: "Oulu",
    postalCode: "90570",
    streetAddress: "Yliopistokatu xx",
    // avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/zZjp5zUSqxXeCSxr5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  openSource,
  projectsHeader,
  publicationsHeader,
  publications,
  newsData,
  eventImages,
  contactPageData,
};
