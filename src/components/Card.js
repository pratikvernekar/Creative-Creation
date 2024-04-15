import React from 'react'
import '../styles/Card.css';

export default function Card({ title, subTitle, color }) {
    return (
        <div className="card" style={{backgroundColor:color}}>
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{subTitle}</p>
        </div>)
}
