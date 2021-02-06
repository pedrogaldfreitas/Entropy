import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';

/*  PROFILE PAGE TO-DO'S:
    
    -Profile Image (anything for now)
    -Username (changeable whenever)
    -Entropy Level (grows when attending parties, grows at a rate depending on the party size)

    Buttons:
    -Tickets
    -Saved Parties
    -Host Rep (others can rate your parties, giving you a reputation.)

*/

export default class profilePage extends Component {
    render() {
        return (
            <View style={styles.profilePageBG}>

                <View style={styles.profilePic}>
                    {/*<Image source = {require('../Images/obabo.jpg')} size={30} />*/}
                </View>

                <View style={styles.statistics}>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',}}>LoE: 2,401</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',}}>Parties Attended: 7</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',}}>Host Rep: 104</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',}}>Followers: 36</Text>
                </View>

                <View style={styles.bigbuttons}>
                    <TouchableOpacity style={styles.ticketButton}>
                        <Text>Tickets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.savedPartiesButton}>
                        <Text>Saved Parties</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.repButton}>
                        <Text>Rep</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profilePageBG: {
        flex: 1,
        backgroundColor: 'rgba(42, 36, 80, 255)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigbuttons: {
        flexDirection: 'row',
        width: '80%',
        height: '15%',
        borderRadius: 100,
    },
    ticketButton: {
        backgroundColor: 'rgba(227, 198, 54, 255)',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        flex:1,
    },
    savedPartiesButton: {
        backgroundColor: 'rgba(217, 54, 115, 255)',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1.5,
    },
    repButton: {
        backgroundColor: 'rgba(45, 154, 227, 255)',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flex:1,
    },
    profilePic: {
        backgroundColor: 'rgba(45, 154, 227, 255)',
        marginBottom: 10,
        width: Dimensions.get('window').width*0.6,
        height: Dimensions.get('window').width*0.6,
        borderRadius: 200,
    },
    statistics: {
        marginBottom: 100,
    }

})