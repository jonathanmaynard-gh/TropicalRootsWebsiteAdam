const fs = require('fs');
const path = require('path');

// Define a function to read directory contents and map them to web-accessible paths
function readImageDirectory(directoryPath, webPathPrefix) {
    try {
        return fs.readdirSync(directoryPath).map(file => {
            return `${webPathPrefix}/${file}`;
        });
    } catch (err) {
        console.error(`Error reading the images directory (${directoryPath}):`, err);
        return []; // Return an empty array in case of an error
    }
}

// Paths to the images directories within the 'public' folder
const imagesDirPaths = {
    pergolasPavillions: path.join(__dirname, '..', '..', 'public', 'images', 'pergolas-pavillions-portfolio'),
    outdoorKitchens: path.join(__dirname, '..', '..', 'public', 'images', 'outdoor-kitchens-portfolio'),
    compositeDecks: path.join(__dirname, '..', '..', 'public', 'images', 'composite-decks-portfolio'),
    design3D: path.join(__dirname, '..', '..', 'public', 'images', '3d-design-portfolio'),
};

// Web-accessible path prefixes
const webPathPrefixes = {
    pergolasPavillions: '/images/pergolas-pavillions-portfolio',
    outdoorKitchens: '/images/outdoor-kitchens-portfolio',
    compositeDecks: '/images/composite-decks-portfolio',
    design3D: '/images/3d-design-portfolio',
};

// Read the directory contents and map them to web-accessible paths
let imageFiles = {};
Object.keys(imagesDirPaths).forEach(category => {
    imageFiles[category] = readImageDirectory(imagesDirPaths[category], webPathPrefixes[category]);
});

module.exports = imageFiles;