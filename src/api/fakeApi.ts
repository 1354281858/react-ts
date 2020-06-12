let articleFakeData


export const getArticleList = () => new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: 1,
        title: 'weybn第一篇博客',
        preview: '这是总结weybn大学生活的博客，其中包含...'
      },
      {
        id: 2,
        title: 'weybn第二篇博客',
        preview: '这是总结weybn大学一年级生活的博客，其中包含...'
      },
      {
        id: 3,
        title: 'weybn第三篇博客',
        preview: '这是总结weybn大学二年级生活的博客，其中包含...'
      },
      {
        id: 3,
        title: 'weybn第四篇博客',
        preview: '这是总结weybn大学三年级生活的博客，其中包含...'
      },
      {
        id: 3,
        title: 'weybn第五篇博客',
        preview: '这是总结weybn大学四年级生活的博客，其中包含...'
      }
    ])
  }, 2000);
});