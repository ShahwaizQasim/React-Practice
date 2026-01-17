// import "./index.css";
// import "./App.css";
// import Button from "./components/button";
// import { useState } from "react";
// import Card from "./components/Card";

// function App() {
//   const [name, setName] = useState();

//   return (
//     <>
//       <h1 className="text-4xl font-bold underline">Hello world!</h1>

//       {/* Lifting State  */}
//       <Card setName={setName} />
//       <h2 className="text-4xl bg-black text-white rounded-md">hello, {name}</h2>
//       <div className="mt-8">
//         <Button label="Home" />
//         <Button bgColor={"bg-red-400"} label="About" />
//         <Button label="Contact" />
//         <Button label="Products" />
//       </div>
//     </>
//   );
// }

// export default App;

// Lifting State Concept
import { useState } from "react";
import Panel from "./components/Panel";

export default function Accordion() {
  const [activeIndex, setIsActive] = useState();
  return (
    <>
      <h1 className="text-3xl font-bold p-4">Almaty, Kazakhstan</h1>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setIsActive(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setIsActive(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
