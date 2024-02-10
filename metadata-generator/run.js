const xlsx = require('xlsx');
const fs = require('fs');

const readExcelAndCreateJSON = (filePath) => {
  // Read the Excel file
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convert Excel data to JSON
  const data = xlsx.utils.sheet_to_json(sheet);

  // Loop through each row in the Excel data
  data.forEach((row, index) => {
    const jsonData = {
      name: row.name,
      description: row.description,
      image: row.image,
      attributes: [],
    };

    // Save as JSON file
    fs.writeFileSync(`${index + 1}.json`, JSON.stringify(jsonData, null, 2));
  });

  console.log('JSON files created successfully!');
};

// Execute the function and pass the Excel file path
readExcelAndCreateJSON('./metadata-generator/metadata.xlsx');
