function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    const j = i * 2;
    result[j] = list1[i];
  }
  for (let i = 0; i < list2.length; i++) {
    const j = (i * 2) + 1;
    result[j] = list2[i];
  }
  return result;
}

function zipListTheSimpleWay(list1, list2) {
  const ziplist = _.zip(list1, list2);
  return _.flatten(ziplist);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
