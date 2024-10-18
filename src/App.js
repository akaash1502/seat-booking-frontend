// // import logo from './logo.svg';
// // import './App.css';
// import { BentoGrid } from './components/ui/bento';

// function App() {
//   return (
//     <div className="bg-black w-100 h-100 p-auto m-auto">
//       <BentoGrid />
//     </div>
//   );
// }

// export default App;



import { BentoGridSecondDemo } from './components/BentoGrid';
// import { FloatingNav } from './components/ui/floating-nav';
import Header from './components/ui/Header';

function App() {
  return (
    <div className="bg-black">
      {/* <FloatingNav navItems={['Home','Login']}/> */}
      <Header />
      <BentoGridSecondDemo/>
    </div>
  );
}

export default App;



