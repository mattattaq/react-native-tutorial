import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles['app-container']}>
      <View style={styles['input-container']}>
        <TextInput style={styles['text-input']} placeholder='What are your course goals?' />
        <Button title="Add Goal" />
      </View>
      <View style={{ flexDirection: 'row', width: '80%', height: 300, alignItems: 'center' }}>
        <View style={[styles['box'], { backgroundColor: 'red' }]}><Text>1</Text></View>
        <View style={[styles['box'], { backgroundColor: 'blue' }]}><Text>2</Text></View>
        <View style={[styles['box'], { backgroundColor: 'green' }]}><Text>3</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  'app-container': {
    padding: 50
  },
  'input-container': {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  'text-input': {
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingLeft: 8,
    paddingRight: 8,
    width: '80%',
    marginRight: 8
  },
  'box': {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  }
});
