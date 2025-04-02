import scss from "./Foter.module.scss";
import Ct from "../../assets/Longright.svg";
import L from "../../assets/Logoe.svg";


function Foter (){
    return(
        <section className={scss.Foter}>
            <div className={scss.Logo}>
            <h1>The Is Closing Headline To Make A <br /> Impact For Call To Action</h1>
            <span>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline <br /> the lending process nowadays, it isn’t uncommon to see lenders rapidly</span>
            <button>Book A Meeting<img src={Ct} alt="" /></button>
            <hr />
            <div className={scss.con}>
                <img src={L} alt="" />
            </div>
            </div>
        </section>
    );
}

export default Foter;