import scss from "./Cart.module.scss";
import Ct from "../../assets/Longright.svg";
import Ga from "../../assets/Group_a.svg";
import Gb from "../../assets/Group_b.svg";
import Gd from "../../assets/Group_d.svg";

const Car = [
    {
        img: Ga,
        p: "First Benefit",
        span: "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few",
    },
    {
        img: Gb,
        p: "Second Benefit",
        span: "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few",
    },
    {
        img: Gd,
        p: "Third Benefit",
        span: "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few",
    },
];

function Cart() {
    return (
        <section className={scss.Cart}>
            {Car.map((item, index) => (
              <div className={scss.wer} key={index}>
                    <div className={scss.Gr}>
                        <img src={item.img} alt="" />
                        <div className={scss.Titli}>
                            <p>{item.p}</p>
                            <span>{item.span}</span>
                        </div>
                    </div>
                </div>
            ))}
                <div className={scss.Title}>
                    <h1>Headline of Modern <br /> and Digital Lending <br /> Platform Seconds</h1>
                    <span>Nowadays, it isn’t uncommon to see lenders <br /> rapidly adopting a digital lending strategy</span>
                    <button>Learn More About<img src={Ct} alt="" /></button>
                </div>
        </section>
    );
}

export default Cart;

