"use client";

import SidebarContainer from "@/widgets/SideBar";
import styles from "../scss/page.module.scss";

export default function Home() {

  const user = {
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan@example.com",
    phone: "+7 999 123 45 67",
};
  return <div className={styles.page}>
     <SidebarContainer user={user} />
  </div>;
}
