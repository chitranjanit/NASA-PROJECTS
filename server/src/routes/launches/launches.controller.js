const { lunchesModel } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(lunchesModel.getAllLaunches());
}

module.exports = {
  httpGetAllLaunches,
};
