import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";

type ImageSliderProps = {
    imageUrls: string[];
    title: string[];
    description: string[];
    onImageClick: (index: number) => void; // Añade esta línea
};

export function ImageSlider({ imageUrls, title, description, onImageClick }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [textIndexTitle, setTextIndexTitle] = useState(0);
    const handleImageClick = () => {
        onImageClick(imageIndex); // Llama a onImageClick con el índice de la imagen
    };
    function showNextImage() {
    
        setTextIndex( index => {
            if (index === imageUrls.length - 1) return 0 
            return index + 1
        }),
        setTextIndexTitle( index => {
            if (index === imageUrls.length - 1) return 0 
            return index + 1
        }),
        setImageIndex( index => {
            if (index === imageUrls.length - 1) return 0 
            return index + 1
        })        
    }
    function showPrevImage() {
        
        setTextIndex( index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        }),
        setTextIndexTitle( index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        }),
        setImageIndex( index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })        
    }
    return (
        <div 
        style={{ 
                width: "100%", 
                height: "100%" 
            }}
        >
            <div className="relative w-full h-full">
                <img
                    src={imageUrls[imageIndex]}
                    alt={`Product ${textIndex + 1}`}
                    onClick={handleImageClick}
                    className="
                        object-cover
                        w-full 
                        h-full
                    "
                />
                <div className="absolute bottom-7 pl-10 ">
                    <h1 className="text-yellow-400 md:text-4xl sm:text-3xl text-base pr-14 font-bold">{title[textIndexTitle]}</h1>
                    <h2 className="text-zinc-700 w-prose pr-14 md:text-4xl sm:text-3xl text-base">{description[textIndex]}</h2>
                </div>
                <button
                    onClick={showPrevImage} 
                    className="
                        all:unset 
                        box-border 
                        absolute 
                        top-0 
                        bottom-0
                        cursor-pointer
                        left-0
                        hover:bg-gradient-to-r
                        from-zinc-400
                        transition-colors 
                        duration-100 
                        ease-in-out
                    "
                >
                    <ArrowBigLeft 
                        className="
                            stroke-white
                            fill-black
                            w-8 
                            h-8
                           
                        "
                    />
                </button>
                <button 
                    onClick={showNextImage} 
                    className="
                        all:unset 
                        box-border 
                        absolute 
                        top-0 
                        bottom-0
                        cursor-pointer
                        right-0
                        hover:bg-gradient-to-l
                        from-zinc-400
                        transition-colors 
                        duration-100 
                        ease-in-out
                    "
                >
                    <ArrowBigRight
                        className="
                            stroke-white
                            fill-black
                            w-8 
                            h-8
                        "
                    />
                </button>
            </div>
            {/* Resto de tus componentes */}
        </div>
    );
}

