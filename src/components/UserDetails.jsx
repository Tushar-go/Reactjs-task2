import avatar from "../assets/avatar.png";

const UserDetails = ({ user }) => {
  const handleImageError = (event) => {
    event.target.src = avatar;
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto ">
      <img
        src={user?.avatar || avatar}
        alt={user?.profile?.firstName}
        className="w-24 h-24 rounded-full mb-4 mx-auto shadow-md"
        onError={handleImageError}
      />
      <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
        {user?.profile?.firstName} {user?.profile?.lastName}
      </h2>
      <p className="text-center text-lg font-semibold text-gray-700 mb-4">
        {user?.jobTitle}
      </p>
      <p className="text-center text-md text-gray-600 mb-2">
        <a href={`mailto:${user?.profile?.email}`} className="underline text-blue-500 hover:text-blue-700">
          {user?.profile?.email}
        </a>
      </p>
      <p className="text-center text-md text-gray-600 px-4">
        {user?.Bio}
      </p>
    </div>
  );
};

export default UserDetails;
