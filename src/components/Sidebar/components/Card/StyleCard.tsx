import styled from "styled-components";

const StyleCard = styled.div`

background-color: black;
.card{
    display: flex;
    width: 100%;
    height: 100px;

    .card-header{
        width: 128px;
        padding: 8px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-body{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8px 8px 8px 0;

        .card-info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }

        button{
            border: none;
            width: 100%;
            height: 32px;
            position: relative;

            img{
                width: 24px;
                height: 24px;
                position: absolute;
                right: 8px;
                top: 0;
                
                &:hover{
                    background-color: #e9e1e1;
                    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
                    border-radius: 3px;
                }
            }

        }
    }
}
`;

export default StyleCard;