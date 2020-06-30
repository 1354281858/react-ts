export function goodAddIndexKey(goodList: any[]) {
  let resultList = [];
  let index = 1;
  for (let item of goodList) {
    resultList.push({
      ...item,
      key: '' + index++
    })
  }

  return resultList;
}