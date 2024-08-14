const fs = require('fs');
const path = require('path');

function getPackageNameAndVersion() {
  try {
    // Read the package.json file
    const packageJsonPath = path.join(process.cwd(), 'package.json'); 
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');

    // Parse the JSON content
    const packageData = JSON.parse(packageJsonContent);

    // Extract the package name and version
    const packageName = packageData.name;
    const packageVersion = packageData.version;

    // Return the formatted string
    return `${packageName}@${packageVersion}`;
  } catch (error) {
    console.error('Error reading package.json:', error);
    return null; // Or throw an error if you prefer
  }
}

module.exports = {
  getPackageNameAndVersion
};
