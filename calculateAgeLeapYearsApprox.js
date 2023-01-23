/**
 * Calculate the age based on a birthdate
 * @param {Date} birthdate - birthdate of the person
 * @returns {Object} - An object containing the age in years, days, hours, minutes, and seconds
 */
function calculateAgeLeapYearsApprox(birthdate) {
  var today = new Date()
  var ageInMilliseconds = today - birthdate
  var ageInSeconds = ageInMilliseconds / 1000
  var ageInMinutes = ageInSeconds / 60
  var ageInHours = ageInMinutes / 60
  var ageInDays = ageInHours / 24
  var ageInYears = ageInDays / 365.25

  var years = Math.floor(ageInYears)
  var days = Math.floor(ageInDays % 365.25)
  var hours = Math.floor(ageInHours % 24)
  var minutes = Math.floor(ageInMinutes % 60)
  var seconds = Math.floor(ageInSeconds % 60)

  return { years, days, hours, minutes, seconds }
}

export default calculateAgeLeapYearsApprox
