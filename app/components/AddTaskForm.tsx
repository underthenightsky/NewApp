// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Pressable,
//   Platform,
//   StyleSheet,Button,TouchableOpacity
// } from 'react-native';
// // import RNPickerSelect from 'react-native-picker-select';
// import {Picker} from '@react-native-picker/picker';
// // import  DateTimePickerModal  from 'react-native-modal-datetime-picker';
// import {buttonStyles} from '../styles/button';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import colors from '../styles/colors';
// import {shadows} from '../styles/shadows';

// type AddTaskFormProps = {
//   onSubmit: (name : string ,description: string) => void;
// };
// // const Dropdown = () => {
// //   const [selectedValue, setSelectedValue] = useState(null);

// //   const placeholder = {
// //     label: 'Select an option...',
// //     value: null,
// //   };

// //   const options = [
// //     { label: 'High Priority', value: 'High Priority' },
// //     { label: 'Medium Priority', value: 'Medium Priority' },
// //     { label: 'Low Priority', value: 'Low Priority' },
// //   ];

// //   return (
// //     <View>
// //       <Text>Select an option:</Text>
// //       <RNPickerSelect
// //         placeholder={placeholder}
// //         items={options}
// //         onValueChange={(value) => setSelectedValue(value)}
// //         value={selectedValue}
// //       />
// //       {selectedValue && <Text>Selected: {selectedValue}</Text>}
// //     </View>
// //   );
// //   }
  
// // const DropdownMenu = () => {
// //   const [selectedValue, setSelectedValue] = useState('');

// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Picker
// //         selectedValue={selectedValue}
// //         style={{ height: 50, width: 200 }}
// //         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
// //       >
// //         <Picker.Item label="Option 1" value="option1" />
// //         <Picker.Item label="Option 2" value="option2" />
// //         <Picker.Item label="Option 3" value="option3" />
// //         <Picker.Item label="Option 4" value="option4" />
// //         <Picker.Item label="Option 5" value="option5" />
// //       </Picker>
// //     </View>
// //   );
// // };

// const DatePickerExample = () => {
//   const [date, setDate] = useState(new Date());
//   const [showPicker, setShowPicker] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowPicker(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showDatepicker = () => {
//     setShowPicker(true);
//     // return (
//     //   <DateTimePicker
//     //       testID="dateTimePicker"
//     //       value={date}
//     //       mode="date"
//     //       is24Hour={true}
//     //       display="default"
//     //       onChange={onChange} 
//     //     />
//     // )
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Button onPress={showDatepicker} title="Show Date Picker" />
//       {showPicker && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode="date"
//           is24Hour={true}
//           display="default"
//           onChange={onChange} 
//         />
//       )}
//     </View>
//   );
// };

// // const setStartEndDate = () => {
// //   const [startDate, setStartDate] = useState(false);
// // const [endDate, setEndDate] = useState(false);

// // const showDatePicker = () => {
// //   setStartDate(true);
// // };

// // const hideDatePicker = () => {
// //   setStartDate(false);
// // };

// // const handleConfirm = (date) => {
// //   console.warn("A date has been picked: ", date);
// //   hideDatePicker();
// //   return (
// //     <Text>Selected: {date}</Text>
// //   )
// // };
// // const showEndDatePicker = () => {
// //   setEndDate(true);
// // };

// // const hideEndDatePicker = () => {
// //   setEndDate(false);
// // };

// // const handleEndConfirm = (date) => {
// //   console.warn("A date has been picked: ", date);
// //   hideDatePicker();
// //   return (
// //     <Text>Selected: {date}</Text>
// //   )
  
// // };
// //   return(
// //     <View>
// //       <TouchableOpacity style={styles.button1} 
// //   // onPress={()=>{setStartDate()}}
// //   onPress={() => {showDatePicker()}}
// //   >
// //     <Text>Start Date</Text>
// //     {/* <DateTimePickerModal
// //     isVisible={startDate}
// //     mode="date"
// //     onConfirm={handleConfirm}
// //     onCancel={hideDatePicker}
// //   /> */}
// //   <Text>Selected: {startDate}</Text>
// //     </TouchableOpacity>

    
// //     <Text style={styles.title}>Choose End Date</Text>
// //     <TouchableOpacity style={styles.button1} 
// //   // onPress={()=>{setStartDate()}}
// //   onPress={() => {showEndDatePicker()}}
// //   >
// //     <Text>End Date</Text>
// //     {/* <DateTimePickerModal
// //     isVisible={endDate}
// //     mode="date"
// //     onConfirm={handleEndConfirm}
// //     onCancel={hideEndDatePicker}
// //   /> */}
// //   <Text>Selected: {endDate}</Text>
// //   </TouchableOpacity>
// //     </View>
// //   )
// // }
// export const AddTaskForm: React.FC<AddTaskFormProps> = ({onSubmit}) => {
//   const [description, setDescription] = useState('');
//   const [name, setName] = useState('');
//   const [selectedValue, setSelectedValue] = useState('');
//   const handleSubmit  = ()  =>  {
//     onSubmit(name,description);
//     setDescription('');
//     setName('');
//   };

//   return (
//     <View style={styles.form}>
//       <TextInput
//         value={name}
//         placeholder="Enter new task name"
//         onChangeText={setName}
//         autoCorrect={false}
//         autoCapitalize="none"
//         style={styles.textInput}
//       />
//       <TextInput
//         value={description}
//         placeholder="Enter new task description"
//         onChangeText={setDescription}
//         autoCorrect={false}
//         autoCapitalize="none"
//         style={styles.textInput}
//       />
//     {/* <DatePickerExample/> */}
//     {/* <DropdownMenu/> */}
//       <Pressable onPress={handleSubmit} style={styles.submit}>
//         <Text style={styles.icon}>＋</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   form: {
//     height: 'auto',
//     marginBottom: 20,
//     flexDirection: 'column',  
//     ...shadows,
//   },
//   textInput: {
//     paddingHorizontal: 25,
//     paddingVertical: Platform.OS === "ios" ? 15 : 0,
//     borderRadius: 5,
//     backgroundColor: colors.white,
//     fontSize: 17,
//     marginBottom: 12
//   },
//   submit: {
//     height: 50,
//     width: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 20,
//     borderRadius: 5,
//     backgroundColor: colors.purple,
//   },
//   icon: {
//     color: colors.white,
//     textAlign: "center",
//     fontSize: 17,
//     fontWeight: "bold",
//   },
  
//   button1: {
//     width:"50%",
//     height :50,
//     justifyContent:"center",
//     alignItems:"center",
//     borderRadius:20,
//     backgroundColor:"blue",
//     borderWidth:0.5,
//   },
//   title: {
//     fontSize: 17,
//     // fontWeight: 'bold',
//     color:'white',
//     alignItems: 'center',
//   },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  StyleSheet,
} from "react-native";

import colors from "../styles/colors";

function AddTaskForm({ onSubmit }) {
  const [description, setDescription] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = () => {
    onSubmit({description, project});
    setDescription("");
    setProject("");
  };

  return (
    <View style={styles.form}>
      <View style={{flexDirection : 'column', flex: 1}}>
        <TextInput
          value={project}
          placeholder="Enter Project"
          onChangeText={setProject}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.textInput}
        />
        <TextInput
          value={description}
          placeholder="Enter Task Description"
          onChangeText={setDescription}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.textInput}
        />
      </View>
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.icon}>＋</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    height: 'auto',
    marginBottom: 20,
    flexDirection: "row",
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 15 : 0,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 17,
    marginBottom: 12
  },
  submit: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: colors.purple,
  },
  icon: {
    color: colors.white,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default AddTaskForm;
