import React from "react";
import { ResultsContainer, Tab, TabContainer, ResultContent, TabTitle } from '../styles/FriendsStyle';
import { TouchableOpacity } from 'react-native';
import FriendsListNames from './FriendsListNames';

const GroupPals = ({setSelected, groups }) => {
    const printFriends = () => {
        return JSON.stringify(groups);
    }
    return (
        <ResultsContainer>
            <TabContainer>
                <Tab>
                    <TouchableOpacity onPress={() =>setSelected("indiv")}>
                        <TabTitle style={{textAlign:"center"}}>
                            Pals
                        </TabTitle>
                    </TouchableOpacity>
                </Tab>
                <Tab style={{backgroundColor:"#5F5AA2"}}>
                    <TouchableOpacity>
                        <TabTitle style={{color:'white',textAlign:"center",textDecorationLine:'underline'}}>
                            Groups
                        </TabTitle>
                    </TouchableOpacity>
                </Tab>
            </TabContainer>
            <ResultContent
                accessible={true}
                accessibilityLabel="List of all groups"
            >
                {groups.map((e) => (
                    <FriendsListNames
                        key={e.name}
                        name={e.name}
                        handle=""
                        img={e.picture}
                    />
                ))}
            </ResultContent>
        </ResultsContainer>
        )
};

export default GroupPals;