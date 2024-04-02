import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <Fragment>
            <h1>this is home page</h1>
            <Link to="/search">go to search</Link>
            <Link to="/all-movies">go to all movies page</Link>
            <Link to="/single-movie">go to single movie page</Link>
            <Link to="/about-us">go to about us page</Link>
            <Link to="/contact-us">go to contact us page</Link>
        </Fragment>
    );
}
