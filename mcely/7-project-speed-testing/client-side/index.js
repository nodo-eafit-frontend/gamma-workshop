const url = 'http://localhost:3001/';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    getHomePage(data);
  })
  .catch((error) => {
    console.log(error);
    const codeMsg = document.createElement('code');

    codeMsg.innerText = error.message;

    document.querySelector('body').append(codeMsg);
  });

const getHomePage = (data) => {
  const titlePageEl = document.querySelector('head > title');
  titlePageEl.innerHTML = data?.title_page;

  createHeader(data);
  createMain(data);
  createFooter(data);
};

const createHeader = (data) => {
  const { menu, title } = data.header;

  document.querySelector('header h1').innerText = title;

  menu.forEach((item) => {
    const anchor = document.createElement('a');
    anchor.innerText = item.name;
    anchor.href = item.url;

    document.querySelector('header nav').append(anchor);
  });
};

const createMain = () => {
  const mainEl = document.querySelector('main');
};

const createFooter = () => {
  const footerEl = document.querySelector('footer');
};
