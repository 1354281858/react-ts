import "./Page1.scss";
import React, {useState} from "react";
import {Card} from "antd";
import indexDB from '../../assets/indexDB.jpg'
import webService from '../../assets/webService.jpg'
import {useHistory, useLocation, useRouteMatch} from "react-router";

export default function Page1(props: any) {
  let [operationArray] = useState([
    {
      img: indexDB,
      link: '',
      msg: '练习IndexDB'
    },
    {
      img: webService,
      link: '',
      msg: '练习WebService'
    }
  ]);

  let history = useHistory();

  return (
    <>
      <Card style={{minHeight: '85vh'}}>
        <div style={{width: '80%', position: 'relative', display: 'flex', justifyContent: 'start'}}>
          {operationArray.map((item, index) => (
            <Card
              hoverable
              style={{ width: 240, margin: '0 40px 0 40px', overflow: "hidden",cursor: "pointer"}}
              key={index + 1 + ''}
              onClick={() => {history.push(item.link)}}
              cover={<img alt={item.msg} src={item.img} />}
            >
              <span>{item.msg}</span>
            </Card>
          ))}
        </div>
      </Card>
    </>
  );
}