import scss from "./CartHeder.module.scss";
import Lini from "../../assets/Lini.svg";
import Circle from "../../assets/Circle.svg";


const Cart = [
    {
        image:Lini,
        tltle:"Ideate",
        span:"Turn your idea from concept to MVP",
    },
    {
        image:Lini,
        tltle:"Design",
        span:"Sketch out the product to align the user needs",
    },
    {
        image:Lini,
        tltle:"Develop",
        span:"Convert the designs into a live application",
    },
    {
        image:Circle,
        tltle:"Deploy",
        span:"Launching the application to the market",
    },
    
]

function CartHeder (){
    return(
        <section className={scss.CartHeder}>
            <h1>The process we follow</h1>
            <div className={scss.conteiner}>
                {Cart.map((item,index) =>(
                <div className={scss.contei} key={index}>
                <img src={item.image} alt="" />
                <h2>{item.tltle}</h2>
                <span>{item.span}</span>
                </div>
                ))}
            </div>

        </section>
    );
}

export default CartHeder;