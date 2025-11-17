// Components
import PatientList from '@/components/patient/patient-list';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-medical-primary/40 via-background to-medical-primary/10 p-5">
      <main>
        <PatientList />
      </main>
    </div>
  );
}

export default App;
