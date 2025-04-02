import scss from "./Heder.module.scss";
import Logo from "../../assets/Logoomozon.svg";
import Ct from "../../assets/Longright.svg";



const Heder = () => {
    return(
        <section className={scss.Heder}>
            <img className={scss.img} src={Logo} alt="" />
            <div className={scss.adres}>
                <a href="">Home</a>
                <a href="">Features</a>
                <a href="">Pricing</a>
                <a href="">About Us</a>
                <a href="">Help</a>
            </div>

            <button>Book A Meeting<img src={Ct} alt="" /></button>

        </section>
    );
}


export default Heder