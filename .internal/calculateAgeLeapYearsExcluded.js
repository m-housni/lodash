/**
 * Calculate the age based on a birthdate 
 * (!) it doesn't take leap years int o account
 * @param {Date} birthdate - birthdate of the person
 * @returns {Object} - An object containing the age in years, days, hours, minutes, and seconds
 */
function calculateAgeLeapYearsExcluded(birthdate) {
  var today = new Date()
  var age = today - birthdate
  var years = Math.floor(age / (1000 * 60 * 60 * 24 * 365))
  var days = Math.floor(age / (1000 * 60 * 60 * 24)) % 365
  var hours = Math.floor(age / (1000 * 60 * 60)) % 24
  var minutes = Math.floor(age / (1000 * 60)) % 60
  var seconds = Math.floor(age / 1000) % 60
  return { years, days, hours, minutes, seconds }
}

export default calculateAgeLeapYearsExcluded
