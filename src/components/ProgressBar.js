import React from 'react'
import "../styles/ProgressBar.css"

export default function ProgressBar({ value, maxValue }) {
    const percentage = (value / maxValue) * 100;

    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${percentage}%` }}></div>
        </div>
    );
}
