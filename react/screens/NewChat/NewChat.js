import React from 'react';
import Native from 'react-native';
import NavBar from "../../components/NavBar/NavBar";
import { SearchBar, Icon, Card } from 'react-native-elements';
import Axios from "axios";
import {connect} from 'react-redux';
import CardPeople from "./CardPeople/CardPeople";


class NewChat extends React.Component{

    state={
        search:'',
        contactList:[],
    }

    componentDidMount(): void {
        const {result} =this.props.route.params
        Axios.get("http://10.10.12.31:3939/friends/"+result)
            .then(result=>{
                this.setState({
                    contactList:result.data
                })
            })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Native.View>
                <NavBar
                    name="List Friends"
                    icon="arrow-back"
                    right="search"

                    onLeftElementPress={() => { this.props.navigation.goBack() }}
                    onRightElementPress={this.state.search}
                />
                <SearchBar style={{ backgroundColor: 'white' }} containerStyle={{ backgroundColor: 'tasparent' }} inputContainerStyle={{ backgroundColor: 'tasparent' }}
                           round
                           searchIcon={{ size: 24 }}
                           onChangeText={text => this.searchFilterFunction(text)}
                           onClear={text => this.searchFilterFunction('')}
                           placeholder="Type Here..."
                           value={this.state.search} />

                <Native.View>
                    <Native.TouchableOpacity style={{ flexDirection: "row", margin: 20 }}
                                      onPress={() => this.props.navigation.navigate('NewGroup')}>
                        <Icon name="people" color='green' />
                        <Native.Text style={{ fontSize: 20, marginLeft: 20 }}>New Group</Native.Text>
                    </Native.TouchableOpacity>
                </Native.View>

                <Native.View>
                    {this.state.contactList.map(result=>(
                        <CardPeople clicked={() => { this.props.navigation.navigate('ChatScreenNew',{res:result})}} fullName={result.userTwo.fullName}/>
                    ))}
                </Native.View>
            </Native.View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        fullName: state.loginReducer.fullName,
    }
}
export default connect(mapStateToProps)(NewChat);
