import { Navbar } from "../../components/Navbar";

export function Home() {
  return (
    <>
      <div className="grow">
        <h1>Home</h1>
      </div>
      <Navbar selected="dashboard" />
    </>
  );
}
