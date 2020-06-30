import {Request, ReturnData} from "../../../config/Request";

const storeList: any[] = [
  {
    id: 1,
    name: '广州市海珠区TIT创意园食堂'
  }
];

function createSuccessResult(): any {
  return {
    isSuccess: true,
    msg: '',
    data: null
  }
}

let uid = 1000;

class StoreApis extends Request {
  public getStoreList() {
    return new Promise<ReturnData>((res, rej) => {
      setTimeout(() => {
        let result = createSuccessResult();
        result.data = storeList;

        res(result);
      }, 100);
    });
  }

  public addStore(data: {
    name: string;
  }) {
    return new Promise<ReturnData>((res, rej) => {
      storeList.push({
        id: uid++,
        name: data.name
      });
      setTimeout(() => {
        let result = createSuccessResult();

        res(result);
      }, 100);
    });
  }

  public deleteStore(data: {
    id: number;
  }) {
    return new Promise<ReturnData>((res, rej) => {
      for (let i = 0; i < storeList.length; i++) {
        if (data.id === storeList[i].id) {
          storeList.splice(i, 1);
        }
      }

      setTimeout(() => {
        let result = createSuccessResult();

        res(result);
      }, 100);
    });
  }

  public updateStore(data: {
    id: number;
    name: string;
  }) {
    return new Promise<ReturnData>((res, rej) => {
      for (let item of storeList) {
        if (item.id === data.id) {
          item.name = data.name;
        }
      }
      setTimeout(() => {
        let result = createSuccessResult();

        res(result);
      }, 100);
    });
  }
}

export const storeApis = new StoreApis();