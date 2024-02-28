"use client";
import styles from "@/app/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import useAuth from "../../../utils/useAuth";
import { useState } from "react";
export function SelectionForm(context) {
  const loginUserEmail = useAuth();
  const [limit, setLimit] = useState(3);
  const handleShowMore = () => {
    setLimit(limit + 5);
  };
  const data = context.data.UserBeans;
  const limitedData = data.slice(0, limit);
  const list = limitedData.map((beans, index) => (
    <table border="0" className={styles.select_list} key={beans._id}>
      <tbody>
        <tr>
          <td
            className={`${styles.select_item_value} ${styles.select_item_number}`}
            colSpan={2}
          >
            No.{index + 1}
          </td>
        </tr>

        <tr>
          <td className={styles.select_item_title}>Date</td>
          <td className={styles.select_item_value}>{beans.date}</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>UserName</td>
          <td className={styles.select_item_value}>{beans.username}</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>
            Coffee
            <wbr />
            Number
          </td>
          <td className={styles.select_item_value}>{beans.coffee}</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>RoastDegree</td>
          <td className={styles.select_item_value}>{beans.roastDegree}</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Roast</td>
          <td className={styles.select_item_value}>{beans.roast}％</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Aroma</td>
          <td className={styles.select_item_value}>
            <table border="1" className={styles.select_item_aroma_table}>
              <tbody>
                <tr>
                  <td>(点)</td>
                  <th className={styles.select_item_aroma_header}>Strong</th>
                  <th className={styles.select_item_aroma_header}>Quality</th>
                </tr>
                <tr className={styles.select_item_aroma_table_row}>
                  <th className={styles.select_item_aroma_header}>Dry</th>
                  <td>{beans.aromaDryStrength}</td>
                  <td>{beans.aromaDryQuality}</td>
                </tr>
                <tr className={styles.select_item_aroma_table_row}>
                  <td className={styles.select_item_aroma_header}>Crust</td>
                  <td>{beans.aromaCrustStrength}</td>
                  <td>{beans.aromaCrustQuality}</td>
                </tr>
                <tr className={styles.select_item_aroma_table_row}>
                  <td className={styles.select_item_aroma_header}>Break</td>
                  <td>{beans.aromaBreakStrength}</td>
                  <td>{beans.aromaBreakQuality}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Defects</td>
          <td className={styles.select_item_value}>{beans.defects}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>CleanCap</td>
          <td className={styles.select_item_value}>{beans.cleancap}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Sweet</td>
          <td className={styles.select_item_value}>{beans.sweet}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Acidity</td>
          <td className={styles.select_item_value}>{beans.acidity}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Mouthfeel</td>
          <td className={styles.select_item_value}>{beans.mouthfeel}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Flavor</td>
          <td className={styles.select_item_value}>{beans.flavor}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>After</td>
          <td className={styles.select_item_value}>{beans.after}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Balance</td>
          <td className={styles.select_item_value}>{beans.balance}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>OverAll</td>
          <td className={styles.select_item_value}>{beans.overall}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Result</td>
          <td className={styles.select_item_value}>{beans.result}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>
            TOTAL <br />
            （+36）
          </td>
          <td className={styles.select_item_value}>{beans.total}点</td>
        </tr>
        <tr>
          <td className={styles.select_item_title}>Impression</td>
          <td className={styles.select_item_value}>{beans.impression}</td>
        </tr>
        <tr>
          <td className={styles.select_btn} colSpan={2}>
            <div className={styles.select_btn_box}>
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
          </td>
        </tr>
      </tbody>
    </table>
  ));
  if (loginUserEmail) {
    return (
      <>
        <h1 className={styles.contents_title}>SELECT</h1>
        <div className={styles.select_list_box}>
          {list}

          {limit < data.length && (
            <div className={styles.select_btn_box}>
              <button
                type="button"
                className={styles.select_more_btn}
                onClick={handleShowMore}
              >
                もっと見る
                <br />
                <span className={styles.triangle_more}></span>
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}
