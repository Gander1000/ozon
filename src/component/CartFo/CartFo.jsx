import scss from "./CartFo.module.scss";
import Feature from "../../assets/Feature Icon with circle.svg";
import Feature_a from "../../assets/Feature Icon with circle_a.svg";
import Feature_b from "../../assets/Feature Icon with circle_b.svg";
import Feature_d from "../../assets/Feature Icon with circle_d.svg";



const CarF = [
    {
        image:Feature,
        h2:"Time zones ain’t no thing",
        span:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
    },
    {
        image:Feature_a,
        h2:"Full spectrum of services",
        span:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
    },
    {
        image:Feature_b,
        h2:"Impossible? We’re on it",
        span:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
    },
    {
        image:Feature_d,
        h2:"Flexible work terms",
        span:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
    },
];



function CartFo (){
    return(
        <section className={scss.CartFo}>
            <h1>Benefits of working with us</h1>
            <div className={scss.conteiner}>
                {CarF.map((item,index) => (
            <div className={scss.Carta} key={index}>
                 <img src={item.image} alt="" />
                <div className={scss.title}>
                    <h2>{item.h2}</h2>
                    <span>{item.span}</span>
                </div>
            </div>
        ))}
            </div>
        </section>
    );
}

export default CartFo;