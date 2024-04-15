import React, { useState } from 'react'
import '../styles/Drawer.css';

export default function Drawer({ closeDrawer, isDrawerOpen, colors, setData }) {
    const [selectedColor, setSelectedColor] = useState('')
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')

    function enableDoneBtn() {
        return selectedColor !== '' && title !== '' && subTitle !== ''
    }

    function submit() {
        const obj = {
            color: selectedColor,
            title: title,
            subTitle: subTitle
        }
        setData(prev => [...prev, obj])

        setSelectedColor('')
        setSubTitle('')
        setTitle('')
        closeDrawer()
    }
    return (
        <div className={`drawer-container ${!isDrawerOpen ? 'drawer-close' : 'drawer-container'}`}>
            <div className='drawer-header'><p className='header-text'>Creative Creation</p>
                <p className='cross' onClick={closeDrawer}>X</p>
            </div>
            <p className='title'>title</p>
            <input name='title'
            value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='This is a title!' className='input-box' />
            <p className='title'>subtitle</p>
            <input name='title'
            value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                placeholder='This is a subtitle!'
                className='input-box' />
            <p className='title'>background color</p>
            {colors && colors.map((color, index) => {
                return <button key={index}
                    onClick={() => setSelectedColor(color)}
                    style={{
                        backgroundColor: color, border: "1px solid black",
                        borderRadius: "50%", height: "30px",
                        width: "30px",
                        marginRight: "10px",
                        outline: selectedColor === color ? '2px solid black' : ''
                    }}></button>
            })}
            <br />
            <button onClick={submit} className='btn'
                disabled={!enableDoneBtn()}
            >Done</button>
        </div>
    )
}
