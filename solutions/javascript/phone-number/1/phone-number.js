var PhoneNumber = function(num){
  this.num = num;
}

PhoneNumber.prototype.number = function () {
  var n = this.num;
  var regex = /\W+/gi;
  //clean number
  if(regex.test(n)){
    return n.replace(regex,"");
  }

  if(n.length < 10){
    n = "0000000000";
    return n;
  }else if(n.length === 10){
    return n;
  }else if(n.length === 11 && n.startsWith("1")){
    return n.substr(1,n.length-1);
  }else if(n.length === 11 && !n.startsWith("1")){
    return "0000000000";
  }else if (n.length > 11) {
    return '000000000';
  }
};

PhoneNumber.prototype.areaCode = function(){
  var n = this.num;
  return n.substr(0,3);
};

PhoneNumber.prototype.toString = function () {
  var valid = this.number();
  var area = "(" + this.areaCode() + ")";
  var nextThree = " " + valid.substring(3,6) + "-";
  var last = valid.substr(6);
  return area + nextThree + last;
};
module.exports = PhoneNumber