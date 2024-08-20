import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            {product.currency}
          </li>
        ))}
      </ul>
    </div>
  );
}

// }

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Welcome to Next.js API Routes!</h1>
//     </div>
//   );
// }
