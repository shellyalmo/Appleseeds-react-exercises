function Avatar({ avatars }) {
  return (
    <div
      style={{
        padding: "2rem",
        display: "grid",
        gridTemplateRows: "repeat(2,1fr)",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "10%",
      }}
    >
      {avatars.map((user) => (
        <div
          key={user.login.uuid}
          style={{
            textAlign: "center",
            border: "1px solid black",
            backgroundColor: "lightblue",
          }}
        >
          <p>
            {user.name.first} {user.name.last}
          </p>
          <img src={user.picture.large} alt="user" />
        </div>
      ))}
    </div>
  );
}

export default Avatar;
