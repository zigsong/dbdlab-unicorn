import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import history from '../history';
import { useHistory } from "react-router-dom";


interface HomeProps {   

};

export default function Home({}: HomeProps) {
    const [serviceName, setServiceName] = useState("");
    const history = useHistory();

    const handleChange = (e: any) => {
        // console.log(e.target.value);
        setServiceName(e.target.value);
    };

    const handleSubmit = () => {
        history.push({
            pathname: '/survey',
            // search: '?query=abc',
            state: { name: serviceName }
        })
    }

    return (
        <Fragment>
            <div>Home Page</div>
            <div>유니콘 페이지</div>
            <label>서비스 이름 입력하기</label>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}/><br />
                <input type="submit" value="시작하기" onClick={handleSubmit}/>
            </form>
        </Fragment>
    );
}