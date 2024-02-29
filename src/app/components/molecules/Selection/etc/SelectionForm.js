"use client";
import styles from "@/app/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import useAuth from "../../../../utils/useAuth";
import { useState } from "react";
export function SelectionForm(context) {
  const loginUserEmail = useAuth();
  const [isContents, setIsContents] = useState(false);
  const handleListButton = () => {
    setIsContents(!isContents);
  };
  if (loginUserEmail) {
    return (
      <>
        <h1 className={styles.contents_title}>SELECT</h1>
        <div className={styles.select_list_box}>
          {context.data.allItems.map((beans) => (
            <div
              className={
                isContents
                  ? `${styles["select_list"]} ${styles["active"]}`
                  : styles["select_list"]
              }
              key={beans._id}
            >
              <div className={`${styles.select_btn_box} ${styles.btn_box}`}>
                <button type="button" className={styles.icon_btn}>
                  <Link
                    href={`/pages/delete/${beans._id}`}
                    scroll={false}
                    passHref
                  >
                    <Image
                      src="/images/delete_img.svg"
                      alt="削除ボタン"
                      width={48}
                      height={48}
                      priority
                    />
                  </Link>
                </button>
                <button type="button" className={styles.icon_btn}>
                  <Link
                    href={`/pages/update/${beans._id}`}
                    scroll={false}
                    passHref
                  >
                    <Image
                      src="/images/edit_img.svg"
                      alt="編集ボタン"
                      width={48}
                      height={48}
                      priority
                    />
                  </Link>
                </button>
                {/* <div className={styles.triangle_btn} onClick={handleListButton}>
                  <button type="button" className={styles.open_btn}></button>
                  <button type="button" className={styles.close_btn}></button>
                </div> */}

                <button type="button" className={styles.icon_btn}>
                  <Link
                    href={`/pages/browse/${beans._id}`}
                    scroll={false}
                    passHref
                  >
                    <Image
                      src="/images/visibility_img.svg"
                      alt="閲覧ボタン"
                      width={48}
                      height={48}
                      priority
                    />
                  </Link>
                </button>
              </div>
              <div className={`${styles.select_item} ${styles.select_date}`}>
                <h3 className={styles.select_item_title}>
                  作成日
                  {/* DATE */}
                </h3>
                <div className={styles.select_item_value}>
                  {/* {beans.date} */}
                  {beans.date}
                </div>
              </div>
              <div
                className={`${styles.select_item} ${styles.select_username}`}
              >
                <h3 className={styles.select_item_title}>
                  作成者
                  {/* USERNAME */}
                </h3>
                <div className={styles.select_item_value}>{beans.username}</div>
              </div>
              <div className={`${styles.select_item} ${styles.select_coffee}`}>
                <h3 className={styles.select_item_title}>
                  珈琲豆の名 or 番号
                  {/* NAME or NUMBER */}
                </h3>
                <div className={styles.select_item_value}>{beans.coffee}</div>
              </div>

              <div className={`${styles.select_item} ${styles.select_roast}`}>
                <h3 className={styles.select_item_title}>
                  ロースト
                  {/* ROAST */}
                </h3>
                <div className={styles.select_item_value}>{beans.roast}％</div>
              </div>
              <div className={`${styles.select_item} ${styles.select_aroma}`}>
                <h3 className={styles.select_item_title}>
                  アロマ
                  {/* AROMA */}
                </h3>
                <div className={styles.select_item_value}>
                  <p className={styles.select_item_text}>単位(点)</p>
                  <table className={styles.select_item_aroma_table}>
                    <thead>
                      <tr>
                        <th></th>
                        <th className={styles.select_item_smallTxt}>
                          強さ
                        </th>
                        <th className={styles.select_item_smallTxt}>
                          ／質
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={styles.select_item_aroma_table_row}>
                        <th className={styles.select_item_smallTxt}>D</th>
                        <td>{beans.aromaDryStrength}</td>
                        <td>{beans.aromaDryQuality}</td>
                      </tr>
                      <tr className={styles.select_item_aroma_table_row}>
                        <th className={styles.select_item_smallTxt}>C</th>
                        <td>{beans.aromaCrustStrength}</td>
                        <td>{beans.aromaCrustQuality}</td>
                      </tr>
                      <tr className={styles.select_item_aroma_table_row}>
                        <th className={styles.select_item_smallTxt}>B</th>
                        <td>{beans.aromaBreakStrength}</td>
                        <td>{beans.aromaBreakQuality}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={`${styles.select_item} ${styles.select_defects}`}>
                <h3 className={styles.select_item_title}>
                  欠点・瑕疵
                  {/* DEFECTS */}
                </h3>
                <div className={styles.select_item_value}>
                  {beans.defects}点
                </div>
              </div>
              <div
                className={`${styles.select_item} ${styles.select_cleancap}`}
              >
                <h3 className={styles.select_item_title}>
                  カップの綺麗さ
                  {/* CLEAN CAP */}
                </h3>
                <div className={styles.select_item_value}>
                  {beans.cleancap}点
                </div>
              </div>
              <div className={`${styles.select_item} ${styles.select_sweet}`}>
                <h3 className={styles.select_item_title}>
                  甘さ
                  {/* SWEET */}
                </h3>
                <div className={styles.select_item_value}>{beans.sweet}点</div>
              </div>
              <div className={`${styles.select_item} ${styles.select_acidity}`}>
                <h3 className={styles.select_item_title}>
                  酸の質
                  {/* ACIDITY */}
                </h3>
                <div className={styles.select_item_value}>
                  {beans.acidity}点
                </div>
              </div>
              <div
                className={`${styles.select_item} ${styles.select_mouthfeel}`}
              >
                <h3 className={styles.select_item_title}>
                  口に含んだ質感
                  {/* MOUTHFEEL */}
                </h3>
                <div className={styles.select_item_value}>
                  {beans.mouthfeel}点
                </div>
              </div>
              <div className={`${styles.select_item} ${styles.select_flavor}`}>
                <h3 className={styles.select_item_title}>
                  フレーバー
                  {/* FLAVOR */}
                </h3>
                <div className={styles.select_item_value}>{beans.flavor}点</div>
              </div>
              <div className={`${styles.select_item} ${styles.select_after}`}>
                <h3 className={styles.select_item_title}>
                  後味の印象度
                  {/* AFTER */}
                </h3>
                <div className={styles.select_item_value}>{beans.after}点</div>
              </div>
              <div className={`${styles.select_item} ${styles.select_balance}`}>
                <h3 className={styles.select_item_title}>
                  バランス
                  {/* BALANCE */}
                </h3>
                <div className={styles.select_item_value}>
                  {beans.balance}点
                </div>
              </div>
              <div className={`${styles.select_item} ${styles.select_overall}`}>
                <h3 className={styles.select_item_title}>
                  総合評価
                  {/* OVER ALL */}
                </h3>
                <div className={styles.select_item_value}>
                  {beans.overall}点
                </div>
              </div>
              <div className={`${styles.select_item} ${styles.select_result}`}>
                <h3 className={styles.select_item_title}>RESULT</h3>
                <div className={styles.select_item_value}>{beans.result}点</div>
              </div>
              <div className={`${styles.select_item} ${styles.select_total}`}>
                <h3 className={styles.select_item_title}>
                  TOTAL
                  <br />
                  （＋３６）
                </h3>
                <div className={styles.select_item_value}>{beans.total}点</div>
              </div>
              <div
                className={`${styles.select_item} ${styles.select_impression}`}
              >
                <h3 className={styles.select_item_title}>
                  味の印象
                  {/* IMPRESSION */}
                </h3>
                <div className={styles.select_item_value}>
                  {beans.impression}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
