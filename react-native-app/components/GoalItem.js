import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles['goal-item']}>
            <Text>{props.text}</Text>
        </View>
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