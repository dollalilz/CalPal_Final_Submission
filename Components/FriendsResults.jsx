import React from "react";
import { ResultsContainer, Tab, TabContainer, ResultContent, TabTitle } from '../styles/FriendsStyle';
import { Text, TouchableOpacity } from 'react-native';
import IndivPals from './IndivPals';
import GroupPals from './GroupPals';

const FriendsResults = ({selected, setSelected, friends, groups, query, activeQuery}) => {
    const filteredGroup = groups.filter((item) => (item.name).toUpperCase() === query.toUpperCase());
    const filteredFriends = friends.filter((item) => (item.name).toUpperCase() === query.toUpperCase());
    const retGroup = () => {
        return activeQuery ? filteredGroup : groups
    }
    const retFriends = () => {
        return activeQuery ? filteredFriends : friends
    }

    if (selected === "group"){
        return (
            <GroupPals
                setSelected={setSelected}
                groups={retGroup()}
            />
        )
    }

    return (
        <IndivPals
            setSelected={setSelected}
            friends={retFriends()}
        />
    );
};

export default FriendsResults;