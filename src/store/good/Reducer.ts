import {Action} from "redux";
import {addGood, deleteGood, modifyGood, resetGood} from "./actionType";

export type GoodInfo = {
  id: number;
  storeId: number;
  goodName: string;
  storeName: string;
  price: number;
  reserve: number;
  detail: string;
}

const initialGood: {
  cacheGoodList: GoodInfo[];
  idToGoodMap: Map<number, GoodInfo>
} = {
  cacheGoodList: [],
  idToGoodMap: new Map()
};

export const GoodData = (state = initialGood, action: Action & {payload: any}) => {
  let {cacheGoodList, idToGoodMap} = state;

  switch (action.type) {
    case resetGood: {
      let goodList = action.payload;
      idToGoodMap = new Map<number, GoodInfo>();
      for (let good of goodList) {
        idToGoodMap.set(good.id, good);
      }

      return {
        cacheGoodList: goodList,
        idToGoodMap
      }
    }

    case modifyGood: {
      let goodItem = action.payload;
      let cacheGoodList = state.cacheGoodList;

      for (let item of cacheGoodList) {
        if (item.id === goodItem.id) {
          item.storeId = goodItem.storeId;
          item.goodName = goodItem.goodName;
          item.storeName = goodItem.storeName;
          item.price = goodItem.price;
          item.reserve = goodItem.reserve;
          item.detail = goodItem.detail;
        }
      }

      return {
        cacheGoodList,
        idToGoodMap
      }
    }

    case deleteGood: {
      let id = action.payload.id;
      idToGoodMap.delete(id);

      for (let i = 0; i < cacheGoodList.length; i++) {
        let item = cacheGoodList[i];
        if (item.id === id) {
          cacheGoodList.splice(i, 1);
        }
      }

      return {
        cacheGoodList,
        idToGoodMap
      }
    }

    default: {
      return state
    }
  }
}