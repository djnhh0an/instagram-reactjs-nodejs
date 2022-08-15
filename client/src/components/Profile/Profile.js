import ProfilePicture from "../Common/ProfilePicture";
import { Button } from "@mui/material"
import ProfileTabPictures from "./ProfileTabPictures"
import { useSearchOptionState } from "../../hooks/useSearchOptionState";
import Stack from '@mui/material/Stack';
import Layout from "../Common/Layout";
import { useUserState } from "../../hooks";

function Profile() {
    const { loginUserData } = useUserState();
    const { searchOption } = useSearchOptionState();

    return (
        <Layout user={loginUserData}>
            <div>
                <div className="flex mb-12">
                    <ProfilePicture className="mr-32"
                        src={searchOption.image}
                        size={150}
                        username={searchOption.username} />
                    <div className="m-auto text-left">
                        <Stack spacing={2} direction="row">
                            <label className="text-center text-2xl">{searchOption.name}</label>
                            <Button variant="outlined" className="h-7">Message</Button>
                            <Button variant="contained" className="h-7">Follow</Button>
                            <Button id="three-dot-button" className="h-7">...</Button>
                        </Stack>
                        <Stack spacing={3} direction="row" className="mt-2">
                            <label>901 posts</label>
                            <label>185K followers</label>
                            <label>88 following</label>
                        </Stack>
                    </div>
                </div>
                <ProfileTabPictures option={searchOption} />
            </div>
        </Layout>);
}
export default Profile;