import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(text) {
    console.log('text from addGoalHandler: ', text);
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: text, key: Math.random().toString() }]);
    console.log('courseGoals: ', courseGoals);
}

  return (
    <View style={styles['app-container']}>  
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles['goals-container']}> 
        <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  'app-container': {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },


  'goals-container': {
    flex: 4,
  },
});
