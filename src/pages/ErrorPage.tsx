import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="min-h-svh grid place-items-center bg-light-cream">
      <h1 className="text-5xl text-dark-grey-blue text-center">
        404 Page Not Found
        <Link
          to="/"
          className="block bg-dark-cyan p-2 rounded-md mt-4 text-white"
        >
          Go Back To Home Page
        </Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
