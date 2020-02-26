module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    
    if (matrix.length === 0) {
      return [];
    }

  return matrix.reduce(function(sum, item, i) {
    if ((i+1)%2 == 0) {
        sum.push(...(item.reverse()));
    } else {
        sum.push(...item);
    }
    return sum;
  });
}
