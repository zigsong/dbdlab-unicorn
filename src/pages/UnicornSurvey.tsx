import React from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';

import UnicornLayout from "../layouts/UnicornLayout";
import { UnicornText, UnicornEmptyRow,  UnicornRadio} from "../components";

function Survey(props: RouteChildrenProps) {
    const location = useLocation();
    const serviceName = new URLSearchParams(location.search).get("serviceName")
    const onStart = () => {
      const { history } = props;
      history.push("/entry");
    }
  
  return (
    <UnicornLayout>
      <UnicornEmptyRow flex={4} />
      <UnicornEmptyRow flex={1} />
      <UnicornRadio>첫 번째 질문</UnicornRadio>
      <UnicornRadio>두 번째 질문</UnicornRadio>
      <UnicornRadio>세 번째 질문</UnicornRadio>
      <UnicornRadio>네 번째 질문</UnicornRadio>
      <UnicornRadio>다섯 번째 질문</UnicornRadio>
      <UnicornRadio>여섯 번째 질문</UnicornRadio>
      <UnicornEmptyRow flex={4} />
    </UnicornLayout>
  )
}

export default withRouter(Survey)
