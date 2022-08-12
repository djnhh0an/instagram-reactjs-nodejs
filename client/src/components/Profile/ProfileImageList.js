import { ImageList, ImageListItem } from "@mui/material"

export function ProfileImageList({ images }) {
    return (
        <ImageList sx={{ width: 800, height: 600 }} cols={3} rowHeight={295}>
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