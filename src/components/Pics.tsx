import { FC } from "react";

interface PicsProps {
    data: {
        src: string;
        title: string;
        description: string;    
    }[];
    onClick: () => void;
}
const   Pics: FC<PicsProps> = (props) => {
    const { data, onClick } = props;
    return <div className="images-container">
        {data.map((slide, index) => (
            <div key={index} className="image">
                <img src={slide.src} alt={slide.description} />
            </div>
        ))}
    </div>;
};

export default Pics;