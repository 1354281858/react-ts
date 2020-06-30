import "./GoodManage.scss";
import React, {useCallback, useEffect, useState} from "react";
import {connect} from "react-redux";
import {Button, Card, Input, InputNumber, Modal, Pagination, Table} from "antd";
import {addGoodAction, deleteGoodAction, getGoodList, modifyGoodAction} from "../../store/good/action";
import {goodAddIndexKey} from "../../store/good/selector";

function GoodManage(props: any) {
  let [tempGoodInfo, setTempGoodInfo] = useState({
    isVisible: false,
    id: -1,
    goodName: '',
    storeName: '',
    price: 0,
    reserve: 0,
    detail: ''
  });
  let {cacheGoodList, idToGoodMap, deleteGoodAction, getGoodList, modifyGoodAction, addGoodAction} = props;

  let editGood = useCallback((id) => {
    let item = idToGoodMap.get(id);
    setTempGoodInfo({
      isVisible: true,
      id: item.id,
      goodName: item.goodName,
      storeName: item.storeName,
      price: item.price,
      reserve: item.reserve,
      detail: item.detail
    });
  }, [idToGoodMap]);
  let deleteGood = useCallback((id) => {
    deleteGoodAction(id);
  }, []);
  let tableColumn = [
    {
      title: '商品名称',
      key: 'goodName',
      dataIndex: 'goodName'
    },
    {
      title: '商品详情',
      key: 'detail',
      dataIndex: 'detail'
    },
    {
      title: '商店名称',
      key: 'storeName',
      dataIndex: 'storeName'
    },
    {
      title: '商品价格',
      key: 'price',
      dataIndex: 'price'
    },
    {
      title: '商品库存',
      key: 'reserve',
      dataIndex: 'reserve'
    },
    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      render(text: any, row: any, index: any) {
        return (
        <>
          <Button
            style={{color: '#40a9ff', display: 'block', float: 'right', cursor: 'pointer'}}
            type="text"
            onClick={() => {deleteGood(cacheGoodList[index].id)}}
          >删除</Button>
          <Button
            style={{color: '#40a9ff', display: 'block', float: 'right', cursor: 'pointer'}}
            type="text"
            onClick={() => editGood(cacheGoodList[index].id)}
          >编辑</Button>
        </>)
      }
    }
  ]
  useEffect(() => {
    getGoodList();
  }, []);

  return (
    <>
      <Card>
        <div className="add-good">
          <Button
            style={{color: '#40a9ff', display: 'block', float: 'right', cursor: 'pointer'}}
            type="text"
            onClick={() => {setTempGoodInfo({
              ...tempGoodInfo,
              isVisible: true
            })}}
          >新建</Button>
        </div>
        <Table columns={tableColumn} dataSource={cacheGoodList}/>
      </Card>
      <Modal
        title={tempGoodInfo.id === -1 ? '新增商品' : '编辑商品'}
        visible={tempGoodInfo.isVisible}
        onCancel={() => void (setTempGoodInfo({
          ...tempGoodInfo,
          isVisible: false
        }))}
        onOk={() => {
          if (tempGoodInfo.id === -1) {
            addGoodAction(tempGoodInfo);
          } else {
            modifyGoodAction(tempGoodInfo);
          }

        }}
      >
        <div className="item-container">
          <span className="item-key">名称</span>
          <Input
            className="item-input"
            placeholder={"请输入商品名称"}
            value={tempGoodInfo.goodName}
            onChange={(event) => setTempGoodInfo({
              ...tempGoodInfo,
              goodName: event.target.value
            })}
          />
        </div>
        <div className="item-container">
          <span className="item-key">详情</span>
          <Input.TextArea
            className="text-area"
            placeholder={"请输入商品详情"}
            value={tempGoodInfo.detail}
            onChange={(event) => setTempGoodInfo({
              ...tempGoodInfo,
              detail: event.target.value
            })}
          />
        </div>
        <div className="item-container">
          <span className="item-key">价格</span>
          <InputNumber
            className="item-input"
            value={tempGoodInfo.price}
            onChange={(newPrice) => setTempGoodInfo({
              ...tempGoodInfo,
              price: newPrice as number
            })}
          />
        </div>
        <div className="item-container">
          <span className="item-key">数量</span>
          <InputNumber className="item-input"
             onChange={(newCount) => setTempGoodInfo({
               ...tempGoodInfo,
               reserve: newCount as number
             })}
             value={tempGoodInfo.reserve}
          />
        </div>
      </Modal>
    </>
  );
}

export default connect((store: any) => ({
  cacheGoodList: goodAddIndexKey(store.goodData.cacheGoodList),
  idToGoodMap: store.goodData.idToGoodMap
}), {
  deleteGoodAction,
  addGoodAction,
  getGoodList,
  modifyGoodAction
})(GoodManage);