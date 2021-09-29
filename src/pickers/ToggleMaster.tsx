import React, { FunctionComponent } from "react";
import styled from "styled-components";

import RatingSelector from "./RatingSelector";
import ToggleGenre from "./ToggleGenre";

const PickerWrapper = styled.div`
  height: calc(100vh - 96px);
  overflow: scroll;
  background-color: white;
  box-shadow: 0px 0px 20px #00000057;
  padding: 16px;
`;

const ToggleMaster: FunctionComponent = () => {
  return (
    <PickerWrapper>
      <RatingSelector />
      <ToggleGenre />
    </PickerWrapper>
  );
};

export default ToggleMaster;
