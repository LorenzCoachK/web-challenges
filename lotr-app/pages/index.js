import Link from "next/link";
import { introduction, volumes } from "@/lib/data";

export default function Volumes() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>

      <br />
      <ol>
        {volumes.map((volume, index) => (
          <li key={volume.slug}>
            <h2>
              Volume {index + 1}: {volume.title}
            </h2>
            <Link href={`/volumes/${volume.slug}`} id="link">
              {volume.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
