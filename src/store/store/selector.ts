export function selectStoreListWithKey(storeList: any[]) {
  let result = [];

  for (let item of storeList) {
    result.push({
      ...item,
      key: item.id + ''
    })
  }

  return result;
}