import React, { useState } from 'react';
import { View, Image, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import {  buttonContainer, logoContainer, styles, subFile } from '../registration/styles';
import brand from '../../assets/images/darkshotLogo2White.png';
import brand2 from '../../assets/images/darkshotLogoWhite.png';
import brand3 from '../../assets/images/emptyImage.png';

const Signup2 = ({ navigation }) => {
  const [link, setLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('');
      } else {
        console.log(err);
      }
    }
  };
  const handleFilePick2 = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('');
      } else {
        console.log('');
      }
    }
  };

  const handleStep1 = () => navigation.navigate('Signup1')
  const handleStep2 = () => navigation.navigate('Signup2')
  const handleSubmit = () => navigation.navigate('')
  const backButton = () => navigation.navigate('')

    const header = "files";
    const header2 = "portfolio";
    const resume = "resume";
    const choose = "choose file";
    const upload = "upload any previous works here";
    const subheader = "preview";
    const or = "or";
    const insert = "insert link of your portfolio";
    const submit = "submit application";
    const back = "back";
    const buttons = "choose file";
  
  const onChangeLink = (newLink) => {
    setLink(newLink); 
}
  return (
    <View style={styles.container}>
      <View style={logoContainer.container}>
        <View style={logoContainer.subContainer}>
          <Image source={brand2} style={styles.brand2}/>
          <Image source={brand} style={styles.brand}/>
        </View>
        <View style={buttonContainer.buttonContainer}>
          <Button onPress={handleStep1} title='step 1' color='gray' />
          <Button onPress={handleStep2} title='step 2' color='gray' />
        </View>
      </View>
      <View style={subFile.lineContainer}>
          <View style={subFile.line2}></View>
        </View>
      <View style={logoContainer.miniContainer}>
        <Text style={styles.header}>{header}</Text>
      </View>
      <View style={subFile.resumeContainer}>
      <Text style={subFile.text}>{resume}</Text>
      </View>
      <View style={subFile.choosefileContainer}>
          <TouchableOpacity style={subFile.fileInputButton} onPress={handleFilePick}>
            <Text style={subFile.buttonStyle}>{buttons}</Text>
          </TouchableOpacity>
            <Text style={[subFile.fileNamePlaceholder, { color: 'gray' }]}>{selectedFile ? selectedFile.name : 'my_resume_lastname.pdf'}</Text>
        </View>
        <View style={subFile.lineContainer3}>
          <View style={subFile.line2}></View>
        </View>
      <View style={subFile.portfolioContainer}>
        <Text style={styles.header}>{header2}</Text>
      </View>
      <View style={subFile.uploadContainer}>
      <Text style={subFile.text}>{upload}</Text>
      </View>
      <View style={subFile.choosefileContainer2}>
        <TouchableOpacity style={subFile.fileInputButton} onPress={handleFilePick2}>
          <Text style={subFile.buttonStyle}>{buttons}</Text>
        </TouchableOpacity>
      </View>
        <Text style={subFile.previewText}>{subheader}</Text>
        <View style={subFile.imageContainer}>
          <Image source={brand3} style={subFile.image}/>
          <Image source={brand3} style={subFile.image}/>
        </View>
    <View style={subFile.lineContainer2}>
      <View style={subFile.line} />
      <Text style={subFile.orLine}>{or}</Text>
      <View style={subFile.line} />
    </View>
    <View style={subFile.insertContainer}>
      <Text style={subFile.text}>{insert}</Text>
      <TextInput style={[styles.inputField, { color: 'white' }]}
          onChangeLink={onChangeLink}
          value={link}
          placeholder="https://drive.google.com/drive/folders/11gD ..."
          placeholderTextColor="gray"/>
    </View>
      <View style={subFile.submitButton}>
    <TouchableOpacity onPress={handleSubmit}>  
      <View style={buttonContainer.proceedButton}>
        <Text style={buttonContainer.proceedButtonText}>{submit}</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={subFile.backButton}>
        <TouchableOpacity onPress={backButton}>
        <View style={subFile.backContainer}>
        <Text style={subFile.backButton}>{back}</Text>
        </View>
          </TouchableOpacity>

</View>

    </View>
  );
};

export default Signup2;