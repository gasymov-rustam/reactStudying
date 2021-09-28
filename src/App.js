import "./App.css";
import Breadcrumbs from "./Components/Breadcrumbs";
import Button from "./Components/button";
import ButtonColor from "./Components/buttonColor";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
    const breadcrumbs = [
        {
            id: 1,
            text: "Home",
            link: "/",
        },
        {
            id: 2,
            text: "Apple",
            link: "/apple",
        },
        {
            id: 3,
            text: "Apple Tablets",
            link: "/apple/tablets",
        },
        {
            id: 4,
            text: "iPad 6 Pro",
        },
    ];
    return (
        <>
            <div className="App">
                <div>
                    <Breadcrumbs way={breadcrumbs} />
                    <Breadcrumbs way={breadcrumbs} symbol="&#62;" />
                    <Breadcrumbs way={breadcrumbs} symbol="&#10151;" />
                    <Breadcrumbs way={breadcrumbs} symbol="&#10151;" />
                    <FontAwesomeIcon icon={faHome} />
                    <FontAwesomeIcon icon={faArrowRight} />
                    {/* <FontAwesomeIcon icon={['fas', 'code']} /> */}
                </div>
                <div>
                    <ButtonColor />
                    <ButtonColor />
                    <ButtonColor />
                    <ButtonColor text="primary" backgroundColor="blue" size=".5" />
                    <ButtonColor text="secondary" backgroundColor="gray" />
                    <ButtonColor text="success" backgroundColor="green" />
                    <ButtonColor text="danger" backgroundColor="red" />
                    <ButtonColor text="warning" backgroundColor="rgb(236, 236, 27)" colorFont="black" />
                    <ButtonColor text="info" backgroundColor="lightblue" colorFont="black" />
                    <ButtonColor text="light" backgroundColor="lightgray" colorFont="black" />
                    <ButtonColor text="dark" backgroundColor="black" colorFont="white" />
                    <ButtonColor text="link" colorFont="blue" />
                </div>
                <div>
                    <ButtonColor text="primary" backgroundColor="blue" colorFont="white" hover="true" size="3.5" />
                    <ButtonColor text="secondary" backgroundColor="gray" colorFont="white" hover="true" />
                    <ButtonColor text="success" backgroundColor="green" colorFont="white" hover="true" />
                    <ButtonColor text="danger" backgroundColor="red" colorFont="white" hover="true" />
                    <ButtonColor text="warning" backgroundColor="rgb(236, 236, 27)" colorFont="black" hover="true" />
                    <ButtonColor text="info" backgroundColor="lightblue" colorFont="black" hover="true" size="1" />
                    <ButtonColor text="light" backgroundColor="lightgray" colorFont="black" hover="true" />
                    <ButtonColor text="dark" backgroundColor="black" colorFont="white" hover="true" size="2.5" />
                    <ButtonColor text="secondary" hover="true" backgroundColor="violet"/>
                </div>

                <div>
                    <Button />
                    <Button className="primary" />
                    <Button className="secondary" />
                    <Button className="success" />
                    <Button className="danger" />
                    <Button className="warning" />
                    <Button className="info" />
                    <Button className="light" />
                    <Button className="dark" />
                    <Button className="link" />
                </div>
                <div>
                    <Button />
                    <Button className="primary" size="lg" />
                    <Button className="secondary" size="lg" />
                    <Button className="success" size="lg" />
                    <Button className="danger" size="lg" />
                    <Button className="warning" size="lg" />
                    <Button className="info" size="lg" />
                    <Button className="light" size="lg" />
                    <Button className="dark" size="lg" />
                </div>
                <div>
                    <Button />
                    <Button className="primary" size="little" />
                    <Button className="secondary" size="little" />
                    <Button className="success" size="little" />
                    <Button className="danger" size="little" />
                    <Button className="warning" size="little" />
                    <Button className="info" size="little" />
                    <Button className="light" size="little" />
                    <Button className="dark" size="little" />
                </div>
                <div>
                    <Button />
                    <Button className="primary" outline="outline-primary" />
                    <Button className="secondary" outline="outline-secondary" />
                    <Button className="success" outline="outline-success" />
                    <Button className="danger" outline="outline-danger" />
                    <Button className="warning" outline="outline-warning" />
                    <Button className="info" outline="outline-info" />
                    <Button className="light" outline="outline-light" />
                    <Button className="dark" outline="outline-dark" />
                </div>
                <div>
                    <Button />
                    <Button className="primary" outline="outline-primary" size="lg" />
                    <Button className="secondary" outline="outline-secondary" size="lg" />
                    <Button className="success" outline="outline-success" size="lg" />
                    <Button className="danger" outline="outline-danger" size="lg" />
                    <Button className="warning" outline="outline-warning" size="lg" />
                    <Button className="info" outline="outline-info" size="lg" />
                    <Button className="light" outline="outline-light" size="lg" />
                    <Button className="dark" outline="outline-dark" size="lg" />
                </div>
                <div>
                    <Button />
                    <Button className="primary" outline="outline-primary" size="little" />
                    <Button className="secondary" outline="outline-secondary" size="little" />
                    <Button className="success" outline="outline-success" size="little" />
                    <Button className="danger" outline="outline-danger" size="little" />
                    <Button className="warning" outline="outline-warning" size="little" />
                    <Button className="info" outline="outline-info" size="little" />
                    <Button className="light" outline="outline-light" size="little" />
                    <Button className="dark" outline="outline-dark" size="little" />
                </div>
            </div>
        </>
    );
}

export default App;
