function test (words){
  console.log(words);
  var thing = words.split(' ').sort(function(a, b){
    console.log("a is: " + a + ", b is: " + b);
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
   console.log(thing);
}

test("thi2s i3s mo1re testi5ng h4appening");
