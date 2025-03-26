import ImageFallbackIcon from "@components/shared/icons/ImageFallbackIcon";
import { useState } from "react";

const NewsImage = ({ src, alt }: { src: string | undefined; alt: string }) => {
    const [error, setError] = useState(false);

    return error || !src ? (
        <div
            className="flex h-40 w-full items-center justify-center rounded-lg"
            role="img"
            aria-label="No image available"
        >
            <ImageFallbackIcon />
        </div>
    ) : (
        <img
            className="h-40 w-full rounded-lg object-cover"
            src={src}
            alt={alt}
            onError={() => setError(true)}
        />
    );
};

export default NewsImage;
