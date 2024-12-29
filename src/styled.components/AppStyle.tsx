import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;

    .advice-block{
        width: 100%;
        max-width: 540px;
        padding: 40px 24px 0;
        background-color: #313A48;
        box-shadow: 30px 50px 80px 0px #0000001A;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header{
            font-size: 11px;
            font-weight: 800;
            line-height: 15.03px;
            letter-spacing: 3.46px;
            text-align: center;
            color: #53FFAA;
            margin-bottom: 24px;
        }
        .advice{
            font-size: 24px;
            font-weight: 800;
            line-height: 32.78px;
            letter-spacing: -0.26px;
            text-align: center;
            color: #CEE3E9;
            margin-bottom: 24px;
        }
        .mobile-splitter{
            margin-bottom: 32px;
        }
        .desktop-splitter{
            display: none;
        }
        .button{
            background-color: #53FFAA;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            margin-bottom: -32px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all ease 0.2s;
        }
    }

    @media only screen and (min-width: 600px){
        padding: 0;

        .advice-block{
            padding: 48px 48px 0;
            border-radius: 15px;

            .header{
                font-size: 13px;
                line-height: 17.76px;
                letter-spacing: 4.085713863372803px;
            }
            .advice{
                font-size: 28px;
                line-height: 38.25px;
                letter-spacing: -0.30000001192092896px;
                margin-bottom: 40px;
            }
            .mobile-splitter{
                display: none;
            }
            .desktop-splitter{
                display: block;
                margin-bottom: 40px;
            }
            .button:hover{
                box-shadow: 0px 0px 40px 0px #53FFAA;
                cursor: pointer;
            }
        }
    }
`

export {Main}