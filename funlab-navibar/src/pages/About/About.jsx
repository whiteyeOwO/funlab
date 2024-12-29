import "./About.scss";
import GSReveal from '../../component/GSReveal';

function About() {
    return (
        <>
            <main>
                {/* BANNER區 */}
                <section id="banner">

                    <div className="title">
                        <GSReveal>
                            <h1 className="ch">放飲</h1>
                            <h1 className="en">ABOUT</h1>
                        </GSReveal>
                    </div>

                    <figure><img src="images/about/about-banner.webp" alt="" />
                    </figure>
                </section>

                {/* about區 */}
                <section id="about">
                    <div className="item">
                        <div className="content">
                            <h2 ><GSReveal from="left">「靈感隨手搖，創意放手喝！」</GSReveal></h2>
                            <p>在放飲 Lab，我們不僅提供飲料，更帶來一場與靈感的碰撞。每一杯都是一次創作，每一口都是驚喜。我們希望將飲料變成日常生活中的快樂創作，讓每個人都能透過飲品，表達自己，分享趣味。
                                無論是隨興放鬆還是熱鬧聚會，放飲 Lab 都是你不可或缺的陪伴者。</p>
                            <figure className="circleImage "><GSReveal><img src="./images/about/about1.webp" alt="" /></GSReveal></figure>
                        </div>
                    </div>

                    <div className="marquee-container">
                        <div className="marquee-content">
                            <p>ABOUT US ABOUT US ABOUT US</p>
                        </div>
                        <div className="marquee-content2">
                            <p>ABOUT US ABOUT US ABOUT US</p>
                        </div>
                    </div>

                    <figure className="whiteBack"><img src="./images/about/about-background.svg" alt="" /></figure>

                    {/* 裝飾 */}
                    <figure className="graph-1"><GSReveal><img src="./images/icon/graph-pinkLine.svg" alt="" /> </GSReveal></figure>
                    <figure className="graph-2"><GSReveal><img src="./images/icon/graph-blueBall.svg" alt="" /> </GSReveal></figure>
                </section>

                {/* about2區 */}
                <section id="about2">

                    <div className="item">
                        <div className="content1"><GSReveal from="left">
                            <h3>「經營理念」</h3>
                            <p>放飲
                                Lab，成立於2024年，是一個致力於創意手搖飲體驗的新生代品牌。我們將「自由創作」融入飲品文化，讓每位顧客都能探索飲料的無限可能，創造屬於自己的專屬滋味。讓飲料不僅是解渴的選擇，更是生活中充滿驚喜與分享的體驗！
                            </p>
                        </GSReveal>
                        </div>
                        <figure className="photo1"><GSReveal from="left"><img src="./images/about/about3.webp" alt="" /></GSReveal></figure>

                    </div>

                    <div className="item">
                        <figure className="photo2"><GSReveal from="left"><img src="./images/about/about2.jpg" alt="" /> </GSReveal></figure>
                        <div className="content2"><GSReveal from="left">
                            <h3>「企業願景」</h3>
                            <p>「成為全球最具創意的飲品品牌，讓每一杯都訴說你的故事！」
                                放飲 Lab 以創新為核心，重新定義手搖文化。我們的願景是成為一個能激發靈感的品牌，透過飲品打造更多互動與分享的機會。</p>
                        </GSReveal>
                        </div>
                    </div>


                    {/* 裝飾圖 */}
                    <figure className="graph-3 "><img src="./images/icon/graph-buble.svg" alt="" /></figure>
                    <figure className="graph-4 "><img src="./images/icon/graph-buble.svg" alt="" /></figure>
                    <figure className="graph-5 "><img src="./images/icon/graph-yellowLine.svg" alt="" /></figure>
                    <figure className="graph-6 "><img src="./images/icon/graph-blueLine.svg" alt="" /></figure>
                </section>
            </main>

        </>
    )
}
export default About
