import React, {Component} from 'react';
import {Text, TouchableOpacity, TextInput} from 'react-native';
import Modal from 'react-native-modalbox';
import flatListData from '../../constants/listData';
import styles from './styles';
import {vw} from '../../constants/dimensions';
import strings from '../../constants/strings';
interface Props {
  parentFlatList: any;
}
interface State {
  newFoodName: any;
  newFoodDescription: any;
}

export default class AddModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newFoodName: '',
      newFoodDescription: '',
    };
  }
  showAddModal = () => {
    this.refs.myModal.open();
  };
  generateKey = (numberOfCharacters: any) => {
    return require('random-string')({length: numberOfCharacters});
  };
  render() {
    return (
      <Modal
        ref={'myModal'}
        style={styles.ModalView}
        position="center"
        backdrop={true}>
        <Text style={styles.modalHeading}>{strings.headingAdd}</Text>
        <TextInput
          style={styles.input}
          placeholder={strings.newFoodname}
          onChangeText={text => this.setState({newFoodName: text})}
          value={this.state.newFoodName}
        />
        <TextInput
          style={[styles.input, {marginTop: vw(10), marginBottom: vw(20)}]}
          placeholder={strings.newFooddesc}
          onChangeText={text => this.setState({newFoodDescription: text})}
          value={this.state.newFoodDescription}
        />
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (
              this.state.newFoodName.length == 0 ||
              this.state.newFoodDescription.length == 0
            ) {
              alert("You must enter Food's Name and Description");
              return;
            }
            const newKey = this.generateKey(20);
            console.warn('key is',newKey)
            const newFood = {
              key: newKey,
              name: this.state.newFoodName,
              imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg',
              foodDescription: this.state.newFoodDescription,
            };
            flatListData.push(newFood);
            this.props.parentFlatList.refreshFlatList(newKey);
            this.refs.myModal.close();
          }}
          activeOpacity={0.7}>
          <Text style={styles.commonText}>{strings.add}</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}
