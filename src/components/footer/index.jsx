import "./index.css";
import Arrow from "@img/arrow.svg";
const Index = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__row">
                        <ul className="d-flex gap-5 list-unstyled footeer-list">
                            <li>
                                <h3>396 mi</h3>
                                <p>Range (EPA est.)</p>
                            </li>
                            <li>
                                <h3>1.99 s</h3>
                                <p>0-60 mph*</p>
                            </li>
                            <li>
                                <h3>200 mph</h3>
                                <p>Top Speed†</p>
                            </li>
                            <li>
                                <h3>1,020 hp</h3>
                                <p>Peak Power</p>
                            </li>
                        </ul>
                        <div>
                            <button className="footer-btn">
                                Order Now <img src={Arrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Index;
