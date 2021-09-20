import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        
                        { rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton> }
                
                    </ButtonGroup>
                </Fade>
                <DownArrow src='/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
    
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    @media (max-width: 400px){
        h1{
            font-size: 30px;
        }
        p{
            font-size: 19px;

        }
    }
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    color: #fff;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.5px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: #111;

`
const DownArrow = styled.img`
    height: 45px;
    animation: Arrow-float infinite 1.6s ;

    @keyframes Arrow-float {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-5px);
        }
        60% {
          transform: translateY(-3px);
        }
      }
      
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
      
`