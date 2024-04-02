import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function SingleMovie() {
    return (
        <Fragment>
            <Link to="/">go to home page</Link>
            <h1>this is single movie page</h1>
        </Fragment>
    );
}
