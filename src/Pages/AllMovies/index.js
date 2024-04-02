import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function AllMovies() {
    return (
        <Fragment>
            <Link to="/">go to home page</Link>
            <h1>this is all movies page</h1>
        </Fragment>
    );
}
