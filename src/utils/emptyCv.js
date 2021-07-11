import { v4 as uuidv4 } from "uuid";
const exampleCV = {
    personalInfo: {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phone: "",
      email: "",
      summary: "",
    },
    experience: [
      {
        id: uuidv4(),
        position: "",
        company: "",
        city: "",
        fromDate: "",
        toDate: "",
        roles: ''
      },
    ],
    education: [
      {
        id: uuidv4(),
        universityName: "",
        city: "",
        degree: "",
        stream: "",
        fromDate: "",
        toDate: "",
      },
    ],
  };
  
  export default exampleCV;