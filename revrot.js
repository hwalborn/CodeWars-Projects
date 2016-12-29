function revrot(str, sz) {
    // your code
    var arr = [];
    function setSz(number){
      var elm = "";
      for(var i = 0; i < sz; i++){
        elm = elm + str[(i + number)];
      }
      return elm;
    }
    for(var i = 0; i < str.length; i += sz){
      arr.push(setSz(i));
    }
}
