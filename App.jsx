import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () => {
  // State untuk menyimpan teks input
  const [inputText, setInputText] = useState('');

  // Fungsi untuk menangani perubahan teks input
  const handleInputChange = text => {
    setInputText(text);
  };

  // Fungsi untuk menangani tombol "Submit"
  const handleSubmit = () => {
    alert(`Teks yang diinput: ${inputText}`);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aplikasi React Native Keren</Text>

      {/* Input teks */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan teks"
        onChangeText={handleInputChange}
        value={inputText}
      />

      {/* Tombol Submit */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#2c3e50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
