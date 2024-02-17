import signs from "../../../styles/Sign.module.css";
export function DBCreatePage() {
  return (
    <>
      <div className={signs.sign_page}>
        <h1 className={signs.sign_titleText}>DataBase作成</h1>
        <div className={signs.sign_card}>
          <p>
            {/* {ユーザー名} */}
            専用のデータベースを作成しました。
            <br />
            ユーザー登録は、これで終わりです。
          </p>
        </div>
      </div>
    </>
  );
}
