"use client";
import Link from "next/link";
import Image from "next/image";

import styles from "@/app/styles/Home.module.css";
import { HomeBtn } from "../../components/atoms/HomeBtn";

export function BrowsePage(data) {
  // console.log(data);
  const ItemData = data.data;

  return (
    <>
      <h1 className={styles.contents_title}>BROWSE</h1>

      <div className={styles.browse_data}>
        <div className={styles.browse_main}>
          <div className={styles.browse_list}>
            <p className={styles.browse_date}>{ItemData.singleItem.date}</p>
            <div className={`${styles.browse_item} ${styles.browse_username}`}>
              <h3 className={styles.browse_item_title}>作成者</h3>
              <p>{ItemData.singleItem.username}</p>
            </div>
            <div className={`${styles.browse_item} ${styles.browse_coffee}`}>
              <h3 className={styles.browse_item_title}>1：珈琲豆 or 番号</h3>
              <p>{ItemData.singleItem.coffee}</p>
            </div>
            <div className={`${styles.browse_item} ${styles.browse_roast}`}>
              <h3 className={styles.browse_item_title}>2：ロースト</h3>
              <p>{ItemData.singleItem.roast}%</p>
              <h4 className={styles.browse_item_memo}>
                <span className={styles.browse_yellow_color}>memo</span>
              </h4>
              <p>{ItemData.singleItem.roastMessage}</p>
            </div>

            <div className={`${styles.browse_item} ${styles.browse_aroma}`}>
              <h3 className={styles.browse_item_title}>3：アロマ </h3>

              <div className={styles.browse_item_value}>
                <p className={styles.browse_item_text}>単位(点)</p>
                <table className={styles.browse_item_aroma_table}>
                  <thead>
                    <tr>
                      <th></th>
                      <th className={styles.browse_item_aroma_header}>強さ</th>
                      <th className={styles.browse_item_aroma_header}>／質</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.browse_item_aroma_table_row}>
                      <th className={styles.browse_item_aroma_header}>D</th>
                      <td>{ItemData.singleItem.aromaDryStrength}</td>
                      <td>{ItemData.singleItem.aromaDryQuality}</td>
                    </tr>
                    <tr className={styles.browse_item_aroma_table_row}>
                      <th className={styles.browse_item_aroma_header}>C</th>
                      <td>{ItemData.singleItem.aromaCrustStrength}</td>
                      <td>{ItemData.singleItem.aromaCrustQuality}</td>
                    </tr>
                    <tr className={styles.browse_item_aroma_table_row}>
                      <th className={styles.browse_item_aroma_header}>B</th>
                      <td>{ItemData.singleItem.aromaBreakStrength}</td>
                      <td>{ItemData.singleItem.aromaBreakQuality}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow_color}>memo</span>
                </h4>

                <p>{ItemData.singleItem.aromaMessage}</p>
              </div>
            </div>

            <div className={`${styles.browse_item} ${styles.browse_defects}`}>
              <h3 className={styles.browse_item_title}>4：欠点・瑕疵</h3>
              <p>
                {ItemData.singleItem.defects}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
              <h4 className={styles.browse_item_memo}>
                <span className={styles.browse_yellow_color}>memo</span>
              </h4>
              <p>{ItemData.singleItem.defectsMessage}</p>
            </div>
            <div className={`${styles.browse_item} ${styles.browse_cleancap}`}>
              <h3 className={styles.browse_item_title}>5：カップの綺麗さ</h3>
              <p>
                {ItemData.singleItem.cleancap}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
              <h4 className={styles.browse_item_memo}>
                <span className={styles.browse_yellow_color}>memo</span>
              </h4>
              <p>{ItemData.singleItem.cleancapMessage}</p>
            </div>

            <div className={`${styles.browse_item} ${styles.browse_sweet}`}>
              <h3 className={styles.browse_item_title}>6：甘さ</h3>
              <p>
                {ItemData.singleItem.sweet}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
              <h4 className={styles.browse_item_memo}>
                <span className={styles.browse_yellow_color}>memo</span>
              </h4>
              <p>{ItemData.singleItem.sweetMessage}</p>
            </div>

            <div className={`${styles.browse_item} ${styles.browse_acidity}`}>
              <h3 className={styles.browse_item_title}>7：酸の質</h3>
              <p>
                {ItemData.singleItem.acidity}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
              <h4 className={styles.browse_item_memo}>
                <span className={styles.browse_yellow_color}>memo</span>
              </h4>
              <p>{ItemData.singleItem.acidityMessage}</p>
              <p>{ItemData.singleItem.acidityStrength}</p>
            </div>

            <div className={`${styles.browse_item} ${styles.browse_mouthfeel}`}>
              <h3 className={styles.browse_item_title}>8：口に含んだ質感</h3>
              <p>
                {ItemData.singleItem.mouthfeel}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
              <h4 className={styles.browse_item_memo}>
                <span className={styles.browse_yellow_color}>memo</span>
              </h4>
              <p>{ItemData.singleItem.mouthfeelMessage}</p>
              <p>{ItemData.singleItem.bodyStrength}</p>
            </div>
            <div className={`${styles.browse_item} ${styles.browse_flavor}`}>
              <h3 className={styles.browse_item_title}>9：フレーバー</h3>
              <p>
                {ItemData.singleItem.flavor}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
              <h4 className={styles.browse_item_memo}>
                <span className={styles.browse_yellow_color}>memo</span>
              </h4>
              <p>{ItemData.singleItem.flavorMessage}</p>
            </div>

            <div className={`${styles.browse_item} ${styles.browse_after}`}>
              <h3 className={styles.browse_item_title}>10：後味の印象度</h3>
              <p>
                {ItemData.singleItem.after}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
              <h4 className={styles.browse_item_memo}>
                <span className={styles.browse_yellow_color}>memo</span>
              </h4>
              <p>{ItemData.singleItem.afterMessage}</p>
            </div>
            <div className={`${styles.browse_item} ${styles.browse_balance}`}>
              <h3 className={styles.browse_item_title}>11：バランス</h3>
              <p>
                {ItemData.singleItem.balance}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
              <h4 className={styles.browse_item_memo}>
                <span className={styles.browse_yellow_color}>memo</span>
              </h4>
              <p>{ItemData.singleItem.balanceMessage}</p>
            </div>

            <div className={`${styles.browse_item} ${styles.browse_overall}`}>
              <h3 className={styles.browse_item_title}>12：総合評価</h3>
              <p>
                {ItemData.singleItem.overall}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
            </div>
            <div className={`${styles.browse_item} ${styles.browse_total}`}>
              <h3 className={styles.browse_item_title}>13：TOTAL（+36）</h3>
              <p>
                {ItemData.singleItem.result}
                <span className={styles.browse_yellow_color}>点</span>
                <span>（＋３６）</span>
              </p>
              <p>
                {ItemData.singleItem.total}
                <span className={styles.browse_yellow_color}>点</span>
              </p>
            </div>

            <div
              className={`${styles.browse_item} ${styles.browse_impression}`}
            >
              <h3 className={styles.browse_item_title}>14：味の印象</h3>
              <p>{ItemData.singleItem.impression}</p>
            </div>
          </div>
          <div className={styles.btn_box}>
            <HomeBtn />

            <button className={styles.icon_btn}>
              <Link href={`update/${ItemData.singleItem._id}`} passHref>
                <Image
                  src="../images/edit_img.svg"
                  alt="編集ボタン"
                  width={48}
                  height={48}
                  priority
                />
              </Link>
            </button>
            <button className={styles.icon_btn}>
              <Link href={`delete/${ItemData.singleItem._id}`} passHref>
                <Image
                  src="../images/delete_img.svg"
                  alt="削除ボタン"
                  width={48}
                  height={48}
                  priority
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
