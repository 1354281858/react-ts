import "./StoreManage.scss";
import React, {useCallback, useEffect, useState} from "react";
import {connect} from "react-redux";
import {addStoreAction, deleteStoreAction, getStoreListAction, modifyStoreAction} from "../../store/store/action";
import {Button, Card, Input, InputNumber, Modal, Table} from "antd";

const columns: any[] = [
  {
    title: '商店名称',
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
  }
];

function StoreManage(props: any) {
  let [tempStoreInfo, setTempStoreInfo] = useState({
    id: -1,
    name: '',
    isVisible: false
  });
  let {getStoreListAction, addStoreAction, modifyStoreAction, deleteStoreAction, storeList, idToStoreMap} = props;
  let deleteStoreCB = useCallback((id) => {
    deleteStoreAction(id);
  }, [])
  let editStoreCB = useCallback((id) => {
    let storeInfo = idToStoreMap.get(id);
    setTempStoreInfo({
      ...storeInfo,
      isVisible: true
    });
  }, [idToStoreMap]);
  columns[1].render = (text: any, row: any, index: any) => {
    return (
      <>
        <Button
          style={{color: '#40a9ff', display: 'block', float: 'right', cursor: 'pointer'}}
          type="text"
          onClick={() => {
            deleteStoreCB(storeList[index].id)
          }}
        >删除</Button>
        <Button
          style={{color: '#40a9ff', display: 'block', float: 'right', cursor: 'pointer'}}
          type="text"
          onClick={() => {
            editStoreCB(storeList[index].id);
          }}
        >编辑</Button>
      </>)
  }
  useEffect(() => {
    getStoreListAction();
  }, [])

  return (
    <>
      <Card>
        <div className="add-good">
          <Button
            style={{color: '#40a9ff', display: 'block', float: 'right', cursor: 'pointer'}}
            type="text"
            onClick={() => {
              setTempStoreInfo({
                id: -1,
                name: '',
                isVisible: true
              })
            }}
          >新建</Button>
        </div>
        <Table columns={columns} dataSource={storeList}/>
      </Card>
      <Modal
        visible={tempStoreInfo.isVisible}
        onCancel={() => {
          setTempStoreInfo({
            ...tempStoreInfo,
            isVisible: false
          })
        }}
        onOk={() => {
          if (tempStoreInfo.id === -1) {
            // 如果id是-1，那么说明是创建商店
            addStoreAction(tempStoreInfo);
          } else {
            modifyStoreAction(tempStoreInfo);
          }
          setTempStoreInfo({
            ...tempStoreInfo,
            isVisible: false
          })
        }}
      >
        <div className="item-container">
          <span className="item-key">店铺名称</span>
          <Input
            className="item-input"
            placeholder={"请输入店铺名"}
            value={tempStoreInfo.name}
            onChange={(e) => setTempStoreInfo({
              ...tempStoreInfo,
              name: e.target.value
            })}
          />
        </div>
      </Modal>
    </>
  );
}

export default connect((state: any) => {
  return {
    storeList: state.storeData.storeList.map((item: any) => ({
      ...item,
      key: item.id + ''
    })),
    idToStoreMap: state.storeData.idToStoreMap
  }
}, {
  getStoreListAction,
  addStoreAction,
  modifyStoreAction,
  deleteStoreAction
})(StoreManage);