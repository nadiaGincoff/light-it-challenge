// Components
import Header from '@/components/header';
import PatientList from '@/components/patient/patient-list';
import { PatientModal } from '@/components/patient/patient-modal';
// Hooks
import { usePatientModal } from '@/hooks/usePatientModal';

function App() {
  const { openAddModal } = usePatientModal();
  return (
    <div className="min-h-screen bg-linear-to-br from-medical-light via-background to-medical-light/30 p-5">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Header
          title="Patient Management"
          description="Manage and track patient information efficiently"
          withButton
          buttonText="Add Patient"
          buttonAction={openAddModal}
        />
      </div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PatientList />
        <PatientModal />
      </main>
    </div>
  );
}

export default App;
