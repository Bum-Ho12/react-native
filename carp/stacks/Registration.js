import React,{useEffect,useState} from 'react';
import {View, Text,StyleSheet,SafeAreaView,FlatList,ActivityIndicator, Alert} from 'react-native';
import Books from '../resources/bookSource';

export default function RegistrationScreen({item}){

    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [cat, setCat] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        setLoading(true);
        fetch('https://carp-kenya.herokuapp.com/book_json_format/')
          .then((response) => response.json())
          .then((json) =>{setUser(json),
                        (setCat(json.category)) })
          .catch(() => Alert.alert('Something went wrong..', 'There was an error.'))
          .finally(() => {
            setLoading(false)
          });
    }

    return(
        <SafeAreaView style={styles.flatlist} >
            {isLoading ? <ActivityIndicator style={styles.container}/> :
            <FlatList
                data={user}
                keyExtractor={({ id }, index) => id}
                renderItem={( {item }) => (<Books item={item} />)
                }
                numColumns={2}
            />
            }
        </SafeAreaView>
    );
      
    
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
    },
    flatlist:{
        borderColor:'black',
        borderRadius: 2,
        shadowColor: '#000000',
        shadowOffset: {width:1,height:1},
        shadowOpacity: 2,
        shadowRadius:2,
    }
})