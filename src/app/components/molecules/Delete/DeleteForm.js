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
          <table border="0" className={styles.delete_list}>
            <tbody>
              <tr>
                <td className={styles.delete_item_number} colSpan={2}>
                  No.1
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Date</td>
                <td className={styles.delete_item_value}>{ItemData.date}</td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>UserName</td>
                <td className={styles.delete_item_value}>
                  {ItemData.username}
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>
                  Coffee
                  <br />
                  /Number
                </td>
                <td className={styles.delete_item_value}>{ItemData.coffee}</td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Roast</td>
                <td className={styles.delete_item_value}>{ItemData.roast}％</td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Aroma</td>
                <td className={styles.delete_item_value}>
                  <table border="1" className={styles.delete_item_aroma_table}>
                    <tbody>
                      <tr>
                        <td>(点)</td>
                        <th className={styles.delete_item_aroma_header}>
                          Strong
                        </th>
                        <th className={styles.delete_item_aroma_header}>
                          Quality
                        </th>
                      </tr>
                      <tr className={styles.delete_item_aroma_table_row}>
                        <th className={styles.delete_item_aroma_header}>Dry</th>
                        <td>{ItemData.aromaDryStrength}</td>
                        <td>{ItemData.aromaDryQuality}</td>
                      </tr>
                      <tr className={styles.delete_item_aroma_table_row}>
                        <td className={styles.delete_item_aroma_header}>
                          Crust
                        </td>
                        <td>{ItemData.aromaCrustStrength}</td>
                        <td>{ItemData.aromaCrustQuality}</td>
                      </tr>
                      <tr className={styles.delete_item_aroma_table_row}>
                        <td className={styles.delete_item_aroma_header}>
                          Break
                        </td>
                        <td>{ItemData.aromaBreakStrength}</td>
                        <td>{ItemData.aromaBreakQuality}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Defects</td>
                <td className={styles.delete_item_value}>
                  {ItemData.defects}点
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>CleanCap</td>
                <td className={styles.delete_item_value}>
                  {ItemData.cleancap}点
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Sweet</td>
                <td className={styles.delete_item_value}>{ItemData.sweet}点</td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Acidity</td>
                <td className={styles.delete_item_value}>
                  {ItemData.acidity}点
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Mouthfeel</td>
                <td className={styles.delete_item_value}>
                  {ItemData.mouthfeel}点
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Flavor</td>
                <td className={styles.delete_item_value}>
                  {ItemData.flavor}点
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>After</td>
                <td className={styles.delete_item_value}>{ItemData.after}点</td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Balance</td>
                <td className={styles.delete_item_value}>
                  {ItemData.balance}点
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>OverAll</td>
                <td className={styles.delete_item_value}>
                  {ItemData.overall}点
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Result</td>
                <td className={styles.delete_item_value}>
                  {ItemData.result}点
                </td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>
                  TOTAL <br />
                  （+36）
                </td>
                <td className={styles.delete_item_value}>{ItemData.total}点</td>
              </tr>
              <tr>
                <td className={styles.delete_item_title}>Impression</td>
                <td className={styles.delete_item_value}>
                  {ItemData.impression}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.delete_popup}>
          <div className={styles.delete_box}>
            <p className={styles.page_title}>削除しますか？</p>
            <form>
              <DeleteBtn data={ItemData._id} />
            </form>
            <button>
              <Link href={"/pages/selection"} scroll={false} passHref>
                キャンセル
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}
