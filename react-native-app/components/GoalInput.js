import { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';


function GoalInput(props) {
    const [text, setText] = useState('');

    function goalInputHandler(inputText) {
        console.log('text: ', inputText);
        setText(inputText);
    }

    function addGoalHandler() {
        props.onAddGoal(text);
        setText('');
    }

    
    return (
        <View style={styles['input-container']}>
            <TextInput
                style={styles['text-input']}
                placeholder='What are your course goals?'
                onChangeText={goalInputHandler}
                value={text}
            />
            <Button
                title="Add Goal"
                onPress={addGoalHandler}
            />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    'text-input': {
        borderWidth: 1,
        borderColor: '#cccccc',
        paddingLeft: 8,
        paddingRight: 8,
        width: '70%',
        marginRight: 8,
    },
    'input-container': {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
})