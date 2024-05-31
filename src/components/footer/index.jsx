import "./index.css"
const Index = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__row">
                        <ul className="d-flex gap-4 list-unstyled">
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
                        <button className="btn btn-primary text-white">Order Now</button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Index;
