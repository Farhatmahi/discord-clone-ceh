import tw from "tailwind-styled-components/dist/tailwind";
import {
  setCreateChannelOpen,
  setInviteFriendsOpen,
  setServerDropdownOpen,
  setServerSettingsOpen,
} from "../../features/serverSettings";
import { useAppDispatch } from "../../redux/hooks";
import { useUserState } from "../../features/user";

export default function ServerDropdown() {
  const { user } = useUserState();
  const dispatch = useAppDispatch();

  function closeWindow(e: React.MouseEvent) {
    dispatch(setServerDropdownOpen(false));
  }

  function stopPropagation(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <Backdrop onClick={closeWindow}>
      <Container onClick={stopPropagation}>
        <ListContainer>
          <ListItemInvite onClick={() => dispatch(setInviteFriendsOpen(true))}>
            Invite People
          </ListItemInvite>

          {user.roles.serverOwner && (
            <ListItem onClick={() => dispatch(setServerSettingsOpen(true))}>
              Server Settings
            </ListItem>
          )}

          {user.roles.serverOwner && (
            <ListItem onClick={() => dispatch(setCreateChannelOpen(true))}>
              Create Channel
            </ListItem>
          )}

          <Separator />

          <ListItemLeave>Leave Server</ListItemLeave>
        </ListContainer>
      </Container>
    </Backdrop>
  );
}

const Backdrop = tw.div`
  fixed w-full h-full z-50
`;

const Container = tw.div`
  absolute flex flex-col w-[220px] top-[50px] left-20.5 px-2 py-1.5 bg-white rounded-middle drop-shadow-xl
  dark:bg-dark-600
`;

const ListContainer = tw.ol`
`;

const ListItem = tw.li`
  flex items-center my-0.5 py-1.5 pl-2 h-8 text-sm font-medium rounded-middle cursor-pointer
  hover:bg-indigo-800 hover:text-white
  dark:text-text-primary dark:hover:bg-dark-secondary dark:hover:text-white
`;

const ListItemInvite = tw(ListItem)`
  text-indigo-500
  dark:text-dark-primary
`;

const ListItemLeave = tw(ListItem)`
  text-danger-100
  hover:bg-danger-100
  dark:text-danger-200 dark:hover:bg-danger-100
`;

const Separator = tw.div`
  w-[196px] h-px m-1 border-b border-gray-300
  dark:border-dark-50/[.48]
`;
