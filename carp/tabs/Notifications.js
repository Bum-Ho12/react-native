import React,{useEffect,useState} from 'react';
import {View, Text,StyleSheet,Button,FlatList,ActivityIndicator, Alert} from 'react-native';
import Notes from '../resources/note';

export default function NotificationsScreen(){
    const [isLoading, setLoading] = useState(false);
    const [notification, setNotification] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        setLoading(true);
        fetch('https://carp-kenya.herokuapp.com/notification_json_format/')
          .then((response) => response.json())
          .then((json) => setNotification(json))
          .catch(() => Alert.alert('Something went wrong..', 'There was an error.'))
          .finally(() => {
            setLoading(false)
          });
      };
      
    return(
        <View>
            {isLoading ? <ActivityIndicator style={styles.container}/> :
                (
                    <FlatList
                      data={notification}
                      keyExtractor={({ id }, index) => id}
                      renderItem={( {item }) => {
                            return (<Notes item={item} style={styles.notes}/>)
                      }}
                    />
                )
            }
        </View>
        );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,

    },
    notes:{
        paddingTop: 20
    }
})
