import styles from "../styles/Plant.module.css";
import Link from "next/link";
const Plant = ({ name, care }) => {
  const shortenedName = name.split(" ")[0];
  console.log(shortenedName, "shortened name");
  console.log(name, "name..");
  return (
    <Link href={shortenedName}>
      <a key={name} className={styles.card}>
        <h2>{name}</h2>
        {Object.values(care).map((value, index) => {
          return (
            <div key={index}>
              <h2>{value}</h2>
            </div>
          );
        })}
      </a>
    </Link>
  );
};

export default Plant;
