"use client";
import styles from "../../../styles/Home.module.css";
import useAuth from "../../../utils/useAuth";
import { DeleteBtn } from "../../../components/atoms/DeleteBtn";
import Link from "next/link";

export function DeleteForm(data) {
  const ItemData = data.data.singleItem;
  const loginUserEmail = useAuth();

  if (loginUserEmail) {
    return (
      <>
        <h1 className={styles.contents_title}>DELETE</h1>
        <div className={styles.delete_data}>
          <div className={styles.delete_main}>
            <div className={styles.delete_list}>
              <p className={styles.delete_date}>{ItemData.date}</p>
              <div
                className={`${styles.delete_item} ${styles.delete_username}`}
              >
                <h3 className={styles.delete_item_title}>作成者</h3>
                <p>{ItemData.username}</p>
              </div>
              <div className={`${styles.delete_item} ${styles.delete_coffee}`}>
                <h3 className={styles.delete_item_title}>1：珈琲豆 or 番号</h3>
                <p>{ItemData.coffee}</p>
              </div>
              <div className={`${styles.delete_item} ${styles.delete_roast}`}>
                <h3 className={styles.delete_item_title}>2：ロースト</h3>
                <p>{ItemData.roast}%</p>
                <h4 className={styles.delete_item_memo}>
                  <span className={styles.delete_yellow_color}>memo</span>
                </h4>
                <p>{ItemData.roastMessage}</p>
              </div>

              <div className={`${styles.delete_item} ${styles.delete_aroma}`}>
                <h3 className={styles.delete_item_title}>3：アロマ </h3>
                <div className={styles.delete_item_value}>
                  <p className={styles.delete_item_text}>単位(点)</p>
                  <table className={styles.delete_item_aroma_table}>
                    <thead>
                      <tr>
                        <th></th>
                        <th className={styles.delete_item_aroma_header}>
                          強さ
                        </th>
                        <th className={styles.delete_item_aroma_header}>
                          ／質
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={styles.delete_item_aroma_table_row}>
                        <th className={styles.delete_item_aroma_header}>D</th>
                        <td>{ItemData.aromaDryStrength}</td>
                        <td>{ItemData.aromaDryQuality}</td>
                      </tr>
                      <tr className={styles.delete_item_aroma_table_row}>
                        <th className={styles.delete_item_aroma_header}>C</th>
                        <td>{ItemData.aromaCrustStrength}</td>
                        <td>{ItemData.aromaCrustQuality}</td>
                      </tr>
                      <tr className={styles.delete_item_aroma_table_row}>
                        <th className={styles.delete_item_aroma_header}>B</th>
                        <td>{ItemData.aromaBreakStrength}</td>
                        <td>{ItemData.aromaBreakQuality}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.delete_item_message_box}>
                  <h4 className={styles.delete_item_memo}>
                    <span className={styles.delete_yellow_color}>memo</span>
                  </h4>
                  <br />
                  <p>{ItemData.aromaMessage}</p>
                </div>
              </div>
              <div className={`${styles.delete_item} ${styles.delete_defects}`}>
                <h3 className={styles.delete_item_title}>4：欠点・瑕疵</h3>
                <p>
                  {ItemData.defects}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
                <h4 className={styles.delete_item_memo}>
                  <span className={styles.delete_yellow_color}>memo</span>
                </h4>
                <p>{ItemData.defectsMessage}</p>
              </div>
              <div
                className={`${styles.delete_item} ${styles.delete_cleancap}`}
              >
                <h3 className={styles.delete_item_title}>5：カップの綺麗さ</h3>
                <p>
                  {ItemData.cleancap}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
                <h4 className={styles.delete_item_memo}>
                  <span className={styles.delete_yellow_color}>memo</span>
                </h4>
                <p>{ItemData.cleancapMessage}</p>
              </div>

              <div className={`${styles.delete_item} ${styles.delete_sweet}`}>
                <h3 className={styles.delete_item_title}>6：甘さ</h3>
                <p>
                  {ItemData.sweet}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
                <h4 className={styles.delete_item_memo}>
                  <span className={styles.delete_yellow_color}>memo</span>
                </h4>
                <p>{ItemData.sweetMessage}</p>
              </div>

              <div className={`${styles.delete_item} ${styles.delete_acidity}`}>
                <h3 className={styles.delete_item_title}>7：酸の質</h3>
                <p>
                  {ItemData.acidity}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
                <h4 className={styles.delete_item_memo}>
                  <span className={styles.delete_yellow_color}>memo</span>
                </h4>
                <p>{ItemData.acidityMessage}</p>
                <p>{ItemData.acidityStrength}</p>
              </div>

              <div
                className={`${styles.delete_item} ${styles.delete_mouthfeel}`}
              >
                <h3 className={styles.delete_item_title}>8：口に含んだ質感</h3>
                <p>
                  {ItemData.mouthfeel}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
                <h4 className={styles.delete_item_memo}>
                  <span className={styles.delete_yellow_color}>memo</span>
                </h4>
                <p>{ItemData.mouthfeelMessage}</p>
                <p>{ItemData.bodyStrength}</p>
              </div>
              <div className={`${styles.delete_item} ${styles.delete_flavor}`}>
                <h3 className={styles.delete_item_title}>9：フレーバー</h3>
                <p>
                  {ItemData.flavor}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
                <h4 className={styles.delete_item_memo}>
                  <span className={styles.delete_yellow_color}>memo</span>
                </h4>
                <p>{ItemData.flavorMessage}</p>
              </div>

              <div className={`${styles.delete_item} ${styles.delete_after}`}>
                <h3 className={styles.delete_item_title}>10：後味の印象度</h3>
                <p>
                  {ItemData.after}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
                <h4 className={styles.delete_item_memo}>
                  <span className={styles.delete_yellow_color}>memo</span>
                </h4>
                <p>{ItemData.afterMessage}</p>
              </div>
              <div className={`${styles.delete_item} ${styles.delete_balance}`}>
                <h3 className={styles.delete_item_title}>11：バランス</h3>
                <p>
                  {ItemData.balance}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
                <h4 className={styles.delete_item_memo}>
                  <span className={styles.delete_yellow_color}>memo</span>
                </h4>
                <p>{ItemData.balanceMessage}</p>
              </div>

              <div className={`${styles.delete_item} ${styles.delete_overall}`}>
                <h3 className={styles.delete_item_title}>12：総合評価</h3>
                <p>
                  {ItemData.overall}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
              </div>
              <div className={`${styles.delete_item} ${styles.delete_total}`}>
                <h3 className={styles.delete_item_title}>13：TOTAL（+36）</h3>
                <p>
                  {ItemData.result}
                  <span className={styles.delete_yellow_color}>点</span>
                  <span>（＋３６）</span>
                </p>
                <p>
                  {ItemData.total}
                  <span className={styles.delete_yellow_color}>点</span>
                </p>
              </div>

              <div
                className={`${styles.delete_item} ${styles.delete_impression}`}
              >
                <h3 className={styles.delete_item_title}>14：味の印象</h3>
                <p>{ItemData.impression}</p>
              </div>
            </div>
            {/* <DeleteBtnForm data={ItemData._id} /> */}
            <div className={styles.delete_popup}>
              <div className={styles.delete_box}>
                <p className={styles.page_title}>削除しますか？</p>
                <form>
                  <DeleteBtn data={ItemData._id} />
                </form>
                <button>
                  <Link href={"/pages/selection"} passHref>
                    キャンセル
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
