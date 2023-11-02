
import { useEffect } from "react";
import DashboardDeFi from './components/DashboardDeFi.js'
// import 'components/DashboardDeFi.css'
// import 'C:\Users\Dell\OneDrive\Desktop\DSDL\src\components\DashboardDeFi.module.css'


function App() {
//   const action = useNavigationType();
//   const location = useLocation();
//   const pathname = location.pathname;

//   useEffect(() => {
//     if (action !== "POP") {
//       window.scrollTo(0, 0);
//     }
//   }, [action, pathname]);

//   useEffect(() => {
//     let title = "";
//     let metaDescription = "";

//     switch (pathname) {
//       case "/":
//         title = "";
//         metaDescription = "";
//         break;
//     }

//     if (title) {
//       document.title = title;
//     }

//     if (metaDescription) {
//       const metaDescriptionTag = document.querySelector(
//         'head > meta[name="description"]',
//       );
//       if (metaDescriptionTag) {
//         metaDescriptionTag.content = metaDescription;
//       }
//     }
//   }, [pathname]);

  return (
    
    

     <DashboardDeFi/>
      
    
    
  );
}
export default App;
