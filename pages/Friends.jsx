import React from "react";
import NavBar from '../Components/NavBar';
import { PhoneView, BodyContainer, Heading} from '../styles/GeneralStyles';
import { Searchbar } from 'react-native-paper';
import FriendsResults from '../Components/FriendsResults';
import friends from '../stubs/friends.js';
import groups from '../stubs/groups.js';

const Friends = ({history}) => {
    // states for Friends page 
    const [searchQuery, setSearchQuery] = React.useState('');
    const [ selectedTab, setSelected ] = React.useState('indiv');
    const [activeQuery, setActive] = React.useState(false);

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        setActive(true);
        if (query === ''){
            setActive(false);
        }
    }

    const handleSelected = (selected) => {
        setSelected(selected);
    }

    return (
        <PhoneView className="font">
        <BodyContainer>
            <Heading>Your Pals</Heading>
            
            <Searchbar
                style={{marginTop:'5%', marginBottom:'5%'}}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <FriendsResults 
                selected={selectedTab}
                setSelected={handleSelected}
                friends={friends}
                groups={groups}
                query={searchQuery}
                activeQuery={activeQuery}
            />
        </ BodyContainer> 
        <NavBar 
            history={history}
            selectedIcon="Friends"
        />
        </ PhoneView>
    );
}

export default Friends;