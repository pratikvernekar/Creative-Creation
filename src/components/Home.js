import React, { useEffect, useState } from 'react'
import '../styles/Home.css';
import ProgressBar from './ProgressBar';
import Card from './Card';

export default function Home({ openDrawer, colors, isDrawerOpen, data, setData }) {
    const [selectedColor, setSelectedColor] = useState('')
    const [filterData, setFilterData] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {
        setFilterData(data)
    }, [data])

    useEffect(() => {
        onFilterData();
    }, [text,selectedColor]);


    function enableAddBtn() {
        if (data.length === 5) {
            return true
        }
        return isDrawerOpen
    }

    function onFilterData() {
        if(selectedColor){
            const res = data.filter(e => e.color === selectedColor);
             setFilterData(res)
        }
        if(text){
            const res = data.filter(e => e.title.includes(text));
            setFilterData(res)
        }
    }
    return (
        <div className='homeContainer'>
            <span className='header-text'>Filter By:</span>
            <br />
            <div className='color-title-div'>
                <span>color</span>
                <span>title / subtitle:</span>
            </div>
            <div className='color-title-div'>
                <div>{colors && colors.map((color, index) => {
                    return <button key={index}
                        onClick={() => {
                            setSelectedColor(color)
                            onFilterData()
                        }
                        }
                        style={{
                            backgroundColor: color, border: "1px solid black",
                            borderRadius: "50%", height: "30px",
                            width: "30px",
                            marginRight: "10px",
                            outline: selectedColor === color ? '2px solid black' : ''
                        }}></button>
                })}</div>

                <input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                        onFilterData()
                    }}
                    placeholder='search across title and subtitle'
                    className='input-box-search' />
            </div>
            <div className='progress-bar-div'>
                <ProgressBar value={data.length} maxValue={5} />  <span>{data.length} / 5 Creatives</span>
            </div>


            <button onClick={openDrawer} className='btn' disabled={enableAddBtn()}>+ Add Creative</button>
            {filterData && filterData.map((e, i) => { return <Card key={i} title={e.title} subTitle={e.subTitle} color={e.color} /> })}
        </div>

    )
}
