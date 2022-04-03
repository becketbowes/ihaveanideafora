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
          window: "#000326",
          windowBorder: "#000326",
          tabIcon: "#EBEDFF",
          menuIcons: "#EBEDFF",
          textDark: "#EBEDFF",
          textLight: "#EBEDFF",
          link:  "#EBEDFF",
          action:  "#EBEDFF",
          inactiveTabIcon: "#C4C9FF",
          error: "#EBEDFF",
          inProgress: "#EBEDFF",
          complete: "#00053E",
          sourceBg: "#EBEDFF"
        },
        frame: {
          background: "#000326"
        },
        fonts: {
            "'Inconsolata', ": "https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap",
        }
    }
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      document
        .getElementById("uploadedimage")

        // THIS !!!
        //how do i make this a secure url? also, function?
        .setAttribute("src", result.info.secure_url/userimg/(userNameId.user));
    }
  }
);

document.getElementById("upload_widget").addEventListener("click", function () { imageDrop.open(); },false);



// cloudinary.image("image.url", {transformation: [
//   {effect: audrey},
//   {effect: "vectorize:colors:4:detail:0.5"}
//   {effect: "replace_color:blue:50"}
// ]})