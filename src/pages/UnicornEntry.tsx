import React, { useState } from "react";
import styled from "styled-components";

import { withRouter, RouteChildrenProps } from 'react-router-dom';
import UnicornFlexLayout from "../layouts/UnicornFlexLayout";
import { UnicornText, UnicornButton, UnicornEmptyRow, UnicornTextField } from "../components";
import EntryBannerImage from "../assets/entry_banner.png"


const BannerImg = styled.img`
  max-width: 100%;
  max-height: 200px;
  width: auto;
  height: auto;
  margin: 0 auto;
`

function UnicornHome(props: RouteChildrenProps) {
  const [serviceName, setServiceName] = useState("");

  const onNext = () => {
    const { history } = props;
    history.push({
      pathname: '/survey',
      search: "?" + new URLSearchParams({ serviceName }).toString()
    })
  }

  return (
    <UnicornFlexLayout padding="0">
      <UnicornEmptyRow flex={2} />
      <UnicornText fontSize={18}>검사할 서비스명을 입력해주세요.</UnicornText>
      <UnicornEmptyRow flex={2} />
      <UnicornTextField onChange={(e) => setServiceName(e.target.value)} onPressEnter={onNext} />
      <UnicornEmptyRow flex={1} />
      <BannerImg src={EntryBannerImage} alt="entry_banner" />
      <UnicornButton flex={4} width={320} height={50} borderRadius={8} fontSize={18} onClick={onNext}>
        다음
      </UnicornButton>
      <UnicornEmptyRow flex={4} />
    </UnicornFlexLayout>
  )
}

export default withRouter(UnicornHome)
