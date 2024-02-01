"use client";
import styles from "@/app/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import useAuth from "../../../utils/useAuth";
import { useState } from "react";
export function SelectionForm(context) {
  const [limit, setLimit] = useState(5);
  const handleShowMore = () => {
    setLimit(limit + 5);
  };
  const loginUserEmail = useAuth();
  const data = context.data.allItems;
  const limitedData = data.slice(0, limit);
  const list = limitedData.map((beans) => (
    <div className={styles.select_list} key={beans._id}>
      <div className={`${styles.select_btn_box} ${styles.btn_box}`}>
        <button className={styles.icon_btn}>
          <Link href={`/pages/delete/${beans._id}`} passHref>
            <Image
              src="/images/delete_img.svg"
              alt="削除ボタン"
              width={48}
              height={48}
              priority
            />
          </Link>
        </button>
        <button className={styles.icon_btn}>
          <Link href={`/pages/update/${beans._id}`} passHref>
            <Image
              src="/images/edit_img.svg"
              alt="編集ボタン"
              width={48}
              height={48}
              priority
            />
          </Link>
        </button>
        <button className={styles.icon_btn}>
          <Link href={`/pages/browse/${beans._id}`} passHref>
            {/* <Link href={`/pages/${beans._id}`} passHref> */}
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
      <div className={`${styles.select_item} ${styles.select_username}`}>
        <h3 className={styles.select_item_title}>
          作成者
          {/* USERNAME */}
        </h3>
        <div className={styles.select_item_value}>{beans.username}</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_coffee}`}>
        <h3 className={styles.select_item_title}>
          珈琲豆or番号
          {/* NAME or NUMBER */}
        </h3>
        <div className={styles.select_item_value}>{beans.coffee}</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_total}`}>
        <h3 className={styles.select_item_title}>TOTAL(+36)</h3>
        <div className={styles.select_item_value}>{beans.total}点</div>
      </div>
    </div>
  ));

  if (loginUserEmail) {
    return (
      <>
        <h1 className={styles.contents_title}>SELECT</h1>
        <div className={styles.select_list_box}>{list}</div>

        {limit < data.length && (
          <button onClick={handleShowMore}>もっと見る</button>
        )}
      </>
    );
  }
}
