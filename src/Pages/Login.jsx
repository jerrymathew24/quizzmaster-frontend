import { Fragment } from "react";
import { AuthLogin } from "../components/Auth/AuthLogin";
import { Navbar } from "../components/Navbar/Navbar";

export const Login = () => {
  return (
    <Fragment>
      <Navbar route="login" />
      <main className="bg-blue-800 items-center">
        <AuthLogin />
      </main>
    </Fragment>
  );
};
