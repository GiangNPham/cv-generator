import "../styles/Header.css";
export default function Header() {
  return (
    <>
      <nav className="header-container bg-background">
        <h1 className="header-text text-text text-5xl text-center font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          CV generator
        </h1>
      </nav>
    </>
  );
}
