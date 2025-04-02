import scss from "./Logo.module.scss";
import St from "../../assets/St.svg";
import Logi from "../../assets/Logo.svg";
import Women from "../../assets/Women_a.svg";
import Tx from "../../assets/Three.svg";



function Logo (){
    return(
        <section className={scss.Logo}>
            <div className={scss.conteiner}>
            <div className={scss.Title}>
                <h1>Success Story</h1>
                <span>Nowadays, it isn’t uncommon <br /> to see lenders rapidly <br /> adopting a digital lending <br /> strategy to streamline the <br /> lending process</span>
            <div className={scss.log}>
            <img src={Logi} alt="" />
            <a href="">Read Complete Case Study<img src={St} alt="" /></a>
            </div>
            <img className={scss.Tx} src={Tx} alt="" />
            </div>
                <img className={scss.Women} src={Women} alt="" />
            </div>
        </section>
    );
}

export default Logo;
