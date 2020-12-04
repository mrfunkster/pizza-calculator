import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import './ModeSwitch.css'

const ModeSwitch = () => {

    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
            setIsDarkMode(prefersDark)
        }
    )

    const [isDarkMode, setIsDarkMode] = useState(systemPrefersDark)

    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode])

    const modeSwitcher = (e) => {
        setIsDarkMode(e.target.checked)
    };

    return (
        <div className="col-sm-4 col mode">
            <div className="mode-switch">
                <span>{isDarkMode ? "🔆" : "🌙"}</span>
                <input type="checkbox" className="switch__checkbox" 
                    checked={isDarkMode}
                    onChange={modeSwitcher}
                />
            </div>
        </div>
    );
}


export default ModeSwitch;