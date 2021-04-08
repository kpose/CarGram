export const  isAlphaNumeric = function() {
    var regExp = /^[A-Za-z0-9]+$/;
    return (this.match(regExp));
  };
