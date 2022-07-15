const launches = new Map();

let latestFlightNumber = 100;

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

function addNewLaunches(launch) {
  latestFlightNumber++;
  launchesRouter.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcomming: true,
      customer: ["Zero to masry", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunches,
};
