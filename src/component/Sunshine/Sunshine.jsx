
import scss from "./Sunshine.module.scss";
import Ct from "../../assets/Longright.svg";

const Title = [
    {
        p: [
            { name: "Contact" },
            { name: "Career" },
            { name: "Privacy Policy" },
            { name: "Terms Of Services" },
            { name: "GDPR" },
            { name: "FAQs" },
        ],
        pa: [
            { name: "Blog" },
            { name: "Capabilities" },
            { name: "Resources" },
            { name: "Partnership Integration" },
        ],
    },
];

function Sunshine() {
    return (
        <section className={scss.Sunshine}>
            <h1>Tweakful</h1>
            <div className={scss.container}>
                <div className={scss.div_a}>
                    <h2>About Tweakful</h2>
                    <span>
                        Tweakful is a HubSpot Theme Based On Engagement <br /> Design Framework, designed & developed by Openthrive.
                    </span>
                    <a href="">
                        Button Text
                        <img src={Ct} alt="Arrow icon" />
                    </a>
                </div>
                {Title.map((item, index) => (
                    <div key={index} className={scss.div_b}>
                        <ul className={scss.p_a}>
                            {item.p.map((link, i) => (
                                <li key={i} className={scss.link}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                        <ul className={scss.p_b}>
                            {item.pa.map((link, i) => (
                                <li key={i} className={scss.link}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <hr />
            <div className={scss.container_a}>
                <h3>
                B2B website and engagement design solution that transform <br />
                marketing and sales performance like never before.
                </h3>
                <h4>© 2015-2020 Openthrive. All right reserved.</h4>
            </div>
        </section>
    );
}

export default Sunshine;

