import React from "react";
import styled from "styled-components";

export default function Loader() {

    const LoaderImg = styled.img`
        width: 40px;
    `;

    const LoaderBlock = styled.div`
        text-align: center;
    `;

    return (
        <LoaderBlock>
            <LoaderImg src='/loader.gif'/>
        </LoaderBlock>
    )
}