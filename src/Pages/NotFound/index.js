import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Fragment>
            <Link to="/">go to home page</Link>
            <h1>this is not found page</h1>
        </Fragment>
    );
}
