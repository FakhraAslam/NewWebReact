import { useState } from 'react';
import Second from './Images/Second.jpg'
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
import Detail from './Detail'
const Newscard = (props) => {
    const { author } = useParams();
    return (
        <div >
            <div className="card w-25 " style={{ marginLeft: "500px", marginTop: "10px" }} >
                <img src={props.urlToImage} className="card-img-top" alt="Image Not Found" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
                    <p className="card-text">{props.content}</p>
                    <Link className="card-link" to="detail">read more</Link>

                </div>
            </div>


        </div>);

}
export default Newscard;