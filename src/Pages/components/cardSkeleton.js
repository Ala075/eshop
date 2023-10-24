import Skeleton from "react-loading-skeleton";
import img from "../asserts/printing-icon.svg";

const CardSkeleton = ({cards }) => {
return Array(cards).fill(0).map((_, i) => {
    <div className="card-skeleton" key={i}>
        <div className="top">
            <Skeleton>
                <img src={img} alt=""/>
            </Skeleton>    
        </div>
        <div className="bottom">
            <Skeleton count={4} style={{ marginBottom: ".6rem"}}/>
        </div>
    </div>
});
}

export default CardSkeleton;
