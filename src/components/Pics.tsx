import { FC } from "react";

interface PicsProps {
    data: {
        src: string;
        title: string;
        description: string;    
    }[];
    onClick: (index: number) => void;
}
const   Pics: FC<PicsProps> = (props) => {
    const { data, onClick } = props;

const handleClickPic = (index: number) => {
    onClick(index);
};

    return <div className="images-container">
        {data.map((slide, index) => (
            <div 
            onClick={() => handleClickPic(index)}
            key={index}
            className="image">
                <img src={slide.src} alt={slide.description} />
            </div>
        ))}
    </div>;
};

export default Pics;