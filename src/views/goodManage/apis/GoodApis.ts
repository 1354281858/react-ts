import {Request, ReturnData} from "../../../config/Request";
import {getReqDataSequence} from "../../../utils/shared";

let uid = 1000;

const goodListData = [{
  "id": 22,
  "storeId": 18,
  "reserve": 32,
  "price": 32.0,
  "goodName": "奈雪的茶",
  "storeName": "广州海珠区TIT创意园B3茶水间",
  "detail": "吃喝不愁"
}, {
  "id": 23,
  "storeId": 18,
  "reserve": 133,
  "price": 33.0,
  "goodName": "喜茶",
  "storeName": "广州海珠区TIT创意园B3茶水间",
  "detail": "喜茶"
}, {
  "id": 24,
  "storeId": 18,
  "reserve": 22,
  "price": 22.0,
  "goodName": "板蓝根",
  "storeName": "广州海珠区TIT创意园B3茶水间",
  "detail": "清热祛湿"
}, {
  "id": 25,
  "storeId": 18,
  "reserve": 22,
  "price": 34.0,
  "goodName": "夏桑菊",
  "storeName": "广州海珠区TIT创意园B3茶水间",
  "detail": "比板蓝根更好点"
}, {
  "id": 26,
  "storeId": 18,
  "reserve": 22,
  "price": 15.0,
  "goodName": "枸杞",
  "storeName": "广州海珠区TIT创意园B3茶水间",
  "detail": "养生"
}, {
  "id": 27,
  "storeId": 18,
  "reserve": 332,
  "price": 23.0,
  "goodName": "红枣",
  "storeName": "广州海珠区TIT创意园B3茶水间",
  "detail": "新疆大红枣"
},
  {
    "id": 221,
    "storeId": 18,
    "reserve": 32,
    "price": 32.0,
    "goodName": "奈雪的茶",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "吃喝不愁"
  }, {
    "id": 231,
    "storeId": 18,
    "reserve": 133,
    "price": 33.0,
    "goodName": "喜茶",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "喜茶"
  }, {
    "id": 241,
    "storeId": 18,
    "reserve": 22,
    "price": 22.0,
    "goodName": "板蓝根",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "清热祛湿"
  }, {
    "id": 251,
    "storeId": 18,
    "reserve": 22,
    "price": 34.0,
    "goodName": "夏桑菊",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "比板蓝根更好点"
  }, {
    "id": 261,
    "storeId": 18,
    "reserve": 22,
    "price": 15.0,
    "goodName": "枸杞",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "养生"
  }, {
    "id": 271,
    "storeId": 18,
    "reserve": 332,
    "price": 23.0,
    "goodName": "红枣",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "新疆大红枣"
  },
  {
    "id": 2212,
    "storeId": 18,
    "reserve": 32,
    "price": 32.0,
    "goodName": "奈雪的茶",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "吃喝不愁"
  }, {
    "id": 2312,
    "storeId": 18,
    "reserve": 133,
    "price": 33.0,
    "goodName": "喜茶",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "喜茶"
  }, {
    "id": 2412,
    "storeId": 18,
    "reserve": 22,
    "price": 22.0,
    "goodName": "板蓝根",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "清热祛湿"
  }, {
    "id": 2512,
    "storeId": 18,
    "reserve": 22,
    "price": 34.0,
    "goodName": "夏桑菊",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "比板蓝根更好点"
  }, {
    "id": 2612,
    "storeId": 18,
    "reserve": 22,
    "price": 15.0,
    "goodName": "枸杞",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "养生"
  }, {
    "id": 2712,
    "storeId": 18,
    "reserve": 332,
    "price": 23.0,
    "goodName": "红枣",
    "storeName": "广州海珠区TIT创意园B3茶水间",
    "detail": "新疆大红枣"
  }]

const fakeGoodListData = {
  isSuccess: true,
  "msg": "操作成功",
  "data": goodListData
};

class GoodApis extends Request {
  public updateGood(data: {
    name: string;
    price: number;
    reserve: number;
    id: number;
    detail: string;
  }) {
    return new Promise<ReturnData>((res, rej)  => {
      for (let i = 0; i < goodListData.length; i++) {
        if (goodListData[i].id === data.id) {
          goodListData[i] = {
            ...goodListData[i],
            goodName: data.name,
            reserve: data.reserve,
            price: data.price,
            detail: data.detail
          }
          break;
        }
      }
      setTimeout(() => {
        res({
          isSuccess: true,
          "msg": "操作成功",
          "data": null
        });
      }, 100);
    });
  }

  public getGoodList() {
    return new Promise<ReturnData>((res, rej) => {
      setTimeout(() => res(fakeGoodListData), 100);
    });
  }

  public getGoodListByStoreId(data: {
    storeId: number
  }) {
    return new Promise<ReturnData>((res, rej) => {
      setTimeout(() => res(fakeGoodListData), 100);
    });
  }

  public addGood(data: {
    name: string;
    price: number;
    reserve: number;
    storeId: number;
    detail: string;
  }) {
    return new Promise<ReturnData>((res, rej)  => {
      goodListData.push({
        goodName: data.name,
        storeName: '新增店铺',
        reserve: data.reserve,
        detail: data.detail,
        price: data.price,
        storeId: 1,
        id: uid++
      });
      setTimeout(() => {
        res({
          isSuccess: true,
          "msg": "操作成功",
          "data": null
        });
      }, 100);
    });
  }

  public deleteGood(data: {
    id: number
  }) {
    return new Promise<ReturnData>((res, rej)  => {
      for (let i = 0; i < goodListData.length; i++) {
        if (goodListData[i].id === data.id) {
          goodListData.splice(i, 1);
          break;
        }
      }
      setTimeout(() => {
        res({
          isSuccess: true,
          "msg": "操作成功",
          "data": null
        });
      }, 100);
    });
  }
}

export const goodApis = new GoodApis();