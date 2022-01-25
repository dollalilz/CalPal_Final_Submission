import React from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native';
import {
    InterestContainer, ChipContainer, FlexContainer, ProfileHeader,
    EditTitle, EditHeader, InputDiv
} from '../styles/ProfileStyles';
import { Chip, TextInput, Button, StyleSheet } from 'react-native-paper';
import edit from '../icons/edit.png';
import add from '../icons/add.png';

const EditableInterest = ({interests, setInterests}) => {
    const [editable, setEdit] = React.useState(false);
    const [currInterest, setCurrInterest] = React.useState(interests);
    const [text, setText] = React.useState('');

    const toggleButton = () => {
        if (editable === true) {
            setEdit(false);
        } else {
            setEdit(true);
        }
    }

    const addInterest = (name) => {
        const newList = currInterest.concat(name);
        setCurrInterest(newList);
    }

    const deleteItem = (name) => {
        setCurrInterest(currInterest.filter((e) => e !== name));
        setInterests(currInterest.filter((e) => e !== name));
    }
    
    return (
        <InterestContainer>
            <ProfileHeader>
                <EditTitle> Interests </EditTitle>
                <TouchableOpacity 
                    accessible={true}
                    accessibilityLabel="save the changes in interest"
                    onPress={toggleButton}
                >
                    {editable ? 
                        (
                            <Text
                            style={{color:"blue", fontSize:18}}>Save changes</Text>
                            ):(
                                <Image 
                                source={edit}
                                style={{height:30, width:30}}
                                />
                                )
                            }
                </TouchableOpacity>
            </ProfileHeader>
                {editable ? 
                    (
                        <>
                        <InputDiv>
                            <View style={{flex: 9}}>
                                <TextInput
                                    label="Add Interest"
                                    value={text}
                                    onChangeText={text => setText(text)}
                                />
                            </View>
                            <View style={{flex:1}}>
                                <Button
                                    accessible={true}
                                    accessibilityLabel="Add interest"
                                    icon={add}
                                    onPress={() => addInterest(text)}
                                ></Button>
                            </View>
                        </InputDiv>
                        <FlexContainer
                            accessible={true}
                            accessibilityLabel="list of all interests"
                        >
                        {currInterest.map((item, index) =>
                            <ChipContainer key={index}>
                                <Chip 
                                mode="outlined"
                                onClose={() => deleteItem(item)}>
                                    {item}
                                </Chip>
                            </ChipContainer>
                        )}
                        </FlexContainer>
                        </>   
                    )
                    :
                    (
                        <FlexContainer
                            accessible={true}
                            accessibilityLabel="list of all interests"
                        >
                        {currInterest.map((item, index) =>
                            <ChipContainer key={index}>
                                <Chip mode="outlined">
                                    {item}
                                </Chip>
                            </ChipContainer>
                        )}
                        </FlexContainer>
                    )
                }
        </InterestContainer>
    );
}

export default EditableInterest;