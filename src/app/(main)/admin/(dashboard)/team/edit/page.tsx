import Form from "./Form";

export default function Page() {
  return (
    <div>
      <Form
        {...{
          img: "/img/person.jpeg",
          name: "John Doe",
          role: "developer",
          facebook: "www.facebook.com",
          instagram: "www.instagram.com",
          twitter: "www.twitter.com",
          comment: "wow",
        }}
      />
    </div>
  );
}
