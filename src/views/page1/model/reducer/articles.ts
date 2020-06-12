import {Action} from "redux";
import { ArticleType } from "../actionType";

type articlesState = {
  list: {id: number; title: string}[]
};

type ArticleAction = Action & {
  article: {
    id: number;
    title: string;
  }
}

export default function articles(state: articlesState = {list: []}, action: ArticleAction) {
  switch (action.type) {
    case ArticleType.ADD: {
      let {article} = action;
      state.list.push(article);

      return {
        list: state.list
      };
    }

    case ArticleType.REMOVE: {
      let {article} = action;
      let {id} = article;
      let {list} = state;

      for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
          list.splice(i, 1);
        }
      }

      return {
        list
      };
    }
  }
  
  return state;
}