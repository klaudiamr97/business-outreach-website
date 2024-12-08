export const fetchCaseStudies = async () => {
    const res = await fetch('https://67560b6111ce847c992bd68c.mockapi.io/case-studies/casestudies');
    const data = await res.json();
    return data;
  };