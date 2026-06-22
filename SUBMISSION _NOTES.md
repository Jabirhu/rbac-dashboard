# Submission Notes

## Part 2: Written Explanation

I structured Firestore using a single `users` collection where each document ID matches the Firebase Authentication UID. This approach keeps authentication and profile information linked together while making queries and security rules straightforward. Each document contains the user's UID, email address, role, and creation timestamp.

The frontend determines which components to display based on the user's role. Admin users can view all users, while viewer users can only view their own profile. However, frontend checks alone are not secure because users can modify client-side code. Therefore, actual authorization is enforced through Firestore Security Rules. The rules ensure that viewers can only access their own document and admins can access all user documents.

For a production system supporting 10,000 users, I would improve scalability by implementing pagination and search functionality instead of loading all users at once. I would also move role assignment away from the signup form and use Firebase Custom Claims or an administrator-controlled workflow to prevent users from assigning themselves elevated permissions.

To keep the assignment focused, I intentionally kept the UI simple and allowed role selection during signup. In a full production solution, I would add stronger validation, comprehensive error handling, audit logging, monitoring, automated testing, and a more secure role-management process.

---

## Part 3: Site Review

I reviewed the ThinkTac homepage from an engineering and product quality perspective.

One positive aspect of the homepage is that it clearly communicates the product's purpose. The navigation structure makes it easy for users to find information related to schools, teachers, programmes, books, and educational games. The homepage also includes a "Skip to Content" option, which improves accessibility for keyboard and screen-reader users.

From a performance perspective, the page contains several large visual elements and image-heavy sections. While visually appealing, these assets may increase page load times, particularly on slower mobile networks. Using browser developer tools, image optimization would likely be one of the highest-impact performance improvements.

From an accessibility perspective, some images and visual components could benefit from more descriptive alternative text. This would improve usability for users relying on assistive technologies.

One concrete improvement would be implementing responsive image delivery using `srcset`, image compression, and lazy loading for content below the fold. This would reduce bandwidth usage and improve loading performance. I would validate the impact using Lighthouse and compare metrics such as Largest Contentful Paint (LCP) before and after implementation.

Overall, the homepage effectively communicates the company's educational mission while offering opportunities for performance and accessibility improvements.

---

## Part 4: Reflection

### 1. During your internships at FUEL or DOCKETRUN, what is one technical decision you disagreed with or would change?

One decision I would improve is the tendency to place multiple responsibilities inside larger service methods. While this approach worked for smaller projects, it made testing and maintenance more difficult as the codebase grew. I would separate validation, business logic, and data-access responsibilities into dedicated layers. This would improve readability, maintainability, and testability.

### 2. From your cybersecurity internship at TEXIAL, what is one concept or tool that is underused in platform engineering?

I believe threat modeling is underused in platform engineering. Many teams focus heavily on feature delivery and operational reliability but spend less time systematically identifying potential security risks during the design phase. Threat modeling helps uncover insecure assumptions, privilege escalation risks, and data exposure issues before implementation. Using it earlier in the development lifecycle can significantly improve overall platform security.
