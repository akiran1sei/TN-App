import signs from "@/app/styles/Sign.module.css";
export default function PagesLayout({ children }) {
  return (
    <>
      <header className={signs.sign_header}>
        <div className={signs.sign_header_title}>
          <h1 className={signs.sign_header_title_txt}>Tasting Note</h1>
        </div>
      </header>
      <main className={signs.sign_main}>
        <div className={signs.sign_main_contents}>{children}</div>
      </main>
    </>
  );
}
