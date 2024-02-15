import CareerCard from "../CareerCard/CareerCard";

const BusineOperationsLead = () => {
  const careerData = {
    title: "Business Operations Lead",
    intro:
      "Role Summary & KPIs Success for a business operations lead is like wearing many hats. It's about making the whole operation run like a well-oiled machine. This includes making things more efficient, keeping everyone happy, or at least almost everyone, meeting goals and deadlines and being open to new ideas. But it is not just about the numbers, it is about bein responsible, caring about the business. So it is a mix of managing people, resources and processes and doing it all well with a great a",
    location: "Lagos",
    qualification:
      "Requirements ● Proven experience as an Operation Lead/ HR Manager/ Customer Service or similar role ● Strong understanding of business operations and financial management ● Commitment to excellence ● Proficiency in Google Workspace & Project Management tools ● Attention to detail and problem-solving skills ● Bachelor's degree in Business Administration, HR, engineering or related field",
  };

  return (
    <div>
      <CareerCard
        title={careerData.title}
        intro={careerData.intro}
        location={careerData.location}
        qualification={careerData.qualification}
      />
    </div>
  );
};

export default BusineOperationsLead;
