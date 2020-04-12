import React, { useEffect, useState } from "react";
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import UnicornFlexLayout from "../layouts/UnicornFlexLayout";
import UnicornLayout from "../layouts/UnicornLayout";
import { UnicornText, UnicornButton, UnicornEmptyRow } from "../components";
import { Spin } from 'antd';
import bottomImage from "../assets/imges-03.png";

function UnicornHome(props: RouteChildrenProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const onStart = () => {
    const { history } = props;
    history.push("/entry");
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100000)
  });
  
  return (
    <UnicornFlexLayout>
      <UnicornEmptyRow flex={4} />
      {/* <UnicornText fontSize={55}>Whonicorn</UnicornText> */}
      { isLoaded ? 
        <div>당신의 후니콘은?</div>
        : 
        <div>
          <Spin size="large" />
          <UnicornText width={197} height={44} fontSize={15} color={'#4a4a4a'} >
            결과를 분석 중입니다.<br />과연 우리는 어떤 유니콘알까요?
          </UnicornText>
          <img src={bottomImage} alt="bottom-image" style={{ position: 'absolute', bottom: '0px' }}/>
        </div>
      }
      <UnicornEmptyRow flex={1} />
      <UnicornEmptyRow flex={4} />
    </UnicornFlexLayout>
  )
  


}

export default withRouter(UnicornHome)
