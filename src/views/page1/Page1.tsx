import "./Page1.scss";
import React, {useState} from "react";
import {Card, Empty} from "antd";
import {getArticleList} from "../../api/fakeApi";

type Article = {
  id: number;
  title: string;
  preview: string;
}

export default function Page1(props: any) {
  let [articles, setArticles] = useState([]);

  getArticleList().then((res: any) => {
    setArticles(res);
  });

  return (
    <>
      <Card style={{minHeight: '85vh'}}>
        <div className="blog-items-container">
          {articles.length === 0 ? <Empty/> : articles.map((item: {id: number; title: string; preview: string}, index) => (
            <Card hoverable title={item.title} style={{marginTop: '1px'}}>
              {item.preview}
            </Card>
          ))}
        </div>
      </Card>
    </>
  );
}