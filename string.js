var str = ' This Is some string ';
console.log(str)


console.log(str.toLowerCase());
console.log(str.toUpperCase());

// // if we want delet and create a space of content from a starting 


 var  str1 = '        username     '
  console.log(str1);

console.log(str1.trimStart());

console.log(str1.trimEnd());

console.log(str1.trim());

console.log(str.substring(13,19+1));

 console.log(str.substring(13,str.length));

// //  if we want convert string to arrays

 console.log(str.split(" "));

 var photo= 'profile.jpg';
 console.log(photo);

// var photo1= 'zip';
// console.log(photo.split(' '[0]+ ' .zip'));

//  console.log(photo.replace('p'),('P'));
// // console.log(photo.replaceAll('p'), ('P'));




var photo = 'profile.jpg';

console.log(photo.split('.')[0] + '.zip');
console.log(photo.replace('p', 'P'));
console.log(photo.replaceAll('p', 'P'));




