import "./Search.scss";

export default function Search() {
    return (


        <section className="h2">
            <h2>
                <img src="./images/search/title-search.svg" alt="Search" />
            </h2>

            {/* 訂單編號輸入 */}
            <div className="search">
                <h4>手機號碼</h4>
                <input type="text" placeholder="請輸入手機號碼" />
            </div>

            <button type="submit" className="submit" onClick={""}>
                查詢
            </button>
        </section>


    )
}