import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <Fragment>
            <Link to="/">go to home page</Link>
            <h1>this is about us page</h1>
        </Fragment>
    );
}
