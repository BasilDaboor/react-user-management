import Form from "../Form";

export default function CreateUser() {
  return (
    <div>
      <Form
        btn="Create"
        endPoint={`user/create`}
        navigate="Dashboard/Users"
        hasLocalStorage={false}
      />
    </div>
  );
}
