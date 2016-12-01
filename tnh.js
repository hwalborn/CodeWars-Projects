function race(v1, v2, g) {

  if(v1 >= v2){
    return null;
  }
  else{
    //starting time
    var time = 0;

    //make starting distaces
    var d1 = g;
    var d2 = 0;

    //convert to seconds
    var time1 = v1/3600;
    var time2 = v2/3600;

    //count seconds until they are at same place;
    while(d1 > d2){
      d1 += time1;
      d2 += time2;
      time++;
    }


    //find hour, minute, second
    if((d2 - d1) > 0.000001){
    time -= 1;
  }
    var hour = Math.floor(time / 3600);
    var min = Math.floor((time % 3600) / 60);
    var sec = Math.floor(time % 60);

    //Make Array of time
    var timeArray = [hour, min, sec];
    return timeArray;
  }
}


race(720, 850, 70)
