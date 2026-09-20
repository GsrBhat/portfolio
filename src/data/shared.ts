export interface Education {
  institution: string;
  degree: string;
  specialization?: string;
  timeline: string;
  cgpa: string;
  honors?: string;
  location?: string;
}

export interface SharedData {
  fullName: string;
  shortName: string;
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
  gitHub: string;
  portfolio: string;
  portraitPath: string;
  education: Education[];
  languages: string[];
}

export const sharedData: SharedData = {
  fullName: "SAI RAHUL BHAT GAADHI RAJU",
  shortName: "SAI RAHUL",
  location: "Hyderabad, Telangana, India",
  phone: "+91-7989035770",
  email: "gsrbhat20@gmail.com",
  linkedIn: "https://linkedin.com/in/sairahulbhatg",
  gitHub: "https://github.com/GsrBhat",
  portfolio: "https://sai-rahul-bhat-portfolio.vercel.app",
  portraitPath: "/images/portrait/rahul-editorial.webp",
  education: [
    {
      institution: "Anurag University",
      degree: "Bachelor of Technology",
      specialization: "Electronics and Communication Engineering (ECE)",
      timeline: "Expected Graduation: 2027",
      cgpa: "7.95 / 10.0",
      location: "Hyderabad, India"
    },
    {
      institution: "Jawaharlal Nehru Government Polytechnic (JNGPT)",
      degree: "Diploma",
      specialization: "Electronics and Communication Engineering (ECE)",
      timeline: "2021 – 2024",
      cgpa: "9.17 / 10.0",
      honors: "Graduated with Distinction",
      location: "Ramanthapur, India"
    }
  ],
  languages: ["English", "Hindi", "Telugu"]
};
