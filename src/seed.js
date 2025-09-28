import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./models/Course.js";

dotenv.config();

const courses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: 'Angela Yu',
    platform: 'Udemy',
    rating: 4.7,
    reviewCount: 234567,
    duration: '65 hours',
    studentCount: 890000,
    price: '$84.99',
    originalPrice: '$199.99',
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg',
    category: 'Web Development',
    level: 'Beginner'
  },
  {
    id: '2',
    title: 'Data Science Master Class',
    instructor: 'Jose Portilla',
    platform: 'Coursera',
    rating: 4.8,
    reviewCount: 45678,
    duration: '40 hours',
    studentCount: 156000,
    price: '$49.99',
    originalPrice: '$129.99',
    thumbnail: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/0d/4e9a104d774f3bb5f84bb79b87f68a/DataScience.jpg',
    category: 'Data Science',
    level: 'Intermediate'
  },
  {
    id: '3',
    title: 'Digital Marketing Fundamentals',
    instructor: 'Neil Patel',
    platform: 'Skillshare',
    rating: 4.6,
    reviewCount: 12345,
    duration: '25 hours',
    studentCount: 78000,
    price: '$39.99',
    originalPrice: '$99.99',
    thumbnail: 'https://static.skillshare.com/uploads/video/thumbnails/7075f3326.jpg',
    category: 'Marketing',
    level: 'Beginner'
  },
  {
    id: '4',
    title: 'React - The Complete Guide',
    instructor: 'Maximilian Schwarzmüller',
    platform: 'Udemy',
    rating: 4.7,
    reviewCount: 198765,
    duration: '48 hours',
    studentCount: 450000,
    price: '$89.99',
    originalPrice: '$199.99',
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg',
    category: 'Web Development',
    level: 'Intermediate'
  },
  {
    id: '5',
    title: 'Python for Everybody',
    instructor: 'Charles Severance',
    platform: 'Coursera',
    rating: 4.8,
    reviewCount: 112345,
    duration: '30 hours',
    studentCount: 650000,
    price: 'Free',
    originalPrice: '$49.99',
    thumbnail: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/95/7f9a20c59e11e68f5dcaf99ef1f09f/Python.jpg',
    category: 'Programming',
    level: 'Beginner'
  },
  {
    id: '6',
    title: 'Machine Learning A-Z',
    instructor: 'Kirill Eremenko',
    platform: 'Udemy',
    rating: 4.6,
    reviewCount: 234567,
    duration: '44 hours',
    studentCount: 500000,
    price: '$84.99',
    originalPrice: '$199.99',
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/950390_270f_3.jpg',
    category: 'AI & ML',
    level: 'Intermediate'
  },
  {
    id: '7',
    title: 'AWS Certified Solutions Architect',
    instructor: 'Stephane Maarek',
    platform: 'Udemy',
    rating: 4.8,
    reviewCount: 87654,
    duration: '55 hours',
    studentCount: 400000,
    price: '$94.99',
    originalPrice: '$199.99',
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/2196488_8fc7_10.jpg',
    category: 'Cloud',
    level: 'Intermediate'
  },
  {
    id: '8',
    title: 'The Complete Android App Development Bootcamp',
    instructor: 'Philipp Lackner',
    platform: 'Udemy',
    rating: 4.6,
    reviewCount: 54321,
    duration: '60 hours',
    studentCount: 320000,
    price: '$79.99',
    originalPrice: '$199.99',
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/1253180_c13e_4.jpg',
    category: 'Mobile Development',
    level: 'Intermediate'
  },
  {
    id: '9',
    title: 'Introduction to SQL',
    instructor: 'Jon Kleinberg',
    platform: 'Coursera',
    rating: 4.5,
    reviewCount: 34567,
    duration: '20 hours',
    studentCount: 200000,
    price: 'Free',
    originalPrice: '$49.99',
    thumbnail: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/1b/d5d5904c7911e693449b4abf7d16f1/SQL.jpg',
    category: 'Database',
    level: 'Beginner'
  },
  {
    id: '10',
    title: 'DevOps Fundamentals',
    instructor: 'Edward Viaene',
    platform: 'Udemy',
    rating: 4.5,
    reviewCount: 23456,
    duration: '30 hours',
    studentCount: 100000,
    price: '$54.99',
    originalPrice: '$129.99',
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/2555476_7631_2.jpg',
    category: 'DevOps',
    level: 'Beginner'
  },
  {
    id: '11',
    title: 'Kubernetes for Developers',
    instructor: 'Kelsey Hightower',
    platform: 'Coursera',
    rating: 4.7,
    reviewCount: 45678,
    duration: '35 hours',
    studentCount: 120000,
    price: '$69.99',
    originalPrice: '$149.99',
    thumbnail: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/5c/f83e50c6e311e891e2e7d84d5c93dd/Kubernetes.jpg',
    category: 'Cloud',
    level: 'Intermediate'
  },
  {
    id: '12',
    title: 'Flutter & Dart - The Complete Guide',
    instructor: 'Academind',
    platform: 'Udemy',
    rating: 4.6,
    reviewCount: 34567,
    duration: '50 hours',
    studentCount: 210000,
    price: '$84.99',
    originalPrice: '$199.99',
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/1708340_7108_5.jpg',
    category: 'Mobile Development',
    level: 'Intermediate'
  },
  {
    id: '13',
    title: 'Introduction to Cybersecurity',
    instructor: 'Cisco Networking Academy',
    platform: 'Coursera',
    rating: 4.4,
    reviewCount: 23456,
    duration: '20 hours',
    studentCount: 150000,
    price: 'Free',
    originalPrice: '$49.99',
    thumbnail: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/82/3d2c3f2ee14c57b993d028d9a1bafc/Cybersecurity.jpg',
    category: 'Security',
    level: 'Beginner'
  },
  {
    id: '14',
    title: 'Deep Learning Specialization',
    instructor: 'Andrew Ng',
    platform: 'Coursera',
    rating: 4.9,
    reviewCount: 98765,
    duration: '60 hours',
    studentCount: 450000,
    price: '$49.99',
    originalPrice: '$199.99',
    thumbnail: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/98/15a1f09f0911e5a327d7f5b9f9de0b/DeepLearning.jpg',
    category: 'AI & ML',
    level: 'Advanced'
  },
  {
    id: '15',
    title: 'Data Structures and Algorithms in Python',
    instructor: 'Tim Buchalka',
    platform: 'Udemy',
    rating: 4.4,
    reviewCount: 34567,
    duration: '40 hours',
    studentCount: 175000,
    price: '$69.99',
    originalPrice: '$149.99',
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg',
    category: 'Programming',
    level: 'Intermediate'
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Course.deleteMany(); // Optional: clear existing data
    await Course.insertMany(courses);
    console.log("✅ 15 Courses seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedDB();
