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
  foodName: any;
  foodDescription: any;
  key: any;
  flatlistItem: any;
}

export default class EditModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      foodName: '',
      foodDescription: '',
      key: '',
      flatlistItem: '',
    };
  }
  showEditModal = (editingFood: any, flatlistItem: any) => {
    this.setState({
      key: editingFood.key,
      foodName: editingFood.name,
      foodDescription: editingFood.foodDescription,
      flatlistItem: flatlistItem,
    });
    this.refs.myModal.open();
  };
  render() {
    return (
      <Modal
        ref={'myModal'}
        style={styles.ModalView}
        position="center"
        backdrop={true}>
        <Text style={styles.modalHeading}>{strings.headingEdit}</Text>
        <TextInput
          style={styles.input}
          placeholder={strings.editFoodname}
          onChangeText={text => this.setState({foodName: text})}
          value={this.state.foodName}
        />
        <TextInput
          style={[styles.input, {marginTop: vw(10), marginBottom: vw(20)}]}
          placeholder={strings.editFooddesc}
          onChangeText={text => this.setState({foodDescription: text})}
          value={this.state.foodDescription}
        />
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (
              this.state.foodName.length == 0 ||
              this.state.foodDescription.length == 0
            ) {
              alert("You must enter food's name and description");
              return;
            }
            var Index = flatListData.findIndex(
              item => this.state.key == item.key,
            );
            if (Index < 0) {
              return; //not found
            }
            flatListData[Index].name = this.state.foodName;
            flatListData[Index].foodDescription = this.state.foodDescription;

            this.state.flatlistItem.refreshFlatListItem();
            this.refs.myModal.close();
          }}
          activeOpacity={0.7}>
          <Text style={styles.commonText}>{strings.save}</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}
