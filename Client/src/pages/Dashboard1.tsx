import React from "react";
import { Navigation } from "../components/Navigation";
import { CourseCard } from "../components/CourseCard";
import { AuthorCard } from "../components/AuthorCard";
import { Profile } from "./Profile";
import { courses, authors } from "../data/mockData";

function Dashboard1() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Featured Courses */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Featured Authors */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Meet Our Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>
        </section>

        {/* Profile Page */}
        <Profile />
      </main>
    </div>
  );
}

export default Dashboard1;
