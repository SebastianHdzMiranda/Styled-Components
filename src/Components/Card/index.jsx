import styled from "styled-components";
import imageFilter from "../../imageFilter";

const Card = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    /* padding: 10px; */
    font-size: 12px;
    width: 100%;
    margin: 5px 0;
    padding: 5px;
    
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    justify-content: center;
    .type{
        font-weight: 700;
    }
`;

export default ({cargo})=> {
    const {type, value, id, from, date} = cargo;
    console.log(cargo);
    return( 
        <Card>
            {imageFilter(type)}
            <Info >
                <span className="type">{type}</span>
                <span>{value}</span>
                <span>{from}</span>
            </Info>
            <span>{date}</span>
        </Card>
    );
};

