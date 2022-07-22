var starAvg = (ratings) => {
  // {1: '6', 2: '1', 4: '1', 5: '8'}
  var count = 0;
  var total = 0;
  for (var key in ratings) {
    count += parseInt(ratings[key]);
    total += parseInt(key) * parseInt(ratings[key]);
  }
  var avg = (total / count);
  var starPercent = (avg / 5) * 100;
  var res = `${Math.round(starPercent)}%`;
  return res;
}

export default starAvg;