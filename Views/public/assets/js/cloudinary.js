const cloudName = "ideafora"; // replace with your own cloud name
const uploadPreset = "ideafora_format"; // replace with your own upload preset
// const userNameId = document. // get user name and id from document

// Remove the comments from the code below to add
// additional functionality.
// Note that these are only a few examples, to see
// the full list of possible parameters that you
// can add see:
//   https://cloudinary.com/documentation/upload_widget_reference

const imageDrop = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    multiple: false,  //restrict upload to a single file
    folder: "../img/userimg", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    clientAllowedFormats: ["images"], //restrict uploading to image files only
    maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    theme: "minimal", //change to a minimal theme
    // styles: createStyle //https://cloudinary.com/documentation/upload_widget#look_and_feel_customization
  },
  (err, res) => {
    if (!err && res && res.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
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
document.getElementById("addimage").addEventListener("click", function() { imageDrop.open(); }, false);