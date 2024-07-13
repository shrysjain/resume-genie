
const SignInWithLinkedIn = () => {
  const handleSignIn = () => {
    // Handle sign-in
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleSignIn}
        className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        <button className="h-6 w-6 mr-2" /> 
        Sign in with LinkedIn
      </button>
    </div>
  );
};

export default SignInWithLinkedIn;
