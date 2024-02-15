import CareerCard from "../CareerCard/CareerCard";

const TechnicalProductOwner = () => {
  const careerData = {
    title: "Technical Product Owner",
    intro:
      "The best candidate will most likely be a principled & curious people-oriented problem solver who possesses: Market Understanding -Be very good at prioritizing based on data and market intelligence Product Vision - Must optimize features to ensure the product solves the customers pain point People Skills - Must know how to negotiate with teams to get desired results. Experience as a Product Owner in a software as a service or e-commerce company",
    location: "Lagos",
    qualification:
      "Requirement BSC in Engineering/ Computer science/ Computer Engineering Coding background preferred Minimum 3 years relevant working experience in product management Has managed projects using the AGILE - SCRUM / KANBANmethodology Excellent planning and presentation skills",
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

export default TechnicalProductOwner;
