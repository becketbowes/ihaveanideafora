const cloudName = "ideafora"; // replace with your own cloud name
const uploadPreset = "ideafora_format"; // replace with your own upload preset
// const userNameId = document.querySelector('#userinfo'); // get user name and id from document

const imageDrop = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    cropping: true, 
    showSkipCropButton: false,
    croppingAspectRatio: 1,
    thumbnailTransformation: [
      { width: 300, height: 300, crop: 'limit'},
      {effect: "audrey"},
      {effect: "vectorize:colors:4:detail:0.1"},
      {effect: "replace_color:blue:50"}
    ],
    multiple: false, 
    folder: "userimg", //upload files to the specified folder
    // tags: [userNameId.user], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    theme: "minimal", //change to a minimal theme
    styles: {
      palette: {
        window: "#EBEDFF",
        windowBorder: "#EBEDFF",
        tabIcon: "#000326",
        menuIcons: "#EBEDFF",
        textDark: "#000326",
        textLight: "#EBEDFF",
        link:  "#000326",
        action:  "#000326",
        inactiveTabIcon: "#000326",
        error: "#000326",
        inProgress: "#EBEDFF",
        complete: "#EBEDFF",
        sourceBg: "#000326"
      },
      frame: {
        background: "#EBEDFF"
      },
      fonts: {
          "'Inconsolata', 600": "https://fonts.googleapis.com/css2?family=Inconsolata:wght@600",
      }
  }
  },
  (err, res) => {
    if (!err && res && res.event === "success") {
      console.log("Done! Here is the image info: ", res.info);
      // cloudinary.image(res.info.secure_url, {transformation: [
      //   {effect: audrey},
      //   {effect: "vectorize:colors:4:detail:0.5"},
      //   {effect: "replace_color:blue:50"}
      // ]})
      document
        .getElementById("uploadedimage")
        .setAttribute("src", res.info.secure_url);

        const image = res.info.secure_url;

        const response = fetch('/user-update-image', {
            method: 'put',
            body: JSON.stringify({ image }),
            headers: { 'Content-Type': 'application/json'}
        })
        .then( dbImageData => {
  
          const data = res.json(dbImageData);
          if (data) {
            document.location.assign('/user');
            // console.log("success")
          } else {
            alert(response.statusText);
        }
        })


        // cloudinary.image(res.info.secure_url, {transformation: [
        //   {effect: audrey},
        //   {effect: "vectorize:colors:4:detail:0.5"},
        //   {effect: "replace_color:blue:50"}
        // ]})
      // document.location.reload();
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
