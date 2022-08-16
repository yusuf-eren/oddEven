function oddEven(num) {
  let total = 0;
  let arr = Array.from(String(num), (num) => Number(num));
  console.log(num);
  arr.forEach((x) => {
    total += x;
  });
  if (total >= 0) {
    if (total % 2 == 0) {
      console.log(`Total number is: ${total}`);
      console.log("This number is even");
    } else if (total % 2 != 0) {
      console.log(`Total number is: ${total}`);
      console.log("This number is odd");
    }
  }
}

oddEven(160);
// Total number is: 7
// This number is odd
