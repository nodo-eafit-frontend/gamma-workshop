const getHomePage = () => {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  
  getHomePage(); 
  style.css.map