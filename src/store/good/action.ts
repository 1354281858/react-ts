import {goodApis} from "../../views/goodManage/apis/GoodApis";
import {addGood, deleteGood, modifyGood, resetGood} from "./actionType";
import {GoodInfo} from "./Reducer";

export const deleteGoodAction = (id: number) => {
  return async (dispatch: any, getState: any) => {
    let resData = await goodApis.deleteGood({
      id
    });
    let resultAction: any;

    if (resData.isSuccess) {
      resultAction = {
        type: deleteGood,
        payload: {
          id
        }
      }
    } else {
      // 这里还要进行报告操作
      resultAction = {
        type: '',
        payload: {}
      }
    }
    dispatch(resultAction);
  }
}

type AddGoodInfo = GoodInfo & { id?: number }

export const addGoodAction = (goodInfo: any) => {
  return async (dispatch: any) => {
    let {isSuccess, msg, data} = await goodApis.addGood(goodInfo);

    if (isSuccess) {
      getGoodList()(dispatch);
    }
  }
}

export const getGoodList = () => {
  return async (dispatch: any) => {
    let {isSuccess, msg, data} = await goodApis.getGoodList();

    if (isSuccess) {
      dispatch({
        type: resetGood,
        payload: data
      })
    } else {
      dispatch({
        type: '',
        payload: {}
      });
    }
  }
}

export const modifyGoodAction = (good: any) => {
  return async (dispatch: any) => {
    let {isSuccess, msg, data} = await goodApis.updateGood({
      name: good.goodName,
      id: good.id,
      reserve: good.reserve,
      price: good.price,
      detail: good.detail
    });

    if (isSuccess) {
      dispatch({
        type: modifyGood,
        payload: good
      })
    }
  }
}