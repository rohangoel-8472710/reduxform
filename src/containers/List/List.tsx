import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import flatListData from '../../constants/listData';
import images from '../../constants/images';
import styles from './styles';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';
console.disableYellowBox = true;
interface Props {
  index: any;
  item: any;
  parentFlatList: any;
}
interface State {
  activeRowKey: any;
  refresh: any;
}
class FlatListItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeRowKey: null,
      refresh: 0,
    };
  }
  refreshFlatListItem = () => {
    this.setState(prevState => {
      return {
        refresh: prevState.refresh + 1,
      };
    });
  };
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: () => {
        if (this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: () => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            this.props.parentFlatList.refs.editModal.showEditModal(
              flatListData[this.props.index],
              this,
            );
          },
          text: 'Edit',
          type: 'primary',
        },
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Are you sure you want to delete ?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('Canceled'),
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    flatListData.splice(this.props.index, 1);
                    //Refresh FlatList !
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSettings}>
        <View style={styles.mainContainer}>
          <View style={styles.listView}>
            <Image
              style={styles.imageStyle}
              source={{uri: this.props.item.imageUrl}}
            />
            <View style={styles.textView}>
              <Text style={styles.itemText}>{this.props.item.name}</Text>
              <Text style={styles.itemText}>
                {this.props.item.foodDescription}
              </Text>
            </View>
          </View>
          <View style={styles.seperator} />
        </View>
      </Swipeout>
    );
  }
}

export default class List extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      deletedRowKey: null,
    };
    this.onPressAdd = this.onPressAdd.bind(this);
  }
  refreshFlatList = (deletedKey: any) => {
    this.setState(prevState => {
      return {
        deletedRowKey: deletedKey,
      };
    });
  };
  onPressAdd() {
    this.refs.addModal.showAddModal();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addIconView}>
          <TouchableOpacity
            style={styles.addIcon}
            onPress={this.onPressAdd}
            activeOpacity={0.7}>
            <Image style={styles.addIconImage} source={images.addIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={flatListData}
          ref={'flatList'}
          bounces={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        />
        <AddModal ref={'addModal'} parentFlatList={this} />
        <EditModal ref={'editModal'} parentFlatList={this} />
      </View>
    );
  }
}
