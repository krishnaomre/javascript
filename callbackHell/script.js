function download(path, callback){
    console.log('File started to download');
    setTimeout(() => {
        // file = 'profile.jpg';
        file = path.split('/').pop();
        callback(file);
        // return file;
    }, 3000);
}

function compress(file, callback){
    console.log('File started to compress');
    setTimeout(() => {
        compressedFile = file.split('.')[0] + '.zip';
        callback(compressedFile);
    }, 2000);
}

function upload(file, callback){
    console.log(file, 'file started to upload');
    setTimeout(() => {
        url = 'https://facebook.server.com/' + file;
        callback(url);
    }, 3000);
}

url = 'www.facebook.com/profile.jpg'
download(url, function(downloadedFile){
    console.log(downloadedFile, 'donwnloaded successfully!');
    compress(downloadedFile, function(compressedFile){
        console.log('file successfully compressed to ', compressedFile);
        upload(compressedFile, function(){
            console.log('file uploaded to ', url);
        });
    })
});

// let downloadedFile = downloadFile(url);
// console.log(downloadedFile, 'downloaded successfully!');
