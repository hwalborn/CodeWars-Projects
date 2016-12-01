var list2 = [
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
];

function getAverageAge(thing) {
  // thank you for checking out the Coding Meetup kata :)
  var ages = 0;
  function average(item){
    for(var i = 0; i < item.length; i++){
    ages += thing[i].age;
  }
}
  average(thing);
  var avAge = ages/thing.length;
  if((avAge - (Math.floor(avAge)) >= 0.5)){
  return Math.ceil(avAge);
}
  else{
    return Math.floor(avAge);
  }
}

getAverageAge(list2);
