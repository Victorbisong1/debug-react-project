function ProfileCard({ person }) {
  if (!person) {
    return <p>No profile data received.</p>;
  }

  return (
    <section>
      <img src={person.imgSrc} alt={person.fullName} width="180" />
      <h2>{person.fullName}</h2>
      <p>{person.profession}</p>
      <p>{person.bio}</p>
    </section>
  );
}

export default ProfileCard;