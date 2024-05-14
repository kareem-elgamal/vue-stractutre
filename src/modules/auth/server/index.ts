import Api from "@/setupAxios";

export function getUsers() {
  return Api().get("/users");
}
