import { AccessTime } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime />
      </HeaderLeft>

      {/* Header Search */}
      {/* Header Right */}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;
