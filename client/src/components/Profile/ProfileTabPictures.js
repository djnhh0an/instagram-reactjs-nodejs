import { Tabs, Tab } from "@mui/material"
import PersonPinIcon from '@mui/icons-material/PersonPin';
import VideoCameraFront from '@mui/icons-material/VideoCameraFront';
import List from '@mui/icons-material/List';
import { useState } from "react";
import { ProfileImageList } from "./ProfileImageList";
// import { photo } from '../../static/photo'
import { useEffect } from "react";

function ProfileTabPictures({ option }) {

    const [value, setValue] = useState("POST");
    const [images, setImages] = useState(option.photo.posts);

    useEffect(() => {
        setValue("POST");
        setImages([]);
        setImages(option.photo.posts);
    }, [option])

    const handleTabsChange = (event, newValue) => {
        setValue(newValue);
        changeImageSource(newValue);
    };

    const changeImageSource = (value) => {
        if (value === "REELS")
            setImages(option.photo.reels);
        else if (value === "TAGGED")
            setImages(option.photo.tagged);
        else setImages(option.photo.posts);
    }
    return (
        <div>
            <Tabs centered value={value} onChange={handleTabsChange} aria-label="profile tabs">
                <Tab icon={<List />} label="POST" value="POST" />
                <Tab icon={<VideoCameraFront />} label="REELS" value="REELS" />
                <Tab icon={<PersonPinIcon />} label="TAGGED" value="TAGGED" />
            </Tabs>
            <ProfileImageList images={images} />
        </div>
    );
}

export default ProfileTabPictures;