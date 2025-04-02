import scss from "./Bodi.module.scss";
import Ct from "../../assets/Longright.svg";
import Women from "../../assets/Women.svg";
import A from "../../assets/logo_a.svg";
import B from "../../assets/Logo_b.svg";
import D from "../../assets/Logo_d.svg";

function Bodi () {
    return(
        <section className={scss.Bodi}>
            <div className={scss.conteiner}>
                <h1>This Headline is The <br /> Gist Of The Your <br /> Whole Website </h1>
                <span>And the description of hero section is follow up <br /> message after the punch of a great headline. So,<br /> make it short, simple, descriptive and to the point.</span>
                <div className={scss.cnopi}>
                    <button>Book A Meeting<img src={Ct} alt="" /></button>
                    <p>Here you can put secondary <br /> action statement & CTA</p>
                </div>
                <div className={scss.logo}>
                    <img src={A} alt="" />
                    <img src={B} alt="" />
                    <img src={D} alt="" />
                </div>
            </div>
            <img className={scss.Women} src={Women} alt="" />
        </section>
    );
}

export default Bodi