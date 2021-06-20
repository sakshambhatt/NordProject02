export const getSortedData = (peopleArr, sortBy) => {
  switch (sortBy) {
    case "NONE":
      return peopleArr;
    case "HEIGHT_LOW_TO_HIGH":
      return peopleArr.sort((a, b) => a.height - b.height);
    case "HEIGHT_HIGH_TO_LOW":
      return peopleArr.sort((a, b) => b.height - a.height);
    case "MASS_LOW_TO_HIGH":
      return peopleArr.sort((a, b) => a.mass - b.mass);
    case "MASS_HIGH_TO_LOW":
      return peopleArr.sort((a, b) => b.mass - a.mass);
    default:
      console.log("something is wrong with getSortedData...");
      break;
  }
};
