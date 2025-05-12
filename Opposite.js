function isOpposite(a, b) {
  let str1 = a.split('');
  let str2 = b.split('');  
  if (str1.length !== str2.length || str1.length <= 0) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str1[i].toUpperCase() && str2[i] === str2[i].toUpperCase()) {
      return false;
    } else if (str1[i] === str1[i].toLowerCase() && str2[i] === str2[i].toLowerCase()) {
      return false;
    } else if (str1[i].toUpperCase() !== str2[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}