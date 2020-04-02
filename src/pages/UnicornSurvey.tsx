import React, { Fragment } from 'react';
import { useLocation, RouteChildrenProps } from "react-router-dom";

interface SurveyProps {
    serviceName: string;
};

export default function Survey(props: RouteChildrenProps) {
    const location = useLocation();
    const serviceName = new URLSearchParams(location.search).get("serviceName")

    const onSubmit = () => {
      const { history } = props;
      history.push("/result");
    }
  
    return (
        <Fragment>
            <div>Survey Page</div>
            <div>서비스 이름: { serviceName }</div>
            <ol>
                <li>
                    1. 첫 번째 질문
                    <select name="survey">
                        <option value="first">1번 선택지</option>
                        <option value="second">2번 선택지</option>
                        <option value="third">3번 선택지</option>
                    </select>
                </li>
                <li>
                    2. 두 번째 질문: <input />
                </li>
                <li>
                    3. 세 번째 질문: <input />
                </li>
                <li>
                    4. 네 번째 질문: <input />
                </li>
                <li>
                    5. 다섯 번째 질문: <input />
                </li>
                <li>
                    6. 여섯 번째 질문: <input />
                </li>
                <li>
                    7. 일곱 번째 질문: <input />
                </li>
                <li>
                    8. 여덟 번째 질문: <input />
                </li>
                <li>
                    9. 아홉 번째 질문: <input />
                </li>
                <li>
                    10. 열 번째 질문: <input />
                </li>
                <li>
                    11. 열한 번째 질문: <input />
                </li>
                <li>
                    12. 열두 번째 질문: <input />
                </li>
                <li>
                    13. 열세 번째 질문: <input />
                </li>
                <li>
                    14. 열네 번째 질문: <input />
                </li>
                <li>
                    15. 열다섯 번째 질문: <input />
                </li>
            </ol>
            <button onClick={onSubmit}>
              결과보기
            </button>
        </Fragment>
    );
}