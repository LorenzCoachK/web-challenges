import Link from "next/link";
import { volumes } from "@/lib/data";

export default function TheFellowshipOfTheRings() {
  return (
    <div>
      {volumes.find(({slug} === "the-fellowship-of-the-ring") => (
        <li key={volume.slug}>
          <h1>{volume.title}</h1>
        </li>
      ))}

      <br />
    </div>
  );
}
