import Link from "next/link";

import classes from "./main-navigation.module.css";
import { useSession, signOut } from "next-auth/react";
function MainNavigation() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  function LogoutHandler() {
    signOut();
  }

  console.log(loading);
  console.log(session);
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Authentication</div>
      </Link>

      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={LogoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
