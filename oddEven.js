function oddEven(num) {
  if (num >= 0) {
    let total = 0;
    let arr = Array.from(String(num), (num) => Number(num));
    arr.forEach((x) => {
      total += x;
    });
    if (total % 2 == 0) {
      console.log(`Total number is: ${total}`);
      console.log("This number is even");
    } else if (total % 2 != 0) {
      console.log(`Total number is: ${total}`);
      console.log("This number is odd");
    }
  } else {
    console.log("Number is less than 0");
  }
}

oddEven(160);
// Total number is: 7
// This number is odd
