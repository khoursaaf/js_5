var languagesArrayCreation = function () {
//  languages = ["Html","CSS","Java","PHP"];
//  return languages;
  var languages = [];
  languages.push("Html","CSS","Java","PHP")
  return languages;
}

var numbersArrayCreation = function () {
  var languages = []
  languages.push( 0, 1, 2, 3, 4, 5);
    return languages;
}

var ElementReplacement = function (languages) {
  // return languages.splice(2, 1 'Javascript');
  languages[2] = 'Javascript';
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python')
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift( -2, -1)
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift()
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop()
  return languages;
}

var stringToArray = function (socialMediaInString) {
  var socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function (languages) {
  var languages = languages.toString();
  return languages;
}

var arraySort = function (socialMedia) {
  var socialMedia = socialMedia.sort()
  return socialMedia;
}

var arrayInvert = function (languages){
  var languages = languages.reverse()
  return languages;
}
