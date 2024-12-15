//pattren - 1

// let n = 5;
// for (let i = 1; i <= n; i++) {
// 	let str = '';
// 	let count = 1;
// 	for (let j = 1; j <= 2 * n; ++j) {
// 		if (i + j >= n + 1 && (i >= j - n + 1)) {
// 			// Add a space after each number
// 			str += count.toString() + ' ';
// 			count++;
// 		} else {
// 			// Add two spaces for the gap
// 			str += '  ';
// 		}
// 	}

// 	console.log(str);
// }

// pattren - 2
var str1 = " ";
var h = 1;
for (var x = 1; x <= 5; x++) {
  str = "";
  str1 = "";
  for (var y = x; y <= 4; y++) {
    str1 += "  ";
  }
  for (var z = 1; z <= x; z++)
    {
      str = str + z + " ";
    }
    console.log(str1 + str + "\n");
    h = h + 2;
  
}
for (var i = 5; i >= 1; i--) {
  str = "";
  str1 = "";
  for (var j = 5; j >= i; j--) {
    str1 += "  ";
  }

  for (var k = 1; k <= i - 1; k++) {
    str = str + k + " ";
  }
  console.log(str1 + str + "\n");
}

// //pattren -3
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = i; j >= 1; j--) {
//       row += j + " ";
//     }
//     console.log(row.trim());
//   }

//   for (let i = 4; i >= 1; i--) {
//     let row = "";
//     for (let j = i; j >= 1; j--) {
//       row += j + " ";
//     }
//     console.log(row.trim());
//   }

// //pattren -4
// let n = 5;
// for (let i = n; i >= 1; i--) {
// 	let str = '';
// 	let count = 1;
// 	for (let j = 1; j <= 2 * n; ++j) {
// 		if (i + j >= n + 1 && (i >= j - n + 1)) {
// 			// Add a space after each number
// 			str += count.toString() + ' ';
// 			count++;
// 		} else {
// 			// Add two spaces for the gap
// 			str += '  ';
// 		}
// 	}

// 	console.log(str);
// };

// // pattern -5
// for (let i = 1; i <= 7; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row.trim());
//   }

//   //pattern -6
//   for (let i = 1; i <= 7; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row.trim());
//   }

//   for (let i = 6; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row.trim());
//   }

//   for (let i = 1; i <= 1; i++) {
//     console.log("1");
//   }

// pattern 7
//   let num = 1;
// for (let i = 1; i <= 9; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += num + " ";
//     num++;
//   }
//   console.log(row.trim());
// }

// function printTrianglePattern() {
//   for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(" ".repeat(5 - i) + row.trim());
//   }

//   for (let i = 4; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(" ".repeat(5 - i) + row.trim());
//   }
// }

// printTrianglePattern();

/*
let n = 5;
for (let i = 1; i <= n; i++) {
	let str = "";
	let count = 1; // Add numbers
	for (let k = 1; k <= i; k++) {
		str = count.toString() + " " + str;
		count += 1;
	}
	// Add spaces after numbers
	for (let j = i; j < n; j++) {
		str += " ";
	}
	console.log(str);
}
for (let i = n - 1; i >= 1; i--) {
	let str = "";
	let count = 1;
	// Add numbers
	for (let k = 1; k <= i; k++) {
		str = count.toString() + " " + str;
		count += 1;
	}
	// Add spaces after numbers
	for (let j = i; j < n; j++) {
		str += " ";
	}
	console.log(str);
};


*/

// function printLeftFacingSymmetricTriangle() {
//   let n = 5; // Middle row with maximum numbers

//   // Top half of the pattern (increasing part)
//   for (let i = 1; i <= n; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//       line += j + " ";
//     }
//     console.log(line.trim());
//   }

//   // Bottom half of the pattern (decreasing part)
//   for (let i = n - 1; i >= 1; i--) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//       line += j + " ";
//     }
//     console.log(line.trim());
//   }
// }

// printLeftFacingSymmetricTriangle();

// let n = 5;
// for (let i = 1; i <= n; i++) {
// 	let str = "";
// 	let count = 1; // Add numbers
// 	for (let k = 1; k <= i; k++) {
// 		str = count.toString() + " " + str;
// 		count += 1;
// 	}
// 	console.log(str);
// }
// for (let i = n - 1; i >= 1; i--) {
// 	let str = "";
// 	let count = 1;
// 	// Add numbers
// 	for (let k = 1; k <= i; k++) {
// 		str = count.toString() + " " + str;
// 		count += 1;
// 	}
// 	console.log(str);
// };

// function printLeftFacingTriangle() {
//   let n = 5; // Peak row with maximum numbers
//   // Top half of the triangle
//   for (let i = 1; i <= n; i++) {
//     let line = " ".repeat(n - i); // Adding spaces to left-align the triangle
//     for (let j = 1; j <= i; j++) {
//       line += j + " ";
//     }
//     console.log(line.trim());
//   }
//   // Bottom half of the triangle
//   for (let i = n - 1; i >= 1; i--) {
//     let line = " ".repeat(n - i); // Adding spaces to left-align the triangle
//     for (let j = 1; j <= i; j++) {
//       line += j + " ";
//     }
//     console.log(line.trim());
//   }
// }
// printLeftFacingTriangle();''
