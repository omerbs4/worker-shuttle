import React,{useEffect,useState} from "react";
import { View
    ,Text,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
 } from "react-native";
import {collection,getDocs} from 'firebase/firestore';
import { db } from "../firebase/firebaseConfig";

const AdminViewSeatsScreen = () =>{
    const [seats,setSeats] = useState<any[]>([]);
    const[loading,setLoading] =useState(true);

    const fetchSeats = async () =>{
        try{
            const snapshot = await getDocs(collection(db,'seats'));
            const seatsData = snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));
            setSeats(seatsData);
        }catch(e){
            console.error('hata',e);
        }finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchSeats();
    
    },[]);

    if(loading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="black"/>
            </View>
        );
    }

    const total = seats.length;
    const full =seats.filter((s) => s.assignedTo !=="").length;
    const empty = total-full;

    

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Servis Koltuk Durumu</Text>
            <Text style={styles.summary}>
                Toplam Koltuk: {total} | Dolu: {full} | Boş: {empty}
            </Text>
            {seats.map((seat,i) =>(
                <View key={seat.id} style={styles.row}>
                <Text 
                    style={styles.seatText}>Koltuk {i + 1}
                </Text>
                <Text style={seat.assignedTo ? styles.full : styles.empty}>
                    {seat.assignedTo ? `Dolu (TC: ${seat.assignedTo})` : "Boş"}
                </Text>
                </View>
            ))}

        </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "stretch",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  summary: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  seatText: {
    fontSize: 16,
  },
  full: {
    color: "red",
    fontWeight: "bold",
  },
  empty: {
    color: "green",
    fontWeight: "bold",
  },
});

export default AdminViewSeatsScreen;