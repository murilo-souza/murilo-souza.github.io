import styled from "styled-components";
import {theme} from "../../styles/theme/theme";

export const Container = styled.div`
    display: flex;
    background-color: #FFD1E9;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 10px 10px;
    padding: 10px 13px;
    width: 100%;
`;

export const Title = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: ${(theme.color.primary)};
`;