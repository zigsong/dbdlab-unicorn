import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import muteIcon from '../assets/group-11.svg';

const StyledToast = styled.div`
    position: absolute;
    top: -42px;
    align-items: center; // 텍스트 배치
    justify-content: center; // 텍스트 배치
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #ffffff;
    font-family: 'Nanumsquare Bold';
    font-size: 15px;
    box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.32);
    margin-bottom: 6px; 
    z-index: 0;
    display: flex;

    &.active {
        width: 36px;
        height: 36px;
        font-size: 15px;
        opacity: 1;
        z-index: 2;

        -webkit-transition-property: width height opacity background-color font-size left top transform -webkit-transform color;
        -webkit-transition-duration:0.1s;
        -webkit-transition-timing-function: ease;
        transition-property: width height opacity background-color font-size left top transform -webkit-transform color;
        transition-duration:0.1s;
        transition-timing-function: ease;
    }

    &.inactive {
        width: 36px;
        height: 36px;
        margin-top: 50px;
        opacity: 0.2;
        z-index: 0;

        -webkit-transition-property: width height opacity background-color font-size left top transform -webkit-transform color;
        -webkit-transition-duration:0.4s;
        -webkit-transition-timing-function: ease-out;
        transition-property: width height opacity background-color font-size left top transform -webkit-transformv color;
        transition-duration:0.4s;
        transition-timing-function: ease-out;
    }
`

interface UnicornToastProps {
    color: string
    children: React.ReactNode
    active: boolean
}


const usePrevious = <T extends {}>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
};

function UnicornToast(props: UnicornToastProps) {
    const [delay, setDelay] = useState(0)
    const prevActive = usePrevious(props.active)

    useEffect(() => {
        if (prevActive === undefined || prevActive === props.active) {
            return;
        }
        setDelay(0);
        setTimeout(() => {
            setDelay(1);
        }, 100);
            
        setTimeout(() => {
            setDelay(2);
        }, 500);
    }, [delay, prevActive, props.active])

    return (
        props.active ? <>
            <StyledToast className={(delay === 0 || delay === 2) ? "inactive" : "active"} style={{ color : `${props.color || '4a4a4a'}` }}>
                {props.children}
            </StyledToast>
        </> : 
        <>
            <StyledToast className={(delay === 0 || delay === 2) ? "inactive" : "active"} style={{ color : `${props.color || '4a4a4a'}` }}>
            <img src={muteIcon} alt="mute"></img> 
            </StyledToast>
        </>
   )
}

export default UnicornToast;