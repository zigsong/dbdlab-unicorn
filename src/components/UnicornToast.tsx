import React from 'react';
import styled from 'styled-components';

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
    z-index: 2;
`

interface UnicornToastProps {
    color: string
    children: React.ReactNode
    active: boolean
}

function UnicornToast(props: UnicornToastProps) {
   return (
        <>
            <StyledToast style={{
                display: `${props.active ? 'flex' : 'none'}`,
                color : `${props.color || '4a4a4a'}`
            }}>
                {props.children}
            </StyledToast>
        </>
   )
}

export default UnicornToast;