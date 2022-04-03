const cloudName = "ideafora"; // replace with your own cloud name
const uploadPreset = "ideafora_format"; // replace with your own upload preset
const userNameId = document.querySelector('#userinfo'); // get user name and id from document


const imageDrop = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    cropping: true, 
    showSkipCropButton: false,
    croppingAspectRatio: 1,
    multiple: false, 
    folder: "userimg", //upload files to the specified folder
    tags: [userNameId.user], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    theme: "minimal", //change to a minimal theme
    styles: {
      palette: {
        window: "#EBEDFF",
        windowBorder: "#EBEDFF",
        tabIcon: "#00053E",
        menuIcons: "#EBEDFF",
        textDark: "#00053E",
        textLight: "#EBEDFF",
        link:  "#00053E",
        action:  "#00053E",
        inactiveTabIcon: "#00053E",
        error: "#00053E",
        inProgress: "#EBEDFF",
        complete: "#EBEDFF",
        sourceBg: "#00053E"
      },
      frame: {
        background: "#EBEDFF"
      },
      fonts: {
          "'Inconsolata', 600": "https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap",
      }
  }
  },
  (err, res) => {
    if (!err && res && res.event === "success") {
      console.log("Done! Here is the image info: ", res.info);
      document
        .getElementById("uploadedimage")
        .setAttribute("src", res.info.secure_url);
      document.location.reload();
        // // THIS !!!
        // //how do i make this a secure url? also, make this function?
        // .setAttribute("src", res.info.secure_url/userimg/(userNameId.user));;
    }
  }
);

document.getElementById("addimage").addEventListener(
  "click",
  function () {
    imageDrop.open();
  },
  false
);
