/**
 * Finds the leap years between two years
 * @param {number} year1 - The starting year
 * @param {number} year2 - The ending year
 * @returns {number[]} - An array of leap years
 */
function findLeapYears(year1, year2) {
  var leapYears = [];
  for (var i = year1; i <= year2; i++) {
    if (i % 4 === 0) {
      if (i % 100 !== 0 || i % 400 === 0) {
        leapYears.push(i);
      }
    }
  }
  return leapYears;
}

export default findLeapYears 
