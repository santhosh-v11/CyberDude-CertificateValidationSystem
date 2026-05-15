import InternshipCertificate from "@/components/InternshipCertificate";
import candidateData from "@/assets/data.json";

export default async function Page({ params }) {
  const { id } = await params;

  const candidate = candidateData.find(
    (c) => String(c.id) === String(id)
  );

  console.log("candidate:", candidate);

  if (!candidate) {
    return (
      <div className="text-white p-10 text-center">
        Candidate not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] flex items-start justify-center py-10 px-4">
      <InternshipCertificate candidate={candidate} />
    </main>
  );
}