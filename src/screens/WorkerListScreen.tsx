import React,{useState,useEffect} from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity ,ActivityIndicator,Alert} from "react-native";
import { collection, getDocs ,deleteDoc,doc} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useTheme } from "../contexts/ThemeContext";

const WorkerListScreen = () => {
        const {theme} = useTheme();
    
    const [workers, setWorkers] = useState<any[]>([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchWorkers = async () => {
            try{
                const querySnapshot = await getDocs(collection(db,'workers'));
                const data: any[] = [];
                querySnapshot.forEach(doc=>{
                    data.push({id:doc.id,...doc.data()});
                });
                setWorkers(data);
            }catch(e){
                console.error("Error fetching workers: ", e);

            }finally{
                setLoading(false);
            }
        };
        fetchWorkers();
    },[]);

    const handleDeleteWorker = async (id: string) => {
        Alert.alert(
            "Delete Worker",
            "Are you sure you want to delete this worker?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text:"Delete",
                    style: "destructive",
                    onPress:async ()=>{
                        try{
                            await deleteDoc(doc(db,'workers',id));
                            setWorkers((prev) =>prev.filter(worker=> worker.id!==id));
                        }catch(e){
                            console.error("Error deleting worker: ", e);
                            Alert.alert("Error", "Failed to delete worker");
                    }
                },
            },
            ]

        );
    };
    
    if(loading) return <ActivityIndicator size="large" color="#0000ff" style={{marginTop:50}} />;

    return(
        <View style={[styles.container,theme.container]}>
            <Text style={styles.title}>Worker List</Text>
            <FlatList
                data={workers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>

                    <TouchableOpacity style={styles.item} onPress={()=> handleDeleteWorker(item.id)}>
                        <Text style={{fontWeight:"bold"}}>Worker ID: {item.id}</Text>
                        <Text>Tc: {item.tc}</Text>
                        <Text>Ad: {item.name}</Text>
                        <Text>Soyad: {item.lastName}</Text>
                        <Text>Numara: {item.phone}</Text>
                    </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  item: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
});
export default WorkerListScreen;