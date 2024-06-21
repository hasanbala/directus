import styles from "./page.module.css";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getGlobals() {
  return directus.request(readItems("users"));
}

export default async function Home() {
  const global: any = await getGlobals();

  console.log(global[0]);

  return (
    <main className={styles.main}>
      <h1>{global[0].email}</h1>
      <p>{global[0].password}</p>
    </main>
  );
}
