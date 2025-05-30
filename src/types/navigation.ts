export type RootStackParamList = {
    navigate(arg0: string): unknown;
    AdminLogin: undefined;
    AdminHome: undefined;
    AddWorker: undefined;
    ViewWorkers: undefined;
    WorkerPanel: undefined; // Assuming WorkerPanel is a screen you want to navigate to 
    WorkerHome: {tc:string};
    AdminViewSeats:undefined; // Assuming WorkerHome is a screen you want to navigate to
    
    // Add other screens here as needed
    };