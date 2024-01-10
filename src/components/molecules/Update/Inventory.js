"use client";

import { React, useState } from "react";
import styles from "../../../app/styles/Home.module.css";

export function Inventory() {
  const [isEditContents, setIsEditContents] = useState(false);
  const handleEditListButton = () => {
    setIsEditContents(!isEditContents);
  };
  return (
    <div
      className={
        isEditContents
          ? `${styles["edit_number"]} ${styles["active"]}`
          : styles["edit_number"]
      }
    >
      <div className={styles.edit_toc}>
        <button className={styles.button} onClick={handleEditListButton}>
          編集目次<span className={styles.edit_toc_open}>▼</span>
          <span className={styles.edit_toc_close}>△</span>
        </button>
      </div>
      <ul className={styles.edit_number_list}>
        <li className={styles.edit_number_item}>作成者名</li>
        <li className={styles.edit_number_item}>
          1:コーヒー豆の名前 or 番号
          <br />
          <span className={styles.edit_number_sup}>豆の名前、又は、番号</span>
        </li>
        <li className={styles.edit_number_item}>
          2:ロースト <br />
          <span className={styles.edit_number_sup}>焙煎具合</span>
        </li>
        <li className={styles.edit_number_item}>
          3:アロマ
          <br />
          <span className={styles.edit_number_sup}>
            粉の状態の『ドライ』
            <br />
            湯を注いだ直後の『クラスト』
            <br />
            混ぜた後の『ブレーク』
            <br />
            の３つで香りの強さ（左）と質（右）を評価
          </span>
        </li>
        <li className={styles.edit_number_item}>
          4:欠点・瑕疵
          <br />
          <span className={styles.edit_number_sup}>
            スペシャルティコーヒーなどは、欠点・瑕疵がないことが多く『０』で進めることが多い
          </span>
        </li>
        <li className={styles.edit_number_item}>
          5:カップの綺麗さ
          <br />
          <span className={styles.edit_number_sup}>味わいの透明度</span>
        </li>
        <li className={styles.edit_number_item}>
          6:甘さ
          <br />
          <span className={styles.edit_number_sup}>
            味わいに甘味の印象が強ければ強い程よいとされる
          </span>
        </li>
        <li className={styles.edit_number_item}>
          7:酸の質
          <br />
          <span className={styles.edit_number_sup}>
            H（high）M（middle）L（low）で酸の強さを計り、得点部分には質を評価。
          </span>
        </li>
        <li className={styles.edit_number_item}>
          8:口に含んだ質感
          <br />
          <span className={styles.edit_number_sup}>
            舌触りの滑らかさ。
            H（high）M（middle）L（low）でボディの強さを表わす。
          </span>
        </li>
        <li className={styles.edit_number_item}>
          9:フレーバー
          <br />
          <span className={styles.edit_number_sup}>風味の質を評価する</span>
        </li>
        <li className={styles.edit_number_item}>
          10:後味の印象度
          <br />
          <span className={styles.edit_number_sup}>
            後味は心地よいか、そうでないか評価。
          </span>
        </li>
        <li className={styles.edit_number_item}>
          11:バランス
          <br />
          <span className={styles.edit_number_sup}>
            「５～１０」の要素に悪目立ちしているものがなく、全体のバランスが良い程加点。
          </span>
        </li>
        <li className={styles.edit_number_item}>
          12:総合評価
          <br />
          <span className={styles.edit_number_sup}>
            味わいの奥行など項目にない点にも着目し、ここまでの評価に囚われず、主観で付ける。
          </span>
        </li>
        <li className={styles.edit_number_item}>
          13:TOTAL
          <br />
          （+36）
          <br />
          <span className={styles.edit_number_sup}>
            「４～１２」の得点に、定数３６点を足した１００点満点で評価。
          </span>
        </li>
        <li className={styles.edit_number_item}>
          14:味の印象
          <br />
          <span className={styles.edit_number_sup}>
            具体的な味の印象を記入。フレーバーの表現もカッピングの重要な目的。
            <br />
            冷めていく過程で、味わいがどのように変化したかも都度メモしておくとよい。
          </span>
        </li>
      </ul>
    </div>
  );
}
