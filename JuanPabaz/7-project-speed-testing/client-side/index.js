//Llamado a obtener info de la pagina incial
// ... getHomePage


fetch('http://localhost:3001/')
    .then((response) => response.json())
    .then((data) => {
        getHomePage(data);
    }).catch((error)=>{
        console.log(error);
        const codMsg=document.createElement('code');
        codMsg.innerText=error.message;
        document.querySelector('body').append(codMsg);
    });

const getHomePage = (data) => {

    const TitlePageEl = document.querySelector('head > title');
    TitlePageEl.innerHTML = data?.title_page;

    createHeader(data);
    createMain(data);
    createFooter(data);
};

const createHeader=(data)=>{

    const {menu,title}=data.header;
    
    document.querySelector('header h1').innerText=title;
    
    menu.forEach((item) =>{

        const anchor=document.createElement('a');
        anchor.innerText=item.name;
        anchor.href=item.url;
        document.querySelector('header nav').append(anchor);

    });
    
}

const createMain=()=>{
    const MainEl=document.querySelector('main');
}

const createFooter=()=>{
    const FooterEl=document.querySelector('footer');
}
