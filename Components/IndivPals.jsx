import React from "react";
import { ResultsContainer, Tab, TabContainer, ResultContent, TabTitle } from '../styles/FriendsStyle';
import { TouchableOpacity, StyleSheet } from 'react-native';
import FriendsListNames from "./FriendsListNames";

const IndivPals = ({setSelected, friends }) => {
    const printFriends = () => {
        return JSON.stringify(friends);
    }
    return (
        <ResultsContainer>
            <TabContainer>
                <Tab style={{backgroundColor:"#5F5AA2"}}>
                    <TouchableOpacity>
                        <TabTitle style={{color:'white',textAlign:"center",textDecorationLine:'underline'}}>
                            Pals
                        </TabTitle>
                    </TouchableOpacity>
                </Tab>
                <Tab>
                    <TouchableOpacity onPress={() => setSelected("group")}>
                        <TabTitle style={{textAlign:"center"}}>
                            Groups
                        </TabTitle>
                    </TouchableOpacity>
                </Tab>
            </TabContainer>
            <ResultContent
                accessible={true}
                accessibilityLabel="List of all pals"
            >
                {friends.map((e) => (
                    <FriendsListNames
                    key={e.handle}
                    name={e.name}
                    handle={e.handle}
                    img={e.picture}
                    />
                ))}
            </ResultContent>
        </ResultsContainer>
        )
};

export default IndivPals;