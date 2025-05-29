import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { RootStackParamList } from "../types/navigation";

type WorkerHomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "WorkerHome"
>;

type WorkerHomeRouteProp = RouteProp<RootStackParamList, "WorkerHome">;

const WorkerHomeScreen = () => {
  const navigation = useNavigation<WorkerHomeScreenNavigationProp>();
  const route = useRoute<WorkerHomeRouteProp>();
  const workerTC = route.params.tc;

  const [seats, setSeats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSeats = async () => {
    try {
      const snapshot = await getDocs(collection(db, "seats"));
      const seatsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSeats(seatsData);
    } catch (error) {
      console.error("Koltuklar alınırken hata:", error);
      Alert.alert("Hata", "Koltuklar yüklenemedi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  const handleSeatPress = async (seatId: string, assignedTo: string) => {
    if (assignedTo !== "") {
      Alert.alert("Dolu Koltuk", "Bu koltuk zaten alınmış.");
      return;
    }

    const alreadyChosen = seats.find((s) => s.assignedTo === workerTC);
    if (alreadyChosen) {
      Alert.alert("Zaten Seçim Yapıldı", "Sadece bir koltuk seçebilirsiniz.");
      return;
    }

    try {
      await updateDoc(doc(db, "seats", seatId), {
        assignedTo: workerTC,
      });
      Alert.alert("Başarılı", "Koltuk atandı.");
      fetchSeats();
    } catch (e) {
      console.error("Koltuk güncellenemedi:", e);
      Alert.alert("Hata", "Koltuk atanırken bir hata oluştu.");
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Worker Manager</Text>
      <View style={styles.grid}>
        {seats.map((seat, index) => (
          <TouchableOpacity
            key={seat.id}
            style={[
              styles.seatButton,
              seat.assignedTo !== "" ? styles.taken : styles.available,
            ]}
            onPress={() => handleSeatPress(seat.id, seat.assignedTo)}
          >
            <Text style={styles.seatText}>{seat.seatNumber || index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default WorkerHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  seatButton: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  seatText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  available: {
    backgroundColor: "green",
  },
  taken: {
    backgroundColor: "red",
  },
});
