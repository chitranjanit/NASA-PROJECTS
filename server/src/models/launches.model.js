const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kapler exploration X",
  rocket: "Explorer IS1",
  lunchDate: new Date("December 27,2030"),
  destination: "Kapler-442 b",
  customer: ["NASA", "ZTM"],
  upcomming: true,
  success: true,
};

// launches.set()
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
