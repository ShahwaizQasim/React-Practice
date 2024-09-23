import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Home() {

  const [theme, setTheme] = useContext(ThemeContext);
  console.log('themeObj', theme);

  return (
    <>
    <div className={
        theme == 'light'? 'dark' : 'light' 
      }>
      <h1>Hello World</h1>
      <h2>Welcome to my Home Page</h2>

      <button className={ theme === 'light' ? 'btnDark' : 'btnLight'} 
       onClick={()=> {
        if (theme === 'light') {
           setTheme('dark')
        }else{
          setTheme('light')
        }
      }}>{theme === 'light' ? 'Make it Dark': 'Make it Light'}</button>
      </div>
    </>
  );
}

export default Home;
