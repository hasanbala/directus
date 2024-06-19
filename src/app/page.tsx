import styles from "./page.module.css";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getGlobals() {
  return directus.request(readItems("global"));
}

export default async function Home() {
  const global: any = await getGlobals();

  return (
    <main className={styles.main}>
      <h1>{global?.title}</h1>
      <p>{global?.description}</p>
    </main>
  );
}
