import Form from "./Form";

export default function Page() {
  return (
    <div>
      <Form
        {...{
          name: "Gertrude",
          category: "weight",
          location: "Georgia",
          atoilet: "Available",
          building: "1",
          camera: "Avalable",
          compscore: "8",
          emergency: "Not Available",
          entrance: "Main",
          gtoilet: "Available",
          lifts: "2",
          paths: "Concrete",
          point: "Avalable",
          quota: "200",
          rating: "7",
          room: "101",
          spost: "Avalable",
          srating: "6",
        }}
      />
    </div>
  );
}
