import { Tabs, Tab } from "@mui/material"
import PersonPinIcon from '@mui/icons-material/PersonPin';
import VideoCameraFront from '@mui/icons-material/VideoCameraFront';
import List from '@mui/icons-material/List';
import { useState } from "react";
import { ProfileImageList } from "./ProfileImageList";
import { photo } from '../../static/photo'

function ProfileTabPictures() {
    const [value, setValue] = useState("POST");
    const [images, setImages] = useState(photo.posts);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === "REELS")
            setImages(photo.reels);
        else if (newValue === "TAGGED")
            setImages(photo.tagged);
        else setImages(photo.posts);
    };

    return (
        <div>
            <Tabs centered value={value} onChange={handleChange} aria-label="profile tabs">
                <Tab icon={<List />} label="POST" value="POST" />
                <Tab icon={<VideoCameraFront />} label="REELS" value="REELS" />
                <Tab icon={<PersonPinIcon />} label="TAGGED" value="TAGGED" />
            </Tabs>
            <ProfileImageList images={images} />
        </div>

    );
}

export default ProfileTabPictures;