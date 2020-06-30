import {storeApis} from "../../views/storeManage/apis/StoreApis";
import {DELETE_STORE, MODIFY_STORE, RESET_STORE} from "./actionType";

export function addStoreAction(storeInfo: any) {
  return async (dispatch: any) => {
    let {isSuccess, data} = await storeApis.addStore({
      name: storeInfo.name
    });

    if (isSuccess) {
      // 添加完毕后就会进行刷新操作
      getStoreListAction()(dispatch);
    }
  }
}

export function getStoreListAction() {
  return async (dispatch: any) => {
    let {isSuccess, data} = await storeApis.getStoreList();

    if (isSuccess) {
      dispatch({
        type: RESET_STORE,
        payload: data
      })
    }
  }
}

export function deleteStoreAction(id: number) {
  return async (dispatch: any) => {
    let {isSuccess, data} = await storeApis.deleteStore({id});

    if (isSuccess) {
      dispatch({
        type: DELETE_STORE,
        payload: id
      });
    }
  }
}

export function modifyStoreAction(info: {
  id: number;
  name: string;
}) {
  return async (dispatch: any) => {
    let {isSuccess, data} = await storeApis.updateStore(info);

    if (isSuccess) {
      dispatch({
        type: MODIFY_STORE,
        payload: info
      });
    }
  };
}