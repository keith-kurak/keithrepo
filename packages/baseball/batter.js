const fs = require("fs");
const csv = require("csvtojson");

const playerId = process.argv[2];

function toNum(num) {
  return parseFloat(num, 10);
}

async function doAsync() {
  const csvFilePath = "./data/core/Batting.csv";
  csv().fromFile(csvFilePath);

  let jsonArray=await csv().fromFile(csvFilePath);
  jsonArray = jsonArray.filter((row) => row.playerID === playerId);

  // calculate stats
  jsonArray.forEach(season => {
    season.AVG = String(toNum(season.H) / toNum(season.AB)).substring(0,5).substring(1,5);
    season.OBP = String((toNum(season.H) + toNum(season.BB) + toNum(season.HBP)) / (toNum(season.AB) + toNum(season.BB) + toNum(season.HBP) + toNum(season.SF))).substring(0,5).substring(1,5);
    season.SLG = String((toNum(season.H) + toNum(season["2B"]) + toNum((2 * season["3B"])) + toNum((3 * season.HR))) / toNum(season.AB)).substring(0,5).substring(1,5);
  })

  fs.writeFileSync(`output/${playerId}.json`, JSON.stringify(jsonArray));
}

doAsync();