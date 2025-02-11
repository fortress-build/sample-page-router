import { Geist, Geist_Mono } from "next/font/google";
import { useNerveClient } from "@nerve-js/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Get the client instance
  const nerve = useNerveClient();

  const fetchPatients = async () => {
    try {
      await nerve.setProvider("sandbox");
      const patients = await nerve.patient.search({
        given: "John",
        family: "Doe",
        birthdate: "",
      });
      console.log("Patients:", patients);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const fetchReasonForConsultation = async () => {
    try {
      await nerve.setProvider("sandbox");
      const patients = await nerve.patient.search({
        given: "John",
        family: "Doe",
        birthdate: "",
      });
      if (!patients.length) {
        console.error("No patients found");
        return;
      }
      const patientId = patients[0].id;

      const reasonForConsultation = await nerve.condition.search({
        patient: patientId || "",
        category: "reason-for-visit",
      });
      console.log("Reason for Consultation:", reasonForConsultation);
    } catch (error) {
      console.error("Error fetching reason for consultation:", error);
    }
  };

  const fetchMedicalHistory = async () => {
    try {
      await nerve.setProvider("sandbox");
      const patients = await nerve.patient.search({
        given: "John",
        family: "Doe",
        birthdate: "",
      });
      if (!patients.length) {
        console.error("No patients found");
        return;
      }
      const patientId = patients[0].id;

      const medicalHistory = await nerve.condition.search({
        category: "medical history",
        patient: patientId || "",
      });
      console.log("Medical History:", medicalHistory);
    } catch (error) {
      console.error("Error fetching medical history:", error);
    }
  };

  const fetchProcedures = async () => {
    try {
      await nerve.setProvider("sandbox");
      const patients = await nerve.patient.search({
        given: "John",
        family: "Doe",
        birthdate: "",
      });
      if (!patients.length) {
        console.error("No patients found");
        return;
      }
      const patientId = patients[0].id;

      const procedures = await nerve.procedure.search({
        patient: patientId || "",
      });
      console.log("Procedures:", procedures);
    } catch (error) {
      console.error("Error fetching procedures:", error);
    }
  };

  const fetchLabAnalysis = async () => {
    try {
      await nerve.setProvider("sandbox");
      const patients = await nerve.patient.search({
        given: "John",
        family: "Doe",
        birthdate: "",
      });
      if (!patients.length) {
        console.error("No patients found");
        return;
      }
      const patientId = patients[0].id;

      const labAnalysis = await nerve.observation.search({
        category: "laboratory",
        patient: patientId || "",
      });
      console.log("Lab Analysis:", labAnalysis);
    } catch (error) {
      console.error("Error fetching lab analysis:", error);
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            onClick={fetchPatients}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Fetch Patients
          </button>
          <button
            onClick={fetchReasonForConsultation}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Fetch Reason for Consultation
          </button>
          <button
            onClick={fetchMedicalHistory}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Fetch Medical History
          </button>
          <button
            onClick={fetchProcedures}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Fetch Procedures
          </button>
          <button
            onClick={fetchLabAnalysis}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Fetch Lab Analysis
          </button>
        </div>
      </main>
    </div>
  );
}
