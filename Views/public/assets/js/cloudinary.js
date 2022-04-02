const imageDrop = cloudinary.createUploadWidget({
    cloudname: 'ideafora',
    uploadPreset: 'ideafora_format'
    }, 
    (err, res) => {
        if (!err && res && res.event === 'success') {
            console.log('shazam! here is the image info: ', res.info);
        }
    }
)

document.getElementById("addimage").addEventListener("click", function() { imageDrop.open(); }, false);