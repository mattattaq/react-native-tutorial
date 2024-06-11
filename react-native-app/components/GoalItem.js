import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <Pressable
            android_ripple={{color: '#dddddd'}}
            onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles['goal-item']}>
                <Text>{props.text}</Text>
            </View>
        </Pressable>
    );
};

export default GoalItem;

const styles = StyleSheet.create ({
    'goal-item': {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
      }
})