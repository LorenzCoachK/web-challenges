import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1000, name: "Banana", emoji: "🍌", color: "yellow", weight: "120g" },
    { id: 1001, name: "Ananas", emoji: "🍍", color: "brown", weight: "1000g" },
    {
      id: 1002,
      name: "Coconut",
      emoji: "🥥",
      color: "brown",
      weight: "1500g",
    },
    {
      id: 1003,
      name: "Mango",
      emoji: "🥭",
      color: "yellow",
      weight: "120g",
    },
    {
      id: 1004,
      name: "Orange",
      emoji: "🍊",
      color: "orange",
      weight: "120g",
    },
    {
      id: 1005,
      name: "Apple",
      emoji: "🍏",
      color: "green",
      weight: "75g",
    },
  ];

  //   Given Code from Task below this:
  //   return (
  //     <div className="app">
  //       <Card name="🍌 banana" />
  //     </div>
  //   );
  // }

  // My 5 pence of Code below this (with the help of KI YEAH!)
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card
          key={fruit.id}
          name={`${fruit.emoji} ${fruit.name}`}
          color={fruit.color}
        />
      ))}
      {/* <Card name="🍌 banana" /> */}
    </div>
  );
}
