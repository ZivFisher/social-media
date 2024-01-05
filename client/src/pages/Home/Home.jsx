import { Box, useMediaQuery } from "@mui/material";
import Sponsore from "components/Sponsore/Sponsore";
import AllPosts from "components/AllPosts/AllPosts";
import FriendList from "components/FriendList/FriendList";
import Navbar from "components/Navbar/Navbar";
import UserPosts from "components/UserPosts/UserPosts";
import UserProfileCard from "components/UserProfileCard/UserProfileCard";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserProfileCard userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <UserPosts picturePath={picturePath} />
          <AllPosts userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Sponsore />
            <Box m="2rem 0" />
            <FriendList userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
