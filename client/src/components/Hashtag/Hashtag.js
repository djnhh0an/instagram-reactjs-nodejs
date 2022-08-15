import ProfilePicture from "../Common/ProfilePicture";
import { Button } from "@mui/material"
import { ProfileImageList } from "../Profile/ProfileImageList"
import { useSearchOptionState } from "../../hooks/useSearchOptionState";
import Stack from '@mui/material/Stack';
import Layout from "../Common/Layout";
import { useUserState } from "../../hooks";
import { useEffect } from "react";

function Hashtag() {
    const { loginUserData } = useUserState();
    const { searchOption } = useSearchOptionState();

    useEffect(() => {
        console.log("🚀 ~ file: Hashtag.js ~ line 13 ~ Hashtag ~ searchOption", searchOption)
    })

    return (
        <Layout user={loginUserData}>
            <div>
                <div className="flex mb-12">
                    <ProfilePicture className="ml-1 w-1/4"
                        src={searchOption.image}
                        size={150}
                        username={searchOption.username} />
                    <div className="text-left w-full ml-10">
                        <Stack spacing={2} direction="column">
                            <label className="text-left text-2xl">{searchOption.name}</label>
                            <label>100 posts</label>
                            <Button variant="contained" className="h-7 w-full">Follow</Button>
                        </Stack>
                    </div>
                </div>
                <label className="text-gray-500">Top posts</label>
                <div className="mt-2.5">
                    <ProfileImageList images={searchOption.photo.hashtags} />
                </div>
            </div>
        </Layout>);
}
export default Hashtag;