import { ImageList, ImageListItem } from "@mui/material"

export function ProfileImageList({ images }) {
    return (
        images &&
        <ImageList sx={{ width: 900, height: 600 }} cols={3} rowHeight={295}>
            {images.map((item) => (
                <ImageListItem key={item.title}>
                    <img
                        src={item.img}
                        srcSet={item.img}
                        alt={item.title}
                        loading="lazy" />
                </ImageListItem>
            ))}
        </ImageList>
    );
}