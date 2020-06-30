import {ADD_STORE, DELETE_STORE, MODIFY_STORE, RESET_STORE} from "./actionType";

const initialStoreState: any = {
  storeList: [],
  idToStoreMap: new Map()
};

export const storeState = (state = initialStoreState, action: any) => {
  let {storeList, idToStoreMap} = state;

  switch (action.type) {
    case RESET_STORE: {
      let storeList = action.payload;

      idToStoreMap = new Map();
      for (let item of storeList) {
        idToStoreMap.set(item.id, item);
      }

      return {
        storeList,
        idToStoreMap
      }
    }

    case ADD_STORE: {
      let store = action.payload;

      idToStoreMap.set(store.id, store);

      return {
        storeList: [...storeList, store],
        idToStoreMap
      }
    }

    case DELETE_STORE: {
      let id = action.payload;

      idToStoreMap.delete(id);

      return {
        storeList,
        idToStoreMap
      }
    }

    case MODIFY_STORE: {
      let store = action.payload;

      idToStoreMap.set(store.id, store);

      for (let i = 0; i < storeList.length; i++) {
        if (storeList[i].id === store.id) {
          storeList[i] = store;
        }
      }

      return {
        storeList,
        idToStoreMap
      }
    }
  }

  return state;
}