"use client";

import styles from "@/app/styles/Home.module.css";
import { useState, useEffect } from "react";
import useAuth from "../../../../utils/useAuth";
import { useRouter } from "next/navigation";
import { HomeBtn } from "../../../components/atoms/HomeBtn";
import { CreateBtn } from "../../../components/atoms/CreateBtn";
export function CreateForm() {
  // const [username, setUserName] = useState("");
  const [coffee, setCoffee] = useState("");
  const [roast, setRoast] = useState("50");
  const [roastMessage, setRoastMessage] = useState("");
  const [aromaDryStrength, setAromaDryStrength] = useState("");
  const [aromaCrustStrength, setAromaCrustStrength] = useState("");
  const [aromaBreakStrength, setAromaBreakStrength] = useState("");
  const [aromaDryQuality, setAromaDryQuality] = useState("");
  const [aromaCrustQuality, setAromaCrustQuality] = useState("");
  const [aromaBreakQuality, setAromaBreakQuality] = useState("");
  const [aromaMessage, setAromaMessage] = useState("");
  const [defects, setDefects] = useState("0");
  const [point, setPoint] = useState("0");
  const [score, setScore] = useState("0");
  const [defectsMessage, setDefectsMessage] = useState("");
  const [cleancap, setCleancap] = useState("");
  const [cleancapMessage, setCleancapMessage] = useState("");
  const [sweet, setSweet] = useState("");
  const [sweetMessage, setSweetMessage] = useState("");
  const [acidity, setAcidity] = useState("");
  const [acidityMessage, setAcidityMessage] = useState("");
  const [acidityStrength, setAcidityStrength] = useState("");
  const [mouthfeel, setMouthfeel] = useState("");
  const [mouthfeelMessage, setMouthfeelMessage] = useState("");
  const [bodyStrength, setBodyStrength] = useState("");
  const [flavor, setFlavor] = useState("");
  const [flavorMessage, setFlavorMessage] = useState("");
  const [after, setAfter] = useState("");
  const [afterMessage, setAfterMessage] = useState("");
  const [balance, setBalance] = useState("");
  const [balanceMessage, setBalanceMessage] = useState("");
  const [overall, setOverall] = useState("");
  const [error, setError] = useState("");
  const [impression, setImpression] = useState("");
  const [date, setDate] = useState("");
  const [isEditContents, setIsEditContents] = useState(false);
  const router = useRouter();

  const URL = `/api/create`;
  const loginUserEmail = useAuth();
  const handleEditListButton = () => {
    setIsEditContents(!isEditContents);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sum =
      Number(cleancap) +
      Number(sweet) +
      Number(acidity) +
      Number(mouthfeel) +
      Number(flavor) +
      Number(after) +
      Number(balance) +
      Number(overall) -
      Number(defects);

    try {
      if (!coffee || null) {
        return setError("未記入:名前または、番号を入力してください");
      } else if (!roast || null) {
        return setError("未記入:roastを入力してください");
      } else if (!aromaDryStrength || null) {
        return setError("未記入:アロマのドライ（強さ）を入力してください");
      } else if (!aromaCrustStrength || null) {
        return setError("未記入:アロマのクラスト（強さ）を入力してください");
      } else if (!aromaBreakStrength || null) {
        return setError("未記入:アロマのブレイク（強さ）を入力してください");
      } else if (!aromaDryQuality || null) {
        return setError(
          "未記入:アロマのドライ（強さ）（質）を入力してください"
        );
      } else if (!aromaCrustQuality || null) {
        return setError("未記入:アロマのクラスト（質）を入力してください");
      } else if (!aromaBreakQuality || null) {
        return setError("未記入:アロマのブレイク（質）を入力してください");
      } else if (!defects || null) {
        return setError("未記入:欠点などがなければ0と記入してください。");
      } else if (defects < 0) {
        return setError("マイナス数字になっています。正しく入力してください。");
      } else if (!cleancap || null) {
        return setError("未記入:クリーンカップを入力してください");
      } else if (!sweet || null) {
        return setError("未記入:甘さを入力してください");
      } else if (!acidity || null) {
        return setError("未記入:酸の質を入力してください");
      } else if (!acidityStrength || null) {
        return setError("未記入:酸の強さを入力してください");
      } else if (!mouthfeel || null) {
        return setError("未記入:口に含んだ質感を入力してください");
      } else if (!bodyStrength || null) {
        return setError("未記入:ボディの強さを入力してください");
      } else if (!flavor || null) {
        return setError("未記入:フレーバーを入力してください");
      } else if (!after || null) {
        return setError("未記入:後味の印象度を入力してください");
      } else if (!balance || null) {
        return setError("未記入:バランスを入力してください");
      } else if (!overall || null) {
        return setError("未記入:総合評価を入力してください");
      } else if (!date || null) {
        return setError("未記入:日付を入力してください");
      } else {
        // return
        setError(null);

        const response = // フォームの入力値をサーバーに送信する
          await fetch(URL, {
            cache: "no-store",

            method: "POST",
            body: JSON.stringify({
              coffee: coffee,
              roast: roast,
              roastMessage: roastMessage,
              aromaDryStrength: aromaDryStrength,
              aromaCrustStrength: aromaCrustStrength,
              aromaBreakStrength: aromaBreakStrength,
              aromaDryQuality: aromaDryQuality,
              aromaCrustQuality: aromaCrustQuality,
              aromaBreakQuality: aromaBreakQuality,
              aromaMessage: aromaMessage,
              defects: point * score * 4,
              defectsMessage: defectsMessage,
              cleancap: cleancap,
              cleancapMessage: cleancapMessage,
              sweet: sweet,
              sweetMessage: sweetMessage,
              acidity: acidity,
              acidityMessage: acidityMessage,
              acidityStrength: acidityStrength,
              mouthfeel: mouthfeel,
              mouthfeelMessage: mouthfeelMessage,
              bodyStrength: bodyStrength,
              flavor: flavor,
              flavorMessage: flavorMessage,
              after: after,
              afterMessage: afterMessage,
              balance: balance,
              balanceMessage: balanceMessage,
              overall: overall,
              total: Number(sum) + Number(36),
              result: sum,
              impression: impression,
              username: "",
              email: loginUserEmail,
              date: date,
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        const jsonData = await response.json();

        alert(jsonData.message);

        return router.replace("/pages/selection");
      }
    } catch (error) {
      return alert("アイテム作成失敗");
    }
  };
  function defectsAnswer() {
    const answer = Number(point * score * 4);
    setDefects(answer);
  }

  if (loginUserEmail) {
    return (
      <>
        <h1 className={styles.contents_title}>CREATE</h1>
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
            <li className={styles.edit_number_item}>
              1:コーヒー豆の名前 or 番号
              <br />
              <span className={styles.edit_number_sup}>
                豆の名前、又は、番号
              </span>
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

        <div className={styles.edit_data}>
          <form onSubmit={handleSubmit} className={styles.edit_main}>
            <input
              type="date"
              name="date"
              id="date"
              className={styles.edit_date}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <div className={styles.edit_list}>
              {/* 選択式 */}

              <div className={`${styles.edit_item} ${styles.edit_coffee}`}>
                <label htmlFor="coffee" className={styles.edit_item_title}>
                  1：珈琲豆 or 番号
                </label>
                <input
                  className={styles.edit_input_name}
                  type="text"
                  name="coffee"
                  id="coffee"
                  width={300}
                  height={50}
                  placeholder="名前 or 番号"
                  value={coffee}
                  onChange={(e) => setCoffee(e.target.value)}
                />
              </div>
              <div className={`${styles.edit_item} ${styles.edit_roast}`}>
                <label htmlFor="roast" className={styles.edit_item_title}>
                  2：ロースト
                </label>
                <div className={styles.edit_item_value_box}>
                  <input
                    type="range"
                    name="roast"
                    id="roast"
                    className={styles.edit_input_range}
                    value={roast}
                    list="roast_value"
                    onChange={(e) => setRoast(e.target.value)}
                  />
                  <datalist id="roast_value">
                    <option value="0">ライト</option>
                    <option value="15">シナモン</option>
                    <option value="30">ミディアム</option>
                    <option value="45">ハイ</option>
                    <option value="60">シティ</option>
                    <option value="75">フルシティ</option>
                    <option value="90">フレンチ</option>
                    <option value="100">イタリアン</option>
                  </datalist>

                  <p className={styles.edit_roast_value}>{roast}%</p>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="roast-message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="roast-message"
                    id="roast-message"
                    placeholder="ローストの参考にしてください。0%：ライト、15%：シナモン、30%：ミディアム、45%：ハイ、60%：シティ、75%：フルシティ、90%：フレンチ、100%：イタリアン"
                    value={roastMessage}
                    onChange={(e) => setRoastMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_aroma}`}>
                <p className={styles.edit_item_title}>3：アロマ </p>
                <div className={styles.edit_item_value_box}>
                  －３～３
                  <br />
                  <div className={styles.edit_item_dry_box}>
                    <p className={styles.edit_item_sub_title}>ドライ</p>
                    {/* ドライ（強さ） */}
                    <div className={styles.edit_item_value_box}>
                      <p className={styles.edit_item_value}>
                        <label
                          htmlFor="aroma-dry-strength"
                          className={styles.edit_item_sub_title}
                        >
                          （強さ）
                        </label>
                        <br />
                        <select
                          name="aroma-dry-strength"
                          id="aroma-dry-strength"
                          value={aromaDryStrength}
                          onChange={(e) => setAromaDryStrength(e.target.value)}
                        >
                          <option></option>
                          <option value={-3}>-3</option>
                          <option value={-2}>-2</option>
                          <option value={-1}>-1</option>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </p>
                      {/* ドライ （質） */}
                      <p className={styles.edit_item_value}>
                        <label
                          htmlFor="aroma-dry-quality"
                          className={styles.edit_item_sub_title}
                        >
                          （質）
                        </label>
                        <br />
                        <select
                          name="aroma-dry-quality"
                          id="aroma-dry-quality"
                          value={aromaDryQuality}
                          onChange={(e) => setAromaDryQuality(e.target.value)}
                        >
                          <option></option>
                          <option value={-3}>-3</option>
                          <option value={-2}>-2</option>
                          <option value={-1}>-1</option>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </p>
                    </div>
                  </div>
                  <div className={styles.edit_item_crust_box}>
                    <p className={styles.edit_item_sub_title}>クラスト</p>
                    <div className={styles.edit_item_value_box}>
                      {/* クラスト（強さ） */}
                      <p className={styles.edit_item_value}>
                        <label
                          htmlFor="aroma_crust-strength"
                          className={styles.edit_item_sub_title}
                        >
                          （強さ）
                        </label>
                        <br />
                        <select
                          name="aroma_crust-strength"
                          id="aroma_crust-strength"
                          value={aromaCrustStrength}
                          onChange={(e) =>
                            setAromaCrustStrength(e.target.value)
                          }
                        >
                          <option></option>
                          <option value={-3}>-3</option>
                          <option value={-2}>-2</option>
                          <option value={-1}>-1</option>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </p>
                      {/* クラスト（質） */}
                      <p className={styles.edit_item_value}>
                        <label
                          htmlFor="aroma_crust-quality"
                          className={styles.edit_item_sub_title}
                        >
                          （質）
                        </label>
                        <br />
                        <select
                          name="aroma_crust-quality"
                          id="aroma_crust-quality"
                          value={aromaCrustQuality}
                          onChange={(e) => setAromaCrustQuality(e.target.value)}
                        >
                          <option></option>
                          <option value={-3}>-3</option>
                          <option value={-2}>-2</option>
                          <option value={-1}>-1</option>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </p>
                    </div>
                  </div>
                  <div className={styles.edit_item_break_box}>
                    <p className={styles.edit_item_sub_title}>ブレーク</p>
                    <div className={styles.edit_item_value_box}>
                      {/* ブレーク（強さ） */}
                      <p className={styles.edit_item_value}>
                        <label
                          htmlFor="aroma_break-strength"
                          className={styles.edit_item_sub_title}
                        >
                          （強さ）
                        </label>
                        <br />
                        <select
                          name="aroma_break-strength"
                          id="aroma_break-strength"
                          value={aromaBreakStrength}
                          onChange={(e) =>
                            setAromaBreakStrength(e.target.value)
                          }
                        >
                          <option></option>
                          <option value={-3}>-3</option>
                          <option value={-2}>-2</option>
                          <option value={-1}>-1</option>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </p>
                      {/*  ブレーク（質） */}
                      <p className={styles.edit_item_value}>
                        <label
                          htmlFor="aroma_break-quality"
                          className={styles.edit_item_sub_title}
                        >
                          （質）
                        </label>
                        <br />
                        <select
                          name="aroma_break-quality"
                          id="aroma_break-quality"
                          value={aromaBreakQuality}
                          onChange={(e) => setAromaBreakQuality(e.target.value)}
                        >
                          <option></option>
                          <option value={-3}>-3</option>
                          <option value={-2}>-2</option>
                          <option value={-1}>-1</option>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="aroma_message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="aroma_message"
                    id="aroma_message"
                    placeholder="ご記入ください。"
                    value={aromaMessage}
                    onChange={(e) => setAromaMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_defects}`}>
                <label htmlFor="defects" className={styles.edit_item_title}>
                  4：欠点・瑕疵
                </label>
                <div className={styles.edit_item_value_box}>
                  <p className={styles.edit_defects_explanation}>
                    欠点等が無き場合は、黄色の枠内を０と記入にしてください。
                    <br />
                    <span>＃×ｉ×４＝【　】</span>
                  </p>
                  <div className={styles.edit_defects_calc}>
                    <input
                      type="number"
                      className={styles.edit_input_defects}
                      value={point}
                      onChange={(e) => setPoint(e.target.value)}
                      name="point"
                    />
                    ×
                    <select
                      type="number"
                      className={styles.edit_defects_score}
                      onChange={(e) => setScore(e.target.value)}
                      value={score}
                      name="score"
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                    ×４＝
                    <output
                      name="defects"
                      onChange={defectsAnswer}
                      className={styles.edit_defects_answer}
                    >
                      {point * score * 4}
                    </output>
                  </div>

                  <input
                    type="number"
                    name="defects"
                    id="defects"
                    className={styles.edit_input_answer}
                    value={defects}
                    onChange={(e) => setDefects(e.target.value)}
                  />
                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="defects-message">memo</label>
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="defects-message"
                      id="defects-message"
                      placeholder="ご記入ください。"
                      value={defectsMessage}
                      onChange={(e) => setDefectsMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_cleancap}`}>
                <label htmlFor="cleancap" className={styles.edit_item_title}>
                  5：カップの綺麗さ
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <br />
                    <select
                      type="number"
                      name="cleancap"
                      id="cleancap"
                      className={styles.select_box}
                      value={cleancap}
                      onChange={(e) => setCleancap(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>

                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="cleancap-message">memo</label>
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="cleancap-message"
                      id="cleancap-message"
                      placeholder="ご記入ください。"
                      value={cleancapMessage}
                      onChange={(e) => setCleancapMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_sweet}`}>
                <label htmlFor="sweet" className={styles.edit_item_title}>
                  6：甘さ
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <br />
                    <select
                      type="number"
                      name="sweet"
                      id="sweet"
                      className={styles.select_box}
                      value={sweet}
                      onChange={(e) => setSweet(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="sweet-message">memo</label>
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="sweet-message"
                      id="sweet-message"
                      placeholder="ご記入ください。"
                      value={sweetMessage}
                      onChange={(e) => setSweetMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_acidity}`}>
                <label htmlFor="acidity" className={styles.edit_item_title}>
                  7：酸の質
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <br />
                    <select
                      type="number"
                      name="acidity"
                      id="acidity"
                      className={styles.select_box}
                      value={acidity}
                      onChange={(e) => setAcidity(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className={styles.edit_item_value}>
                    酸の強さ
                    <br />
                    <select
                      name="acidity"
                      value={acidityStrength}
                      onChange={(e) => setAcidityStrength(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <optgroup label="High">
                        <option>{"High2"}</option>
                        <option>{"High1"}</option>
                      </optgroup>
                      <optgroup label="Middle">
                        <option>{"Middle2"}</option>
                        <option>{"Middle1"}</option>
                      </optgroup>
                      <optgroup label="Low">
                        <option>{"Low2"}</option>
                        <option>{"Low1"}</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="acidity-message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="acidity-message"
                    id="acidity-message"
                    placeholder="ご記入ください。"
                    value={acidityMessage}
                    onChange={(e) => setAcidityMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_mouthfeel}`}>
                <label htmlFor="mouthfeel" className={styles.edit_item_title}>
                  8：口に含んだ質感
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <br />
                    <select
                      type="number"
                      name="mouthfeel"
                      id="mouthfeel"
                      className={styles.select_box}
                      value={mouthfeel}
                      onChange={(e) => setMouthfeel(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className={styles.edit_item_value}>
                    Bodyの強さ
                    <br />
                    <select
                      name="body"
                      value={bodyStrength}
                      onChange={(e) => setBodyStrength(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <optgroup label="High">
                        <option>{"High2"}</option>
                        <option>{"High1"}</option>
                      </optgroup>
                      <optgroup label="Middle">
                        <option>{"Middle2"}</option>
                        <option>{"Middle1"}</option>
                      </optgroup>
                      <optgroup label="Low">
                        <option>{"Low2"}</option>
                        <option>{"Low1"}</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="mouthfeel-message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="mouthfeel-message"
                    id="mouthfeel-message"
                    placeholder="ご記入ください。"
                    value={mouthfeelMessage}
                    onChange={(e) => setMouthfeelMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_flavor}`}>
                <label htmlFor="flavor" className={styles.edit_item_title}>
                  9：フレーバー
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <br />
                    <select
                      name="flavor"
                      type="number"
                      id="flavor"
                      className={styles.select_box}
                      value={flavor}
                      onChange={(e) => setFlavor(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="flavor-message">memo</label>
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="flavor-message"
                      id="flavor-message"
                      placeholder="ご記入ください。"
                      value={flavorMessage}
                      onChange={(e) => setFlavorMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className={`${styles.edit_item} ${styles.edit_after}`}>
                <label htmlFor="after" className={styles.edit_item_title}>
                  10：後味の印象度
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <br />
                    <select
                      name="after"
                      type="number"
                      id="after"
                      className={styles.select_box}
                      value={after}
                      onChange={(e) => setAfter(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>

                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="after-message">memo</label>
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="after-message"
                      id="after-message"
                      placeholder="ご記入ください。"
                      value={afterMessage}
                      onChange={(e) => setAfterMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_balance}`}>
                <label htmlFor="balance" className={styles.edit_item_title}>
                  11：バランス
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <br />
                    <select
                      name="balance"
                      type="number"
                      id="balance"
                      className={styles.select_box}
                      value={balance}
                      onChange={(e) => setBalance(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="balance-message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="balance-message"
                    id="balance-message"
                    placeholder="ご記入ください。"
                    value={balanceMessage}
                    onChange={(e) => setBalanceMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_overall}`}>
                <label htmlFor="overall" className={styles.edit_item_title}>
                  12：総合評価
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <br />
                    <select
                      name="overall"
                      type="number"
                      id="overall"
                      className={styles.select_box}
                      value={overall}
                      onChange={(e) => setOverall(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_total}`}>
                <div className=""></div>
                <label className={styles.edit_item_title}>
                  13：TOTAL（+36）
                </label>
                <div className={styles.edit_result}>
                  <p>下記の空白に項目４～１２を加算した数字が出力。</p>
                  <div className={styles.edit_addition}>
                    <output className={styles.edit_sub_value}>
                      {-Number(defects) +
                        Number(cleancap) +
                        Number(sweet) +
                        Number(acidity) +
                        Number(mouthfeel) +
                        Number(flavor) +
                        Number(after) +
                        Number(balance) +
                        Number(overall)}
                    </output>
                    <span className={styles.edit_basic}>＋３６</span>
                  </div>
                </div>
                <div className={styles.edit_total_value}>
                  <p>TOTAL</p>
                  <output className={styles.edit_sub_value}>
                    {Number(cleancap) +
                      Number(sweet) +
                      Number(acidity) +
                      Number(mouthfeel) +
                      Number(flavor) +
                      Number(after) +
                      Number(balance) +
                      Number(overall) -
                      Number(defects) +
                      Number(36)}
                  </output>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_impression}`}>
                <label htmlFor="impression" className={styles.edit_item_title}>
                  14：味の印象
                </label>
                <div className={styles.edit_item_message_box}>
                  memo
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="impression"
                    id="impression"
                    value={impression}
                    onChange={(e) => setImpression(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={styles.btn_box}>
              {error && (
                <span
                  onChange={(e) => setError(e.target.value)}
                  className="edit-error"
                >
                  {error}
                </span>
              )}
              {/* ErrorMessage */}
              <CreateBtn />

              <HomeBtn />
            </div>
          </form>
        </div>
      </>
    );
  }
}
