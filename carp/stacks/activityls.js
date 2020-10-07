import React,{useEffect,useState} from 'react';
import {View, Text,StyleSheet,Button,FlatList,ActivityIndicator, Alert} from 'react-native';
import Events from '../resources/events';

export default function ActivityScreen({navigation}){

    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        setLoading(true);
        fetch('https://carp-kenya.herokuapp.com/activity_json_format/?format=json')
          .then((response) => response.json())
          .then((json) => setUser(json))
          .catch(() => Alert.alert('Something went wrong..', 'There was an error fetching data.'))
          .finally(() => {
            setLoading(false)
          });
      };
    return(
        <View>
            {isLoading ? <ActivityIndicator style={styles.container}/> :
                (
                    <FlatList
                      data={user}
                      keyExtractor={({ id }, index) => id}
                      renderItem={( {item }) => {
                            return (<Events item={item}/>)
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
        padding: 30,

    }
})