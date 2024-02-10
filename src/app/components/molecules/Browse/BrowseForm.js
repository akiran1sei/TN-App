"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "@/app/styles/Home.module.css";
import { HomeBtn } from "../../../components/atoms/HomeBtn";
export function BrowseForm(context) {
  const data = context.data;
  return (
    <>
      <Head>
        <title>閲覧ページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.contents_title}>BROWSE</h1>
      <div className={styles.browse_data}>
        <div className={styles.browse_contents}>
          <p className={styles.browse_date}>{data.singleItem.date}</p>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_username}`}>
            <div className={styles.browse_item_box}>
              <div className={styles.browse_item_title}>作成者</div>
              <p className={styles.browse_item_value}>
                {data.singleItem.username}
              </p>
            </div>
          </div>

          <hr />
          <div className={`${styles.browse_item} ${styles.browse_coffee}`}>
            <div className={styles.browse_item_box}>
              <p className={styles.browse_item_title}>1:珈琲豆 or 番号</p>
              <p className={styles.browse_item_value}>
                {data.singleItem.coffee}
              </p>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_roast}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>2:ロースト</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.roastDegree}：{data.singleItem.roast}%
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.roastMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_aroma}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>3:アロマ </h3>
              <div className={styles.browse_item_value}>
                <table className={styles.browse_aroma_table}>
                  <thead>
                    <tr>
                      <th className={styles.browse_aroma_tableHeader}>(点)</th>
                      <th className={styles.browse_aroma_tableHeader}>
                        Strong
                      </th>
                      <th className={styles.browse_aroma_tableHeader}>
                        Quality
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.browse_aroma_tableRow}>
                      <th className={styles.browse_aroma_tableHeader}>Dry</th>
                      <td className={styles.browse_aroma_tableData}>
                        {data.singleItem.aromaDryStrength}
                      </td>
                      <td className={styles.browse_aroma_tableData}>
                        {data.singleItem.aromaDryQuality}
                      </td>
                    </tr>
                    <tr className={styles.browse_aroma_tableRow}>
                      <th className={styles.browse_aroma_tableHeader}>Crust</th>
                      <td className={styles.browse_aroma_tableData}>
                        {data.singleItem.aromaCrustStrength}
                      </td>
                      <td className={styles.browse_aroma_tableData}>
                        {data.singleItem.aromaCrustQuality}
                      </td>
                    </tr>
                    <tr className={styles.browse_aroma_tableRow}>
                      <th className={styles.browse_aroma_tableHeader}>Break</th>
                      <td className={styles.browse_aroma_tableData}>
                        {data.singleItem.aromaBreakStrength}
                      </td>
                      <td className={styles.browse_aroma_tableData}>
                        {data.singleItem.aromaBreakQuality}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.aromaMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_defects}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>4：欠点・瑕疵</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.defects}
                <span className={styles.browse_yellow}>点</span>
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.defectsMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_cleancap}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>5：カップの綺麗さ</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.cleancap}
                <span className={styles.browse_yellow}>点</span>
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.cleancapMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_sweet}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>6：甘さ</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.sweet}
                <span className={styles.browse_yellow}>点</span>
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.sweetMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_acidity}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>7：酸の質</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.acidity}
                <span className={styles.browse_yellow}>点</span>
                <p className={styles.browse_acidityStrength}>
                  {data.singleItem.acidityStrength}
                </p>
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.acidityMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_mouthfeel}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>8：口に含んだ質感</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.mouthfeel}
                <span className={styles.browse_yellow}>点</span>
                <p className={styles.browse_bodyStrength}>
                  {data.singleItem.bodyStrength}
                </p>
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.mouthfeelMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_flavor}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>9：フレーバー</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.flavor}
                <span className={styles.browse_yellow}>点</span>
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.flavorMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_after}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>10：後味の印象度</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.after}
                <span className={styles.browse_yellow}>点</span>
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.afterMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_balance}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>11：バランス</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.balance}
                <span className={styles.browse_yellow}>点</span>
              </div>
              <div className={styles.browse_item_message_box}>
                <h4 className={styles.browse_item_memo}>
                  <span className={styles.browse_yellow}>memo</span>
                </h4>
                <div className={styles.browse_item_message}>
                  {data.singleItem.balanceMessage}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_overall}`}>
            <div className={styles.browse_item_box}>
              <h4 className={styles.browse_item_title}>12：総合評価</h4>
              <div className={styles.browse_item_value}>
                {data.singleItem.overall}
                <span className={styles.browse_yellow}>点</span>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_total}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>13：TOTAL（+36）</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.result}
                <span className={styles.browse_yellow}>点(+36)</span>
                <wbr />
                <div className={styles.browse_totalValue}>
                  <p className={styles.browse_totalText}>
                    {data.singleItem.total}
                    <span className={styles.browse_yellow}>点</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.browse_item} ${styles.browse_impression}`}>
            <div className={styles.browse_item_box}>
              <h3 className={styles.browse_item_title}>14：味の印象</h3>
              <div className={styles.browse_item_value}>
                {data.singleItem.impression}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.browse_btn_box}>
          <HomeBtn />

          <button type="button" className={styles.icon_btn}>
            <Link
              href={`../update/${data.singleItem._id}`}
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
              href={`../delete/${data.singleItem._id}`}
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
        </div>
      </div>
    </>
  );
}
