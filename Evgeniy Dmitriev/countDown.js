function countDown(num) {
  console.log(num);
  num--;
  if (num >= 0) {
    setTimeout(function(){countDown(num)},1000)
  }
};

